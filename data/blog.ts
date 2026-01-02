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
      { "type": "p", "value": "Dans un monde où la guidance spirituelle devient essentielle, les oracles se révèlent être des outils puissants pour se reconnecter à son intuition et recevoir des messages clairs. Angeline NJ a créé une collection unique d'oracles, chacun conçu avec amour et intention pour accompagner votre cheminement spirituel." },
      { "type": "h2", "value": "Pourquoi choisir un oracle créé par Angeline NJ ?" },
      { "type": "p", "value": "Contrairement aux oracles traditionnels, chaque création d'Angeline NJ est le fruit d'une connexion profonde avec l'énergie universelle et d'une compréhension intime des besoins spirituels modernes. Ces oracles ne sont pas de simples jeux de cartes : ce sont des outils de transformation personnelle, créés par une praticienne expérimentée qui utilise elle-même ces supports dans ses consultations." },
      { "type": "h2", "value": "Les oracles phares de la collection" },
      { "type": "h3", "value": "Le Mystica 💜 - L'oracle ultime" },
      { "type": "p", "value": "Avec ses 98 cartes magiques, Le Mystica est l'oracle le plus complet de la collection. Il réunit en un seul jeu tout ce dont vous avez besoin pour répondre à toutes vos questions. Plus besoin de cumuler les jeux : Le Mystica suffit pour explorer tous les domaines de votre vie." },
      { "type": "h3", "value": "L'Éveil Intérieur 🕊️ - Pour tous les niveaux" },
      { "type": "p", "value": "Cet oracle de 45 cartes est accessible à tous, que vous soyez débutant ou confirmé. Parfait pour tirer votre carte du jour et recevoir le message dont vous avez besoin. Son approche douce et bienveillante en fait un compagnon idéal pour votre développement spirituel." },
      { "type": "h3", "value": "T'es pas prête... 💕 - L'oracle messager moderne" },
      { "type": "p", "value": "Avec 78 cartes au ton direct et fun, cet oracle vous parle comme une amie de confiance. Équilibré entre messages positifs et négatifs, il vous offre des réponses honnêtes et sans détour. Parfait pour celles qui veulent une guidance claire et moderne." },
      { "type": "h3", "value": "Les 12 Étoiles 💫 - L'extension astrologique" },
      { "type": "p", "value": "Cette extension unique de 12 cartes représente les signes astraux. Chaque carte dévoile le nom du signe et ses traits de caractère spécifiques, ajoutant une dimension astrologique à vos tirages." },
      { "type": "h2", "value": "Des packs exclusifs pour aller plus loin" },
      { "type": "p", "value": "Angeline NJ propose également des coffrets et packs spéciaux qui combinent plusieurs oracles pour une expérience complète. Le Coffret des Messages réunit L'Éveil Intérieur et T'es pas prête, tandis que le Pack Love combine deux oracles sentimentaux pour explorer votre vie amoureuse sous tous ses aspects." },
      { "type": "h2", "value": "À quoi servent ces oracles ?" },
      { "type": "ul", "value": [
        "Recevoir une guidance quotidienne claire et bienveillante",
        "Développer votre intuition et votre connexion spirituelle",
        "Obtenir des réponses à vos questions sur l'amour, le travail, la spiritualité",
        "Accompagner votre développement personnel et votre éveil spirituel",
        "Pratiquer la cartomancie de manière moderne et accessible"
      ]},
      { "type": "h2", "value": "Pourquoi investir dans un oracle Angeline NJ ?" },
      { "type": "p", "value": "Chaque oracle est créé avec une intention pure et une énergie positive. Angeline NJ utilise elle-même ces oracles dans ses consultations professionnelles, garantissant leur efficacité et leur justesse. En choisissant un de ses oracles, vous investissez dans un outil de qualité qui vous accompagnera pendant des années dans votre cheminement spirituel." },
      { "type": "cta", "value": "Découvrez tous les oracles d'Angeline NJ dans la boutique et trouvez celui qui résonne avec votre âme. Chaque oracle est disponible en stock limité." }
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
      { "type": "p", "value": "Face à la magnifique collection d'oracles créés par Angeline NJ, vous vous demandez peut-être lequel choisir ? Chaque oracle a sa personnalité, son énergie et ses spécificités. Ce guide vous aidera à faire le bon choix selon vos besoins et votre niveau." },
      { "type": "h2", "value": "Pour les débutants : par où commencer ?" },
      { "type": "h3", "value": "L'Éveil Intérieur 🕊️ - Le choix idéal pour débuter" },
      { "type": "p", "value": "Si vous débutez dans le monde des oracles, L'Éveil Intérieur est fait pour vous. Avec ses 45 cartes accessibles et ses messages clairs, il vous permet de vous familiariser avec la pratique sans vous sentir submergé. Parfait pour tirer votre carte du jour et développer progressivement votre intuition." },
      { "type": "h3", "value": "T'es pas prête... 💕 - Pour une approche moderne" },
      { "type": "p", "value": "Vous préférez un ton direct et moderne ? T'es pas prête est l'oracle qu'il vous faut. Avec son langage actuel et son approche décomplexée, il rend la cartomancie accessible et fun. Idéal si vous voulez des réponses sans détour." },
      { "type": "h2", "value": "Pour les pratiquants confirmés" },
      { "type": "h3", "value": "Le Mystica 💜 - L'oracle complet" },
      { "type": "p", "value": "Vous pratiquez déjà la cartomancie et cherchez un outil complet ? Le Mystica avec ses 98 cartes est l'oracle ultime. Il remplace tous vos autres jeux et vous permet d'explorer tous les domaines avec profondeur et précision. C'est l'investissement parfait pour les passionnés." },
      { "type": "h2", "value": "Selon vos besoins spécifiques" },
      { "type": "h3", "value": "Pour l'amour et les relations" },
      { "type": "p", "value": "Le Pack Love combine deux oracles sentimentaux pour une exploration complète de votre vie amoureuse. T'es pas prête apporte des messages directs sur vos relations, tandis que le second oracle offre une perspective complémentaire." },
      { "type": "h3", "value": "Pour la guidance spirituelle quotidienne" },
      { "type": "p", "value": "Le Coffret des Messages réunit L'Éveil Intérieur et T'es pas prête, vous offrant deux approches complémentaires : l'une douce et spirituelle, l'autre directe et moderne. Parfait pour varier vos tirages selon votre humeur." },
      { "type": "h3", "value": "Pour approfondir avec l'astrologie" },
      { "type": "p", "value": "Les 12 Étoiles est une extension parfaite à ajouter à n'importe quel oracle. Elle apporte une dimension astrologique à vos tirages et vous permet d'identifier les influences des signes zodiacaux dans vos lectures." },
      { "type": "h2", "value": "Conseils pour faire votre choix" },
      { "type": "ul", "value": [
        "Écoutez votre intuition : quel oracle vous attire visuellement ?",
        "Réfléchissez à votre niveau : débutant ou confirmé ?",
        "Identifiez vos besoins : guidance générale, amour, spiritualité ?",
        "Considérez votre budget : oracle unique ou pack complet ?",
        "Pensez à l'évolution : certains oracles grandissent avec vous"
      ]},
      { "type": "h2", "value": "Puis-je avoir plusieurs oracles ?" },
      { "type": "p", "value": "Absolument ! Beaucoup de pratiquants possèdent plusieurs oracles pour différentes situations. Vous pouvez commencer avec un oracle de base comme L'Éveil Intérieur, puis ajouter Le Mystica quand vous serez plus à l'aise, et compléter avec Les 12 Étoiles pour la dimension astrologique." },
      { "type": "cta", "value": "Explorez la collection complète des oracles Angeline NJ dans la boutique. Chaque oracle est unique et créé avec amour pour votre guidance spirituelle." }
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
      { "type": "p", "value": "Au-delà de sa collection permanente, Angeline NJ crée régulièrement des éditions limitées et des packs exclusifs qui deviennent rapidement des pièces de collection. Ces créations uniques combinent plusieurs oracles ou proposent des versions spéciales disponibles en quantité limitée." },
      { "type": "h2", "value": "Les packs exclusifs actuellement disponibles" },
      { "type": "h3", "value": "Le Coffret des Messages 💕 - Édition spéciale" },
      { "type": "p", "value": "Ce coffret unique réunit deux oracles messagers complémentaires : L'Éveil Intérieur pour la guidance spirituelle douce, et T'es pas prête pour les messages directs. Ensemble, ils offrent une palette complète d'énergies et de perspectives. Disponible à prix réduit par rapport à l'achat séparé." },
      { "type": "h3", "value": "Le Pack Love 💖💞💐 - Pour l'amour" },
      { "type": "p", "value": "Une combinaison parfaite de deux oracles sentimentaux pour explorer votre vie amoureuse sous tous ses aspects. Ce pack exclusif vous permet d'obtenir des réponses complètes sur vos relations, vos blocages sentimentaux et votre avenir amoureux." },
      { "type": "h3", "value": "Le Pack NJ 🖤 - L'univers du surnaturel" },
      { "type": "p", "value": "Plongez dans l'univers fascinant du surnaturel avec ce pack unique inspiré par la famille Addams. Cet oracle vous transporte dans un monde où l'étrange rencontre l'élégance. Une édition collector pour les amateurs d'esthétique mystique." },
      { "type": "h2", "value": "Offres à durée limitée" },
      { "type": "h3", "value": "Lot à durée limitée ✨" },
      { "type": "p", "value": "Régulièrement, Angeline NJ propose des lots exceptionnels à petit prix, dans la limite des stocks disponibles. Ces offres peuvent inclure un oracle, des bougies, du palo santo, et d'autres accessoires spirituels. Une opportunité unique de découvrir plusieurs produits à prix réduit." },
      { "type": "h2", "value": "Pourquoi les éditions limitées sont-elles si prisées ?" },
      { "type": "ul", "value": [
        "Quantités limitées : une fois épuisées, elles ne reviennent pas",
        "Prix avantageux : les packs coûtent moins cher que l'achat séparé",
        "Combinaisons exclusives : des associations pensées pour se compléter",
        "Valeur collector : certaines éditions deviennent rares avec le temps",
        "Créations uniques : des designs et concepts exclusifs"
      ]},
      { "type": "h2", "value": "Comment ne pas manquer les prochaines éditions limitées ?" },
      { "type": "p", "value": "Les éditions limitées d'Angeline NJ partent très vite ! Pour être informé en avant-première des nouvelles sorties et des offres exclusives, suivez Angeline NJ sur Instagram et TikTok. Les annonces sont faites en priorité sur les réseaux sociaux, et les stocks s'écoulent souvent en quelques jours." },
      { "type": "h2", "value": "Investir dans une édition limitée : est-ce un bon choix ?" },
      { "type": "p", "value": "Absolument ! Les packs et éditions limitées offrent un excellent rapport qualité-prix. Vous obtenez plusieurs oracles ou produits pour un prix inférieur à l'achat séparé, tout en bénéficiant de combinaisons soigneusement pensées par Angeline NJ elle-même. De plus, certaines éditions deviennent introuvables une fois épuisées, ce qui en fait des pièces uniques dans votre collection." },
      { "type": "h2", "value": "Les éditions passées qui ont marqué" },
      { "type": "p", "value": "Certaines éditions limitées sont devenues légendaires parmi les collectionneurs. Le Pack NJ avec son esthétique inspirée de la famille Addams, ou encore les premiers tirages de L'Oracle Intérieur sont aujourd'hui recherchés. Chaque nouvelle édition limitée a le potentiel de devenir une pièce collector." },
      { "type": "cta", "value": "Ne manquez pas les éditions limitées actuellement disponibles ! Rendez-vous dans la boutique pour découvrir les packs exclusifs avant qu'ils ne soient épuisés. Stocks limités." }
    ]
  },
  {
    "slug": "utiliser-oracles-quotidien-guidance",
    "title": "Utiliser les oracles au quotidien : Votre rituel de guidance spirituelle",
    "date": "2026-01-18",
    "tags": ["Oracles", "Rituels", "Quotidien"],
    "cover": "🌟",
    "category": "Oracles",
    "metaDescription": "Apprenez à intégrer les oracles d'Angeline NJ dans votre routine quotidienne. Tirage du jour, rituels et conseils pratiques.",
    "h1": "Utiliser les oracles au quotidien : Votre rituel de guidance spirituelle",
    "sections": [
      { "type": "p", "value": "Vous avez acquis un oracle d'Angeline NJ et vous vous demandez comment l'intégrer dans votre quotidien ? Les oracles ne sont pas réservés aux grandes occasions : ils deviennent de véritables compagnons de vie quand on les utilise régulièrement. Découvrez comment créer votre rituel de guidance spirituelle." },
      { "type": "h2", "value": "Le tirage du matin : commencer la journée avec intention" },
      { "type": "p", "value": "Le tirage du matin est le rituel le plus populaire et le plus puissant. Chaque matin, avant de commencer votre journée, prenez quelques minutes pour tirer une carte. Cette pratique vous permet de recevoir la guidance dont vous avez besoin et de définir l'intention de votre journée." },
      { "type": "h3", "value": "Comment faire votre tirage du matin ?" },
      { "type": "ul", "value": [
        "Trouvez un moment calme, idéalement au réveil",
        "Mélangez votre oracle en pensant à votre journée",
        "Posez une question ou demandez simplement 'Quel message ai-je besoin de recevoir aujourd'hui ?'",
        "Tirez une carte et prenez le temps de la contempler",
        "Notez le message dans un journal si vous le souhaitez",
        "Gardez cette guidance à l'esprit tout au long de la journée"
      ]},
      { "type": "h2", "value": "Le tirage du soir : faire le bilan de sa journée" },
      { "type": "p", "value": "Le tirage du soir est parfait pour clôturer votre journée et intégrer les leçons apprises. Il vous permet de prendre du recul sur les événements vécus et de recevoir des conseils pour le lendemain." },
      { "type": "h2", "value": "Créer votre espace sacré pour les tirages" },
      { "type": "p", "value": "Pour maximiser l'efficacité de vos tirages, créez un espace dédié à votre pratique. Cela peut être un coin de votre chambre, un autel, ou simplement un endroit calme où vous vous sentez bien. Ajoutez des bougies, des cristaux, ou tout élément qui élève votre vibration." },
      { "type": "h2", "value": "Les différents types de tirages quotidiens" },
      { "type": "h3", "value": "Le tirage à une carte" },
      { "type": "p", "value": "Parfait pour une guidance rapide et claire. Idéal le matin ou quand vous avez besoin d'une réponse directe à une question simple." },
      { "type": "h3", "value": "Le tirage à trois cartes" },
      { "type": "p", "value": "Passé - Présent - Futur, ou Situation - Action - Résultat. Ce tirage vous donne une vision plus complète d'une situation." },
      { "type": "h3", "value": "Le tirage de la semaine" },
      { "type": "p", "value": "Chaque dimanche ou lundi, tirez 7 cartes pour avoir une vision de votre semaine. Une carte par jour vous guide à travers les énergies à venir." },
      { "type": "h2", "value": "Tenir un journal de vos tirages" },
      { "type": "p", "value": "Notez vos tirages quotidiens dans un journal dédié. Avec le temps, vous verrez des patterns émerger, votre intuition se développer, et vous pourrez mesurer l'exactitude des messages reçus. C'est aussi un magnifique témoignage de votre évolution spirituelle." },
      { "type": "h2", "value": "Quel oracle utiliser au quotidien ?" },
      { "type": "p", "value": "L'Éveil Intérieur est parfait pour les tirages quotidiens grâce à ses messages doux et accessibles. T'es pas prête convient si vous préférez des réponses directes. Le Mystica est idéal si vous voulez approfondir avec des tirages plus complexes. Vous pouvez aussi alterner entre plusieurs oracles selon votre humeur et vos besoins." },
      { "type": "h2", "value": "Conseils pour développer votre pratique" },
      { "type": "ul", "value": [
        "Soyez régulier : la constance développe l'intuition",
        "Faites confiance à votre première impression",
        "Ne tirez pas plusieurs fois pour la même question",
        "Respectez les messages, même s'ils vous challengent",
        "Purifiez régulièrement votre oracle avec de la sauge ou du palo santo",
        "Rangez votre oracle dans un endroit respectueux (pochette, boîte)"
      ]},
      { "type": "h2", "value": "Quand consulter les oracles ?" },
      { "type": "p", "value": "Au-delà du rituel quotidien, vous pouvez consulter vos oracles quand vous en ressentez le besoin : avant une décision importante, lors d'un moment de doute, pour clarifier une situation, ou simplement quand vous cherchez du réconfort et de la guidance. Les oracles sont là pour vous accompagner dans tous les moments de votre vie." },
      { "type": "cta", "value": "Commencez votre pratique quotidienne avec un oracle Angeline NJ. Découvrez la collection complète dans la boutique et trouvez votre compagnon spirituel idéal." }
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
