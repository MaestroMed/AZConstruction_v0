/**
 * Génère tous les favicons / icônes à partir de src/app/icon.svg
 * - PNGs référencés par layout.tsx et manifest.json
 * - favicon.ico multi-taille (16, 32, 48)
 *
 * Usage : node scripts/generate-favicons.mjs
 */
import sharp from "sharp";
import pngToIco from "png-to-ico";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const SVG_SOURCE = path.join(root, "src/app/icon.svg");
const PUBLIC_ICONS = path.join(root, "public/icons");
const APP_DIR = path.join(root, "src/app");

// Tailles attendues par manifest.json + layout.tsx
const PNG_SIZES = [16, 32, 48, 72, 96, 128, 144, 152, 180, 192, 384, 512];
const ICO_SIZES = [16, 32, 48];

async function main() {
  const svgBuf = await fs.readFile(SVG_SOURCE);
  console.log(`Source : ${SVG_SOURCE}`);

  await fs.mkdir(PUBLIC_ICONS, { recursive: true });

  // Génère les PNGs
  for (const size of PNG_SIZES) {
    const out = path.join(PUBLIC_ICONS, `icon-${size}x${size}.png`);
    await sharp(svgBuf, { density: Math.max(300, size * 2) })
      .resize(size, size)
      .png({ compressionLevel: 9 })
      .toFile(out);
    console.log(`  ✓ ${path.relative(root, out)}`);
  }

  // Apple touch icons (152 et 180 en PNG)
  for (const size of [152, 180]) {
    const out = path.join(PUBLIC_ICONS, `apple-touch-icon-${size}x${size}.png`);
    await sharp(svgBuf, { density: 300 }).resize(size, size).png().toFile(out);
    console.log(`  ✓ ${path.relative(root, out)}`);
  }

  // Maskable icon 512 (avec padding safe-zone 10 %)
  const maskableSize = 512;
  const safeZone = Math.round(maskableSize * 0.1); // 10 % padding
  const innerSize = maskableSize - safeZone * 2;
  const inner = await sharp(svgBuf, { density: 600 })
    .resize(innerSize, innerSize)
    .png()
    .toBuffer();
  const maskable = await sharp({
    create: {
      width: maskableSize,
      height: maskableSize,
      channels: 4,
      background: { r: 10, g: 22, b: 40, alpha: 1 },
    },
  })
    .composite([{ input: inner, top: safeZone, left: safeZone }])
    .png()
    .toBuffer();
  const maskableOut = path.join(PUBLIC_ICONS, `maskable-icon-512x512.png`);
  await fs.writeFile(maskableOut, maskable);
  console.log(`  ✓ ${path.relative(root, maskableOut)}`);

  // apple-icon.png (Next.js App Router auto-detect, 180×180 default)
  const appleIconOut = path.join(APP_DIR, "apple-icon.png");
  await sharp(svgBuf, { density: 300 }).resize(180, 180).png().toFile(appleIconOut);
  console.log(`  ✓ ${path.relative(root, appleIconOut)}`);

  // favicon.ico multi-taille
  const icoBufs = await Promise.all(
    ICO_SIZES.map((s) =>
      sharp(svgBuf, { density: Math.max(300, s * 4) }).resize(s, s).png().toBuffer()
    )
  );
  const icoBuf = await pngToIco(icoBufs);
  const icoOut = path.join(APP_DIR, "favicon.ico");
  await fs.writeFile(icoOut, icoBuf);
  console.log(`  ✓ ${path.relative(root, icoOut)} (${ICO_SIZES.join(", ")})`);

  console.log("\nTerminé.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
