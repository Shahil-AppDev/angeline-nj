import dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config({ path: '.env.local' });

console.log('🔍 Test de connexion à la base de données\n');
console.log('DATABASE_URL:', process.env.DATABASE_URL ? '✅ Défini' : '❌ Non défini');

if (process.env.DATABASE_URL) {
  // Masquer le mot de passe pour l'affichage
  const urlParts = process.env.DATABASE_URL.match(/mysql:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);
  
  if (urlParts) {
    const [, user, password, host, port, database] = urlParts;
    console.log('\n📋 Configuration détectée:');
    console.log('  Utilisateur:', user);
    console.log('  Mot de passe:', password ? '***' + password.slice(-3) : '❌ Vide');
    console.log('  Hôte:', host);
    console.log('  Port:', port);
    console.log('  Base de données:', database);
  } else {
    console.log('\n❌ Format de DATABASE_URL invalide');
    console.log('Format attendu: mysql://user:password@host:port/database');
  }
}

// Test de connexion avec Prisma
console.log('\n🔌 Test de connexion Prisma...\n');

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['error', 'warn'],
});

try {
  await prisma.$connect();
  console.log('✅ Connexion Prisma réussie!');
  
  // Test de requête simple
  const result = await prisma.$queryRaw`SELECT 1 as test`;
  console.log('✅ Requête test réussie:', result);
  
  await prisma.$disconnect();
} catch (error) {
  console.error('❌ Erreur de connexion:', error.message);
  console.error('\n💡 Solutions possibles:');
  console.error('  1. Vérifiez que MySQL est démarré');
  console.error('  2. Vérifiez le mot de passe dans DATABASE_URL');
  console.error('  3. Vérifiez que le port est correct (généralement 3306)');
  console.error('  4. Créez la base de données si elle n\'existe pas');
  process.exit(1);
}
