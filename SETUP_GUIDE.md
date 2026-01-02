# 🚀 Guide de Configuration - Angeline NJ

## 📋 Prérequis

- Node.js 18+ installé
- MySQL installé et en cours d'exécution
- Compte Resend (pour les emails)

---

## 1️⃣ Configuration de la Base de Données MySQL

### Créer la base de données

```sql
CREATE DATABASE angeline_nj CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### Configurer les variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```env
# Base de données MySQL
DATABASE_URL="mysql://root:votre_mot_de_passe@localhost:3306/angeline_nj"

# Resend API Key (pour les emails)
RESEND_API_KEY="re_xxxxxxxxxxxxx"

# Email de l'admin
ADMIN_EMAIL="contact@angeline-nj.fr"
```

### Générer le client Prisma et créer les tables

```bash
# Générer le client Prisma
npx prisma generate

# Créer les tables dans la base de données
npx prisma db push

# (Optionnel) Ouvrir Prisma Studio pour voir les données
npx prisma studio
```

---

## 2️⃣ Configuration de Resend (Emails)

### Étapes :

1. Créer un compte sur [resend.com](https://resend.com)
2. Vérifier votre domaine `angeline-nj.fr` :
   - Ajouter les enregistrements DNS fournis par Resend
   - Attendre la vérification (peut prendre quelques heures)
3. Générer une API Key dans le dashboard Resend
4. Copier la clé dans `.env.local` → `RESEND_API_KEY`

### Configuration DNS (exemple)

Ajouter ces enregistrements DNS chez votre hébergeur :

```
Type: TXT
Name: _resend
Value: [fourni par Resend]

Type: MX
Name: @
Value: feedback-smtp.resend.com
Priority: 10
```

---

## 3️⃣ Créer un Compte Admin

### Option A : Via Prisma Studio

```bash
npx prisma studio
```

1. Ouvrir le modèle `Admin`
2. Cliquer sur "Add record"
3. Remplir :
   - `email`: votre@email.com
   - `password`: [hash bcrypt - voir ci-dessous]
   - `name`: Votre Nom

### Option B : Via Script

Créer un fichier `scripts/create-admin.ts` :

```typescript
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const password = 'votre_mot_de_passe_securise';
  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await prisma.admin.create({
    data: {
      email: 'admin@angeline-nj.fr',
      password: hashedPassword,
      name: 'Angeline',
    },
  });

  console.log('Admin créé:', admin);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
```

Exécuter :

```bash
npm install bcryptjs
npx ts-node scripts/create-admin.ts
```

---

## 4️⃣ Tester le Système

### Test de réservation

1. Démarrer le serveur : `npm run dev`
2. Aller sur : `http://localhost:3000/prendre-rdv`
3. Remplir le formulaire complet
4. Vérifier :
   - ✅ Réservation enregistrée dans MySQL
   - ✅ Email de confirmation reçu
   - ✅ Email de notification reçu par l'admin

### Vérifier dans Prisma Studio

```bash
npx prisma studio
```

Ouvrir le modèle `Booking` pour voir les réservations.

---

## 5️⃣ Commandes Utiles

### Prisma

```bash
# Générer le client après modification du schema
npx prisma generate

# Appliquer les changements à la BDD
npx prisma db push

# Créer une migration (production)
npx prisma migrate dev --name init

# Ouvrir Prisma Studio
npx prisma studio

# Reset la base de données (ATTENTION: supprime toutes les données)
npx prisma migrate reset
```

### Développement

```bash
# Démarrer le serveur de développement
npm run dev

# Build pour production
npm run build

# Démarrer en production
npm start
```

---

## 6️⃣ Accéder au Dashboard Admin

**URL** : `http://localhost:3000/admin`

**Identifiants** : Ceux créés à l'étape 3

**Fonctionnalités** :
- ✅ Liste de toutes les réservations
- ✅ Filtrer par statut (pending, confirmed, cancelled, completed)
- ✅ Voir les détails de chaque réservation
- ✅ Changer le statut d'une réservation
- ✅ Statistiques (nombre de réservations, revenus, etc.)

---

## 🔒 Sécurité

### Variables d'environnement

**IMPORTANT** : Ne jamais committer le fichier `.env.local` !

Vérifier que `.env.local` est dans `.gitignore` :

```
# .gitignore
.env.local
.env*.local
```

### Mot de passe admin

Toujours utiliser un mot de passe fort :
- Minimum 12 caractères
- Majuscules + minuscules + chiffres + symboles
- Unique (ne pas réutiliser)

---

## 📊 Structure de la Base de Données

### Table `Booking`

| Champ | Type | Description |
|-------|------|-------------|
| id | String | ID unique (cuid) |
| prestationTitle | String | Nom de la prestation |
| prestationPrice | Int | Prix en euros |
| prestationDuration | String | Durée (ex: "30 min") |
| prestationSlug | String | Slug de la prestation |
| date | String | Date du RDV (YYYY-MM-DD) |
| time | String | Heure du RDV (HH:MM) |
| clientNom | String | Nom du client |
| clientPrenom | String | Prénom du client |
| clientEmail | String | Email du client |
| clientTelephone | String | Téléphone du client |
| clientMessage | String? | Message optionnel |
| status | String | pending/confirmed/cancelled/completed |
| createdAt | DateTime | Date de création |
| updatedAt | DateTime | Date de modification |

### Table `Admin`

| Champ | Type | Description |
|-------|------|-------------|
| id | String | ID unique (cuid) |
| email | String | Email (unique) |
| password | String | Mot de passe hashé (bcrypt) |
| name | String | Nom de l'admin |
| createdAt | DateTime | Date de création |
| updatedAt | DateTime | Date de modification |

---

## 🐛 Dépannage

### Erreur : "Can't reach database server"

**Solution** : Vérifier que MySQL est démarré et que `DATABASE_URL` est correct.

```bash
# Windows
net start MySQL80

# macOS/Linux
sudo systemctl start mysql
```

### Erreur : "Invalid `prisma.booking.create()`"

**Solution** : Régénérer le client Prisma

```bash
npx prisma generate
```

### Emails ne partent pas

**Solutions** :
1. Vérifier que `RESEND_API_KEY` est correct
2. Vérifier que le domaine est vérifié sur Resend
3. Vérifier les logs dans la console du serveur

### Dashboard admin ne fonctionne pas

**Solution** : Vérifier qu'un admin existe dans la BDD

```bash
npx prisma studio
# Vérifier le modèle Admin
```

---

## 📝 Prochaines Étapes

1. ✅ Configurer MySQL
2. ✅ Configurer Resend
3. ✅ Créer un admin
4. ✅ Tester une réservation
5. 🔄 Personnaliser les templates d'emails
6. 🔄 Ajouter l'intégration Stripe (paiements)
7. 🔄 Déployer en production

---

## 🚀 Déploiement Production

### Recommandations

**Base de données** :
- PlanetScale (MySQL serverless)
- Railway
- DigitalOcean Managed MySQL

**Hébergement** :
- Vercel (recommandé pour Next.js)
- Netlify
- Railway

**Configuration production** :

```env
# .env.production
DATABASE_URL="mysql://user:pass@production-host:3306/angeline_nj"
RESEND_API_KEY="re_prod_xxxxx"
NEXTAUTH_URL="https://angeline-nj.fr"
ADMIN_EMAIL="contact@angeline-nj.fr"
```

---

**✨ Le système est maintenant prêt à être utilisé !**
