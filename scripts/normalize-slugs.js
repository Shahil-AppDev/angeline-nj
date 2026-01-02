const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 Normalisation des slugs produits...\n');

let modified = 0;

const normalizedProducts = products.map(product => {
  const originalSlug = product.slug;
  
  // Décoder les caractères URL-encodés et retirer les emojis
  let normalizedSlug = decodeURIComponent(originalSlug);
  
  // Retirer tous les emojis et caractères spéciaux non-ASCII
  normalizedSlug = normalizedSlug
    .replace(/[\u{1F300}-\u{1F9FF}]/gu, '') // Emojis
    .replace(/[\u{2600}-\u{26FF}]/gu, '')   // Symboles divers
    .replace(/[\u{2700}-\u{27BF}]/gu, '')   // Dingbats
    .replace(/[\u{FE00}-\u{FE0F}]/gu, '')   // Variation selectors
    .replace(/[\u{1F900}-\u{1F9FF}]/gu, '') // Emojis supplémentaires
    .replace(/[\u{1F600}-\u{1F64F}]/gu, '') // Emoticons
    .replace(/[\u{1F680}-\u{1F6FF}]/gu, '') // Symboles transport
    .replace(/[\u{2300}-\u{23FF}]/gu, '')   // Symboles techniques
    .replace(/[\u{2B50}]/gu, '')            // Étoile
    .replace(/[\u{FE0F}]/gu, '')            // Variation selector
    .trim()
    .replace(/\s+/g, '-')                   // Espaces en tirets
    .replace(/-+/g, '-')                    // Tirets multiples en un seul
    .replace(/^-|-$/g, '')                  // Retirer tirets début/fin
    .toLowerCase();
  
  if (originalSlug !== normalizedSlug) {
    console.log(`✏️  ${product.title}`);
    console.log(`   Avant: ${originalSlug}`);
    console.log(`   Après: ${normalizedSlug}\n`);
    modified++;
  }
  
  return {
    ...product,
    slug: normalizedSlug,
    original_slug: originalSlug // Garder l'original pour référence
  };
});

// Sauvegarder
fs.writeFileSync(productsPath, JSON.stringify(normalizedProducts, null, 2), 'utf8');

console.log(`\n✅ ${modified} slugs normalisés`);
console.log(`📄 ${productsPath} mis à jour`);
