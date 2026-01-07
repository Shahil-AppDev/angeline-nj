const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const logoPath = path.join(publicDir, 'logo.png');

async function generateIcons() {
  if (!fs.existsSync(logoPath)) {
    console.error('Erreur: logo.png non trouvé dans /public');
    return;
  }

  try {
    console.log('Génération de favicon.ico (PNG)...');
    await sharp(logoPath)
      .resize(32, 32)
      .toFile(path.join(publicDir, 'favicon.ico'));

    console.log('Génération de apple-touch-icon.png...');
    await sharp(logoPath)
      .resize(180, 180)
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));

    console.log('Génération de icon-192.png...');
    await sharp(logoPath)
      .resize(192, 192)
      .toFile(path.join(publicDir, 'icon-192.png'));

    console.log('Génération de icon-512.png...');
    await sharp(logoPath)
      .resize(512, 512)
      .toFile(path.join(publicDir, 'icon-512.png'));

    console.log('✅ Toutes les icônes de marque ont été générées à partir de logo.png !');
  } catch (error) {
    console.error('❌ Erreur lors de la génération des icônes :', error);
  }
}

generateIcons();
