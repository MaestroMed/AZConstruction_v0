/**
 * Script pour générer les icônes PWA
 * Utilise sharp pour la conversion d'images
 * 
 * Usage: node scripts/generate-pwa-icons.js
 * 
 * Note: Nécessite l'installation de sharp: npm install sharp --save-dev
 * 
 * En attendant sharp, ce script génère des placeholder PNG
 */

const fs = require('fs');
const path = require('path');

// Tailles d'icônes requises pour PWA
const ICON_SIZES = [
  72, 96, 128, 144, 152, 192, 384, 512
];

// Couleurs du design system
const CYAN = '#06b6d4';
const WHITE = '#ffffff';

// Chemin de sortie
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'icons');

// Créer le dossier si nécessaire
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Générer SVG pour chaque taille
ICON_SIZES.forEach(size => {
  const svg = generateSVG(size);
  const filename = `icon-${size}x${size}.svg`;
  fs.writeFileSync(path.join(OUTPUT_DIR, filename), svg);
  console.log(`✓ Generated ${filename}`);
});

// Générer l'icône maskable
const maskableSVG = generateMaskableSVG(512);
fs.writeFileSync(path.join(OUTPUT_DIR, 'maskable-icon-512x512.svg'), maskableSVG);
console.log('✓ Generated maskable-icon-512x512.svg');

// Générer favicon.svg
const faviconSVG = generateSVG(32);
fs.writeFileSync(path.join(OUTPUT_DIR, 'favicon.svg'), faviconSVG);
console.log('✓ Generated favicon.svg');

// Générer apple-touch-icon
['152', '180'].forEach(size => {
  const svg = generateSVG(parseInt(size));
  fs.writeFileSync(path.join(OUTPUT_DIR, `apple-touch-icon-${size}x${size}.svg`), svg);
  console.log(`✓ Generated apple-touch-icon-${size}x${size}.svg`);
});

console.log('\n✅ All PWA icons generated successfully!');
console.log('\n📝 Note: Pour des icônes PNG optimisées, installez sharp:');
console.log('   npm install sharp --save-dev');
console.log('   Puis modifiez ce script pour utiliser sharp.svg().png()');

function generateSVG(size) {
  const fontSize = Math.floor(size * 0.4);
  const textY = Math.floor(size * 0.62);
  const borderRadius = Math.floor(size * 0.18);
  
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${borderRadius}" fill="url(#g)"/>
  <text x="${size/2}" y="${textY}" font-family="Arial Black,Arial,sans-serif" font-size="${fontSize}" font-weight="900" fill="white" text-anchor="middle">AZ</text>
</svg>`;
}

function generateMaskableSVG(size) {
  // Maskable icons need 40% safe zone padding
  const fontSize = Math.floor(size * 0.3); // Smaller for safe zone
  const textY = Math.floor(size * 0.58);
  
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" fill="url(#g)"/>
  <text x="${size/2}" y="${textY}" font-family="Arial Black,Arial,sans-serif" font-size="${fontSize}" font-weight="900" fill="white" text-anchor="middle">AZ</text>
</svg>`;
}
