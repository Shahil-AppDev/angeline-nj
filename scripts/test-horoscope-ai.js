const fetch = require('node-fetch');

const API_URL = 'https://angeline-nj.xyz/api/horoscope-ai';

const signs = ['belier', 'taureau', 'gemeaux', 'cancer', 'lion', 'vierge', 'balance', 'scorpion', 'sagittaire', 'capricorne', 'verseau', 'poissons'];
const types = ['daily', 'love', 'career', 'personalized'];

async function testHoroscope(sign, type, name = null, question = null) {
  console.log(`\n🧪 Test: ${sign} - ${type}`);
  console.log('─'.repeat(50));
  
  const body = {
    sign,
    type,
    ...(name && { name }),
    ...(question && { question })
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    
    console.log('✅ Succès!');
    console.log(`📝 Horoscope: ${data.horoscope.substring(0, 100)}...`);
    console.log(`💡 Conseil: ${data.advice.substring(0, 80)}...`);
    if (data.luckyNumber) console.log(`🍀 Chiffre chanceux: ${data.luckyNumber}`);
    if (data.luckyColor) console.log(`🎨 Couleur: ${data.luckyColor}`);
    if (data.mood) console.log(`😊 Humeur: ${data.mood}`);
    if (data.energy) console.log(`⚡ Énergie: ${data.energy}/10`);
    
    return true;
  } catch (error) {
    console.log('❌ Erreur:', error.message);
    return false;
  }
}

async function runTests() {
  console.log('🚀 DÉBUT DES TESTS HOROSCOPE IA');
  console.log('═'.repeat(50));
  
  let successCount = 0;
  let totalTests = 0;

  // Test 1: Horoscope quotidien simple
  totalTests++;
  if (await testHoroscope('belier', 'daily')) successCount++;
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Test 2: Horoscope amour avec prénom
  totalTests++;
  if (await testHoroscope('cancer', 'love', 'Marie')) successCount++;
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Test 3: Horoscope carrière
  totalTests++;
  if (await testHoroscope('lion', 'career', 'Thomas')) successCount++;
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Test 4: Horoscope personnalisé avec question
  totalTests++;
  if (await testHoroscope('poissons', 'personalized', 'Sophie', 'Comment puis-je améliorer ma vie amoureuse?')) successCount++;

  console.log('\n═'.repeat(50));
  console.log(`📊 RÉSULTATS: ${successCount}/${totalTests} tests réussis`);
  console.log(`✅ Taux de succès: ${Math.round((successCount/totalTests)*100)}%`);
  
  if (successCount === totalTests) {
    console.log('🎉 TOUS LES TESTS SONT PASSÉS!');
  } else {
    console.log('⚠️ Certains tests ont échoué');
  }
}

runTests();
