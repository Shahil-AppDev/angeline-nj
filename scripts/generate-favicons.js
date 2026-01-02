const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const logoPath = path.join(__dirname, '../public/brand/logo-transparent.png');
  const appDir = path.join(__dirname, '../app');

  console.log('🎨 Génération des favicons à partir de logo-transparent.png...');

  try {
    // Vérifier que le logo existe
    if (!fs.existsSync(logoPath)) {
      throw new Error('Logo non trouvé: public/brand/logo-transparent.png');
    }

    // Générer icon.png (512x512)
    await sharp(logoPath)
      .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(appDir, 'icon.png'));
    console.log('✅ icon.png (512x512) généré');

    // Générer apple-icon.png (180x180)
    await sharp(logoPath)
      .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(appDir, 'apple-icon.png'));
    console.log('✅ apple-icon.png (180x180) généré');

    // Générer favicon.ico (32x32)
    await sharp(logoPath)
      .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(appDir, 'favicon.ico'));
    console.log('✅ favicon.ico (32x32) généré');

    console.log('🎉 Tous les favicons ont été générés avec succès!');
  } catch (error) {
    console.error('❌ Erreur lors de la génération des favicons:', error.message);
    process.exit(1);
  }
}

generateFavicons();
