/**
 * SCRIPT D'IMPORT PRODUITS WOOCOMMERCE
 * Source: https://angeline-nj.com/wp-json/wc/store/products
 * 
 * Récupère TOUS les produits réels avec pagination
 * Crée data/products.json + data/categories.json
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const API_BASE = 'https://angeline-nj.com/wp-json/wc/store/products';
const PER_PAGE = 100;
const DATA_DIR = path.join(__dirname, '..', 'data');

// Créer dossier data si inexistant
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

/**
 * Fetch API avec pagination
 */
function fetchProducts(page = 1) {
  return new Promise((resolve, reject) => {
    const url = `${API_BASE}?per_page=${PER_PAGE}&page=${page}`;
    
    https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const products = JSON.parse(data);
          resolve(products);
        } catch (err) {
          reject(err);
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Transformer produit WooCommerce en format simplifié
 */
function transformProduct(product) {
  const price = product.prices?.price ? parseInt(product.prices.price) / 100 : null;
  const regularPrice = product.prices?.regular_price ? parseInt(product.prices.regular_price) / 100 : null;
  const salePrice = product.prices?.sale_price ? parseInt(product.prices.sale_price) / 100 : null;
  
  return {
    id: `wp-${product.id}`,
    slug: product.slug,
    title: product.name,
    price: price,
    regular_price: regularPrice,
    sale_price: product.on_sale ? salePrice : null,
    on_sale: product.on_sale,
    category: product.categories?.[0]?.slug || 'tous-les-produits',
    category_name: product.categories?.[0]?.name || 'Tous les produits',
    image: product.images?.[0]?.src || null,
    thumbnail: product.images?.[0]?.thumbnail || null,
    description: product.short_description || product.description?.replace(/<[^>]*>/g, '').substring(0, 200) || '',
    in_stock: product.is_in_stock,
    stock_quantity: product.stock_availability?.text || '',
    source_url: product.permalink
  };
}

/**
 * Extraire catégories uniques
 */
function extractCategories(products) {
  const categoriesMap = new Map();
  
  products.forEach(product => {
    if (product.categories && product.categories.length > 0) {
      product.categories.forEach(cat => {
        if (!categoriesMap.has(cat.slug)) {
          categoriesMap.set(cat.slug, {
            id: cat.id,
            slug: cat.slug,
            name: cat.name,
            link: cat.link,
            count: 0
          });
        }
        categoriesMap.get(cat.slug).count++;
      });
    }
  });
  
  return Array.from(categoriesMap.values()).sort((a, b) => b.count - a.count);
}

/**
 * MAIN - Import complet
 */
async function importAllProducts() {
  console.log('🚀 DÉBUT IMPORT PRODUITS WOOCOMMERCE\n');
  
  let allProducts = [];
  let page = 1;
  let hasMore = true;
  
  // Pagination
  while (hasMore) {
    try {
      console.log(`📦 Récupération page ${page}...`);
      const products = await fetchProducts(page);
      
      if (products.length === 0) {
        hasMore = false;
        break;
      }
      
      allProducts = allProducts.concat(products);
      console.log(`   ✅ ${products.length} produits récupérés (total: ${allProducts.length})`);
      
      // Si moins de PER_PAGE produits, c'est la dernière page
      if (products.length < PER_PAGE) {
        hasMore = false;
      } else {
        page++;
      }
      
      // Pause pour éviter rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
      
    } catch (error) {
      console.error(`❌ Erreur page ${page}:`, error.message);
      hasMore = false;
    }
  }
  
  console.log(`\n📊 TOTAL PRODUITS RÉCUPÉRÉS: ${allProducts.length}\n`);
  
  // Transformer produits
  console.log('🔄 Transformation des produits...');
  const transformedProducts = allProducts.map(transformProduct);
  
  // Extraire catégories
  console.log('🏷️  Extraction des catégories...');
  const categories = extractCategories(allProducts);
  
  // Écrire products.json
  const productsPath = path.join(DATA_DIR, 'products.json');
  fs.writeFileSync(productsPath, JSON.stringify(transformedProducts, null, 2), 'utf8');
  console.log(`✅ ${productsPath} créé (${transformedProducts.length} produits)`);
  
  // Écrire categories.json
  const categoriesPath = path.join(DATA_DIR, 'categories.json');
  fs.writeFileSync(categoriesPath, JSON.stringify(categories, null, 2), 'utf8');
  console.log(`✅ ${categoriesPath} créé (${categories.length} catégories)`);
  
  // Stats finales
  console.log('\n📈 STATISTIQUES FINALES:');
  console.log(`   • Produits importés: ${transformedProducts.length}`);
  console.log(`   • Catégories: ${categories.length}`);
  console.log(`   • Produits en promo: ${transformedProducts.filter(p => p.on_sale).length}`);
  console.log(`   • Produits en stock: ${transformedProducts.filter(p => p.in_stock).length}`);
  
  // Top 5 catégories
  console.log('\n🏆 TOP 5 CATÉGORIES:');
  categories.slice(0, 5).forEach((cat, i) => {
    console.log(`   ${i + 1}. ${cat.name} (${cat.count} produits)`);
  });
  
  console.log('\n✅ IMPORT TERMINÉ AVEC SUCCÈS\n');
}

// Exécution
importAllProducts().catch(err => {
  console.error('❌ ERREUR FATALE:', err);
  process.exit(1);
});
