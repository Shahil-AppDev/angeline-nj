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
    "slug": "oracles-angeline-nj-creation-unique",
    "title": "Les Oracles d'Angeline NJ : Des créations uniques pour votre guidance spirituelle",
    "date": "2026-01-15",
    "tags": ["Oracles", "Cartomancie", "Guidance"],
    "cover": "🔮",
    "category": "Oracles",
    "metaDescription": "Découvrez les oracles créés par Angeline NJ : Le Mystica, L'Éveil Intérieur, T'es pas prête... Des outils divinatoires uniques pour votre développement spirituel.",
    "h1": "Les Oracles d'Angeline NJ : Des créations uniques pour votre guidance spirituelle",
    "sections": [
      { "type": "p", "value": "Vous rêvez de maîtriser l'art des oracles divinatoires et de posséder vos propres jeux créés par une experte ? Angeline NJ vous propose une collection unique d'oracles divinatoires ET une formation complète pour apprendre à les utiliser comme une professionnelle. Investissez dans votre avenir spirituel dès aujourd'hui !" },
      { "type": "h2", "value": "Pourquoi choisir un oracle créé par Angeline NJ ?" },
      { "type": "p", "value": "Chaque oracle d'Angeline NJ est un investissement dans votre pratique spirituelle. Créés par une praticienne qui les utilise quotidiennement dans ses consultations payantes, ces oracles divinatoires sont des outils professionnels accessibles à tous. Et pour les maîtriser parfaitement, la Formation Oracles Divinatoires vous enseigne toutes les techniques d'interprétation et de tirage." },
      { "type": "h2", "value": "Les oracles phares de la collection" },
      { "type": "h3", "value": "Le Mystica 💜 - L'oracle ultime" },
      { "type": "p", "value": "Avec ses 98 cartes magiques, Le Mystica est l'oracle le plus complet de la collection à 59€. Un investissement unique qui remplace tous vos autres jeux ! Parfait pour ceux qui suivent la Formation Oracles Divinatoires et veulent un outil professionnel complet." },
      { "type": "h3", "value": "L'Éveil Intérieur 🕊️ - Pour tous les niveaux" },
      { "type": "p", "value": "À 37€, cet oracle de 45 cartes est le choix idéal pour débuter. Recommandé pour les élèves de la Formation Oracles Divinatoires qui veulent pratiquer avec un jeu accessible et bienveillant." },
      { "type": "h3", "value": "T'es pas prête... 💕 - L'oracle messager moderne" },
      { "type": "p", "value": "À 39€, cet oracle de 78 cartes au ton moderne est parfait pour les consultations professionnelles. Les techniques enseignées dans la Formation Oracles Divinatoires s'appliquent parfaitement à ce jeu pour des lectures percutantes." },
      { "type": "h3", "value": "Les 12 Étoiles 💫 - L'extension astrologique" },
      { "type": "p", "value": "À seulement 12€, cette extension de 12 cartes ajoute la dimension astrologique à vos tirages. Un complément parfait pour enrichir votre pratique professionnelle !" },
      { "type": "h2", "value": "Des packs exclusifs pour aller plus loin" },
      { "type": "p", "value": "Économisez avec les packs exclusifs ! Le Coffret des Messages à 69€ (au lieu de 76€ séparément) et le Pack Love à 79€ (au lieu de 96€) sont des investissements intelligents pour développer votre activité de consultation." },
      { "type": "h2", "value": "À quoi servent ces oracles ?" },
      { "type": "ul", "value": [
        "Démarrer votre activité de consultation avec des oracles professionnels",
        "Proposer des tirages à vos clients avec des outils reconnus",
        "Maîtriser l'interprétation grâce à la Formation Oracles Divinatoires (49€)",
        "Investir dans des outils qui se rentabilisent dès les premières consultations",
        "Accéder à des oracles exclusifs créés par une experte"
      ]},
      { "type": "h2", "value": "Pourquoi investir dans un oracle Angeline NJ ?" },
      { "type": "p", "value": "Angeline NJ utilise ces oracles dans ses consultations payantes quotidiennes. Leur efficacité est prouvée ! En les achetant ET en suivant la Formation Oracles Divinatoires, vous obtenez les mêmes outils et compétences qu'une professionnelle. Investissement total : à partir de 86€ (formation 49€ + oracle 37€)." },
      { "type": "cta", "value": "🎯 PACK COMPLET : Formation Oracles Divinatoires (49€) + Oracle de votre choix = Démarrez votre activité ! Visitez la boutique pour choisir votre oracle et inscrivez-vous à la formation pour maîtriser l'art divinatoire. Stocks limités !" }
    ]
  },
  {
    "slug": "comment-choisir-oracle-angeline-nj",
    "title": "Comment choisir votre oracle Angeline NJ : Guide complet",
    "date": "2026-01-16",
    "tags": ["Oracles", "Guide", "Débutants"],
    "cover": "✨",
    "category": "Oracles",
    "metaDescription": "Vous hésitez entre les différents oracles d'Angeline NJ ? Découvrez quel oracle correspond le mieux à vos besoins et votre niveau.",
    "h1": "Comment choisir votre oracle Angeline NJ : Guide complet",
    "sections": [
      { "type": "p", "value": "Vous voulez investir dans un oracle divinatoire professionnel mais ne savez pas lequel choisir ? Ce guide vous aide à sélectionner l'oracle parfait pour VOTRE activité, combiné à la Formation Oracles Divinatoires pour maximiser votre investissement." },
      { "type": "h2", "value": "Pour les débutants : par où commencer ?" },
      { "type": "h3", "value": "L'Éveil Intérieur 🕊️ - Le choix idéal pour débuter" },
      { "type": "p", "value": "PACK DÉBUTANT RECOMMANDÉ : Formation Oracles Divinatoires (49€) + L'Éveil Intérieur (37€) = 86€. Vous apprenez les techniques ET vous pratiquez avec un oracle professionnel. Rentabilisé dès votre 3ème consultation à 30€ !" },
      { "type": "h3", "value": "T'es pas prête... 💕 - Pour une approche moderne" },
      { "type": "p", "value": "PACK MODERNE : Formation Oracles Divinatoires (49€) + T'es pas prête (39€) = 88€. Parfait pour une clientèle jeune qui apprécie les messages directs. Votre style unique de consultation commence ici !" },
      { "type": "h2", "value": "Pour les pratiquants confirmés" },
      { "type": "h3", "value": "Le Mystica 💜 - L'oracle complet" },
      { "type": "p", "value": "PACK PROFESSIONNEL : Formation Oracles Divinatoires (49€) + Le Mystica (59€) = 108€. L'outil le plus complet + les techniques avancées = Vous êtes prêt(e) pour des consultations premium à 50€ et plus !" },
      { "type": "h2", "value": "Selon vos besoins spécifiques" },
      { "type": "h3", "value": "Pour l'amour et les relations" },
      { "type": "p", "value": "PACK LOVE (79€) + Formation (49€) = 128€. Spécialisez-vous dans les consultations sentimentales, le marché le plus demandeur ! Proposez des tirages amoureux à 40-50€." },
      { "type": "h3", "value": "Pour la guidance spirituelle quotidienne" },
      { "type": "p", "value": "COFFRET DES MESSAGES (69€) + Formation (49€) = 118€. Deux oracles = deux styles de consultation pour toucher une clientèle plus large. Doublez vos possibilités de revenus !" },
      { "type": "h3", "value": "Pour approfondir avec l'astrologie" },
      { "type": "p", "value": "Les 12 Étoiles (12€) : Ajoutez la dimension astrologique à vos consultations. Proposez des tirages 'Oracle + Astrologie' à prix premium. Petit investissement, grande valeur ajoutée !" },
      { "type": "h2", "value": "Conseils pour faire votre choix" },
      { "type": "ul", "value": [
        "Votre budget : De 86€ (débutant) à 128€ (spécialisé)",
        "Votre clientèle cible : jeune/moderne ou spirituelle/douce ?",
        "Vos objectifs : consultations générales ou spécialisation (amour, etc.) ?",
        "Votre rentabilité : Investissement remboursé en 3-5 consultations",
        "TOUJOURS inclure la Formation Oracles Divinatoires (49€) pour maîtriser l'outil"
      ]},
      { "type": "h2", "value": "Puis-je avoir plusieurs oracles ?" },
      { "type": "p", "value": "OUI ! Stratégie recommandée : 1) Formation (49€) + 1 oracle (37-59€) pour démarrer. 2) Après vos premières consultations payantes, réinvestissez dans un 2ème oracle pour diversifier votre offre. 3) Ajoutez Les 12 Étoiles (12€) pour des consultations premium. Chaque oracle = nouvelle source de revenus !" },
      { "type": "cta", "value": "💰 INVESTISSEZ MALIN : Formation Oracles Divinatoires (49€) + Oracle au choix = Votre activité de consultation démarre ! Rendez-vous dans la boutique pour choisir votre pack et dans les formations pour vous inscrire. Stocks limités !" }
    ]
  },
  {
    "slug": "editions-limitees-oracles-angeline-nj",
    "title": "Éditions limitées et packs exclusifs : Les oracles collectors d'Angeline NJ",
    "date": "2026-01-17",
    "tags": ["Oracles", "Éditions limitées", "Exclusivité"],
    "cover": "💎",
    "category": "Oracles",
    "metaDescription": "Ne manquez pas les éditions limitées des oracles d'Angeline NJ. Découvrez les packs exclusifs et coffrets collectors disponibles.",
    "h1": "Éditions limitées et packs exclusifs : Les oracles collectors d'Angeline NJ",
    "sections": [
      { "type": "p", "value": "ÉCONOMISEZ GROS avec les packs exclusifs d'Angeline NJ ! Ces offres limitées combinent plusieurs oracles divinatoires à prix réduit. Parfait pour démarrer votre activité de consultation avec plusieurs outils professionnels sans exploser votre budget." },
      { "type": "h2", "value": "Les packs exclusifs actuellement disponibles" },
      { "type": "h3", "value": "Le Coffret des Messages 💕 - Édition spéciale" },
      { "type": "p", "value": "69€ au lieu de 76€ = 7€ d'économie ! Deux oracles = deux styles de consultation pour votre clientèle. Ajoutez la Formation Oracles Divinatoires (49€) et vous êtes prêt(e) pour 118€ total. Rentabilisé en 4 consultations à 30€ !" },
      { "type": "h3", "value": "Le Pack Love 💖💞💐 - Pour l'amour" },
      { "type": "p", "value": "79€ au lieu de 96€ = 17€ d'économie ! SPÉCIALISEZ-VOUS dans les consultations sentimentales (marché le plus lucratif). Pack Love (79€) + Formation (49€) = 128€. Proposez des consultations amoureuses à 40-50€ et rentabilisez en 3 séances !" },
      { "type": "h3", "value": "Le Pack NJ 🖤 - L'univers du surnaturel" },
      { "type": "p", "value": "69€ pour ce pack collector à l'esthétique unique ! Attirez une clientèle qui aime l'univers mystique et gothique. Différenciez-vous avec un oracle que personne d'autre n'a. + Formation (49€) = 118€ pour une offre exclusive." },
      { "type": "h2", "value": "Offres à durée limitée" },
      { "type": "h3", "value": "Lot à durée limitée ✨" },
      { "type": "p", "value": "SURVEILLEZ les offres flash ! Lots à 39€ incluant oracle + accessoires. Stock ultra limité, partent en quelques heures. Suivez Instagram/TikTok pour être alerté(e) en premier. Parfait pour démarrer avec un budget mini !" },
      { "type": "h2", "value": "Pourquoi les éditions limitées sont-elles si prisées ?" },
      { "type": "ul", "value": [
        "Économies réelles : jusqu'à 17€ d'économie sur les packs",
        "ROI rapide : Investissement remboursé en 3-5 consultations",
        "Plusieurs oracles = Offre diversifiée pour plus de clients",
        "Stocks limités : Achetez maintenant ou manquez l'opportunité",
        "Avec la Formation (49€) : Vous maîtrisez TOUS vos oracles"
      ]},
      { "type": "h2", "value": "Comment ne pas manquer les prochaines éditions limitées ?" },
      { "type": "p", "value": "ALERTE BUSINESS : Suivez @angelinenj sur Instagram et TikTok pour les offres flash ! Les packs partent en 24-48h. Ne ratez pas votre chance d'investir malin dans votre activité de consultation." },
      { "type": "h2", "value": "Investir dans une édition limitée : est-ce un bon choix ?" },
      { "type": "p", "value": "OUI ! Calcul simple : Pack à 69-79€ + Formation 49€ = 118-128€. Vous proposez des consultations à 30-50€. Après 3-5 clients, vous êtes remboursé(e) et tout le reste est PROFIT. Les packs sont l'investissement le plus intelligent pour démarrer rapidement." },
      { "type": "h2", "value": "Les éditions passées qui ont marqué" },
      { "type": "p", "value": "STRATÉGIE GAGNANTE : 1) Achetez un pack limité maintenant. 2) Suivez la Formation Oracles Divinatoires. 3) Commencez vos consultations. 4) Réinvestissez vos premiers gains dans d'autres oracles. Construisez votre empire spirituel étape par étape !" },
      { "type": "cta", "value": "🔥 OFFRE LIMITÉE : Packs exclusifs + Formation Oracles Divinatoires = Votre business clé en main ! Boutique pour les packs, Formations pour apprendre. Stocks partent vite, ne tardez pas !" }
    ]
  },
  {
    "slug": "utiliser-oracles-quotidien-guidance",
    "title": "Conseils pour utiliser et entretenir vos oracles au quotidien",
    "date": "2026-01-18",
    "tags": ["Oracles", "Conseils", "Quotidien"],
    "cover": "🌟",
    "category": "Oracles",
    "metaDescription": "Découvrez comment conserver, nettoyer et utiliser vos oracles. Conseils pratiques sur l'énergie, le rangement et les meilleurs moments pour consulter vos cartes.",
    "h1": "Conseils pour utiliser et entretenir vos oracles au quotidien",
    "sections": [
      { "type": "p", "value": "Les oracles sont bien plus que de simples cartes : ce sont des outils de guidance spirituelle qui peuvent vous accompagner au quotidien. Découvrez pourquoi tant de personnes intègrent les oracles dans leur routine et comment en prendre soin pour préserver leur énergie." },
      { "type": "h2", "value": "Pourquoi les oracles sont-ils si puissants ?" },
      { "type": "p", "value": "Les oracles agissent comme un miroir de votre âme. Ils vous aident à clarifier vos pensées, à prendre du recul sur vos situations et à recevoir des messages de guidance. Contrairement à ce qu'on pourrait penser, les oracles ne prédisent pas l'avenir de manière figée : ils vous montrent les énergies du moment et les possibilités qui s'offrent à vous." },
      { "type": "h3", "value": "Les bienfaits des oracles au quotidien" },
      { "type": "ul", "value": [
        "Clarté mentale : Aide à démêler vos pensées confuses",
        "Connexion intuitive : Développe votre intuition naturelle",
        "Guidance bienveillante : Reçoit des messages d'encouragement",
        "Prise de décision : Éclaire vos choix importants",
        "Rituel apaisant : Crée un moment de pause dans votre journée",
        "Développement personnel : Vous aide à mieux vous connaître"
      ]},
      { "type": "h2", "value": "Comment conserver et entretenir vos oracles ?" },
      { "type": "p", "value": "Vos oracles sont des outils sacrés qui méritent un soin particulier. Voici mes meilleurs conseils pour préserver leur énergie et leur beauté au fil du temps." },
      { "type": "h3", "value": "Le rangement de vos cartes" },
      { "type": "ul", "value": [
        "Utilisez une pochette en tissu naturel (coton, soie, velours)",
        "Évitez les matières synthétiques qui bloquent l'énergie",
        "Rangez-les dans un endroit calme, à l'abri de la lumière directe",
        "Ne les laissez pas traîner n'importe où",
        "Créez un espace dédié pour vos oracles (autel, boîte sacrée)",
        "Gardez-les loin des énergies négatives ou des disputes"
      ]},
      { "type": "h3", "value": "Le nettoyage énergétique de vos oracles" },
      { "type": "p", "value": "Comme tout objet spirituel, vos oracles absorbent les énergies. Il est essentiel de les nettoyer régulièrement pour qu'ils restent clairs et efficaces dans leurs messages." },
      { "type": "ul", "value": [
        "Fumigation : Passez-les dans la fumée de sauge blanche ou palo santo",
        "Sélénite : Placez une pierre de sélénite sur votre jeu pendant la nuit",
        "Lune : Exposez-les à la lumière de la pleine lune (pas en direct, derrière une vitre)",
        "Intention : Visualisez une lumière blanche qui purifie chaque carte",
        "Fréquence : Nettoyez après chaque utilisation intense ou une fois par semaine minimum",
        "Après un tirage difficile : Purifiez immédiatement pour libérer les énergies lourdes"
      ]},
      { "type": "h2", "value": "Conseils pour préserver l'énergie de vos oracles" },
      { "type": "h3", "value": "Qui peut toucher vos cartes ?" },
      { "type": "p", "value": "C'est une question importante ! Vos oracles se connectent à VOTRE énergie. Idéalement, vous êtes la seule personne à les manipuler. Si quelqu'un d'autre les touche, pensez à les purifier ensuite. Certaines personnes laissent leurs consultants mélanger les cartes, d'autres préfèrent garder ce lien exclusif. Écoutez votre intuition sur ce qui vous semble juste." },
      { "type": "h3", "value": "L'importance du respect envers vos oracles" },
      { "type": "ul", "value": [
        "Manipulez-les avec douceur et respect",
        "Ne les utilisez jamais par jeu ou pour vous moquer",
        "Remerciez vos cartes après chaque tirage",
        "Ne forcez pas les messages : si vous n'êtes pas réceptive, attendez",
        "Créez un rituel avant chaque utilisation (respiration, bougie, intention)",
        "Faites confiance aux messages reçus, même s'ils vous surprennent"
      ]},
      { "type": "h2", "value": "Quand utiliser vos oracles ?" },
      { "type": "p", "value": "Il n'y a pas de règles strictes, mais certains moments sont particulièrement propices à la guidance des oracles." },
      { "type": "h3", "value": "Les meilleurs moments pour consulter" },
      { "type": "ul", "value": [
        "Le matin : Pour recevoir la guidance du jour",
        "Avant une décision importante : Pour clarifier vos options",
        "En période de doute : Pour retrouver votre direction",
        "Lors des nouvelles lunes : Pour les nouveaux départs",
        "Lors des pleines lunes : Pour faire le bilan et libérer",
        "Quand vous ressentez le besoin : Votre intuition vous guide"
      ]},
      { "type": "h3", "value": "Quand éviter de tirer les cartes ?" },
      { "type": "ul", "value": [
        "Quand vous êtes en colère ou très émotionnelle",
        "Si vous cherchez juste à confirmer ce que vous voulez entendre",
        "Quand vous tirez sans cesse sur la même question (respectez les messages)",
        "En état d'ivresse ou sous influence",
        "Si vous êtes malade ou très fatiguée (énergie basse)",
        "Par curiosité malsaine sur la vie des autres"
      ]},
      { "type": "h2", "value": "Créer un rituel sacré avec vos oracles" },
      { "type": "p", "value": "Un rituel simple mais régulier renforce votre connexion avec vos oracles et amplifie la clarté des messages reçus." },
      { "type": "h3", "value": "Exemple de rituel quotidien simple" },
      { "type": "ul", "value": [
        "Allumez une bougie ou un encens",
        "Prenez quelques respirations profondes pour vous centrer",
        "Tenez vos cartes contre votre cœur et formulez votre intention",
        "Mélangez les cartes en restant concentrée sur votre question",
        "Tirez votre carte et accueillez le message avec gratitude",
        "Notez le message dans un journal si vous le souhaitez",
        "Remerciez vos oracles et éteignez votre bougie"
      ]},
      { "type": "h2", "value": "L'énergie et la connexion avec vos oracles" },
      { "type": "p", "value": "Plus vous utilisez vos oracles avec respect et régularité, plus votre connexion devient forte. C'est comme une amitié : elle se nourrit de temps, d'attention et de confiance mutuelle. Vos oracles deviennent alors de véritables alliés spirituels qui vous connaissent intimement et vous guident avec précision." },
      { "type": "h3", "value": "Signes d'une bonne connexion avec vos oracles" },
      { "type": "ul", "value": [
        "Les messages résonnent profondément en vous",
        "Vous ressentez une émotion ou un frisson en tirant certaines cartes",
        "Les synchronicités se multiplient dans votre vie",
        "Vous développez votre intuition naturellement",
        "Vous vous sentez apaisée après un tirage",
        "Les conseils reçus se révèlent justes avec le temps"
      ]},
      { "type": "h2", "value": "Pourquoi choisir des oracles de qualité ?" },
      { "type": "p", "value": "La qualité de vos oracles influence directement la qualité de votre pratique. Des cartes créées avec intention, imprimées sur du papier de qualité et illustrées avec soin portent une énergie différente. Les oracles Angeline NJ sont conçus avec cette conscience spirituelle : chaque carte est pensée pour transmettre un message clair et bienveillant. Investir dans des oracles de qualité, c'est investir dans votre développement spirituel." },
      { "type": "cta", "value": "✨ Vous souhaitez approfondir votre pratique des oracles ? Découvrez nos formations complètes pour maîtriser l'art divinatoire et nos oracles créés avec intention dans la boutique. Pour des conseils personnalisés, contactez-moi !" }
    ]
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
