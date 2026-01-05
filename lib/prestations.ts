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
    slug: 'reiki-a-distance',
    title: 'Reiki à distance',
    subtitle: 'Soin énergétique pour rééquilibrer votre corps et votre esprit',
    icon: '✨',
    badge: 'À distance',
    shortDescription: 'Le praticien canalise et transmet l\'énergie par visualisation pour activer le processus naturel de guérison.',
    price: '40€',
    format: 'Soin à distance avec compte-rendu',
    oldSiteUrl: 'https://angeline-nj.xyz/produit/reiki-a-distance',
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
    shortDescription: 'Pour un tirage en direct (audio ou visio), contacte-moi sur mes réseaux.',
    price: '30 minutes • 50€\n45 minutes • 70€\n60 minutes • 90€',
    format: 'Visioconférence en direct',
    oldSiteUrl: 'https://angeline-nj.xyz/contact',
    intro: 'Pour un tirage en direct (audio ou visio), contacte-moi sur mes réseaux. Une fois le Paypal effectué, nous convenons la date du rendez-vous. Le tirage peut être fait par SMS, vocaux ou visioconférence.',
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
  {
    slug: 'formations',
    title: 'Les formations',
    subtitle: 'Apprenez les arts divinatoires et énergétiques',
    icon: '📚',
    badge: 'Formation',
    shortDescription: 'Découvrez nos formations complètes pour maîtriser le pendule, les oracles et le Reiki.',
    price: 'Voir formations',
    format: 'Formations en ligne et supports PDF',
    oldSiteUrl: 'https://angeline-nj.xyz/formations',
    intro: 'Vous souhaitez développer vos compétences en arts divinatoires ou en soins énergétiques ? Découvrez nos formations complètes et accessibles pour apprendre à votre rythme.',
    forWho: [
      'Vous souhaitez apprendre le pendule',
      'Vous voulez maîtriser les tirages d\'oracle',
      'Vous désirez devenir praticien Reiki',
      'Vous cherchez à développer vos capacités intuitives',
    ],
    whatYouGet: [
      'Des formations complètes et structurées',
      'Des supports PDF détaillés',
      'Un accompagnement personnalisé',
      'Des exercices pratiques',
      'Un certificat de formation',
    ],
    process: [
      {
        step: 1,
        title: 'Choix de la formation',
        description: 'Consultez nos différentes formations et choisissez celle qui vous correspond.',
      },
      {
        step: 2,
        title: 'Inscription',
        description: 'Inscrivez-vous et accédez immédiatement au contenu.',
      },
      {
        step: 3,
        title: 'Apprentissage',
        description: 'Suivez les modules à votre rythme avec les supports fournis.',
      },
      {
        step: 4,
        title: 'Certification',
        description: 'Recevez votre certificat une fois la formation complétée.',
      },
    ],
    faq: [
      {
        question: 'Quelles formations proposez-vous ?',
        answer: 'Nous proposons des formations sur le pendule, les tirages d\'oracle et le Reiki (niveaux 1, 2 et 3).',
      },
      {
        question: 'Les formations sont-elles accessibles à vie ?',
        answer: 'Oui, une fois inscrit, vous avez un accès illimité au contenu de la formation.',
      },
      {
        question: 'Y a-t-il un accompagnement ?',
        answer: 'Oui, vous pouvez me contacter pour des questions ou un accompagnement personnalisé.',
      },
    ],
    relatedPrestations: ['tirage-visio', 'question-precise-domaine', 'reiki-a-distance'],
  },
  {
    slug: 'tirage-video',
    title: 'Tirage vidéo',
    subtitle: 'Tirages vidéo disponibles sur mes réseaux ainsi qu\'en privée',
    icon: '🎬',
    badge: 'Boutique',
    shortDescription: 'Explore mes tirages vidéo thématiques, créés avec mes oracles.',
    price: 'Voir boutique',
    format: 'Vidéos thématiques',
    oldSiteUrl: 'https://angeline-nj.xyz/boutique/mes-prestations',
    intro: 'Vous souhaitez un tirage vidéo personnalisé ? Découvrez notre sélection de tirages vidéo disponibles dans la boutique, catégorie "Mes prestations".',
    forWho: [
      'Vous préférez un format vidéo',
      'Vous souhaitez conserver votre tirage',
      'Vous voulez un tirage détaillé et complet',
      'Vous cherchez une guidance approfondie',
    ],
    whatYouGet: [
      'Une vidéo personnalisée de qualité',
      'Un tirage complet et détaillé',
      'Une interprétation approfondie',
      'Un support à revoir autant de fois que nécessaire',
      'Des conseils concrets et actionnables',
    ],
    process: [
      {
        step: 1,
        title: 'Boutique',
        description: 'Rendez-vous dans la boutique, catégorie "Mes prestations".',
      },
      {
        step: 2,
        title: 'Choix du tirage',
        description: 'Sélectionnez le tirage vidéo qui correspond à vos besoins.',
      },
      {
        step: 3,
        title: 'Commande',
        description: 'Passez commande et fournissez les informations nécessaires.',
      },
      {
        step: 4,
        title: 'Réception',
        description: 'Recevez votre vidéo personnalisée sous 48-72h.',
      },
    ],
    faq: [
      {
        question: 'Où trouver les tirages vidéo ?',
        answer: 'Dans la boutique, catégorie "Mes prestations". Vous y trouverez tous les tirages vidéo disponibles.',
      },
      {
        question: 'Quelle est la durée des vidéos ?',
        answer: 'La durée varie selon le type de tirage, généralement entre 20 et 50 minutes.',
      },
      {
        question: 'Puis-je télécharger la vidéo ?',
        answer: 'Oui, vous recevez un lien de téléchargement pour conserver votre vidéo.',
      },
    ],
    relatedPrestations: ['tirage-visio', 'tirage-sentimental', 'tirage-positif'],
  },
  {
    slug: 'rituel-pdf',
    title: 'Rituel PDF',
    subtitle: 'Rituels guidés en format PDF',
    icon: '📄',
    badge: 'PDF',
    shortDescription: 'Téléchargez nos rituels guidés en PDF pour pratiquer chez vous :\n• Protection\n• Attirer l\'amour\n• Abondance\n• Manifester un projet\n• Couper un lien\n• Protection & chance',
    price: '3,90€',
    format: 'PDF téléchargeable',
    oldSiteUrl: 'https://angeline-nj.xyz/boutique/rituels',
    intro: 'Découvrez nos rituels guidés en format PDF, conçus pour vous accompagner dans votre pratique spirituelle. Chaque rituel est détaillé étape par étape avec les explications nécessaires.',
    forWho: [
      'Vous souhaitez pratiquer des rituels chez vous',
      'Vous cherchez des guides détaillés',
      'Vous voulez développer votre pratique spirituelle',
      'Vous préférez un support écrit',
    ],
    whatYouGet: [
      'Un PDF détaillé et illustré',
      'Des instructions étape par étape',
      'La liste du matériel nécessaire',
      'Des explications sur le rituel',
      'Un support à conserver et réutiliser',
    ],
    process: [
      {
        step: 1,
        title: 'Boutique',
        description: 'Rendez-vous dans la boutique, catégorie "Rituels".',
      },
      {
        step: 2,
        title: 'Choix du rituel',
        description: 'Sélectionnez le rituel qui correspond à votre intention.',
      },
      {
        step: 3,
        title: 'Téléchargement',
        description: 'Après achat, téléchargez immédiatement votre PDF.',
      },
      {
        step: 4,
        title: 'Pratique',
        description: 'Suivez les instructions pour réaliser votre rituel.',
      },
    ],
    faq: [
      {
        question: 'Combien de rituels sont disponibles ?',
        answer: 'Nous proposons actuellement 5 rituels différents pour diverses intentions (amour, protection, prospérité, etc.).',
      },
      {
        question: 'Le PDF est-il imprimable ?',
        answer: 'Oui, vous pouvez imprimer le PDF pour une utilisation plus pratique.',
      },
      {
        question: 'Ai-je besoin de matériel spécifique ?',
        answer: 'Chaque rituel indique le matériel nécessaire. La plupart utilisent des éléments simples et accessibles.',
      },
    ],
    relatedPrestations: ['tirage-positif', 'reiki-a-distance', 'formations'],
  },
  {
    slug: 'rituel-video',
    title: 'Rituel Vidéo',
    subtitle: 'Rituels guidés en format vidéo',
    icon: '🎥',
    badge: 'Vidéo',
    shortDescription: 'Suivez nos rituels guidés en vidéo pour une pratique accompagnée :\n• Protection\n• Attirer l\'amour\n• Abondance\n• Manifester un projet\n• Couper un lien\n• Protection & chance',
    price: '19.90€',
    format: 'Vidéo guidée',
    oldSiteUrl: 'https://angeline-nj.xyz/boutique/rituels',
    intro: 'Vous préférez être guidé en vidéo ? Découvrez nos rituels en format vidéo pour pratiquer en étant accompagné pas à pas. Disponibles dans la boutique, catégorie "Rituels".',
    forWho: [
      'Vous préférez un format vidéo',
      'Vous souhaitez être guidé en direct',
      'Vous débutez dans les rituels',
      'Vous cherchez une pratique accompagnée',
    ],
    whatYouGet: [
      'Une vidéo guidée complète',
      'Un accompagnement pas à pas',
      'Des explications détaillées',
      'La possibilité de pratiquer en même temps',
      'Un support à revoir autant de fois que nécessaire',
    ],
    process: [
      {
        step: 1,
        title: 'Boutique',
        description: 'Rendez-vous dans la boutique, catégorie "Rituels".',
      },
      {
        step: 2,
        title: 'Choix du rituel',
        description: 'Sélectionnez le rituel vidéo qui correspond à votre intention.',
      },
      {
        step: 3,
        title: 'Accès',
        description: 'Après achat, accédez immédiatement à votre vidéo.',
      },
      {
        step: 4,
        title: 'Pratique guidée',
        description: 'Suivez la vidéo pour réaliser votre rituel en étant guidé.',
      },
    ],
    faq: [
      {
        question: 'Quelle est la durée des vidéos ?',
        answer: 'Les rituels vidéo durent généralement entre 15 et 30 minutes selon le type de rituel.',
      },
      {
        question: 'Puis-je pratiquer en même temps que la vidéo ?',
        answer: 'Oui, les vidéos sont conçues pour que vous puissiez pratiquer en même temps, avec des pauses adaptées.',
      },
      {
        question: 'Ai-je un accès illimité ?',
        answer: 'Oui, une fois acheté, vous pouvez revoir la vidéo autant de fois que vous le souhaitez.',
      },
    ],
    relatedPrestations: ['rituel-pdf', 'formations', 'reiki-a-distance'],
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
