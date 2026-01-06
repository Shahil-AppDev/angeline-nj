# Flux de commande des prestations - Documentation complète

## ✅ Modifications effectuées

### 1. Mise à jour des URLs dans `lib/prestations.ts`

Toutes les URLs `oldSiteUrl` ont été mises à jour pour pointer vers le nouveau site **angeline-nj.com** au lieu de l'ancien site angeline-nj.xyz.

| Prestation | Ancienne URL | Nouvelle URL |
|-----------|-------------|--------------|
| Reiki à distance | angeline-nj.xyz/produit/reiki-a-distance | **angeline-nj.com/produit/reiki-a-distance/** |
| Tirage visio | angeline-nj.xyz/contact | **angeline-nj.com/contact** |
| Formations | angeline-nj.xyz/formations | **angeline-nj.com/formations** |
| Tirage vidéo | angeline-nj.xyz/boutique/mes-prestations | **angeline-nj.com/boutique/mes-prestations** |
| Rituel PDF | angeline-nj.xyz/boutique/rituels | **angeline-nj.com/boutique/rituels** |
| Rituel Vidéo | angeline-nj.xyz/boutique/rituels | **angeline-nj.com/boutique/rituels** |

### 2. Fichiers modifiés

- ✅ `lib/prestations.ts` - URLs mises à jour (lignes 36, 109, 175, 237, 299, 361)

## 📋 Flux de navigation complet

### Depuis la page Prestations (`/prestations`)

1. **Utilisateur clique sur "Découvrir"** sur une carte de prestation
   - Redirige vers `/prestations/[slug]` (ex: `/prestations/reiki-a-distance`)

### Depuis la page détail Prestation (`/prestations/[slug]`)

2. **Utilisateur clique sur "Commander"**
   - Ouvre `prestation.oldSiteUrl` dans un nouvel onglet
   - Destinations selon la prestation:

#### Reiki à distance
- **URL**: https://angeline-nj.com/produit/reiki-a-distance/
- **Type**: Page produit WooCommerce directe
- **Prix**: 40€
- **Action**: Achat direct sur WooCommerce

#### Tirage visio
- **URL**: https://angeline-nj.com/contact
- **Type**: Page de contact
- **Prix**: 50€/70€/90€ selon durée
- **Action**: Contact pour réservation

#### Formations
- **URL**: https://angeline-nj.com/formations
- **Type**: Page de listing des formations
- **Action**: Choix de la formation puis achat

#### Tirage vidéo
- **URL**: https://angeline-nj.com/boutique/mes-prestations
- **Type**: Page catégorie boutique
- **Produits disponibles**:
  - Tirage en urgence (80€)
  - Tirage positif (30€)
  - Tirage sentimental (30€)
  - Question simple (10€)
  - Question précise sur un domaine (25€)
  - Question sur une semaine (15€)
- **Action**: Choix du tirage puis achat

#### Rituel PDF / Rituel Vidéo
- **URL**: https://angeline-nj.com/boutique/rituels
- **Type**: Page dédiée rituels
- **Produits disponibles**:
  - **PDF (3,90€)**: Amour, Protection, Abondance, Couper le lien, Manifestation
  - **Vidéo (19,90€)**: Amour, Protection, Abondance, Couper le lien, Manifestation
- **Action**: Choix du rituel puis achat

## 🔗 Architecture des pages

```
/prestations
  └─ [slug] (PrestationClientContent.tsx)
      └─ Bouton "Commander" → oldSiteUrl (externe)

/boutique
  ├─ /mes-prestations (catégorie dynamique)
  │   └─ Liste des produits "Mes prestations"
  ├─ /rituels (page dédiée)
  │   ├─ Colonne PDF
  │   └─ Colonne Vidéo
  └─ [categorie] (page dynamique)

/produit
  └─ [slug] (page produit WooCommerce)
      └─ Bouton "Acheter" → source_url (externe)
```

## 🎯 Logique de commande par type

### Type 1: Produit direct (Reiki)
```
Prestations → Détail prestation → Produit WooCommerce → Achat
```

### Type 2: Contact (Tirage visio)
```
Prestations → Détail prestation → Page contact → Prise de RDV
```

### Type 3: Catégorie boutique (Tirage vidéo, Rituels)
```
Prestations → Détail prestation → Catégorie boutique → Produit → Achat
```

### Type 4: Page dédiée (Formations)
```
Prestations → Détail prestation → Page formations → Formation → Achat
```

## 📝 Instructions de commande affichées

Le composant `PrestationClientContent.tsx` affiche une carte explicative "Comment commander" avec des instructions spécifiques selon le type de prestation:

- **Rituel PDF**: Téléchargement immédiat après achat
- **Formations**: Accès immédiat + certificat
- **Tirage visio**: Sélection créneau + lien visio par email
- **Reiki à distance**: Formulaire info + planification + compte-rendu
- **Tirage/Rituel vidéo**: Détailler intention dans notes de commande + vidéo sous 48h

## ✅ État actuel

- ✅ Toutes les URLs pointent vers le nouveau site (angeline-nj.com)
- ✅ Les catégories "mes-prestations" et "rituels" existent
- ✅ Les produits sont correctement mappés dans products.json
- ✅ Les pages de destination existent et fonctionnent
- ✅ Le flux de navigation est cohérent

## 🔄 Prochaines étapes (optionnel)

Si besoin d'améliorer l'expérience:
1. Créer des pages produits locales pour éviter les redirections externes
2. Intégrer un système de panier/checkout local
3. Ajouter un système de réservation intégré pour les tirages visio
4. Créer une API pour synchroniser avec WooCommerce

## 📌 Notes importantes

- Les boutons "Commander" ouvrent les liens dans un **nouvel onglet** (`target="_blank"`)
- Les URLs externes pointent vers le site de production (angeline-nj.com)
- La logique de commande est expliquée clairement sur chaque page prestation
- Les produits "Mes prestations" sont dans la catégorie `mes-prestations` (slug)
- Les rituels ont leur propre page dédiée `/boutique/rituels`
