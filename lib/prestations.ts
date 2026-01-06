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
    oldSiteUrl: 'https://angeline-nj.com/produit/reiki-a-distance/',
    intro: 'Le Reiki est une forme de thérapie alternative qui provient du Japon. Il s\'agit d\'une pratique spirituelle qui utilise une technique dite de « soins par imposition des mains » pour transférer une forme d\'énergie universelle de l\'agent thérapeutique (praticien de Reiki) au patient, dans le but de soutenir la capacité de guérison naturelle du corps et de promouvoir le bien-être global.',
    forWho: [
      'Vous souhaitez améliorer votre bien-être physique et émotionnel',
      'Vous cherchez à équilibrer votre énergie vitale (chi ou qi)',
      'Vous traversez une période de stress ou de dépression',
      'Vous souhaitez améliorer votre sommeil et votre concentration',
    ],
    whatYouGet: [
      'Augmentation de la confiance en soi',
      'Regain d\'énergie, lutte contre le stress et la dépression',
      'Amélioration du sommeil et réduction des dépendances',
      'Relaxation et amélioration de la concentration',
      'Soulagement des douleurs et accélération de la guérison',
      'Amélioration de la digestion',
      'Sentiment de paix et d\'équilibre',
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
        question: 'À quoi sert le Reiki ?',
        answer: 'Le Reiki est utilisé pour améliorer le bien-être physique et émotionnel. Il aide à équilibrer l\'énergie vitale d\'une personne, souvent appelée « chi » ou « qi », qui peut être déséquilibrée ou bloquée en raison du stress, de la maladie ou des blessures.',
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
    oldSiteUrl: 'https://angeline-nj.com/contact',
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
    oldSiteUrl: 'https://angeline-nj.com/formations',
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
    oldSiteUrl: 'https://angeline-nj.com/boutique/mes-prestations',
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
    icon: '',
    badge: 'PDF',
    shortDescription: 'Téléchargez nos rituels guidés en PDF pour pratiquer chez vous :\n• Protection\n• Attirer l\'amour\n• Abondance et chance\n• Manifester un projet\n• Couper un lien',
    price: '3,90€',
    format: 'PDF téléchargeable',
    oldSiteUrl: 'https://angeline-nj.com/contact',
    intro: 'Chaque rituel au format PDF est téléchargeable immédiatement et contient un accompagnement complet pour réaliser un rituel simple, efficace, avec toute la protection et l\'énergie nécessaires. L\'avantage de ce format est de pouvoir le refaire autant de fois que nécessaire, selon vos besoins.',
    forWho: [
      'Vous souhaitez pratiquer des rituels en autonomie',
      'Vous voulez un guide détaillé étape par étape',
      'Vous cherchez un rituel réutilisable à volonté',
      'Vous préférez un format PDF téléchargeable',
    ],
    whatYouGet: [
      'Un PDF complet téléchargeable immédiatement',
      'Instructions détaillées pour réaliser le rituel',
      'Liste du matériel nécessaire (simple et accessible)',
      'Toute la protection et l\'énergie nécessaires incluses',
      'Possibilité de refaire le rituel autant de fois que nécessaire',
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
        title: 'Paiement',
        description: 'Procédez au paiement sécurisé (3,90€).',
      },
      {
        step: 4,
        title: 'Téléchargement immédiat',
        description: 'Téléchargez votre PDF immédiatement et pratiquez quand vous le souhaitez.',
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
    icon: '',
    badge: 'Vidéo',
    shortDescription: 'Suivez nos rituels guidés en vidéo pour une pratique accompagnée :\n• Protection\n• Attirer l\'amour\n• Abondance et chance\n• Manifester un projet\n• Couper un lien',
    price: '19.90€',
    format: 'Vidéo guidée',
    oldSiteUrl: 'https://angeline-nj.com/contact',
    intro: 'Chaque rituel est réalisé pour vous et personnalisé à votre intention, puis transmis avec un témoignage visuel de son activation. La vidéo vous est envoyée sous 48 heures.',
    forWho: [
      'Vous souhaitez qu\'un rituel soit réalisé pour vous',
      'Vous voulez un rituel personnalisé à votre intention',
      'Vous préférez déléguer la pratique du rituel',
      'Vous cherchez un témoignage visuel de l\'activation',
    ],
    whatYouGet: [
      'Un rituel réalisé pour vous par une praticienne expérimentée',
      'Personnalisation complète selon votre intention',
      'Témoignage visuel de l\'activation du rituel',
      'Vidéo envoyée sous 48 heures maximum',
      'Rituel chargé avec toute l\'\u00e9nergie nécessaire',
    ],
    process: [
      {
        step: 1,
        title: 'Boutique',
        description: 'Rendez-vous dans la boutique, catégorie "Rituels".',
      },
      {
        step: 2,
        title: 'Choix et intention',
        description: 'Sélectionnez le rituel vidéo et détaillez votre intention dans le formulaire.',
      },
      {
        step: 3,
        title: 'Paiement',
        description: 'Procédez au paiement sécurisé (19,90€).',
      },
      {
        step: 4,
        title: 'Réception sous 48h',
        description: 'Recevez la vidéo de votre rituel personnalisé par email sous 48 heures.',
      },
    ],
    faq: [
      {
        question: 'Qui réalise le rituel ?',
        answer: 'Le rituel est réalisé par Angeline, praticienne expérimentée, avec toute la protection et l\'énergie nécessaires.',
      },
      {
        question: 'Dois-je fournir des informations spécifiques ?',
        answer: 'Oui, plus vous détaillez votre intention dans le formulaire de commande, plus le rituel sera personnalisé et efficace.',
      },
      {
        question: 'Que contient la vidéo ?',
        answer: 'La vidéo montre le rituel réalisé pour vous avec un témoignage visuel de son activation. C\'est une preuve de la réalisation du rituel.',
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
