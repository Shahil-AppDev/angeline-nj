export interface Prestation {
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  badge: string;
  shortDescription: string;
  price: string;
  duration: string;
  format: string;
  intro: string;
  forWho: string[];
  whatYouGet: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  relatedPrestations: string[];
}

export const prestations: Prestation[] = [
  {
    slug: 'tirage-amour',
    title: 'Tirage Amour',
    subtitle: 'Clarifiez vos relations et votre vie sentimentale',
    icon: '💕',
    badge: 'À distance',
    shortDescription: 'Obtenez des réponses claires sur votre vie amoureuse et vos relations.',
    price: '35€',
    duration: '30-45 min',
    format: 'Vidéo personnalisée envoyée sous 48h',
    intro: 'Vous vous posez des questions sur votre relation actuelle, un amour naissant ou votre avenir sentimental ? Le tirage Amour vous apporte des réponses claires et bienveillantes pour avancer sereinement.',
    forWho: [
      'Vous traversez une période de doute dans votre couple',
      'Vous souhaitez savoir si une rencontre est prometteuse',
      'Vous cherchez à comprendre les blocages sentimentaux',
      'Vous voulez connaître les énergies amoureuses à venir',
    ],
    whatYouGet: [
      'Un tirage personnalisé de 7 à 10 cartes',
      'Une interprétation détaillée en vidéo (30-45 min)',
      'Des conseils concrets et bienveillants',
      'Une guidance pour prendre les bonnes décisions',
      'Possibilité de poser une question de suivi par message',
    ],
    process: [
      {
        step: 1,
        title: 'Réservation',
        description: 'Vous réservez votre tirage et me transmettez votre question ou situation par email ou Instagram.',
      },
      {
        step: 2,
        title: 'Connexion énergétique',
        description: 'Je me connecte à votre énergie et réalise votre tirage personnalisé avec attention.',
      },
      {
        step: 3,
        title: 'Interprétation vidéo',
        description: 'J\'enregistre l\'interprétation complète en vidéo, carte par carte, avec mes ressentis.',
      },
      {
        step: 4,
        title: 'Envoi sous 48h',
        description: 'Vous recevez votre vidéo par email ou Instagram, à visionner autant de fois que nécessaire.',
      },
    ],
    faq: [
      {
        question: 'Puis-je poser plusieurs questions ?',
        answer: 'Le tirage Amour se concentre sur une situation ou question principale pour plus de clarté. Si vous avez plusieurs préoccupations, je peux vous orienter vers un tirage plus complet.',
      },
      {
        question: 'Les prédictions sont-elles certaines ?',
        answer: 'Les cartes montrent les énergies et tendances actuelles. Votre libre arbitre reste toujours présent. Je vous guide pour faire les meilleurs choix, pas pour imposer un destin figé.',
      },
      {
        question: 'Combien de temps la vidéo reste-t-elle valable ?',
        answer: 'Vous conservez votre vidéo à vie. Les énergies évoluent, mais les conseils restent pertinents. Vous pouvez la revisionner quand vous en ressentez le besoin.',
      },
      {
        question: 'Que faire si je ne comprends pas une carte ?',
        answer: 'Vous pouvez me poser une question de suivi par message. Je reste disponible pour clarifier un point de votre tirage.',
      },
    ],
    relatedPrestations: ['tirage-avenir', 'guidance-spirituelle', 'tirage-travail'],
  },
  {
    slug: 'tirage-avenir',
    title: 'Tirage Avenir',
    subtitle: 'Découvrez les énergies et opportunités à venir',
    icon: '🔮',
    badge: 'À distance',
    shortDescription: 'Anticipez les mois à venir et préparez-vous aux opportunités.',
    price: '40€',
    duration: '40-50 min',
    format: 'Vidéo personnalisée envoyée sous 48h',
    intro: 'Vous souhaitez avoir une vision claire des mois à venir ? Le tirage Avenir vous révèle les énergies, défis et opportunités qui se profilent pour vous permettre de vous préparer sereinement.',
    forWho: [
      'Vous entamez une nouvelle année ou période de vie',
      'Vous ressentez le besoin d\'anticiper les changements',
      'Vous voulez identifier les opportunités à saisir',
      'Vous cherchez à comprendre les cycles énergétiques',
    ],
    whatYouGet: [
      'Un tirage sur 3, 6 ou 12 mois selon votre choix',
      'Une vision globale des énergies à venir',
      'Des conseils pour chaque période clé',
      'Une interprétation vidéo détaillée (40-50 min)',
      'Un support pour vous y référer tout au long de la période',
    ],
    process: [
      {
        step: 1,
        title: 'Choix de la période',
        description: 'Vous choisissez la période souhaitée (3, 6 ou 12 mois) et réservez votre tirage.',
      },
      {
        step: 2,
        title: 'Tirage énergétique',
        description: 'Je réalise un tirage complet en me connectant aux énergies de votre chemin de vie.',
      },
      {
        step: 3,
        title: 'Analyse période par période',
        description: 'J\'analyse chaque période avec ses défis, opportunités et conseils associés.',
      },
      {
        step: 4,
        title: 'Vidéo récapitulative',
        description: 'Vous recevez une vidéo complète que vous pouvez consulter régulièrement.',
      },
    ],
    faq: [
      {
        question: 'Quelle période choisir : 3, 6 ou 12 mois ?',
        answer: '3 mois pour une vision rapprochée et précise, 6 mois pour un équilibre, 12 mois pour une vue d\'ensemble annuelle. Je vous conseille selon votre situation.',
      },
      {
        question: 'Puis-je refaire un tirage avant la fin de la période ?',
        answer: 'Oui, si votre situation évolue significativement. Cependant, je recommande d\'attendre au moins la moitié de la période pour laisser les énergies se déployer.',
      },
      {
        question: 'Le tirage couvre-t-il tous les domaines de vie ?',
        answer: 'Oui, le tirage Avenir donne une vision globale : amour, travail, santé, spiritualité. Si vous souhaitez approfondir un domaine, je peux vous orienter vers un tirage spécifique.',
      },
    ],
    relatedPrestations: ['tirage-amour', 'tirage-travail', 'guidance-spirituelle'],
  },
  {
    slug: 'tirage-travail',
    title: 'Tirage Travail & Carrière',
    subtitle: 'Trouvez votre voie professionnelle et débloquez votre potentiel',
    icon: '⭐',
    badge: 'À distance',
    shortDescription: 'Clarifiez vos choix professionnels et révélez votre potentiel.',
    price: '35€',
    duration: '30-45 min',
    format: 'Vidéo personnalisée envoyée sous 48h',
    intro: 'Reconversion, recherche d\'emploi, évolution professionnelle ou blocages au travail ? Le tirage Travail & Carrière vous aide à y voir clair et à prendre les bonnes décisions pour votre épanouissement professionnel.',
    forWho: [
      'Vous envisagez une reconversion professionnelle',
      'Vous hésitez entre plusieurs opportunités',
      'Vous ressentez un blocage ou une stagnation',
      'Vous cherchez votre voie ou mission de vie',
    ],
    whatYouGet: [
      'Un tirage ciblé sur votre situation professionnelle',
      'Une analyse de vos talents et blocages',
      'Des conseils concrets pour avancer',
      'Une interprétation vidéo complète (30-45 min)',
      'Un éclairage sur les opportunités à venir',
    ],
    process: [
      {
        step: 1,
        title: 'Partage de situation',
        description: 'Vous m\'expliquez votre situation professionnelle et vos questionnements.',
      },
      {
        step: 2,
        title: 'Tirage personnalisé',
        description: 'Je réalise un tirage adapté à votre problématique professionnelle.',
      },
      {
        step: 3,
        title: 'Analyse et conseils',
        description: 'J\'interprète les cartes et vous donne des pistes concrètes d\'action.',
      },
      {
        step: 4,
        title: 'Vidéo guidance',
        description: 'Vous recevez votre vidéo avec l\'ensemble des conseils et éclairages.',
      },
    ],
    faq: [
      {
        question: 'Le tirage peut-il me dire quel métier choisir ?',
        answer: 'Les cartes révèlent vos talents, vos blocages et les énergies favorables. Elles vous guident vers ce qui résonne avec votre être profond, mais le choix final vous appartient.',
      },
      {
        question: 'Puis-je poser des questions sur une création d\'entreprise ?',
        answer: 'Absolument ! Le tirage Travail couvre aussi l\'entrepreneuriat, les projets et les partenariats professionnels.',
      },
      {
        question: 'Et si je suis en conflit au travail ?',
        answer: 'Le tirage peut éclairer les dynamiques relationnelles et vous donner des clés pour gérer la situation avec sagesse.',
      },
    ],
    relatedPrestations: ['guidance-spirituelle', 'tirage-avenir', 'tirage-amour'],
  },
  {
    slug: 'guidance-spirituelle',
    title: 'Guidance Spirituelle',
    subtitle: 'Reconnectez-vous à votre intuition et votre chemin de vie',
    icon: '🌙',
    badge: 'À distance',
    shortDescription: 'Un accompagnement profond pour votre évolution spirituelle.',
    price: '45€',
    duration: '45-60 min',
    format: 'Vidéo personnalisée envoyée sous 48h',
    intro: 'Vous ressentez le besoin de vous reconnecter à vous-même, de comprendre votre mission de vie ou de développer votre spiritualité ? La Guidance Spirituelle est un accompagnement en profondeur pour éclairer votre chemin.',
    forWho: [
      'Vous traversez un éveil spirituel',
      'Vous cherchez votre mission de vie',
      'Vous souhaitez développer votre intuition',
      'Vous ressentez un appel intérieur sans le comprendre',
    ],
    whatYouGet: [
      'Un tirage approfondi sur votre chemin spirituel',
      'Une connexion à vos guides et énergies',
      'Des messages et ressentis intuitifs',
      'Une interprétation vidéo riche (45-60 min)',
      'Des exercices ou pratiques pour votre évolution',
    ],
    process: [
      {
        step: 1,
        title: 'Intention et questionnement',
        description: 'Vous partagez votre intention et vos questions spirituelles.',
      },
      {
        step: 2,
        title: 'Connexion profonde',
        description: 'Je me connecte à vos énergies, vos guides et votre âme.',
      },
      {
        step: 3,
        title: 'Messages et guidance',
        description: 'Je reçois et transmets les messages, symboles et conseils pour votre chemin.',
      },
      {
        step: 4,
        title: 'Vidéo complète',
        description: 'Vous recevez une vidéo riche en enseignements et pratiques.',
      },
    ],
    faq: [
      {
        question: 'Dois-je avoir des connaissances spirituelles ?',
        answer: 'Absolument pas. La guidance s\'adapte à votre niveau. Que vous soyez débutant ou avancé, je vous accompagne là où vous en êtes.',
      },
      {
        question: 'Quelle est la différence avec un tirage classique ?',
        answer: 'La guidance spirituelle va au-delà de la cartomancie. Elle inclut mes ressentis, les messages de vos guides et une approche plus holistique de votre être.',
      },
      {
        question: 'Puis-je combiner avec un soin Reiki ?',
        answer: 'Oui, c\'est même recommandé pour un travail énergétique complet. Contactez-moi pour un forfait combiné.',
      },
      {
        question: 'À quelle fréquence faire une guidance ?',
        answer: 'Selon vos besoins. Certains font une guidance tous les 3-6 mois, d\'autres lors de moments clés de leur évolution.',
      },
    ],
    relatedPrestations: ['tirage-avenir', 'tirage-amour', 'tirage-travail'],
  },
];

export function getPrestationBySlug(slug: string): Prestation | undefined {
  return prestations.find((p) => p.slug === slug);
}

export function getRelatedPrestations(currentSlug: string, relatedSlugs: string[]): Prestation[] {
  return prestations.filter(
    (p) => relatedSlugs.includes(p.slug) && p.slug !== currentSlug
  );
}
