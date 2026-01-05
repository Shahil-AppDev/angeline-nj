export interface Prestation {
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  badge: string;
  shortDescription: string;
  price: string;
  format: string;
  oldSiteUrl: string;
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
    slug: 'question-oui-non',
    title: 'Tirage question précise (hors sentimentale) (oui/non)',
    subtitle: 'Réponse rapide et claire à une question fermée',
    icon: '❓',
    badge: 'À distance',
    shortDescription: 'Obtenez une réponse oui/non à votre question précise (hors domaine sentimental).',
    price: '10€',
    format: 'Réponse écrite ou audio envoyée sous 24h',
    oldSiteUrl: 'https://angeline-nj.com/produit/tirage-question-precise-hors-sentimentale-oui-non/',
    intro: 'Vous avez besoin d\'une réponse rapide et claire à une question précise ? Ce tirage vous apporte une guidance directe sous forme de oui/non avec une brève explication.',
    forWho: [
      'Vous avez une question simple nécessitant une réponse claire',
      'Vous souhaitez une guidance rapide pour prendre une décision',
      'Vous cherchez une confirmation ou infirmation',
      'Vous avez besoin d\'un éclairage ponctuel',
    ],
    whatYouGet: [
      'Un tirage ciblé sur votre question',
      'Une réponse oui/non claire',
      'Une brève explication des énergies',
      'Un conseil pour la suite',
      'Réponse sous 24h',
    ],
    process: [
      {
        step: 1,
        title: 'Votre question',
        description: 'Vous me transmettez votre question précise par email ou Instagram.',
      },
      {
        step: 2,
        title: 'Tirage',
        description: 'Je réalise un tirage ciblé pour obtenir une réponse claire.',
      },
      {
        step: 3,
        title: 'Interprétation',
        description: 'J\'analyse les cartes et formule une réponse oui/non avec explication.',
      },
      {
        step: 4,
        title: 'Envoi rapide',
        description: 'Vous recevez votre réponse sous 24h par écrit ou audio.',
      },
    ],
    faq: [
      {
        question: 'Puis-je poser une question sentimentale ?',
        answer: 'Non, ce tirage est réservé aux questions hors domaine sentimental. Pour l\'amour, optez pour le Tirage Sentimental.',
      },
      {
        question: 'La réponse est-elle définitive ?',
        answer: 'La réponse reflète les énergies actuelles. Votre libre arbitre peut toujours influencer le résultat final.',
      },
      {
        question: 'Puis-je poser plusieurs questions ?',
        answer: 'Ce tirage est pour une seule question. Pour plusieurs questions, contactez-moi pour un tirage adapté.',
      },
    ],
    relatedPrestations: ['question-semaine', 'question-precise-domaine', 'tirage-sentimental'],
  },
  {
    slug: 'question-semaine',
    title: 'Question sur une semaine',
    subtitle: 'Guidance pour la semaine à venir',
    icon: '📅',
    badge: 'À distance',
    shortDescription: 'Découvrez les énergies et conseils pour votre semaine.',
    price: '15€',
    format: 'Réponse écrite ou audio envoyée sous 24h',
    oldSiteUrl: 'https://angeline-nj.com/produit/question-sur-une-semaine/',
    intro: 'Vous souhaitez connaître les énergies de votre semaine à venir ? Ce tirage vous donne une vision claire des jours qui arrivent avec des conseils pour chaque période.',
    forWho: [
      'Vous voulez anticiper votre semaine',
      'Vous avez des événements importants à venir',
      'Vous cherchez à optimiser votre planning',
      'Vous souhaitez une guidance hebdomadaire',
    ],
    whatYouGet: [
      'Un tirage sur 7 jours',
      'Une vision des énergies de la semaine',
      'Une guidance globale pour la semaine',
      'Réponse sous 24h',
    ],
    process: [
      {
        step: 1,
        title: 'Réservation',
        description: 'Vous réservez votre tirage hebdomadaire.',
      },
      {
        step: 2,
        title: 'Tirage des 7 jours',
        description: 'Je tire les cartes pour chaque jour de votre semaine.',
      },
      {
        step: 3,
        title: 'Analyse complète',
        description: 'J\'interprète les énergies et tendances de votre semaine.',
      },
      {
        step: 4,
        title: 'Envoi de votre guidance',
        description: 'Vous recevez votre tirage complet sous 24h.',
      },
    ],
    faq: [
      {
        question: 'Puis-je refaire un tirage en cours de semaine ?',
        answer: 'Oui, si la situation évolue significativement. Cependant, je recommande de laisser les énergies se déployer.',
      },
      {
        question: 'Le tirage couvre-t-il tous les domaines ?',
        answer: 'Oui, le tirage donne une vision globale de votre semaine dans tous les domaines de vie.',
      },
      {
        question: 'Puis-je poser une question spécifique ?',
        answer: 'Ce tirage est une guidance générale. Pour une question précise, optez pour un autre tirage.',
      },
    ],
    relatedPrestations: ['question-oui-non', 'question-precise-domaine', 'tirage-positif'],
  },
  {
    slug: 'question-precise-domaine',
    title: 'Question précise domaine de votre choix (hors sentimentale)',
    subtitle: 'Réponse approfondie sur un domaine spécifique',
    icon: '🎯',
    badge: 'À distance',
    shortDescription: 'Obtenez une réponse détaillée sur une question dans le domaine de votre choix.',
    price: '25€',
    format: 'Vidéo ou audio personnalisé envoyé sous 48h',
    oldSiteUrl: 'https://angeline-nj.com/produit/question-precise-domaine-de-votre-choix-hors-sentimentale/',
    intro: 'Vous avez une question précise sur un domaine particulier (travail, finances, spiritualité, famille, projets...) ? Ce tirage vous apporte une réponse approfondie et des conseils concrets. Exclusions : santé et mort.',
    forWho: [
      'Vous avez une question précise sur un domaine spécifique',
      'Vous cherchez des conseils détaillés',
      'Vous souhaitez une analyse approfondie',
      'Vous avez besoin de clarté sur une situation',
    ],
    whatYouGet: [
      'Un tirage personnalisé adapté à votre question',
      'Une interprétation détaillée et claire',
      'Des conseils concrets et actionnables',
      'Une réponse en vidéo ou audio',
    ],
    process: [
      {
        step: 1,
        title: 'Votre question',
        description: 'Vous me transmettez votre question et le domaine concerné.',
      },
      {
        step: 2,
        title: 'Tirage approfondi',
        description: 'Je réalise un tirage complet adapté à votre problématique.',
      },
      {
        step: 3,
        title: 'Analyse détaillée',
        description: 'J\'interprète chaque carte et vous donne des conseils précis.',
      },
      {
        step: 4,
        title: 'Envoi sous 48h',
        description: 'Vous recevez votre réponse complète en vidéo ou audio.',
      },
    ],
    faq: [
      {
        question: 'Quels domaines puis-je aborder ?',
        answer: 'Tous sauf le sentimental, la santé et la mort : travail, finances, spiritualité, famille, projets, etc.',
      },
      {
        question: 'Puis-je poser plusieurs questions ?',
        answer: 'Ce tirage se concentre sur une question principale pour plus de profondeur.',
      },
      {
        question: 'La réponse est-elle en vidéo ou audio ?',
        answer: 'Vous choisissez le format qui vous convient le mieux lors de la réservation.',
      },
    ],
    relatedPrestations: ['question-oui-non', 'question-semaine', 'tirage-positif'],
  },
  {
    slug: 'tirage-sentimental',
    title: 'Tirage sentimental',
    subtitle: 'Clarifiez votre vie amoureuse et vos relations',
    icon: '💕',
    badge: 'À distance',
    shortDescription: 'Obtenez des réponses claires sur votre vie amoureuse et sentimentale.',
    price: '30€',
    format: 'Vidéo personnalisée envoyée sous 48h',
    oldSiteUrl: 'https://angeline-nj.com/produit/tirage-sentimental/',
    intro: 'Vous vous posez des questions sur votre relation, un amour naissant ou votre avenir sentimental ? Le tirage sentimental vous apporte des réponses claires et bienveillantes.',
    forWho: [
      'Vous traversez une période de doute dans votre couple',
      'Vous souhaitez savoir si une rencontre est prometteuse',
      'Vous cherchez à comprendre les blocages sentimentaux',
      'Vous voulez connaître les énergies amoureuses à venir',
    ],
    whatYouGet: [
      'Un tirage personnalisé adapté à votre situation',
      'Une interprétation détaillée en vidéo',
      'Des conseils concrets et bienveillants',
      'Une guidance claire pour prendre les bonnes décisions',
    ],
    process: [
      {
        step: 1,
        title: 'Votre situation',
        description: 'Vous me partagez votre situation sentimentale et vos questions.',
      },
      {
        step: 2,
        title: 'Connexion énergétique',
        description: 'Je me connecte à votre énergie et celle de la situation.',
      },
      {
        step: 3,
        title: 'Tirage et interprétation',
        description: 'Je réalise le tirage et enregistre l\'interprétation complète.',
      },
      {
        step: 4,
        title: 'Envoi sous 48h',
        description: 'Vous recevez votre vidéo personnalisée par email ou Instagram.',
      },
    ],
    faq: [
      {
        question: 'Puis-je poser plusieurs questions sentimentales ?',
        answer: 'Le tirage se concentre sur une situation principale pour plus de clarté et de profondeur.',
      },
      {
        question: 'Les prédictions sont-elles certaines ?',
        answer: 'Les cartes montrent les énergies actuelles. Votre libre arbitre reste présent pour influencer votre chemin.',
      },
      {
        question: 'Puis-je avoir des nouvelles d\'une personne spécifique ?',
        answer: 'Oui, le tirage peut éclairer les énergies et intentions d\'une personne dans votre vie sentimentale.',
      },
    ],
    relatedPrestations: ['tirage-positif', 'question-precise-domaine', 'tirage-urgence'],
  },
  {
    slug: 'tirage-positif',
    title: 'Tirage positif',
    subtitle: 'Focalisez sur les opportunités et énergies favorables',
    icon: '✨',
    badge: 'À distance',
    shortDescription: 'Un tirage centré sur le positif, les opportunités et les solutions.',
    price: '30€',
    format: 'Vidéo personnalisée envoyée sous 48h',
    oldSiteUrl: 'https://angeline-nj.com/produit/tirage-positif/',
    intro: 'Vous souhaitez vous concentrer sur les aspects positifs de votre vie et les opportunités à venir ? Le tirage positif met en lumière vos forces, vos talents et les énergies favorables.',
    forWho: [
      'Vous traversez une période difficile et cherchez de l\'espoir',
      'Vous voulez identifier vos forces et talents',
      'Vous souhaitez attirer le positif dans votre vie',
      'Vous cherchez les opportunités à saisir',
    ],
    whatYouGet: [
      'Un tirage axé sur le positif et les solutions',
      'Une mise en lumière de vos forces',
      'Des conseils pour attirer les bonnes énergies',
      'Une interprétation vidéo bienveillante (35-40 min)',
      'Un boost de motivation et de confiance',
    ],
    process: [
      {
        step: 1,
        title: 'Votre intention',
        description: 'Vous me partagez votre situation et votre besoin de positivité.',
      },
      {
        step: 2,
        title: 'Tirage des opportunités',
        description: 'Je tire les cartes en me concentrant sur les énergies favorables.',
      },
      {
        step: 3,
        title: 'Interprétation positive',
        description: 'J\'analyse les cartes en mettant l\'accent sur les solutions et opportunités.',
      },
      {
        step: 4,
        title: 'Vidéo inspirante',
        description: 'Vous recevez une vidéo motivante et bienveillante sous 48h.',
      },
    ],
    faq: [
      {
        question: 'Le tirage évite-t-il les aspects négatifs ?',
        answer: 'Non, mais il les transforme en opportunités d\'apprentissage et met l\'accent sur les solutions.',
      },
      {
        question: 'Puis-je combiner avec un autre tirage ?',
        answer: 'Oui, contactez-moi pour un forfait combiné adapté à vos besoins.',
      },
      {
        question: 'À quelle fréquence faire un tirage positif ?',
        answer: 'Quand vous ressentez le besoin de vous recentrer sur le positif, généralement tous les 1-3 mois.',
      },
    ],
    relatedPrestations: ['tirage-sentimental', 'question-semaine', 'question-precise-domaine'],
  },
  {
    slug: 'tirage-urgence',
    title: 'Tirage en urgence',
    subtitle: 'Réponse prioritaire sous 24h maximum',
    icon: '🚨',
    badge: 'Prioritaire',
    shortDescription: 'Obtenez une réponse rapide et complète en cas de situation urgente.',
    price: '80€',
    format: 'Vidéo personnalisée envoyée sous 24h maximum',
    oldSiteUrl: 'https://angeline-nj.com/produit/tirage-en-urgence/',
    intro: 'Vous faites face à une situation urgente nécessitant une guidance rapide ? Le tirage en urgence vous apporte une réponse complète et prioritaire sous 24h maximum.',
    forWho: [
      'Vous devez prendre une décision importante rapidement',
      'Vous traversez une crise ou situation urgente',
      'Vous avez besoin d\'une guidance immédiate',
      'Vous ne pouvez pas attendre le délai habituel',
    ],
    whatYouGet: [
      'Traitement prioritaire de votre demande',
      'Un tirage complet et approfondi',
      'Une interprétation détaillée en vidéo (40-50 min)',
      'Des conseils d\'action immédiats',
      'Réponse garantie sous 24h maximum',
    ],
    process: [
      {
        step: 1,
        title: 'Demande urgente',
        description: 'Vous me contactez en précisant l\'urgence de votre situation.',
      },
      {
        step: 2,
        title: 'Traitement prioritaire',
        description: 'Je traite votre demande en priorité absolue.',
      },
      {
        step: 3,
        title: 'Tirage approfondi',
        description: 'Je réalise un tirage complet malgré le délai court.',
      },
      {
        step: 4,
        title: 'Envoi sous 24h',
        description: 'Vous recevez votre vidéo complète dans les 24h maximum.',
      },
    ],
    faq: [
      {
        question: 'Qu\'est-ce qui justifie un tirage en urgence ?',
        answer: 'Une décision importante à prendre rapidement, une crise, ou toute situation nécessitant une guidance immédiate.',
      },
      {
        question: 'Le tirage est-il aussi complet qu\'un tirage normal ?',
        answer: 'Oui, vous bénéficiez de la même qualité et profondeur d\'analyse, mais en priorité.',
      },
      {
        question: 'Puis-je avoir une question de suivi ?',
        answer: 'Oui, vous pouvez me contacter pour des clarifications dans les 48h suivant la réception.',
      },
    ],
    relatedPrestations: ['tirage-sentimental', 'question-precise-domaine', 'tirage-positif'],
  },
  {
    slug: 'reiki-a-distance',
    title: 'Reiki à distance',
    subtitle: 'Soin énergétique pour rééquilibrer votre corps et votre esprit',
    icon: '✨',
    badge: 'À distance',
    shortDescription: 'Le praticien canalise et transmet l\'énergie par visualisation pour activer le processus naturel de guérison.',
    price: '40€',
    format: 'Soin à distance avec compte-rendu',
    oldSiteUrl: 'https://angeline-nj.com/produit/reiki-a-distance/',
    intro: 'Le Reiki à distance est une méthode de soin énergétique puissante qui transcende les barrières physiques. Le praticien canalise l\'énergie universelle et la transmet par visualisation pour activer votre processus naturel de guérison, où que vous soyez.',
    forWho: [
      'Vous ressentez un déséquilibre énergétique',
      'Vous traversez une période de stress ou d\'anxiété',
      'Vous souhaitez un soin de bien-être global',
      'Vous cherchez à harmoniser votre corps et votre esprit',
    ],
    whatYouGet: [
      'Un soin énergétique complet à distance',
      'Rééquilibrage de vos centres énergétiques',
      'Un compte-rendu détaillé du soin',
      'Conseils personnalisés pour votre bien-être',
      'Suivi après le soin',
    ],
    process: [
      {
        step: 1,
        title: 'Commande',
        description: 'Vous commandez et payez votre soin sur le site.',
      },
      {
        step: 2,
        title: 'Informations',
        description: 'Vous recevez un email avec un formulaire pour fournir vos informations (photo récente sans filtre, date de naissance, intention).',
      },
      {
        step: 3,
        title: 'Planification',
        description: 'Nous convenons ensemble d\'une date et heure pour le soin.',
      },
      {
        step: 4,
        title: 'Soin à distance',
        description: 'Je réalise votre soin Reiki à distance en canalisant l\'énergie universelle.',
      },
      {
        step: 5,
        title: 'Compte-rendu',
        description: 'Vous recevez un compte-rendu détaillé du soin avec mes ressentis et conseils.',
      },
    ],
    faq: [
      {
        question: 'Comment fonctionne le Reiki à distance ?',
        answer: 'Le Reiki transcende l\'espace et le temps. Le praticien se connecte à votre énergie par visualisation et intention, permettant une transmission efficace de l\'énergie de guérison.',
      },
      {
        question: 'Que dois-je faire pendant le soin ?',
        answer: 'Idéalement, installez-vous confortablement dans un endroit calme pendant le créneau convenu. Vous pouvez vous allonger, méditer ou simplement vous détendre.',
      },
      {
        question: 'Quelles informations dois-je fournir ?',
        answer: 'Une photo récente sans filtre, votre date de naissance et votre intention pour le soin (ce sur quoi vous souhaitez travailler).',
      },
      {
        question: 'Combien de temps dure un soin ?',
        answer: 'Un soin Reiki dure généralement entre 45 minutes et 1 heure.',
      },
    ],
    relatedPrestations: ['tirage-positif', 'question-precise-domaine', 'tirage-sentimental'],
  },
  {
    slug: 'tirage-visio',
    title: 'Tirage en Visio',
    subtitle: 'Consultation personnalisée en direct par visioconférence',
    icon: '📹',
    badge: 'En direct',
    shortDescription: 'Pour un tirage personnalisé en direct, vous pouvez me contacter sur mes réseaux.',
    price: '50€ (30min) • 70€ (45min) • 90€ (60min)',
    format: 'Visioconférence en direct (Instagram, TikTok, Facebook)',
    oldSiteUrl: 'https://angeline-nj.com/contact',
    intro: 'Pour un tirage personnalisé en direct, vous pouvez me contacter sur mes différents réseaux. Une fois le Paypal effectué, nous convenons la date du rendez-vous. Le tirage peut être fait par SMS, vocaux ou visioconférence.',
    forWho: [
      'Vous préférez un échange en direct',
      'Vous souhaitez poser vos questions en temps réel',
      'Vous voulez une interaction personnalisée',
      'Vous cherchez une guidance immédiate et interactive',
    ],
    whatYouGet: [
      'Une consultation en direct par visioconférence',
      'Un tirage personnalisé adapté à vos questions',
      'La possibilité de poser des questions de suivi',
      'Une guidance interactive et bienveillante',
      'Choix de la durée selon vos besoins (30, 45 ou 60 min)',
    ],
    process: [
      {
        step: 1,
        title: 'Contact',
        description: 'Contactez-moi sur mes réseaux (Instagram, TikTok, Facebook) pour réserver.',
      },
      {
        step: 2,
        title: 'Paiement',
        description: 'Effectuez le paiement via Paypal selon la durée choisie.',
      },
      {
        step: 3,
        title: 'Planification',
        description: 'Nous convenons ensemble d\'une date et heure pour le rendez-vous.',
      },
      {
        step: 4,
        title: 'Tirage en direct',
        description: 'Je réalise votre tirage en visioconférence, SMS ou vocaux selon votre préférence.',
      },
    ],
    faq: [
      {
        question: 'Quelle est la différence entre les durées ?',
        answer: '30 min pour une question ciblée, 45 min pour 2-3 questions, 60 min pour une consultation complète approfondie.',
      },
      {
        question: 'Sur quelle plateforme se fait la visio ?',
        answer: 'Nous pouvons utiliser Instagram, TikTok, Facebook ou tout autre moyen qui vous convient (SMS, vocaux).',
      },
      {
        question: 'Puis-je enregistrer la séance ?',
        answer: 'Oui, vous pouvez enregistrer la visioconférence pour la revoir plus tard.',
      },
      {
        question: 'La question doit être précise ?',
        answer: 'Oui, je souhaiterais tout savoir pour mon avenir professionnel est trop vaste. Cette question est trop vague, cette question est claire et aura donc une réponse claire. Est-ce que je vais trouver un nouveau travail prochainement, cette question est trop vaste.',
      },
    ],
    relatedPrestations: ['tirage-sentimental', 'question-precise-domaine', 'tirage-urgence'],
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
