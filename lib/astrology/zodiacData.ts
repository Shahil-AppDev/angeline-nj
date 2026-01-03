import { ZodiacSign, ZodiacSignInfo } from './types';

export const zodiacSigns: Record<ZodiacSign, ZodiacSignInfo> = {
  belier: {
    id: 'belier',
    name: 'Bélier',
    symbol: '♈',
    emoji: '🐏',
    element: 'feu',
    modality: 'cardinal',
    planet: 'Mars',
    dateRange: '21 mars - 19 avril',
    startDate: { month: 3, day: 21 },
    endDate: { month: 4, day: 19 },
    traits: ['Courageux', 'Dynamique', 'Confiant', 'Enthousiaste', 'Passionné'],
    strengths: ['Leadership naturel', 'Initiative', 'Détermination', 'Optimisme'],
    weaknesses: ['Impulsivité', 'Impatience', 'Agressivité', 'Égocentrisme'],
    compatibility: {
      best: ['lion', 'sagittaire', 'gemeaux', 'verseau'],
      good: ['belier', 'balance'],
      challenging: ['cancer', 'capricorne']
    },
    description: 'Le Bélier est le premier signe du zodiaque, symbole de nouveaux départs et d\'énergie pure. Gouverné par Mars, ce signe de feu cardinal incarne le courage, l\'initiative et la passion. Les natifs du Bélier sont des pionniers naturels, toujours prêts à relever de nouveaux défis.',
    loveDescription: 'En amour, le Bélier est passionné et direct. Il aime la conquête et n\'a pas peur de faire le premier pas. Romantique mais impatient, il recherche une relation stimulante et dynamique.',
    careerDescription: 'Ambitieux et compétitif, le Bélier excelle dans les rôles de leadership. Il est fait pour l\'entrepreneuriat, les métiers d\'action et les environnements où il peut prendre des initiatives.',
    healthDescription: 'Énergique mais sujet au stress, le Bélier doit apprendre à canaliser son énergie. Attention aux maux de tête et à l\'impulsivité qui peut mener à des accidents.'
  },
  taureau: {
    id: 'taureau',
    name: 'Taureau',
    symbol: '♉',
    emoji: '🐂',
    element: 'terre',
    modality: 'fixe',
    planet: 'Vénus',
    dateRange: '20 avril - 20 mai',
    startDate: { month: 4, day: 20 },
    endDate: { month: 5, day: 20 },
    traits: ['Fiable', 'Patient', 'Pratique', 'Dévoué', 'Stable'],
    strengths: ['Persévérance', 'Loyauté', 'Sens pratique', 'Appréciation du beau'],
    weaknesses: ['Entêtement', 'Possessivité', 'Matérialisme', 'Résistance au changement'],
    compatibility: {
      best: ['vierge', 'capricorne', 'cancer', 'poissons'],
      good: ['taureau', 'scorpion'],
      challenging: ['lion', 'verseau']
    },
    description: 'Le Taureau est un signe de terre fixe gouverné par Vénus. Symbole de stabilité et de sensualité, les natifs du Taureau apprécient les plaisirs de la vie et recherchent la sécurité matérielle et émotionnelle.',
    loveDescription: 'Romantique et sensuel, le Taureau est un partenaire loyal et dévoué. Il construit des relations durables basées sur la confiance et le confort mutuel.',
    careerDescription: 'Le Taureau excelle dans les domaines nécessitant patience et persévérance. Finance, art, gastronomie, immobilier sont des secteurs où il brille.',
    healthDescription: 'Robuste mais gourmand, le Taureau doit surveiller son alimentation. Attention à la gorge et au cou, zones sensibles de ce signe.'
  },
  gemeaux: {
    id: 'gemeaux',
    name: 'Gémeaux',
    symbol: '♊',
    emoji: '👯',
    element: 'air',
    modality: 'mutable',
    planet: 'Mercure',
    dateRange: '21 mai - 20 juin',
    startDate: { month: 5, day: 21 },
    endDate: { month: 6, day: 20 },
    traits: ['Curieux', 'Adaptable', 'Communicatif', 'Intelligent', 'Vif'],
    strengths: ['Polyvalence', 'Communication', 'Esprit vif', 'Sociabilité'],
    weaknesses: ['Superficialité', 'Indécision', 'Nervosité', 'Inconstance'],
    compatibility: {
      best: ['balance', 'verseau', 'belier', 'lion'],
      good: ['gemeaux', 'sagittaire'],
      challenging: ['vierge', 'poissons']
    },
    description: 'Les Gémeaux, signe d\'air mutable gouverné par Mercure, incarnent la dualité et la communication. Curieux et adaptables, ils excellent dans l\'échange d\'idées et la connexion avec les autres.',
    loveDescription: 'En amour, les Gémeaux recherchent la stimulation intellectuelle. Ils ont besoin d\'un partenaire qui peut suivre leur rythme et partager leur curiosité.',
    careerDescription: 'Communication, médias, enseignement, commerce - les Gémeaux brillent dans tout ce qui implique l\'échange d\'informations et la polyvalence.',
    healthDescription: 'Système nerveux sensible, les Gémeaux doivent gérer leur stress. Attention aux poumons et aux bras, zones gouvernées par ce signe.'
  },
  cancer: {
    id: 'cancer',
    name: 'Cancer',
    symbol: '♋',
    emoji: '🦀',
    element: 'eau',
    modality: 'cardinal',
    planet: 'Lune',
    dateRange: '21 juin - 22 juillet',
    startDate: { month: 6, day: 21 },
    endDate: { month: 7, day: 22 },
    traits: ['Émotionnel', 'Intuitif', 'Protecteur', 'Sensible', 'Imaginatif'],
    strengths: ['Empathie', 'Loyauté', 'Intuition', 'Créativité'],
    weaknesses: ['Hypersensibilité', 'Susceptibilité', 'Tendance à ruminer', 'Dépendance'],
    compatibility: {
      best: ['scorpion', 'poissons', 'taureau', 'vierge'],
      good: ['cancer', 'capricorne'],
      challenging: ['belier', 'balance']
    },
    description: 'Le Cancer, signe d\'eau cardinal gouverné par la Lune, est profondément émotionnel et intuitif. Protecteur et nourricier, il crée des liens profonds avec ceux qu\'il aime.',
    loveDescription: 'Romantique et dévoué, le Cancer recherche la sécurité émotionnelle. Il est un partenaire attentionné qui construit un foyer chaleureux.',
    careerDescription: 'Soins, éducation, hôtellerie, psychologie - le Cancer excelle dans les métiers du care et de l\'accompagnement.',
    healthDescription: 'Sensible au stress émotionnel, le Cancer doit prendre soin de son système digestif. L\'estomac est une zone particulièrement sensible.'
  },
  lion: {
    id: 'lion',
    name: 'Lion',
    symbol: '♌',
    emoji: '🦁',
    element: 'feu',
    modality: 'fixe',
    planet: 'Soleil',
    dateRange: '23 juillet - 22 août',
    startDate: { month: 7, day: 23 },
    endDate: { month: 8, day: 22 },
    traits: ['Charismatique', 'Généreux', 'Créatif', 'Confiant', 'Dramatique'],
    strengths: ['Leadership', 'Générosité', 'Créativité', 'Loyauté'],
    weaknesses: ['Orgueil', 'Arrogance', 'Entêtement', 'Besoin d\'attention'],
    compatibility: {
      best: ['belier', 'sagittaire', 'gemeaux', 'balance'],
      good: ['lion', 'verseau'],
      challenging: ['taureau', 'scorpion']
    },
    description: 'Le Lion, signe de feu fixe gouverné par le Soleil, rayonne de confiance et de créativité. Naturellement charismatique, il aime être au centre de l\'attention et inspire les autres.',
    loveDescription: 'Passionné et généreux, le Lion aime avec intensité. Il recherche un partenaire qui admire sa grandeur et partage son goût pour la vie.',
    careerDescription: 'Arts, spectacle, management, entrepreneuriat - le Lion brille dans les rôles où il peut exprimer sa créativité et son leadership.',
    healthDescription: 'Robuste mais sensible au stress, le Lion doit prendre soin de son cœur. L\'exercice régulier est essentiel pour maintenir sa vitalité.'
  },
  vierge: {
    id: 'vierge',
    name: 'Vierge',
    symbol: '♍',
    emoji: '👰',
    element: 'terre',
    modality: 'mutable',
    planet: 'Mercure',
    dateRange: '23 août - 22 septembre',
    startDate: { month: 8, day: 23 },
    endDate: { month: 9, day: 22 },
    traits: ['Analytique', 'Pratique', 'Perfectionniste', 'Serviable', 'Méthodique'],
    strengths: ['Attention aux détails', 'Efficacité', 'Fiabilité', 'Intelligence'],
    weaknesses: ['Critique excessive', 'Anxiété', 'Perfectionnisme', 'Timidité'],
    compatibility: {
      best: ['taureau', 'capricorne', 'cancer', 'scorpion'],
      good: ['vierge', 'poissons'],
      challenging: ['gemeaux', 'sagittaire']
    },
    description: 'La Vierge, signe de terre mutable gouverné par Mercure, incarne la précision et le service. Analytique et pratique, elle cherche constamment à améliorer et à perfectionner.',
    loveDescription: 'Réservée mais dévouée, la Vierge exprime son amour par des actes de service. Elle recherche un partenaire fiable et intelligent.',
    careerDescription: 'Santé, analyse, édition, organisation - la Vierge excelle dans les métiers nécessitant précision et attention aux détails.',
    healthDescription: 'Sensible au stress et à l\'anxiété, la Vierge doit surveiller son système digestif. Une routine saine est essentielle.'
  },
  balance: {
    id: 'balance',
    name: 'Balance',
    symbol: '♎',
    emoji: '⚖️',
    element: 'air',
    modality: 'cardinal',
    planet: 'Vénus',
    dateRange: '23 septembre - 22 octobre',
    startDate: { month: 9, day: 23 },
    endDate: { month: 10, day: 22 },
    traits: ['Diplomatique', 'Harmonieux', 'Sociable', 'Juste', 'Charmant'],
    strengths: ['Équilibre', 'Diplomatie', 'Sens esthétique', 'Coopération'],
    weaknesses: ['Indécision', 'Évitement des conflits', 'Dépendance', 'Superficialité'],
    compatibility: {
      best: ['gemeaux', 'verseau', 'lion', 'sagittaire'],
      good: ['balance', 'belier'],
      challenging: ['cancer', 'capricorne']
    },
    description: 'La Balance, signe d\'air cardinal gouverné par Vénus, recherche l\'harmonie et l\'équilibre. Diplomatique et charmante, elle excelle dans les relations et apprécie la beauté.',
    loveDescription: 'Romantique et idéaliste, la Balance recherche le partenaire parfait. Elle a besoin d\'harmonie et de beauté dans sa relation.',
    careerDescription: 'Droit, arts, relations publiques, médiation - la Balance brille dans les métiers nécessitant diplomatie et sens esthétique.',
    healthDescription: 'Sensible au stress relationnel, la Balance doit prendre soin de ses reins. L\'équilibre émotionnel est crucial pour sa santé.'
  },
  scorpion: {
    id: 'scorpion',
    name: 'Scorpion',
    symbol: '♏',
    emoji: '🦂',
    element: 'eau',
    modality: 'fixe',
    planet: 'Pluton',
    dateRange: '23 octobre - 21 novembre',
    startDate: { month: 10, day: 23 },
    endDate: { month: 11, day: 21 },
    traits: ['Intense', 'Passionné', 'Mystérieux', 'Déterminé', 'Magnétique'],
    strengths: ['Profondeur', 'Intuition', 'Transformation', 'Loyauté'],
    weaknesses: ['Jalousie', 'Possessivité', 'Rancune', 'Manipulation'],
    compatibility: {
      best: ['cancer', 'poissons', 'vierge', 'capricorne'],
      good: ['scorpion', 'taureau'],
      challenging: ['lion', 'verseau']
    },
    description: 'Le Scorpion, signe d\'eau fixe gouverné par Pluton, est le plus intense du zodiaque. Mystérieux et magnétique, il plonge dans les profondeurs de l\'existence.',
    loveDescription: 'Passionné et loyal, le Scorpion aime avec une intensité rare. Il recherche une connexion profonde et transformatrice.',
    careerDescription: 'Psychologie, investigation, chirurgie, finance - le Scorpion excelle dans les domaines nécessitant profondeur et transformation.',
    healthDescription: 'Résistant mais intense, le Scorpion doit gérer ses émotions. Attention aux organes reproducteurs et au système immunitaire.'
  },
  sagittaire: {
    id: 'sagittaire',
    name: 'Sagittaire',
    symbol: '♐',
    emoji: '🏹',
    element: 'feu',
    modality: 'mutable',
    planet: 'Jupiter',
    dateRange: '22 novembre - 21 décembre',
    startDate: { month: 11, day: 22 },
    endDate: { month: 12, day: 21 },
    traits: ['Optimiste', 'Aventureux', 'Philosophe', 'Franc', 'Enthousiaste'],
    strengths: ['Optimisme', 'Générosité', 'Ouverture d\'esprit', 'Honnêteté'],
    weaknesses: ['Imprudence', 'Tactlessness', 'Impatience', 'Irresponsabilité'],
    compatibility: {
      best: ['belier', 'lion', 'balance', 'verseau'],
      good: ['sagittaire', 'gemeaux'],
      challenging: ['vierge', 'poissons']
    },
    description: 'Le Sagittaire, signe de feu mutable gouverné par Jupiter, est l\'aventurier du zodiaque. Optimiste et philosophe, il recherche constamment la vérité et l\'expansion.',
    loveDescription: 'Libre et aventureux, le Sagittaire a besoin d\'espace dans sa relation. Il recherche un partenaire qui partage son amour de l\'aventure.',
    careerDescription: 'Voyages, enseignement, philosophie, sport - le Sagittaire excelle dans les domaines offrant liberté et expansion.',
    healthDescription: 'Énergique mais imprudent, le Sagittaire doit faire attention aux accidents. Les hanches et les cuisses sont des zones sensibles.'
  },
  capricorne: {
    id: 'capricorne',
    name: 'Capricorne',
    symbol: '♑',
    emoji: '🐐',
    element: 'terre',
    modality: 'cardinal',
    planet: 'Saturne',
    dateRange: '22 décembre - 19 janvier',
    startDate: { month: 12, day: 22 },
    endDate: { month: 1, day: 19 },
    traits: ['Ambitieux', 'Discipliné', 'Responsable', 'Patient', 'Pragmatique'],
    strengths: ['Détermination', 'Discipline', 'Responsabilité', 'Sagesse'],
    weaknesses: ['Pessimisme', 'Rigidité', 'Froideur', 'Matérialisme'],
    compatibility: {
      best: ['taureau', 'vierge', 'scorpion', 'poissons'],
      good: ['capricorne', 'cancer'],
      challenging: ['belier', 'balance']
    },
    description: 'Le Capricorne, signe de terre cardinal gouverné par Saturne, incarne l\'ambition et la discipline. Pragmatique et responsable, il construit patiemment son succès.',
    loveDescription: 'Sérieux et loyal, le Capricorne construit des relations durables. Il exprime son amour par la stabilité et l\'engagement.',
    careerDescription: 'Management, finance, politique, architecture - le Capricorne excelle dans les rôles nécessitant structure et ambition.',
    healthDescription: 'Résistant mais sujet au stress, le Capricorne doit prendre soin de ses os et articulations. Le repos est essentiel.'
  },
  verseau: {
    id: 'verseau',
    name: 'Verseau',
    symbol: '♒',
    emoji: '🏺',
    element: 'air',
    modality: 'fixe',
    planet: 'Uranus',
    dateRange: '20 janvier - 18 février',
    startDate: { month: 1, day: 20 },
    endDate: { month: 2, day: 18 },
    traits: ['Innovant', 'Indépendant', 'Humanitaire', 'Original', 'Intellectuel'],
    strengths: ['Originalité', 'Humanitarisme', 'Intelligence', 'Indépendance'],
    weaknesses: ['Détachement', 'Imprévisibilité', 'Entêtement', 'Froideur'],
    compatibility: {
      best: ['gemeaux', 'balance', 'belier', 'sagittaire'],
      good: ['verseau', 'lion'],
      challenging: ['taureau', 'scorpion']
    },
    description: 'Le Verseau, signe d\'air fixe gouverné par Uranus, est le visionnaire du zodiaque. Original et humanitaire, il cherche à révolutionner et à innover.',
    loveDescription: 'Indépendant et intellectuel, le Verseau a besoin de liberté dans sa relation. Il recherche un partenaire qui respecte son individualité.',
    careerDescription: 'Technologie, sciences, activisme, innovation - le Verseau brille dans les domaines avant-gardistes et humanitaires.',
    healthDescription: 'Nerveux et indépendant, le Verseau doit gérer son stress. Attention à la circulation sanguine et aux chevilles.'
  },
  poissons: {
    id: 'poissons',
    name: 'Poissons',
    symbol: '♓',
    emoji: '🐟',
    element: 'eau',
    modality: 'mutable',
    planet: 'Neptune',
    dateRange: '19 février - 20 mars',
    startDate: { month: 2, day: 19 },
    endDate: { month: 3, day: 20 },
    traits: ['Intuitif', 'Compassionnel', 'Artistique', 'Rêveur', 'Empathique'],
    strengths: ['Empathie', 'Créativité', 'Intuition', 'Compassion'],
    weaknesses: ['Évasion', 'Hypersensibilité', 'Idéalisme', 'Victimisation'],
    compatibility: {
      best: ['cancer', 'scorpion', 'taureau', 'capricorne'],
      good: ['poissons', 'vierge'],
      challenging: ['gemeaux', 'sagittaire']
    },
    description: 'Les Poissons, signe d\'eau mutable gouverné par Neptune, sont les rêveurs du zodiaque. Intuitifs et compassionnels, ils naviguent entre les mondes matériel et spirituel.',
    loveDescription: 'Romantique et dévoué, les Poissons aiment avec une profondeur émotionnelle rare. Ils recherchent une connexion spirituelle et émotionnelle.',
    careerDescription: 'Arts, spiritualité, soins, musique - les Poissons excellent dans les domaines créatifs et compassionnels.',
    healthDescription: 'Sensible et empathique, les Poissons doivent protéger leur énergie. Attention aux pieds et au système immunitaire.'
  }
};

export function getZodiacSignFromDate(month: number, day: number): ZodiacSign {
  for (const [key, sign] of Object.entries(zodiacSigns)) {
    const { startDate, endDate } = sign;
    
    // Handle signs that cross year boundary (Capricorne)
    if (startDate.month > endDate.month) {
      if (month === startDate.month && day >= startDate.day) {
        return key as ZodiacSign;
      }
      if (month === endDate.month && day <= endDate.day) {
        return key as ZodiacSign;
      }
      if (month > startDate.month || month < endDate.month) {
        return key as ZodiacSign;
      }
    } else {
      // Normal case
      if (
        (month === startDate.month && day >= startDate.day) ||
        (month === endDate.month && day <= endDate.day) ||
        (month > startDate.month && month < endDate.month)
      ) {
        return key as ZodiacSign;
      }
    }
  }
  
  return 'belier'; // Fallback
}
