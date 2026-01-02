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
    "slug": "choisir-premier-jeu-tarot-oracle",
    "title": "Comment choisir son premier jeu de tarot ou d'oracle ?",
    "date": "2026-01-02",
    "tags": [
      "Cartomancie",
      "Tarot",
      "Débutant"
    ],
    "cover": "🃏",
    "category": "Cartomancie",
    "metaDescription": "Vous débutez en cartomancie ? Découvrez nos conseils d'experte pour bien choisir votre premier jeu de tarot ou oracle selon votre intuition et vos besoins.",
    "h1": "Comment choisir son premier jeu de tarot ou d'oracle ?",
    "sections": []
  },
  {
    "slug": "5-signes-besoin-seance-reiki",
    "title": "Les 5 signes incontestables que vous avez besoin d'un soin Reiki",
    "date": "2026-01-05",
    "tags": [
      "Reiki",
      "Énergie",
      "Bien-être"
    ],
    "cover": "✨",
    "category": "Reiki",
    "metaDescription": "Fatigue chronique, blocages émotionnels, stress ? Découvrez les 5 signes qui indiquent qu'un soin Reiki est nécessaire pour rééquilibrer votre énergie.",
    "h1": "Les 5 signes incontestables que vous avez besoin d'un soin Reiki",
    "sections": []
  },
  {
    "slug": "comprendre-utiliser-pendule-debutant",
    "title": "Comprendre et utiliser le pendule divinatoire pour débutants",
    "date": "2026-01-08",
    "tags": [
      "Pendule",
      "Radiesthésie",
      "Débutant"
    ],
    "cover": "🔮",
    "category": "Spiritualité",
    "metaDescription": "Apprenez à utiliser un pendule divinatoire. Guide complet pour choisir, purifier et poser les bonnes questions à votre pendule avec succès.",
    "h1": "Comprendre et utiliser le pendule divinatoire pour débutants",
    "sections": []
  },
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
    "slug": "7-chakras-comprendre-equilibrer",
    "title": "Les 7 Chakras : Comprendre et équilibrer vos centres d'énergie",
    "date": "2026-01-15",
    "tags": [
      "Chakras",
      "Énergie",
      "Bien-être"
    ],
    "cover": "🌈",
    "category": "Reiki",
    "metaDescription": "Tout savoir sur les 7 chakras principaux. Apprenez à identifier les blocages et à harmoniser vos centres énergétiques pour un bien-être global.",
    "h1": "Les 7 Chakras : Comprendre et équilibrer vos centres d'énergie",
    "sections": []
  },
  {
    "slug": "voyance-bienveillante-lumiere-doute",
    "title": "La voyance bienveillante : Une lumière dans les moments de doute",
    "date": "2026-01-18",
    "tags": [
      "Voyance",
      "Guidance",
      "Éthique"
    ],
    "cover": "👁️",
    "category": "Voyance",
    "metaDescription": "La voyance peut être un outil de transformation. Découvrez comment une consultation éthique et bienveillante peut vous aider à surmonter vos doutes.",
    "h1": "La voyance bienveillante : Une lumière dans les moments de doute",
    "sections": []
  },
  {
    "slug": "vertus-amethyste-serenite-intuition",
    "title": "Les vertus de l'Améthyste : La pierre de la sérénité et de l'intuition",
    "date": "2026-01-21",
    "tags": [
      "Lithothérapie",
      "Améthyste",
      "Pierres"
    ],
    "cover": "💜",
    "category": "Spiritualité",
    "metaDescription": "Découvrez tout sur l'Améthyste. Ses vertus apaisantes, son rôle dans l'éveil spirituel et comment l'utiliser pour votre bien-être.",
    "h1": "Les vertus de l'Améthyste : La pierre de la sérénité et de l'intuition",
    "sections": []
  },
  {
    "slug": "importance-ancrage-rester-serein",
    "title": "L'importance de l'ancrage : Rester serein dans un monde agité",
    "date": "2026-01-24",
    "tags": [
      "Ancrage",
      "Sérénité",
      "Pratique"
    ],
    "cover": "🌳",
    "category": "Spiritualité",
    "metaDescription": "Vous vous sentez anxieux(se) ? Découvrez l'importance de l'ancrage et des exercices simples pour revenir dans l'instant présent.",
    "h1": "L'importance de l'ancrage : Rester serein dans un monde agité",
    "sections": []
  },
  {
    "slug": "protection-energetique-empathes-hypersensibles",
    "title": "Protection Énergétique : Comment ne plus éponger les émotions des autres",
    "date": "2026-01-27",
    "tags": [
      "Protection",
      "Énergie",
      "Hypersensibilité"
    ],
    "cover": "🛡️",
    "category": "Spiritualité",
    "metaDescription": "Vous êtes une éponge émotionnelle ? Apprenez à protéger votre énergie et à nettoyer votre aura grâce à nos conseils d'experte.",
    "h1": "Protection Énergétique : Comment ne plus éponger les émotions des autres",
    "sections": []
  },
  {
    "slug": "loi-attraction-manifester-desirs",
    "title": "La Loi de l'Attraction : Comment manifester vos désirs profonds",
    "date": "2026-01-30",
    "tags": [
      "Manifestation",
      "Abondance",
      "Vibration"
    ],
    "cover": "🧲",
    "category": "Spiritualité",
    "metaDescription": "Comprenez enfin comment fonctionne la loi de l'attraction. Apprenez à aligner vos vibrations pour attirer l'abondance dans votre vie.",
    "h1": "La Loi de l'Attraction : Comment manifester vos désirs profonds",
    "sections": []
  },
  {
    "slug": "reiki-enfants-soutien-doux",
    "title": "Le Reiki Usui pour les enfants : Un soutien doux dès le plus jeune âge",
    "date": "2026-02-02",
    "tags": [
      "Reiki",
      "Enfants",
      "Bien-être"
    ],
    "cover": "👶",
    "category": "Reiki",
    "metaDescription": "Le Reiki est idéal pour les enfants. Découvrez comment il aide à gérer l'anxiété et les troubles du sommeil chez les plus jeunes.",
    "h1": "Le Reiki Usui pour les enfants : Un soutien doux dès le plus jeune âge",
    "sections": []
  },
  {
    "slug": "tarot-marseille-chemin-initiatique",
    "title": "Le Tarot de Marseille : Un chemin initiatique vers soi-même",
    "date": "2026-02-08",
    "tags": [
      "Tarot",
      "Symbolisme",
      "Marseille"
    ],
    "cover": "🃏",
    "category": "Cartomancie",
    "metaDescription": "Découvrez la puissance symbolique des 22 arcanes majeurs et comment ils racontent l'évolution de votre âme.",
    "h1": "Le Tarot de Marseille : Un chemin initiatique vers soi-même",
    "sections": []
  },
  {
    "slug": "rituel-pleine-lune-liberer-briller",
    "title": "Rituel de Pleine Lune : Libérer le passé pour briller",
    "date": "2026-02-12",
    "tags": [
      "Lune",
      "Rituel",
      "Purification"
    ],
    "cover": "🌕",
    "category": "Spiritualité",
    "metaDescription": "La Pleine Lune est le moment idéal pour le lâcher-prise. Découvrez nos rituels simples pour nettoyer votre énergie.",
    "h1": "Rituel de Pleine Lune : Libérer le passé pour briller",
    "sections": []
  },
  {
    "slug": "developper-intuition-exercices-simples",
    "title": "Développer son Intuition : 3 Exercices Simples pour Écouter sa Petite Voix",
    "date": "2026-02-15",
    "tags": [
      "Intuition",
      "Pratique",
      "Développement"
    ],
    "cover": "✨",
    "category": "Spiritualité",
    "metaDescription": "L'intuition se muscle ! Apprenez à écouter votre sixième sens grâce à des exercices quotidiens efficaces.",
    "h1": "Développer son Intuition : 3 Exercices Simples pour Écouter sa Petite Voix",
    "sections": []
  },
  {
    "slug": "reiki-gestion-stress-professionnel",
    "title": "Le Reiki et la gestion du stress professionnel : Burn-out et Prévention",
    "date": "2026-02-18",
    "tags": [
      "Reiki",
      "Travail",
      "Stress"
    ],
    "cover": "💼",
    "category": "Reiki",
    "metaDescription": "Le stress au travail vous épuise ? Découvrez comment le Reiki aide à prévenir le burn-out et à retrouver du calme.",
    "h1": "Le Reiki et la gestion du stress professionnel : Burn-out et Prévention",
    "sections": []
  },
  {
    "slug": "symbolique-couleurs-spiritualite",
    "title": "La symbolique des couleurs en spiritualité : Portez votre vibration",
    "date": "2026-02-21",
    "tags": [
      "Couleurs",
      "Énergie",
      "Vibration"
    ],
    "cover": "🎨",
    "category": "Spiritualité",
    "metaDescription": "Les couleurs influencent notre énergie. Apprenez à les utiliser pour harmoniser vos chakras et votre vie.",
    "h1": "La symbolique des couleurs en spiritualité : Portez votre vibration",
    "sections": []
  },
  {
    "slug": "tirage-croix-tarot-guide-interpretation",
    "title": "Tirage en Croix au Tarot : Le guide complet de l'interprétation",
    "date": "2026-02-24",
    "tags": [
      "Tarot",
      "Tirage",
      "Pratique"
    ],
    "cover": "⚔️",
    "category": "Cartomancie",
    "metaDescription": "Apprenez à maîtriser le tirage en croix. Guide pas à pas pour obtenir des réponses précises à toutes vos questions.",
    "h1": "Tirage en Croix au Tarot : Le guide complet de l'interprétation",
    "sections": []
  },
  {
    "slug": "role-guides-spirituels-communication",
    "title": "Le rôle des Guides Spirituels : Comment communiquer avec eux",
    "date": "2026-02-27",
    "tags": [
      "Guides",
      "Signes",
      "Connexion"
    ],
    "cover": "👼",
    "category": "Spiritualité",
    "metaDescription": "Nous avons tous des guides. Découvrez comment reconnaître leurs signes et entrer en contact avec eux.",
    "h1": "Le rôle des Guides Spirituels : Comment communiquer avec eux",
    "sections": []
  },
  {
    "slug": "liberer-relations-toxiques-nettoyage-energetique",
    "title": "Se libérer des relations toxiques grâce au nettoyage énergétique",
    "date": "2026-03-02",
    "tags": [
      "Relations",
      "Nettoyage",
      "Libération"
    ],
    "cover": "✂️",
    "category": "Reiki",
    "metaDescription": "Comment rompre les liens énergétiques toxiques ? Découvrez comment le Reiki vous aide à reprendre votre pouvoir.",
    "h1": "Se libérer des relations toxiques grâce au nettoyage énergétique",
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
    "slug": "preparer-premiere-seance-reiki-distance",
    "title": "Préparer sa première séance de Reiki à distance : Guide de sérénité",
    "date": "2026-03-12",
    "tags": [
      "Reiki",
      "Préparation",
      "Sérénité"
    ],
    "cover": "🧘",
    "category": "Reiki",
    "metaDescription": "Vous avez réservé votre premier soin ? Découvrez comment vous préparer pour recevoir l'énergie au mieux.",
    "h1": "Préparer sa première séance de Reiki à distance : Guide de sérénité",
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
    "slug": "protection-habitat-sanctuaire-energetique",
    "title": "La protection de l'habitat : Créer un sanctuaire énergétique",
    "date": "2026-03-18",
    "tags": [
      "Habitat",
      "Protection",
      "Maison"
    ],
    "cover": "🏠",
    "category": "Spiritualité",
    "metaDescription": "Votre maison est votre temple. Apprenez à créer un bouclier énergétique chez vous pour vous protéger des influences négatives.",
    "h1": "La protection de l'habitat : Créer un sanctuaire énergétique",
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
    "slug": "reconnecter-feminin-sacre-puissance",
    "title": "Se reconnecter à son Féminin Sacré : Un chemin vers sa puissance",
    "date": "2026-03-27",
    "tags": [
      "Féminin",
      "Puissance",
      "Intuition"
    ],
    "cover": "🌹",
    "category": "Spiritualité",
    "metaDescription": "Redécouvrez votre puissance intérieure. Une invitation à renouer avec son intuition et sa créativité.",
    "h1": "Se reconnecter à son Féminin Sacré : Un chemin vers sa puissance",
    "sections": []
  },
  {
    "slug": "vivre-pleine-conscience-spiritualite-quotidien",
    "title": "Vivre en Pleine Conscience : La spiritualité au cœur du quotidien",
    "date": "2026-04-02",
    "tags": [
      "Pleine conscience",
      "Présence",
      "Joie"
    ],
    "cover": "🧘‍♂️",
    "category": "Spiritualité",
    "metaDescription": "La spiritualité ne s'arrête pas à la méditation. Apprenez à intégrer la présence dans chaque geste.",
    "h1": "Vivre en Pleine Conscience : La spiritualité au cœur du quotidien",
    "sections": []
  }
];
