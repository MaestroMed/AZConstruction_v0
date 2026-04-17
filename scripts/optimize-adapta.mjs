// One-off: convert all Adapta JPGs to WebP @ ~800px width, replace source files,
// update adapta-collections.generated.ts to reference .webp extensions.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public/images/collections/adapta");
const TS_FILE = path.resolve("src/lib/data/adapta-collections.generated.ts");

async function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else yield p;
  }
}

let beforeBytes = 0;
let afterBytes = 0;
let count = 0;

for await (const file of walk(ROOT)) {
  if (!/\.jpe?g$/i.test(file)) continue;
  beforeBytes += fs.statSync(file).size;
  const out = file.replace(/\.jpe?g$/i, ".webp");
  await sharp(file)
    .resize({ width: 800, height: 800, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(out);
  afterBytes += fs.statSync(out).size;
  fs.unlinkSync(file);
  count++;
}

// Update generated.ts to use .webp
const ts = fs.readFileSync(TS_FILE, "utf8").replace(/\.jpg"/g, '.webp"');
fs.writeFileSync(TS_FILE, ts);

const mb = (b) => (b / 1024 / 1024).toFixed(2);
console.log(`Converted ${count} images.`);
console.log(`Before: ${mb(beforeBytes)} MB → After: ${mb(afterBytes)} MB (saved ${mb(beforeBytes - afterBytes)} MB).`);
console.log("Updated TS paths to .webp.");
