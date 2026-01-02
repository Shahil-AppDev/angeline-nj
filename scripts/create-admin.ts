import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🔐 Création du compte administrateur...\n');

  // ⚠️ CHANGEZ CES VALEURS AVANT D'EXÉCUTER LE SCRIPT
  const adminData = {
    email: 'admin@angeline-nj.fr',
    password: 'ChangeMotDePasse123!', // ⚠️ CHANGEZ CE MOT DE PASSE
    name: 'Angeline',
  };

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
  console.log('   http://localhost:3000/admin/login');
  console.log('\n⚠️  N\'oubliez pas de changer le mot de passe après la première connexion!');
}

main()
  .catch((error) => {
    console.error('❌ Erreur lors de la création de l\'admin:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
