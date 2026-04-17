// One-off build script: rename Adapta images & generate TS data.
// Run from repo root: node scripts/build-adapta.mjs
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("public/images/collections/adapta");

// ── Reference data parsed manually from references.txt ──
// Each sub-collection maps to an ordered list of names.
const PATINA = {
  "Plain Oxide Patina": [
    "RT-8283-I", "RT-8281-I", "RT-8286-I", "RT-8102-I", "RT-8107-I",
    "RF-8284-XW", "RT-1702-I", "RF-6296-XW", "DF-1536-XW", "RF-6297-XW",
    "RT-6302-I", "RF-6300-IW",
  ],
  "Tile Patina": [
    "Gentle Erosion", "Resilient Clay", "Latent Hermits", "Lost Footprints",
    "Serene Safari", "Gilt Sunset", "Pristine Coves", "Top Hand-Crafting",
    "Unspoilt Beaches", "Dune Plateau", "Soft Peat", "Warm Timanfaya",
  ],
  "Oxide Patina 1": [
    "Land of Fire", "Lethargic Savannah", "Spicy Crater", "Powerful Twister",
    "Effervescent Earth", "Glowing Slurry", "Desert Mist", "Wildlife Sanctuary",
    "Crowded Oasis", "Musical Waterfall", "Magnificient Shore", "Bitter Water",
  ],
  "Oxide Patina 2": [
    "Turquoise Copper", "Untouched Steppes", "Quiet Patagonia", "Bright Moss",
    "Lush Vegetation", "Temperate Rainforest", "Ocean Breeze", "Tough Everglades",
    "Suspicious Marsh", "Golden Soil", "Late Afternoon", "Silent Ice",
  ],
  "Soft Patina": [
    "Calm Cappadocia", "Frozen Streams", "Hasty Wind", "Northern Thunder",
    "Cold Cliffs", "Waves Crashing", "Fringing Reefs", "Sunny Wetland",
    "Wild Amazon", "Outlandish Timbuktu", "Mysterious Bermudas", "Mangrove Swamp",
  ],
  "Crystal Patina": [
    "RW-9261-XW", "RW-9006-XW", "RW-9007-XW", "RW-7100-XW", "RW-1703-XW",
    "RW-8285-XW", "RW-6301", "RW-1170-XW", "RW-3197", "RW-6289",
    "RW-6303-XW", "RW-5228",
  ],
};

const POLARIS = {
  Chamaleon: ["RB-7182-I", "RB-5112-I", "RB-1101-I", "RB-2108-I", "RB-6123-I", "RB-7183-I"],
  Sculptur: ["RL-1501-XW", "RL-1502-XW", "RL-3104-XW", "RL-5106-XW", "RL-6108-XW", "RL-7117-XW"],
  Boreal: ["RH-5107", "RH-6127", "RH-7184", "RH-1515"],
  Orion: [
    "RX-7188-XW", "RX-7190-XW", "RX-1514-XW", "RX-4104-XW", "RX-5114-XW",
    "RX-6125-XW", "RX-7177-XW", "RX-8121-XW", "RX-2107-XW",
  ],
  Pegassus: ["RL-7193-X", "RL-7125-X", "RL-9939-X", "RL-9940-X", "RL-9941-X"],
  Phoenix: [
    "HX-7129-X", "HX-7177-X", "HX-7178-X", "HX-7159-X", "HF-7164-X",
    "HF-7188-X", "HX-7210-X", "HX-1531-X", "HX-8116-X",
  ],
  Hydra: ["RX-9006-X", "RX-9007-X", "RX-7167-X", "RX-7141-TZ", "RX-7100-TZ", "RX-7191-X", "RX-7168-X"],
};

const DICHROIC = [
  "D & 500", "Odd & Even", "Bonnie & Clyde", "Heads & Tails", "Sky & Dreams",
  "Lucky & Unlucky", "Side & Side", "Ebony & Ivory", "Up & Down", "Gold & Silver",
  "Garuda & Adurag", "Tantima & Amitant",
  "Red & Fire", "Yin & Yang", "Crazy & Horse", "Pixie & Dixie", "Queens & Kings",
  "East & West", "Winners & Losers", "Laurel & Hardy", "Guns & Roses",
  "Dr. Jekyll & Mr. Hide", "On & Off", "Rock & Roll",
];

