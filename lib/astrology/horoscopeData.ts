import { Horoscope, ZodiacSign } from './types';

// Horoscopes du jour (exemple - à mettre à jour quotidiennement)
export const dailyHoroscopes: Record<ZodiacSign, Horoscope> = {
  belier: {
    sign: 'belier',
    date: new Date().toISOString().split('T')[0],
    type: 'daily',
    general: "Aujourd'hui, votre énergie martienne est à son apogée. C'est le moment idéal pour prendre des initiatives et lancer de nouveaux projets. Votre courage naturel vous guidera vers le succès.",
    love: "En amour, votre passion débordante attire l'attention. Les célibataires pourraient faire une rencontre marquante. En couple, proposez une activité spontanée à votre partenaire.",
    career: "Au travail, votre leadership naturel brille. N'hésitez pas à prendre les devants sur un projet important. Vos idées innovantes seront bien accueillies.",
    health: "Canalisez votre énergie débordante par l'exercice physique. Une activité sportive vous fera le plus grand bien.",
    advice: "Restez patient et évitez les décisions impulsives. Votre force réside dans l'action réfléchie.",
    luckyNumber: 7,
    luckyColor: 'Rouge'
  },
  taureau: {
    sign: 'taureau',
    date: new Date().toISOString().split('T')[0],
    type: 'daily',
    general: "La stabilité que vous recherchez est à portée de main. Concentrez-vous sur vos objectifs à long terme et avancez avec détermination.",
    love: "Votre sensualité naturelle rayonne. C'est un excellent jour pour renforcer les liens avec votre partenaire par des gestes tendres et attentionnés.",
    career: "Votre persévérance porte ses fruits. Un projet sur lequel vous travaillez depuis longtemps pourrait enfin aboutir. Restez patient.",
    health: "Prenez soin de votre gorge et de vos cordes vocales. Une tisane apaisante vous fera du bien.",
    advice: "Accordez-vous un moment de plaisir sensoriel - un bon repas, de la musique douce, ou un massage.",
    luckyNumber: 6,
    luckyColor: 'Vert'
  },
  gemeaux: {
    sign: 'gemeaux',
    date: new Date().toISOString().split('T')[0],
    type: 'daily',
    general: "Votre curiosité intellectuelle est stimulée. C'est une excellente journée pour apprendre quelque chose de nouveau ou échanger des idées.",
    love: "La communication est la clé aujourd'hui. Exprimez vos sentiments avec sincérité. Les conversations profondes renforceront vos liens.",
    career: "Votre polyvalence est un atout majeur. Vous pourriez jongler avec plusieurs projets avec succès. Restez organisé.",
    health: "Votre système nerveux a besoin de repos. Pratiquez la respiration profonde pour calmer votre esprit.",
    advice: "Évitez de vous disperser. Concentrez-vous sur une ou deux priorités importantes.",
    luckyNumber: 5,
    luckyColor: 'Jaune'
  },
  cancer: {
    sign: 'cancer',
    date: new Date().toISOString().split('T')[0],
    type: 'daily',
    general: "Vos émotions sont particulièrement intenses aujourd'hui. Faites confiance à votre intuition pour naviguer les situations délicates.",
    love: "Votre sensibilité touche profondément votre partenaire. C'est un moment propice pour créer des souvenirs précieux ensemble.",
    career: "Votre empathie naturelle vous aide à comprendre les besoins de vos collègues. Utilisez cette force pour créer l'harmonie au travail.",
    health: "Prenez soin de votre système digestif. Privilégiez des aliments doux et réconfortants.",
    advice: "Créez un espace de confort et de sécurité chez vous. Votre foyer est votre sanctuaire.",
    luckyNumber: 2,
    luckyColor: 'Argenté'
  },
  lion: {
    sign: 'lion',
    date: new Date().toISOString().split('T')[0],
    type: 'daily',
    general: "Votre charisme naturel brille de mille feux. C'est votre moment pour être au centre de l'attention et inspirer les autres.",
    love: "Votre générosité et votre passion séduisent. Montrez votre affection de manière grandiose et sincère.",
    career: "Votre leadership est reconnu. Une opportunité de prendre les rênes d'un projet important pourrait se présenter.",
    health: "Votre cœur a besoin d'attention. Pratiquez des activités qui nourrissent votre joie de vivre.",
    advice: "Partagez les projecteurs. Votre grandeur s'exprime aussi dans votre capacité à élever les autres.",
    luckyNumber: 1,
    luckyColor: 'Or'
  },
  vierge: {
    sign: 'vierge',
    date: new Date().toISOString().split('T')[0],
    type: 'daily',
    general: "Votre attention aux détails vous permet de repérer des opportunités que d'autres manquent. Faites confiance à votre analyse.",
    love: "Montrez votre amour par des actes de service. Les petites attentions comptent énormément aujourd'hui.",
    career: "Votre efficacité et votre organisation impressionnent. C'est le moment de mettre de l'ordre dans vos projets.",
    health: "Établissez une routine saine. Votre corps réagit bien à la régularité et à la discipline.",
    advice: "Lâchez prise sur le perfectionnisme. Parfois, 'assez bien' est parfait.",
    luckyNumber: 5,
    luckyColor: 'Beige'
  },
  balance: {
    sign: 'balance',
    date: new Date().toISOString().split('T')[0],
    type: 'daily',
    general: "L'harmonie et l'équilibre sont à votre portée. Utilisez votre diplomatie naturelle pour résoudre les conflits.",
    love: "Votre charme vénusien opère. C'est un jour idéal pour une sortie romantique ou une conversation profonde avec votre partenaire.",
    career: "Votre capacité à voir tous les côtés d'une situation fait de vous un médiateur précieux. On pourrait solliciter votre avis.",
    health: "Trouvez l'équilibre entre activité et repos. Votre bien-être dépend de cette harmonie.",
    advice: "Prenez une décision que vous reportez. Faites confiance à votre jugement.",
    luckyNumber: 6,
    luckyColor: 'Rose'
  },
  scorpion: {
    sign: 'scorpion',
    date: new Date().toISOString().split('T')[0],
    type: 'daily',
    general: "Votre intensité émotionnelle est votre force aujourd'hui. Plongez profondément dans ce qui vous passionne.",
    love: "La passion et la profondeur caractérisent vos relations aujourd'hui. C'est un moment pour renforcer l'intimité émotionnelle.",
    career: "Votre détermination vous permet de surmonter les obstacles. Continuez à creuser jusqu'à trouver la vérité.",
    health: "Libérez les émotions refoulées. La transformation commence par l'acceptation.",
    advice: "Laissez aller ce qui ne vous sert plus. La transformation est votre pouvoir.",
    luckyNumber: 8,
    luckyColor: 'Bordeaux'
  },
  sagittaire: {
    sign: 'sagittaire',
    date: new Date().toISOString().split('T')[0],
    type: 'daily',
    general: "Votre optimisme est contagieux. Partagez votre vision positive avec ceux qui vous entourent.",
    love: "L'aventure et la spontanéité pimentent votre vie amoureuse. Proposez une escapade ou une nouvelle expérience.",
    career: "Votre vision à long terme impressionne. C'est le moment de présenter vos idées ambitieuses.",
    health: "Bougez et explorez. Votre corps a besoin de mouvement et d'air frais.",
    advice: "Restez ancré tout en rêvant grand. L'équilibre entre vision et action est essentiel.",
    luckyNumber: 3,
    luckyColor: 'Violet'
  },
  capricorne: {
    sign: 'capricorne',
    date: new Date().toISOString().split('T')[0],
    type: 'daily',
    general: "Votre discipline et votre détermination vous rapprochent de vos objectifs. Continuez à gravir la montagne, un pas à la fois.",
    love: "Montrez votre engagement par des actions concrètes. La stabilité que vous offrez est précieuse.",
    career: "Votre professionnalisme est reconnu. Une responsabilité importante pourrait vous être confiée.",
    health: "Prenez soin de vos os et articulations. L'exercice modéré et régulier est bénéfique.",
    advice: "Accordez-vous une pause. Même les plus ambitieux ont besoin de repos.",
    luckyNumber: 8,
    luckyColor: 'Gris'
  },
  verseau: {
    sign: 'verseau',
    date: new Date().toISOString().split('T')[0],
    type: 'daily',
    general: "Votre originalité et votre vision avant-gardiste sont appréciées. N'ayez pas peur d'être différent.",
    love: "L'amitié est la base de vos relations. Connectez-vous intellectuellement avec votre partenaire.",
    career: "Vos idées innovantes pourraient révolutionner un projet. Partagez votre vision unique.",
    health: "Votre système nerveux a besoin de calme. Pratiquez la méditation ou le yoga.",
    advice: "Restez fidèle à vos valeurs tout en restant ouvert aux autres perspectives.",
    luckyNumber: 4,
    luckyColor: 'Bleu électrique'
  },
  poissons: {
    sign: 'poissons',
    date: new Date().toISOString().split('T')[0],
    type: 'daily',
    general: "Votre intuition est particulièrement forte aujourd'hui. Faites confiance à vos ressentis et à votre guidance intérieure.",
    love: "Votre compassion et votre romantisme touchent profondément. Exprimez vos sentiments avec créativité.",
    career: "Votre créativité est un atout. Utilisez votre imagination pour résoudre les problèmes de manière unique.",
    health: "Protégez votre énergie sensible. Créez des limites saines avec les autres.",
    advice: "Ancrez-vous dans le présent. Vos rêves sont beaux, mais l'action concrète est nécessaire.",
    luckyNumber: 7,
    luckyColor: 'Turquoise'
  }
};
