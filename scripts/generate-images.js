#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const https = require("https");

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("Error: GEMINI_API_KEY environment variable is not set.");
  process.exit(1);
}

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`;
const OUTPUT_DIR = path.join(__dirname, "..", "fox-valley-rug-works", "public", "images");
const DELAY_MS = 5000;

const STYLE_PREFIX =
  "Professional editorial photograph of a small local rug cleaning business operating in an 1800 square foot commercial space. Clean bright overhead LED lighting, white walls, epoxy concrete floors. Small-scale local operator, not a factory or industrial plant. Organized and tidy workspace. Documentary photography style. ";

const IMAGE_JOBS = [
  // --- Homepage ---
  {
    id: 2,
    filename: "hero-rugs-drying-in-plant.jpg",
    prompt:
      "Overhead angle view of the main wash area. Several colorful Persian and Oriental area rugs laid flat and hanging to dry on metal racks. Warm natural tones from the rugs contrast against the clean utilitarian space. 4:3 aspect ratio, 800x600.",
  },
  {
    id: 3,
    filename: "hand-washing-persian-rug.jpg",
    prompt:
      "Close-up of hands in rubber gloves gently scrubbing a red and navy Persian rug with a soft brush and soapy water on the wash floor. Water flowing across the surface. Focus on hands and rug texture. 4:3, 640x480.",
  },
  {
    id: 4,
    filename: "drying-room-rugs-hanging.jpg",
    prompt:
      "Several area rugs in various colors and patterns hanging vertically from metal drying racks. Industrial fans visible in background. Compact drying area about 10 feet wide. 4:3, 640x480.",
  },
  {
    id: 5,
    filename: "before-after-wool-rug-cleaning.jpg",
    prompt:
      "Side-by-side comparison of a cream and blue wool area rug. Left half shows stains, matted pile, dull colors. Right half shows restored vibrant colors, fluffy pile, no stains. Clean workshop floor background. 4:3, 640x480.",
  },
  // --- Process Steps ---
  {
    id: 9,
    filename: "process-intake-inspection.jpg",
    prompt:
      "A technician's hands holding a clipboard while examining an area rug spread on a table under bright light. Inspecting for stains and damage. No face visible. 4:3, 640x480.",
  },
  {
    id: 10,
    filename: "process-dusting-machine.jpg",
    prompt:
      "An area rug being fed through a compact mechanical rug dusting machine. Visible dust particles in the air caught by the light. Small shop setting. 4:3, 640x480.",
  },
  {
    id: 11,
    filename: "process-pre-treatment.jpg",
    prompt:
      "Close-up of a gloved hand applying pre-treatment cleaning solution from a spray bottle to a stained area on a wool rug. Detail of the stain and solution. 4:3, 640x480.",
  },
  {
    id: 12,
    filename: "process-immersion-washing.jpg",
    prompt:
      "A large area rug laid flat in a shallow wash bay being cleaned with water flowing across its surface. Brushes and cleaning tools nearby. Small shop wash area. 4:3, 640x480.",
  },
  {
    id: 13,
    filename: "process-rinse-extract.jpg",
    prompt:
      "A rolled rug being placed into a compact centrifuge spinner for water extraction. Small shop equipment, not industrial factory scale. 4:3, 640x480.",
  },
  {
    id: 14,
    filename: "process-drying-tower.jpg",
    prompt:
      "Multiple rugs hanging vertically in a drying area with industrial fans and air movers visible. Compact space with 8-foot ceilings. 4:3, 640x480.",
  },
  {
    id: 15,
    filename: "process-grooming-inspection.jpg",
    prompt:
      "Close-up of hands using a specialized rug grooming brush on a freshly cleaned Oriental rug. Pile standing up, fringe laid flat and white. Detail of texture. 4:3, 640x480.",
  },
  {
    id: 16,
    filename: "process-wrapped-for-delivery.jpg",
    prompt:
      "A freshly cleaned area rug neatly rolled and wrapped in brown kraft paper, tied with twine. Sitting on a clean shelf ready for pickup. 4:3, 640x480.",
  },
  // --- Services ---
  {
    id: 17,
    filename: "service-area-rug-cleaning.jpg",
    prompt:
      "Wide shot of the wash bay area with a colorful rug being washed flat on the floor. Hose, brushes, and cleaning solution bottles nearby. 4:3, 640x480.",
  },
  {
    id: 18,
    filename: "service-pet-stain-odor.jpg",
    prompt:
      "Close-up of a gloved hand applying enzymatic treatment solution to a visible pet stain on a beige area rug. UV light nearby showing the stain. 4:3, 640x480.",
  },
  {
    id: 19,
    filename: "service-stain-removal.jpg",
    prompt:
      "Close-up of a technician's hands spot-treating a dark red wine stain on a light colored wool rug with a cleaning cloth and solution bottle. 4:3, 640x480.",
  },
  {
    id: 20,
    filename: "service-moth-insect-damage.jpg",
    prompt:
      "Macro close-up of moth damage on wool rug fibers showing bare foundation where pile has been eaten away. Educational detail shot. 4:3, 640x480.",
  },
  {
    id: 21,
    filename: "service-rug-repair-restoration.jpg",
    prompt:
      "Close-up of hands using a curved needle and thread to repair fringe on a Persian rug. Detail of the craftsmanship. Workbench setting. 4:3, 640x480.",
  },
  {
    id: 22,
    filename: "service-rug-padding.jpg",
    prompt:
      "A custom-cut felt and rubber rug pad being fitted and trimmed to size underneath an area rug on a hardwood floor. Clean residential setting. 4:3, 640x480.",
  },
  {
    id: 23,
    filename: "service-pickup-delivery.jpg",
    prompt:
      "Two workers carefully loading a large wrapped and rolled area rug into the back of a white cargo van. Seen from behind, no faces. Clean driveway setting. 4:3, 640x480.",
  },
  {
    id: 24,
    filename: "service-rug-storage.jpg",
    prompt:
      "Neatly wrapped and labeled area rugs stored on industrial shelving racks in a clean climate-controlled storage room. Organized small warehouse. 4:3, 640x480.",
  },
  {
    id: 25,
    filename: "service-water-damage-emergency.jpg",
    prompt:
      "A water-damaged area rug being carefully unrolled on the wash floor for emergency assessment. Visible water staining and dampness. Urgency implied. 4:3, 640x480.",
  },
  // --- Rug Types ---
  {
    id: 26,
    filename: "rug-type-persian.jpg",
    prompt:
      "A beautiful hand-knotted Persian area rug with traditional red and navy medallion pattern, laid flat on a clean light surface. Full rug visible, overhead product shot. 4:3, 640x480.",
  },
  {
    id: 27,
    filename: "rug-type-turkish.jpg",
    prompt:
      "A Turkish area rug with bold geometric patterns in red, blue, and ivory. Laid flat, overhead product photography on light background. 4:3, 640x480.",
  },
  {
    id: 28,
    filename: "rug-type-afghan.jpg",
    prompt:
      "An Afghan Bokhara area rug with distinctive repeating elephant foot (gul) octagonal patterns in deep red and black. Overhead product shot. 4:3, 640x480.",
  },
  {
    id: 29,
    filename: "rug-type-indian.jpg",
    prompt:
      "An Indian hand-knotted area rug with intricate floral motifs in jewel tones on a cream field. Overhead product photography. 4:3, 640x480.",
  },
  {
    id: 30,
    filename: "rug-type-chinese.jpg",
    prompt:
      "A Chinese sculpted area rug with raised floral and dragon patterns in blue and gold on a cream background. Overhead product shot showing the sculptured texture. 4:3, 640x480.",
  },
  {
    id: 31,
    filename: "rug-type-navajo.jpg",
    prompt:
      "A Navajo flat-weave area rug with classic earth-tone diamond and stripe pattern in red, tan, black, and white. Overhead product shot. 4:3, 640x480.",
  },
  {
    id: 32,
    filename: "rug-type-moroccan.jpg",
    prompt:
      "A plush white Moroccan Beni Ourain area rug with black diamond lattice pattern. Thick pile visible. Overhead product photography on light floor. 4:3, 640x480.",
  },
  {
    id: 33,
    filename: "rug-type-machine-made.jpg",
    prompt:
      "A modern machine-made area rug with contemporary abstract pattern in gray and cream tones. Flat lay overhead product shot. 4:3, 640x480.",
  },
  {
    id: 34,
    filename: "rug-type-silk.jpg",
    prompt:
      "A fine silk area rug with luminous sheen showing intricate knot detail. Rich jewel tones catching the light. Close overhead product shot. 4:3, 640x480.",
  },
  {
    id: 35,
    filename: "rug-type-wool.jpg",
    prompt:
      "A hand-knotted wool area rug showing natural thick texture and subtle lanolin sheen. Earth tones with traditional pattern. Close overhead product shot. 4:3, 640x480.",
  },
  {
    id: 36,
    filename: "rug-type-jute-sisal.jpg",
    prompt:
      "A natural jute area rug showing the woven plant fiber texture in a basket weave pattern. Earthy tan tones. Overhead product photography. 4:3, 640x480.",
  },
  {
    id: 37,
    filename: "rug-type-antique-heirloom.jpg",
    prompt:
      "A delicate antique area rug with aged patina, slightly faded colors, and intricate hand-knotted detail. Muted rose, blue, and ivory tones. Overhead product shot. 4:3, 640x480.",
  },
  // --- City Page (shared) ---
  {
    id: 38,
    filename: "plant-interior-wash-bay.jpg",
    prompt:
      "Wide-angle interior photo of the entire small rug cleaning workshop. Wash bay on one side, drying racks on the other. Equipment organized neatly. Clean, bright, professional small business. Welcoming and trustworthy atmosphere. 4:3, 640x480.",
  },
];

function makeRequest(body) {
  return new Promise((resolve, reject) => {
    const url = new URL(API_URL);
    const postData = JSON.stringify(body);

    const options = {
      hostname: url.hostname,
      path: url.pathname + url.search,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(postData),
      },
    };

    const req = https.request(options, (res) => {
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => {
        const raw = Buffer.concat(chunks).toString();
        try {
          resolve({ status: res.statusCode, data: JSON.parse(raw) });
        } catch {
          reject(new Error(`Non-JSON response (${res.statusCode}): ${raw.slice(0, 300)}`));
        }
      });
    });

    req.on("error", reject);
    req.setTimeout(120000, () => {
      req.destroy();
      reject(new Error("Request timed out after 120s"));
    });
    req.write(postData);
    req.end();
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function generateImage(job) {
  const outputPath = path.join(OUTPUT_DIR, job.filename);

  // Check for both .jpg and .png versions
  const pngPath = outputPath.replace(/\.jpg$/, ".png");
  if (fs.existsSync(outputPath) || fs.existsSync(pngPath)) {
    return { status: "skipped" };
  }

  const fullPrompt = STYLE_PREFIX + job.prompt;

  const body = {
    contents: [
      {
        parts: [{ text: fullPrompt }],
      },
    ],
    generationConfig: {
      responseModalities: ["IMAGE", "TEXT"],
    },
  };

  const response = await makeRequest(body);

  if (response.status !== 200) {
    const msg =
      response.data?.error?.message || JSON.stringify(response.data).slice(0, 200);
    throw new Error(`API ${response.status}: ${msg}`);
  }

  const candidates = response.data?.candidates;
  if (!candidates || candidates.length === 0) {
    throw new Error("No candidates in response");
  }

  const parts = candidates[0]?.content?.parts;
  if (!parts) {
    throw new Error("No parts in candidate response");
  }

  const imagePart = parts.find(
    (p) => p.inlineData && p.inlineData.mimeType?.startsWith("image/")
  );

  if (!imagePart) {
    throw new Error(
      "No image data in response. Parts: " +
        parts.map((p) => Object.keys(p).join(",")).join(" | ")
    );
  }

  const buffer = Buffer.from(imagePart.inlineData.data, "base64");

  // API may return png or jpeg — save with correct extension
  const mime = imagePart.inlineData.mimeType;
  const ext = mime === "image/png" ? ".png" : ".jpg";
  const finalPath = outputPath.replace(/\.jpg$/, ext);
  fs.writeFileSync(finalPath, buffer);

  return { status: "success", savedAs: path.basename(finalPath) };
}

async function main() {
  console.log(`\nImage Generation Pipeline — Fox Valley Rug Works`);
  console.log(`${"=".repeat(50)}`);
  console.log(`Total jobs: ${IMAGE_JOBS.length}`);
  console.log(`Output dir: ${OUTPUT_DIR}\n`);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  let succeeded = 0;
  let failed = 0;
  let skipped = 0;
  const failures = [];

  for (let i = 0; i < IMAGE_JOBS.length; i++) {
    const job = IMAGE_JOBS[i];
    const progress = `${i + 1}/${IMAGE_JOBS.length}`;

    let madeApiCall = false;
    try {
      const result = await generateImage(job);

      if (result.status === "skipped") {
        skipped++;
        console.log(`Skipped ${progress}: ${job.filename} (already exists)`);
      } else {
        succeeded++;
        madeApiCall = true;
        console.log(`Generated ${progress}: ${result.savedAs} \u2713`);
      }
    } catch (err) {
      failed++;
      madeApiCall = true;
      failures.push({ id: job.id, filename: job.filename, error: err.message });
      console.error(`FAILED ${progress}: ${job.filename} \u2717 — ${err.message}`);
    }

    if (madeApiCall && i < IMAGE_JOBS.length - 1) {
      await sleep(DELAY_MS);
    }
  }

  console.log(`\n${"=".repeat(50)}`);
  console.log(`SUMMARY`);
  console.log(`  Succeeded: ${succeeded}`);
  console.log(`  Failed:    ${failed}`);
  console.log(`  Skipped:   ${skipped}`);
  console.log(`  Total:     ${IMAGE_JOBS.length}`);

  if (failures.length > 0) {
    console.log(`\nFailed images:`);
    failures.forEach((f) => {
      console.log(`  #${f.id} ${f.filename}: ${f.error}`);
    });
  }

  console.log("");
  process.exit(failed > 0 ? 1 : 0);
}

main();