const SFERA = [
  "Azul Caballa", "Negro Cosmos", "Plata Cosmos", "Rojo Fuego",
  "Azul Anodizado", "Cobre Anodizado", "Verde Anodizado", "Latón Anodizado",
  "Acero Anodizado", "Bronce Anodizado", "Gris Plata Anodizado", "Plata Anodizado",
  "Azul Ártico",
];

// Sub-collection metadata (display names, descriptions)
const PATINA_META = {
  "Plain Oxide Patina": { id: "plain-oxide", name: "Plain Oxide Patina", description: "Effets oxyde uniformes, codes RAL Adapta" },
  "Tile Patina": { id: "tile", name: "Tile Patina", description: "Patine façon carrelage et terre cuite" },
  "Oxide Patina 1": { id: "oxide-1", name: "Oxide Patina I", description: "Premiers oxydes : feu et terre" },
  "Oxide Patina 2": { id: "oxide-2", name: "Oxide Patina II", description: "Suite d'oxydes : cuivres et verts" },
  "Soft Patina": { id: "soft", name: "Soft Patina", description: "Patines douces, finitions apaisées" },
  "Crystal Patina": { id: "crystal", name: "Crystal Patina", description: "Cristal patiné, codes RAL Adapta" },
};

const POLARIS_META = {
  Chamaleon: { id: "chamaleon", name: "Chamaleon", description: "Effet caméléon, reflets changeants" },
  Sculptur: { id: "sculptur", name: "Sculptur", description: "Finitions sculpturales structurées" },
  Boreal: { id: "boreal", name: "Boreal", description: "Effets boréals martelés" },
  Orion: { id: "orion", name: "Orion", description: "Métalliques type Orion" },
  Pegassus: { id: "pegassus", name: "Pegassus", description: "Métalliques griffés Pegassus" },
  Phoenix: { id: "phoenix", name: "Phoenix", description: "Or et chaud, série Phoenix" },
  Hydra: { id: "hydra", name: "Hydra", description: "Argents et acier polis" },
};

// ── Helpers ──
function slugify(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function listImages(dir) {
  return fs.readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .filter((f) => !/\(\d+\)/.test(f)) // skip duplicates like "1046 (1).jpg"
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] ?? "0", 10);
      const numB = parseInt(b.match(/\d+/)?.[0] ?? "0", 10);
      return numA - numB;
    });
}

function move(src, dst) {
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.renameSync(src, dst);
}

// ── Process ──
const out = { patina: [], polaris: [], dichroic: [], sfera: [] };

// Helper: process a sub-collection (source folder → renamed files in destination folder)
// Stages into a temp folder first to avoid case-insensitive FS collisions on Windows.
function processSub(collection, sourceFolder, meta, names) {
  const srcDir = path.join(ROOT, collection, sourceFolder);
  const stageDir = path.join(ROOT, collection, `__stage_${meta.id}`);
  const finalDir = path.join(ROOT, collection, meta.id);
  const files = listImages(srcDir);
  const finishes = [];

  fs.mkdirSync(stageDir, { recursive: true });
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const slug = slugify(name);
    const file = files[i];
    let imageUrl;
    if (file) {
      const newName = `${slug}.jpg`;
      fs.renameSync(path.join(srcDir, file), path.join(stageDir, newName));
      imageUrl = `/images/collections/adapta/${collection}/${meta.id}/${newName}`;
    }
    finishes.push({ id: slug, name, imageUrl });
  }
  // Remove leftover files in source then drop the now-empty source folder
  for (const f of fs.readdirSync(srcDir)) fs.unlinkSync(path.join(srcDir, f));
  fs.rmdirSync(srcDir);
  // Move staging into final location
  fs.renameSync(stageDir, finalDir);
  return { ...meta, finishes };
}

// Patina
for (const [folder, names] of Object.entries(PATINA)) {
  out.patina.push(processSub("patina", folder, PATINA_META[folder], names));
}

// Polaris
for (const [folder, names] of Object.entries(POLARIS)) {
  out.polaris.push(processSub("polaris", folder, POLARIS_META[folder], names));
}

