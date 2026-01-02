# ⚡ Configuration Rapide - Angeline NJ

## 📋 Checklist de Configuration

Suivez ces étapes dans l'ordre pour finaliser l'installation :

---

## ✅ Étape 1 : Configurer `.env.local`

Ouvrez le fichier `.env.local` et remplacez les valeurs :

### 1.1 - DATABASE_URL (MySQL)

```env
DATABASE_URL="mysql://root:VOTRE_MOT_DE_PASSE@localhost:3306/angeline_nj"
```

**Remplacez :**
- `root` → Votre utilisateur MySQL (généralement `root`)
- `VOTRE_MOT_DE_PASSE` → Votre mot de passe MySQL
- `localhost` → Votre serveur MySQL (généralement `localhost`)
- `3306` → Port MySQL (généralement `3306`)

### 1.2 - RESEND_API_KEY (Emails)

```env
RESEND_API_KEY="re_VOTRE_CLE_ICI"
```

**Pour obtenir votre clé :**
1. Créer un compte sur [resend.com](https://resend.com)
2. Vérifier votre domaine (ou utiliser le domaine de test)
3. Générer une API Key dans le dashboard
4. Copier la clé (commence par `re_`)

### 1.3 - NEXTAUTH_SECRET (Sécurité)

```env
NEXTAUTH_SECRET="votre-cle-secrete-unique"
```

**Générer une clé sécurisée :**

**Windows (PowerShell) :**
```powershell
-join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | % {[char]$_})
```

**macOS/Linux :**
```bash
openssl rand -base64 32
```

### 1.4 - ADMIN_EMAIL

```env
ADMIN_EMAIL="contact@angeline-nj.fr"
```

Remplacez par votre vraie adresse email.

---

## ✅ Étape 2 : Créer la Base de Données MySQL

### Option A : Via MySQL Workbench

1. Ouvrir MySQL Workbench
2. Se connecter à votre serveur MySQL
3. Ouvrir le fichier `scripts/create-database.sql`
4. Cliquer sur l'éclair ⚡ pour exécuter

### Option B : Via Ligne de Commande

```bash
# Se connecter à MySQL
mysql -u root -p

# Créer la base de données
CREATE DATABASE angeline_nj CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Vérifier
SHOW DATABASES LIKE 'angeline_nj';

# Quitter
exit;
```

---

## ✅ Étape 3 : Créer les Tables avec Prisma

Une fois `.env.local` configuré et la BDD créée :

```bash
npx prisma db push
```

**Résultat attendu :**
```
✔ Generated Prisma Client
✔ Your database is now in sync with your schema
```

**Vérifier les tables créées :**
```bash
npx prisma studio
```

Cela ouvrira une interface web pour voir vos tables `Booking` et `Admin`.

---

## ✅ Étape 4 : Créer un Compte Admin

### 4.1 - Modifier le script

Ouvrez `scripts/create-admin.ts` et changez :

```typescript
const adminData = {
  email: 'admin@angeline-nj.fr',        // ← Votre email
  password: 'ChangeMotDePasse123!',      // ← Votre mot de passe
  name: 'Angeline',                      // ← Votre nom
};
```

### 4.2 - Exécuter le script

```bash
npx ts-node scripts/create-admin.ts
```

**Résultat attendu :**
```
✅ Compte administrateur créé avec succès!

📧 Email: admin@angeline-nj.fr
👤 Nom: Angeline
🆔 ID: clxxxxxxxxxxxxx

🔐 Vous pouvez maintenant vous connecter sur:
   http://localhost:3000/admin/login
```

---

## ✅ Étape 5 : Tester le Système

### 5.1 - Démarrer le serveur

```bash
npm run dev
```

### 5.2 - Tester une réservation

1. Aller sur : `http://localhost:3000/prendre-rdv`
2. Remplir le formulaire complet (4 étapes)
3. Confirmer la réservation
4. Vérifier :
   - ✅ Message de succès affiché
   - ✅ Email de confirmation reçu
   - ✅ Réservation dans Prisma Studio

### 5.3 - Tester le dashboard admin

1. Aller sur : `http://localhost:3000/admin/login`
2. Se connecter avec vos identifiants
3. Vérifier l'accès au dashboard

---

## 🔍 Vérifications

### Vérifier la base de données

```bash
npx prisma studio
```

Vous devriez voir :
- Table `Booking` (vide au début)
- Table `Admin` (avec votre compte)

### Vérifier les emails

Si les emails ne partent pas :
1. Vérifier `RESEND_API_KEY` dans `.env.local`
2. Vérifier que le domaine est vérifié sur Resend
3. Regarder les logs dans la console du serveur

### Vérifier l'authentification

Si vous ne pouvez pas vous connecter :
1. Vérifier que le compte admin existe dans Prisma Studio
2. Vérifier `NEXTAUTH_SECRET` dans `.env.local`
3. Vider le cache du navigateur

---

## 🐛 Dépannage

### Erreur : "Can't reach database server"

**Solution :**
- Vérifier que MySQL est démarré
- Vérifier `DATABASE_URL` dans `.env.local`
- Tester la connexion : `mysql -u root -p`

### Erreur : "Invalid `prisma.booking.create()`"

**Solution :**
```bash
npx prisma generate
```

### Erreur : "Resend API error"

**Solution :**
- Vérifier la clé API sur resend.com
- Vérifier que le domaine est vérifié
- Utiliser le domaine de test pour les tests

---

## 📝 Résumé des Commandes

```bash
# 1. Configurer .env.local (manuellement)

# 2. Créer la BDD MySQL
mysql -u root -p < scripts/create-database.sql

# 3. Créer les tables
npx prisma db push

# 4. Créer un admin
npx ts-node scripts/create-admin.ts

# 5. Démarrer le serveur
npm run dev

# 6. Ouvrir Prisma Studio (optionnel)
npx prisma studio
```

---

## ✨ C'est Terminé !

Une fois toutes ces étapes complétées, votre système est **100% opérationnel** :

✅ Réservations en ligne fonctionnelles  
✅ Emails automatiques activés  
✅ Base de données MySQL configurée  
✅ Dashboard admin prêt  

**Prochaines étapes recommandées :**
- Personnaliser les templates d'emails
- Créer le dashboard admin complet
- Ajouter l'intégration Stripe
- Déployer en production

---

**Besoin d'aide ?** Consultez `INSTALLATION_FINALE.md` pour plus de détails.
