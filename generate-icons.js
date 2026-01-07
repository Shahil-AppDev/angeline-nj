const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const sourceIconPath = path.join(publicDir, 'source-icon.png');

async function generateIcons() {
  if (!fs.existsSync(sourceIconPath)) {
    console.error('Erreur: source-icon.png non trouvé dans /public');
    return;
  }

  try {
    console.log('Génération de icon-192.png...');
    await sharp(sourceIconPath)
      .resize(192, 192)
      .png()
      .toFile(path.join(publicDir, 'icon-192.png'));

    console.log('Génération de icon-512.png...');
    await sharp(sourceIconPath)
      .resize(512, 512)
      .png()
      .toFile(path.join(publicDir, 'icon-512.png'));

    console.log('✅ Icônes générées avec succès !');
  } catch (error) {
    console.error('❌ Erreur lors de la génération des icônes :', error);
  }
}

generateIcons();
