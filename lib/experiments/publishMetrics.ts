/**
 * Daily experiment metrics publisher for Fox Valley Rug Works.
 *
 * Pulls GSC data for all tracked experiment slugs and writes
 * to Firestore experiment_metrics collection.
 */

import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { google } from "googleapis";
import { getAllTrackedSlugs } from "./activeExperiments.js";
import fs from "fs";
import path from "path";

const SITE_KEY = "fox-valley";
const GSC_SITE_URL = process.env.GSC_SITE_URL || "https://foxvalleyrugworks.com/";

function initFirebase() {
  if (getApps().length > 0) return getFirestore();
  const saPath = path.resolve("service-account.json");
  if (!fs.existsSync(saPath)) {
    throw new Error(`Service account not found at ${saPath}`);
  }
  initializeApp({ credential: cert(saPath) });
  return getFirestore();
}

async function initGsc() {
  const saPath = path.resolve("service-account.json");
  const auth = new google.auth.GoogleAuth({
    keyFile: saPath,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });
  return google.searchconsole({ version: "v1", auth });
}

function encodeSlug(slug: string): string {
  return slug.replace(/\//g, "__");
}

export async function publishDailyMetrics(targetDate?: string): Promise<number> {
  const slugs = getAllTrackedSlugs();
  if (slugs.length === 0) {
    console.log("No tracked slugs — nothing to publish.");
    return 0;
  }

  const db = initFirebase();
  const searchconsole = await initGsc();

  // Default to yesterday
  const date = targetDate || (() => {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().slice(0, 10);
  })();

  console.log(`Publishing metrics for ${slugs.length} slugs on ${date}`);
  let published = 0;

  for (const slug of slugs) {
    try {
      const siteBase = GSC_SITE_URL.replace(/\/$/, "");
      const pageUrl = `${siteBase}/${slug}/`;

      const res = await searchconsole.searchanalytics.query({
        siteUrl: GSC_SITE_URL,
        requestBody: {
          startDate: date,
          endDate: date,
          dimensions: ["page"],
          dimensionFilterGroups: [{
            filters: [{ dimension: "page", operator: "equals", expression: pageUrl }],
          }],
        },
      });

      const row = res.data.rows?.[0];
      const metrics = row
        ? { impressions: row.impressions!, clicks: row.clicks!, ctr: row.ctr!, position: row.position! }
        : { impressions: 0, clicks: 0, ctr: 0, position: 0 };

      const docPath = `experiment_metrics/${SITE_KEY}/${encodeSlug(slug)}/${date}`;
      await db.doc(docPath).set({
        capturedAt: new Date().toISOString(),
        sources: { gsc: metrics },
      });

      console.log(`  ${slug}: pos=${metrics.position.toFixed(1)} imp=${metrics.impressions} clicks=${metrics.clicks}`);
      published++;
    } catch (err) {
      console.error(`  ${slug}: ERROR — ${err instanceof Error ? err.message : err}`);
    }
  }

  return published;
}
