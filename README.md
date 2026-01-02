# Angeline NJ - Site Web Premium

Site web professionnel de cartomancie et guidance spirituelle, construit avec Next.js 14, React, TypeScript et Tailwind CSS.

## 🌟 Caractéristiques

- **Design spirituel premium** : Interface élégante avec animations subtiles et palette mystique
- **100% responsive** : Optimisé pour tous les appareils (mobile-first)
- **SEO optimisé** : Metadata complète en français, Schema.org, OpenGraph
- **Performance** : Next.js 14 avec App Router pour des performances optimales
- **Accessibilité** : Respect des normes WCAG, contrastes lisibles, support prefers-reduced-motion
- **Blog MDX** : Système de blog intégré avec 3 articles exemples
- **Animations fluides** : Framer Motion pour des micro-interactions élégantes

## 📁 Structure du projet

```
angeline-nj/
├── app/                          # Pages Next.js (App Router)
│   ├── layout.tsx               # Layout principal avec metadata FR
│   ├── page.tsx                 # Page d'accueil
│   ├── globals.css              # Design system CSS complet
│   ├── tirages/                 # Pages tirages
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── guidance/                # Page guidance spirituelle
│   ├── a-propos/                # Page à propos
│   ├── contact/                 # Page contact avec formulaire
│   ├── blog/                    # Blog
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── mentions-legales/
│   └── politique-de-confidentialite/
├── components/                   # Composants réutilisables
│   ├── Navbar.tsx               # Navigation sticky avec menu mobile
│   ├── Footer.tsx               # Footer complet
│   ├── TirageCard.tsx           # Card pour les tirages
│   └── TestimonialCard.tsx      # Card témoignages
├── lib/                         # Utilitaires
│   └── blog.ts                  # Fonctions pour le blog MDX
├── content/                     # Contenu MDX (à créer si besoin)
│   └── blog/
├── public/                      # Assets statiques
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build production
npm run build

# Démarrer en production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

### Palette de couleurs

- **Fond principal** : Ivoire/Lilas très pâle (#faf8fc)
- **Texte principal** : Violet très foncé (#2d1b3d)
- **Accents** : Lilas, violet, pourpre (#a87fc7, #c3a8d9, #d9c9e8)

### Typographies

- **Titres** : Cormorant (serif élégante)
- **Texte** : Inter (sans-serif moderne)

### Classes CSS premium

- `.aurora-background` : Fond avec gradient animé
- `.glass-card` : Carte glassmorphism
- `.soft-glow` : Effet glow subtil
- `.star-field` : Champ d'étoiles animé
- `.grain-overlay` : Texture grain subtile
- `.btn-primary` / `.btn-secondary` : Boutons stylisés

## 📄 Pages disponibles

- `/` - Accueil avec hero, services, témoignages
- `/tirages` - Liste des tirages disponibles
- `/tirages/[slug]` - Pages détaillées (amour, travail, avenir, etc.)
- `/guidance` - Guidance spirituelle et approche
- `/a-propos` - Présentation d'Angeline
- `/contact` - Formulaire de contact
- `/blog` - Liste des articles
- `/blog/[slug]` - Articles détaillés
- `/mentions-legales` - Mentions légales
- `/politique-de-confidentialite` - RGPD

## 🛠️ Technologies

- **Framework** : Next.js 14 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS + CSS custom
- **Animations** : Framer Motion
- **Blog** : MDX avec gray-matter
- **Fonts** : Google Fonts (Cormorant, Inter)

## 🌐 SEO & Accessibilité

- Metadata complète en français
- Schema.org pour Person et Service
- OpenGraph et Twitter Cards
- Sitemap automatique
- Robots.txt
- Contrastes WCAG AA
- Support prefers-reduced-motion
- Navigation au clavier
- ARIA labels

## 📝 Personnalisation

### Modifier les couleurs

Éditez `tailwind.config.ts` et `app/globals.css` (variables CSS)

### Ajouter un tirage

Ajoutez une entrée dans `app/tirages/[slug]/page.tsx` dans l'objet `tiragesData`

### Ajouter un article de blog

Créez un fichier MDX dans `content/blog/` avec le frontmatter :

```mdx
---
title: "Titre de l'article"
description: "Description courte"
date: "2024-01-15"
tags: ["Tag1", "Tag2"]
cover: "🔮"
---

Contenu de l'article...
```

## 🚢 Déploiement

### Vercel (recommandé)

```bash
vercel
```

### Netlify

```bash
npm run build
# Déployer le dossier .next
```

### Autre hébergeur

```bash
npm run build
npm start
```

## 📞 Support

Pour toute question : contact@angeline-nj.fr

## 📄 Licence

© 2024 Angeline NJ. Tous droits réservés.
