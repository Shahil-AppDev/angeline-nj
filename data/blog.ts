export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  date: string;
  tags: string[];
  cover: string;
  category: string;
  sections: BlogSection[];
}

export type BlogSection = 
  | { type: 'p'; value: string }
  | { type: 'h2'; value: string }
  | { type: 'h3'; value: string }
  | { type: 'ul'; value: string[] }
  | { type: 'faq'; value: { question: string; answer: string }[] }
  | { type: 'cta'; value: string }
  | { type: 'links'; value: string[] };

export const blogPosts: BlogPost[] = [
  {
    "slug": "nettoyage-energetique-sauge-palo-santo",
    "title": "Nettoyage énergétique : Purifier sa maison avec la sauge et le palo santo",
    "date": "2026-01-12",
    "tags": [
      "Purification",
      "Sauge",
      "Maison"
    ],
    "cover": "🌿",
    "category": "Spiritualité",
    "metaDescription": "Énergies stagnantes ? Apprenez à nettoyer votre intérieur grâce à la fumigation de sauge blanche et de palo santo. Guide de purification spirituelle.",
    "h1": "Nettoyage énergétique : Purifier sa maison avec la sauge et le palo santo",
    "sections": []
  },
  {
    "slug": "pouvoir-sacre-bougies-intentions",
    "title": "Le pouvoir sacré des bougies : Allumer la lumière de vos intentions",
    "date": "2026-03-05",
    "tags": [
      "Bougies",
      "Rituels",
      "Intentions"
    ],
    "cover": "🕯️",
    "category": "Spiritualité",
    "metaDescription": "Apprenez à utiliser les bougies pour vos rituels. Guide complet sur la symbolique des couleurs et comment charger une bougie.",
    "h1": "Le pouvoir sacré des bougies : Allumer la lumière de vos intentions",
    "sections": []
  },
  {
    "slug": "lithotherapie-sommeil-nuits-paisibles",
    "title": "Lithothérapie et Sommeil : Les pierres pour des nuits paisibles",
    "date": "2026-03-15",
    "tags": [
      "Sommeil",
      "Pierres",
      "Détente"
    ],
    "cover": "🌙",
    "category": "Spiritualité",
    "metaDescription": "Insomnies ou mental agité ? Découvrez les meilleures pierres de lithothérapie pour retrouver un sommeil réparateur.",
    "h1": "Lithothérapie et Sommeil : Les pierres pour des nuits paisibles",
    "sections": []
  },
  {
    "slug": "bienfaits-quartz-rose-amour-universel",
    "title": "Les bienfaits du Quartz Rose : La pierre de l'Amour Universel",
    "date": "2026-03-21",
    "tags": [
      "Amour",
      "Quartz Rose",
      "Guérison"
    ],
    "cover": "💖",
    "category": "Spiritualité",
    "metaDescription": "Le Quartz Rose est la pierre du cœur. Découvrez comment il aide à guérir les blessures affectives et à s'aimer soi-même.",
    "h1": "Les bienfaits du Quartz Rose : La pierre de l'Amour Universel",
    "sections": []
  },
  {
    "slug": "pourquoi-soins-energetiques-reiki",
    "title": "Pourquoi faire des soins énergétiques ? Les bienfaits du Reiki",
    "date": "2026-01-10",
    "tags": [
      "Reiki",
      "Soins énergétiques",
      "Bien-être"
    ],
    "cover": "",
    "category": "Reiki",
    "metaDescription": "Découvrez pourquoi les soins énergétiques comme le Reiki sont essentiels pour votre bien-être. Rééquilibrage énergétique, gestion du stress et harmonisation corps-esprit.",
    "h1": "Pourquoi faire des soins énergétiques ? Les bienfaits du Reiki",
    "sections": []
  }
];
