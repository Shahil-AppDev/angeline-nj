# 🔐 Configuration Stripe pour Abonnements

## 📋 Étapes de Configuration

### 1. Créer un compte Stripe
- Aller sur: https://dashboard.stripe.com/register
- Créer un compte professionnel
- Compléter les informations de l'entreprise

### 2. Obtenir les clés API

#### Mode Test (pour développement):
1. Aller dans: **Developers > API keys**
2. Copier:
   - **Publishable key** (commence par `pk_test_`)
   - **Secret key** (commence par `sk_test_`)

#### Mode Production (pour le site live):
1. Activer le compte Stripe (vérification identité)
2. Aller dans: **Developers > API keys**
3. Basculer en mode "Production"
4. Copier:
   - **Publishable key** (commence par `pk_live_`)
   - **Secret key** (commence par `sk_live_`)

### 3. Créer les Produits et Prix

#### Produit 1: Horoscope Mensuel
1. Aller dans: **Products > Add product**
2. Nom: `Horoscope Mensuel`
3. Description: `Horoscope quotidien personnalisé par IA + calendrier lunaire`
4. Prix: `9.99 EUR` - Récurrent - Mensuel
5. Copier le **Price ID** (commence par `price_`)

#### Produit 2: Guidance Premium
1. Nom: `Guidance Premium`
2. Description: `Tout du plan Horoscope + 1 tirage/mois + accès prioritaire`
3. Prix: `29.99 EUR` - Récurrent - Mensuel
4. Copier le **Price ID**

#### Produit 3: Cercle Spirituel Annuel
1. Nom: `Cercle Spirituel Annuel`
2. Description: `Tout du plan Premium + 12 tirages/an + 2 consultations`
3. Prix: `299 EUR` - Récurrent - Annuel
4. Copier le **Price ID**

### 4. Configurer les Webhooks (Important!)

1. Aller dans: **Developers > Webhooks**
2. Cliquer sur: **Add endpoint**
3. URL: `https://angeline-nj.xyz/api/webhooks/stripe`
4. Sélectionner les événements:
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Copier le **Signing secret** (commence par `whsec_`)

### 5. Ajouter les Variables d'Environnement

Sur le serveur `/var/www/angeline-nj.xyz/.env.local`:

```bash
# Stripe Configuration
STRIPE_SECRET_KEY=sk_live_VOTRE_CLE_SECRETE
STRIPE_PUBLISHABLE_KEY=pk_live_VOTRE_CLE_PUBLIQUE
STRIPE_WEBHOOK_SECRET=whsec_VOTRE_WEBHOOK_SECRET

# Price IDs
STRIPE_HOROSCOPE_MENSUEL_PRICE_ID=price_XXXXX
STRIPE_GUIDANCE_PREMIUM_PRICE_ID=price_XXXXX
STRIPE_CERCLE_SPIRITUEL_PRICE_ID=price_XXXXX
```

### 6. Redémarrer l'Application

```bash
ssh root@77.42.34.90
cd /var/www/angeline-nj.xyz
pm2 restart angeline-nj
```

### 7. Tester les Abonnements

#### Mode Test:
- Utiliser la carte de test: `4242 4242 4242 4242`
- Date d'expiration: N'importe quelle date future
- CVC: N'importe quel 3 chiffres
- Code postal: N'importe quel code

#### URLs de test:
- Page abonnements: https://angeline-nj.xyz/abonnement
- Dashboard Stripe: https://dashboard.stripe.com/test/subscriptions

---

## 🔒 Sécurité

**IMPORTANT:**
- ❌ Ne JAMAIS commiter les clés Stripe dans Git
- ✅ Toujours utiliser `.env.local` pour les clés
- ✅ Utiliser le mode Test avant la production
- ✅ Configurer les webhooks pour la synchronisation

---

## 📊 Suivi des Abonnements

### Dashboard Stripe:
- Abonnés actifs: **Customers > Subscriptions**
- Revenus: **Home > Revenue**
- Paiements échoués: **Payments > Failed**

### Dans l'application:
- Les utilisateurs peuvent gérer leur abonnement via: `/abonnement/manage`
- Annulation: Conserve l'accès jusqu'à la fin de la période

---

## 🆘 Dépannage

### Erreur: "No such price"
- Vérifier que les Price IDs sont corrects dans `.env.local`
- Vérifier que vous utilisez les bons IDs (test vs production)

### Erreur: "Invalid API Key"
- Vérifier que la clé commence par `sk_live_` ou `sk_test_`
- Vérifier qu'il n'y a pas d'espaces avant/après la clé

### Webhooks ne fonctionnent pas:
- Vérifier que l'URL du webhook est accessible publiquement
- Vérifier le Signing Secret dans `.env.local`
- Consulter les logs: **Developers > Webhooks > [votre endpoint] > Logs**

---

## 📞 Support

- Documentation Stripe: https://stripe.com/docs
- Support Stripe: https://support.stripe.com
- API Reference: https://stripe.com/docs/api
