const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function removeLogoBackground() {
  const logoPath = path.join(__dirname, '../public/brand/logo.png');
  const outputPath = path.join(__dirname, '../public/brand/logo-transparent.png');

  console.log('🎨 Suppression du fond du logo...');

  try {
    if (!fs.existsSync(logoPath)) {
      throw new Error('Logo non trouvé: public/brand/logo.png');
    }

    // Lire l'image et extraire le canal alpha pour créer une version transparente
    await sharp(logoPath)
      .flatten({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(outputPath);

    console.log('✅ Logo transparent créé: public/brand/logo-transparent.png');
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    process.exit(1);
  }
}

removeLogoBackground();
