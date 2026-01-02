import { PrismaClient } from '@prisma/client';

const ports = [3306, 3307, 3308, 33060];
const passwords = ['', 'root', 'password', '123456'];

console.log('🔍 Recherche de la configuration MySQL...\n');

for (const port of ports) {
  for (const password of passwords) {
    const url = `mysql://root:${password}@localhost:${port}/mysql`;
    
    try {
      const prisma = new PrismaClient({
        datasources: {
          db: {
            url: url
          }
        },
        log: []
      });
      
      await prisma.$connect();
      const result = await prisma.$queryRaw`SELECT VERSION() as version`;
      
      console.log(`✅ CONNEXION RÉUSSIE !`);
      console.log(`   Port: ${port}`);
      console.log(`   Mot de passe: ${password === '' ? '(vide)' : password}`);
      console.log(`   Version MySQL:`, result[0].version);
      console.log(`\n📝 Utilisez cette configuration dans .env.local:`);
      console.log(`DATABASE_URL="mysql://root:${password}@localhost:${port}/angeline_nj"`);
      
      await prisma.$disconnect();
      process.exit(0);
    } catch (error) {
      // Continuer avec la prochaine combinaison
    }
  }
}

console.log('❌ Aucune configuration MySQL trouvée');
console.log('\n💡 Vérifiez que MySQL est bien démarré');
