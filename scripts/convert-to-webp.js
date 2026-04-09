#!/usr/bin/env node

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const IMG_DIR = path.join(__dirname, "..", "fox-valley-rug-works", "public", "images");
const QUALITY = 80;
const MAX_WIDTH = 800;

async function convert() {
  const files = fs.readdirSync(IMG_DIR).filter((f) => f.endsWith(".png"));
  console.log(`Found ${files.length} PNG files to convert.`);

  let success = 0;
  let failed = 0;

  for (const file of files) {
    const src = path.join(IMG_DIR, file);
    const dest = path.join(IMG_DIR, file.replace(/\.png$/, ".webp"));
    try {
      await sharp(src)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(dest);

      const srcSize = fs.statSync(src).size;
      const destSize = fs.statSync(dest).size;
      console.log(
        `  ✓ ${file} → ${path.basename(dest)}  (${(srcSize / 1024).toFixed(0)}KB → ${(destSize / 1024).toFixed(0)}KB)`
      );

      fs.unlinkSync(src);
      success++;
    } catch (err) {
      console.error(`  ✗ ${file}: ${err.message}`);
      failed++;
    }
  }

  console.log(`\nDone: ${success} converted, ${failed} failed.`);
  if (failed > 0) process.exit(1);
}

convert();
