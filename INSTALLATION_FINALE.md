# 🎉 Installation Finale - Angeline NJ

## ✅ Ce qui a été installé et configuré

### 📦 Packages installés
```bash
✅ resend                    # Service d'emails
✅ @prisma/client           # ORM pour MySQL
✅ prisma (dev)             # CLI Prisma
✅ bcryptjs                 # Hash des mots de passe
✅ @types/bcryptjs (dev)    # Types TypeScript
✅ next-auth                # Authentification
✅ jsonwebtoken             # Tokens JWT
✅ @types/jsonwebtoken (dev) # Types TypeScript
```

### 📁 Fichiers créés

**Configuration Base de Données**
- `prisma/schema.prisma` - Schéma MySQL avec modèles Booking et Admin
- `lib/prisma.ts` - Client Prisma singleton
- `.env.example` - Template des variables d'environnement

**Emails**
- `lib/email.ts` - Système d'emails avec Resend (activé)

**API**
- `app/api/bookings/route.ts` - API réservations (Prisma + Emails activés)
- `app/api/admin/login/route.ts` - API connexion admin

**Dashboard Admin**
- `app/admin/login/page.tsx` - Page de connexion admin

**Documentation**
- `SETUP_GUIDE.md` - Guide complet de configuration
- `BOOKING_SYSTEM_DOCUMENTATION.md` - Documentation système de réservation
- `INSTALLATION_FINALE.md` - Ce fichier

---

## 🚀 Étapes pour Finaliser l'Installation

### 1️⃣ Créer le fichier `.env.local`

Créez un fichier `.env.local` à la racine du projet :

```env
# Base de données MySQL
DATABASE_URL="mysql://root:votre_mot_de_passe@localhost:3306/angeline_nj"

# Resend API Key
RESEND_API_KEY="re_xxxxxxxxxxxxx"

# NextAuth Secret (générer avec: openssl rand -base64 32)
NEXTAUTH_SECRET="votre-secret-key-ici"
NEXTAUTH_URL="http://localhost:3000"

# Email de l'admin
ADMIN_EMAIL="contact@angeline-nj.fr"
```

### 2️⃣ Créer la base de données MySQL

```sql
CREATE DATABASE angeline_nj CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 3️⃣ Générer le client Prisma et créer les tables

```bash
# Générer le client Prisma
npx prisma generate

# Créer les tables dans MySQL
npx prisma db push

# (Optionnel) Ouvrir Prisma Studio
npx prisma studio
```

### 4️⃣ Créer un compte admin

**Option A : Via script**

Créez `scripts/create-admin.ts` :

```typescript
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const password = 'VotreMotDePasseSecurise123!';
  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await prisma.admin.create({
    data: {
      email: 'admin@angeline-nj.fr',
      password: hashedPassword,
      name: 'Angeline',
    },
  });

  console.log('✅ Admin créé:', admin.email);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
```

Exécutez :
```bash
npx ts-node scripts/create-admin.ts
```

**Option B : Via Prisma Studio**

```bash
npx prisma studio
```
1. Ouvrir le modèle `Admin`
2. Cliquer "Add record"
3. Utiliser un hash bcrypt pour le password

### 5️⃣ Configurer Resend

1. Créer un compte sur [resend.com](https://resend.com)
2. Vérifier votre domaine `angeline-nj.fr`
3. Générer une API Key
4. Copier la clé dans `.env.local` → `RESEND_API_KEY`

### 6️⃣ Tester le système

```bash
# Démarrer le serveur
npm run dev

# Tester une réservation
http://localhost:3000/prendre-rdv

# Accéder au dashboard admin
http://localhost:3000/admin/login
```

---

## 📊 Structure de la Base de Données

### Table `Booking`
```sql
- id (String, PK)
- prestationTitle (String)
- prestationPrice (Int)
- prestationDuration (String)
- prestationSlug (String)
- date (String)
- time (String)
- clientNom (String)
- clientPrenom (String)
- clientEmail (String)
- clientTelephone (String)
- clientMessage (String, nullable)
- status (String, default: "pending")
- createdAt (DateTime)
- updatedAt (DateTime)
```

### Table `Admin`
```sql
- id (String, PK)
- email (String, unique)
- password (String, hashed)
- name (String)
- createdAt (DateTime)
- updatedAt (DateTime)
```

---

## 🔧 Commandes Utiles

### Prisma
```bash
# Générer le client
npx prisma generate

# Appliquer le schéma
npx prisma db push

# Créer une migration
npx prisma migrate dev --name init

# Ouvrir Prisma Studio
npx prisma studio

# Reset la BDD (⚠️ supprime les données)
npx prisma migrate reset
```

### Développement
```bash
# Dev
npm run dev

# Build
npm run build

# Production
npm start
```

---

## ⚠️ À FAIRE : Créer le Dashboard Admin

Le dashboard admin n'est pas encore créé. Voici ce qu'il faut faire :

### Créer `app/admin/dashboard/page.tsx`

```typescript
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Vérifier l'authentification
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    // Charger les réservations
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('/api/admin/bookings', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      const data = await response.json();
      setBookings(data.bookings);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  // ... reste du composant avec liste des réservations
}
```

### Créer `app/api/admin/bookings/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import jwt from 'jsonwebtoken';

export async function GET(request: NextRequest) {
  try {
    // Vérifier le token
    const token = request.headers.get('authorization')?.split(' ')[1];
    if (!token) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    jwt.verify(token, process.env.NEXTAUTH_SECRET || 'secret');

    // Récupérer toutes les réservations
    const bookings = await prisma.booking.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json({ bookings });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
```

---

## 📝 Checklist Finale

- [ ] `.env.local` créé avec toutes les variables
- [ ] Base de données MySQL créée
- [ ] `npx prisma generate` exécuté
- [ ] `npx prisma db push` exécuté
- [ ] Compte admin créé
- [ ] Resend configuré (domaine vérifié + API key)
- [ ] Test de réservation effectué
- [ ] Emails de confirmation reçus
- [ ] Dashboard admin créé (à faire)
- [ ] Test de connexion admin effectué

---

## 🎯 Résumé

**✅ Fonctionnel**
- Système de réservation multi-étapes
- Calendrier interactif
- Sauvegarde en base de données MySQL
- Envoi d'emails automatiques (Resend)
- API de connexion admin
- Page de login admin

**🔄 À finaliser**
- Dashboard admin (liste des réservations)
- Gestion des statuts de réservation
- Statistiques admin

**📚 Documentation**
- `SETUP_GUIDE.md` - Guide détaillé
- `BOOKING_SYSTEM_DOCUMENTATION.md` - Documentation complète
- `INSTALLATION_FINALE.md` - Ce fichier

---

## 🚀 Prochaines Étapes Recommandées

1. Créer le dashboard admin complet
2. Ajouter l'intégration Stripe pour les paiements
3. Créer un système de notifications push
4. Ajouter un calendrier de disponibilités
5. Créer des statistiques avancées
6. Déployer en production

---

**✨ Le système est prêt à être utilisé !**

Une fois les étapes 1-6 complétées, vous pourrez :
- Recevoir des réservations en ligne
- Recevoir des emails automatiques
- Gérer les réservations via le dashboard admin
