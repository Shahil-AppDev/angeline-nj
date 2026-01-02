import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config({ path: '.env.local' });

const prisma = new PrismaClient({
  log: ['error'],
});

async function main() {
  console.log('🔐 Création du compte administrateur...\n');

  // ⚠️ CHANGEZ CES VALEURS SI NÉCESSAIRE
  const adminData = {
    email: 'admin@angeline-nj.fr',
    password: 'VotreMotDePasseSecurise123!',
    name: 'Angeline',
  };

  try {
    // Vérifier si un admin existe déjà
    const existingAdmin = await prisma.admin.findUnique({
      where: { email: adminData.email },
    });

    if (existingAdmin) {
      console.log('❌ Un admin avec cet email existe déjà!');
      console.log(`   Email: ${existingAdmin.email}`);
      console.log(`   Nom: ${existingAdmin.name}`);
      console.log('\n💡 Pour créer un nouvel admin, changez l\'email dans le script.');
      return;
    }

    // Hasher le mot de passe
    console.log('🔒 Hashage du mot de passe...');
    const hashedPassword = await bcrypt.hash(adminData.password, 10);

    // Créer l'admin
    const admin = await prisma.admin.create({
      data: {
        email: adminData.email,
        password: hashedPassword,
        name: adminData.name,
      },
    });

    console.log('\n✅ Compte administrateur créé avec succès!\n');
    console.log('📧 Email:', admin.email);
    console.log('👤 Nom:', admin.name);
    console.log('🆔 ID:', admin.id);
    console.log('\n🔐 Vous pouvez maintenant vous connecter sur:');
    console.log('   http://localhost:3001/admin/login');
    console.log('\n⚠️  N\'oubliez pas de changer le mot de passe après la première connexion!');
  } catch (error) {
    console.error('❌ Erreur lors de la création de l\'admin:', error.message);
    if (error.code === 'P1001') {
      console.error('\n💡 Vérifiez que:');
      console.error('   1. MySQL est démarré');
      console.error('   2. DATABASE_URL est correct dans .env.local');
      console.error('   3. La base de données "angeline_nj" existe');
    }
    process.exit(1);
  }
}

main()
  .catch((error) => {
    console.error('❌ Erreur fatale:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
