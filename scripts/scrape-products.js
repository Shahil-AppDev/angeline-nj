const fs = require('fs');
const https = require('https');
const { JSDOM } = require('jsdom');

// Lire le fichier products.json
const productsPath = './data/products.json';
const rawData = fs.readFileSync(productsPath, 'utf8');
// Supprimer le BOM si présent
const cleanData = rawData.replace(/^\uFEFF/, '');
const products = JSON.parse(cleanData);

// Fonction pour scraper une page produit
async function scrapeProductDescription(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const dom = new JSDOM(data);
          const document = dom.window.document;
          
          // Chercher la description du produit
          // Essayer plusieurs sélecteurs possibles
          let description = '';
          
          // Sélecteur 1: div.woocommerce-product-details__short-description
          const shortDesc = document.querySelector('.woocommerce-product-details__short-description');
          if (shortDesc) {
            description = shortDesc.textContent.trim();
          }
          
          // Sélecteur 2: div.product-description ou .entry-content
          if (!description) {
            const entryContent = document.querySelector('.entry-content, .product-description');
            if (entryContent) {
              // Extraire seulement les paragraphes, pas les boutons/formulaires
              const paragraphs = entryContent.querySelectorAll('p');
              description = Array.from(paragraphs)
                .map(p => p.textContent.trim())
                .filter(text => text.length > 20) // Ignorer les petits textes
                .join(' ');
            }
          }
          
          // Sélecteur 3: meta description
          if (!description) {
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
              description = metaDesc.getAttribute('content');
            }
          }
          
          resolve(description || null);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

// Fonction pour attendre (éviter de surcharger le serveur)
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Fonction principale
async function scrapeAllProducts() {
  console.log(`Début du scraping de ${products.length} produits...`);
  
  let updated = 0;
  let failed = 0;
  
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    console.log(`\n[${i + 1}/${products.length}] ${product.title}`);
    
    // Vérifier si le produit a une source_url
    if (!product.source_url) {
      console.log('  ⚠️  Pas de source_url, ignoré');
      failed++;
      continue;
    }
    
    try {
      // Scraper la description
      const description = await scrapeProductDescription(product.source_url);
      
      if (description && description.length > 50) {
        console.log(`  ✅ Description trouvée (${description.length} caractères)`);
        console.log(`  📝 ${description.substring(0, 100)}...`);
        
        // Mettre à jour la description
        product.description = description;
        updated++;
      } else {
        console.log('  ⚠️  Description trop courte ou non trouvée');
        failed++;
      }
      
      // Attendre 1 seconde entre chaque requête pour ne pas surcharger le serveur
      await wait(1000);
      
    } catch (error) {
      console.log(`  ❌ Erreur: ${error.message}`);
      failed++;
    }
  }
  
  // Sauvegarder le fichier mis à jour
  fs.writeFileSync(productsPath, JSON.stringify(products, null, 2), 'utf8');
  
  console.log(`\n\n✅ Scraping terminé!`);
  console.log(`   - ${updated} produits mis à jour`);
  console.log(`   - ${failed} produits échoués`);
  console.log(`   - Fichier sauvegardé: ${productsPath}`);
}

// Lancer le scraping
scrapeAllProducts().catch(console.error);