// Dichroic (flat)
{
  const srcDir = path.join(ROOT, "dichroic");
  const files = listImages(srcDir);
  for (let i = 0; i < DICHROIC.length; i++) {
    const name = DICHROIC[i];
    const slug = slugify(name);
    const file = files[i];
    let imageUrl;
    if (file) {
      const newName = `${slug}.jpg`;
      // Move into a temp subfolder then back to avoid name collisions
      const dst = path.join(ROOT, "dichroic", "_renamed", newName);
      move(path.join(srcDir, file), dst);
      imageUrl = `/images/collections/adapta/dichroic/${newName}`;
    }
    out.dichroic.push({ id: slug, name, imageUrl });
  }
  // Move renamed files back to the main folder
  const renamedDir = path.join(srcDir, "_renamed");
  if (fs.existsSync(renamedDir)) {
    for (const f of fs.readdirSync(renamedDir)) {
      fs.renameSync(path.join(renamedDir, f), path.join(srcDir, f));
    }
    fs.rmdirSync(renamedDir);
  }
}

// Sfera (flat)
{
  const srcDir = path.join(ROOT, "sfera");
  const files = listImages(srcDir);
  for (let i = 0; i < SFERA.length; i++) {
    const name = SFERA[i];
    const slug = slugify(name);
    const file = files[i];
    let imageUrl;
    if (file) {
      const newName = `${slug}.jpg`;
      const dst = path.join(ROOT, "sfera", "_renamed", newName);
      move(path.join(srcDir, file), dst);
      imageUrl = `/images/collections/adapta/sfera/${newName}`;
    }
    out.sfera.push({ id: slug, name, imageUrl });
  }
  const renamedDir = path.join(srcDir, "_renamed");
  if (fs.existsSync(renamedDir)) {
    for (const f of fs.readdirSync(renamedDir)) {
      fs.renameSync(path.join(renamedDir, f), path.join(srcDir, f));
    }
    fs.rmdirSync(renamedDir);
  }
}

fs.writeFileSync(path.join("scripts", "adapta-manifest.json"), JSON.stringify(out, null, 2));

// ── Emit TypeScript data file ──
const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
const renderFinish = (f) => {
  const parts = [`id: "${esc(f.id)}"`, `name: "${esc(f.name)}"`];
  if (f.imageUrl) parts.push(`imageUrl: "${f.imageUrl}"`);
  return `      { ${parts.join(", ")} },`;
};
const renderSub = (s) => {
  const finishes = s.finishes.map(renderFinish).join("\n");
  return `  {
    id: "${esc(s.id)}",
    name: "${esc(s.name)}",
    description: "${esc(s.description ?? "")}",
    finishes: [
${finishes}
    ],
  },`;
};

const ts = `// AUTO-GENERATED by scripts/build-adapta.mjs — do not edit by hand.
// Re-run \`node scripts/build-adapta.mjs\` after touching the source images.
import type { CollectionFinish, SubCollection } from "./thermolaquage-items";

export const ADAPTA_PATINA_SUBS: SubCollection[] = [
${out.patina.map(renderSub).join("\n")}
];

export const ADAPTA_POLARIS_SUBS: SubCollection[] = [
${out.polaris.map(renderSub).join("\n")}
];

export const ADAPTA_DICHROIC_FINISHES: CollectionFinish[] = [
${out.dichroic.map(renderFinish).join("\n")}
];

export const ADAPTA_SFERA_FINISHES: CollectionFinish[] = [
${out.sfera.map(renderFinish).join("\n")}
];
`;
fs.writeFileSync(path.join("src", "lib", "data", "adapta-collections.generated.ts"), ts);

console.log("Manifest + TS file written. Counts:");
console.log("  Patina sub-collections:", out.patina.length, "— total finishes:", out.patina.reduce((a, s) => a + s.finishes.length, 0));
console.log("  Polaris sub-collections:", out.polaris.length, "— total finishes:", out.polaris.reduce((a, s) => a + s.finishes.length, 0));
console.log("  Dichroic finishes:", out.dichroic.length);
console.log("  Sfera finishes:", out.sfera.length);
