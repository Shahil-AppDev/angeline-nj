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
    "title": "Choisir son premier Tarot ou Oracle : Le Guide Complet",
    "metaDescription": "Vous débutez en cartomancie ? Découvrez nos conseils d'experte pour bien choisir votre premier jeu de tarot ou oracle selon votre intuition et vos besoins.",
    "h1": "Comment choisir son premier jeu divinatoire : Guide pour débutants",
    "date": "2026-01-02",
    "tags": [
      "Cartomancie",
      "Tarot",
      "Débutant"
    ],
    "cover": "🃏",
    "category": "Cartomancie",
    "sections": [
      {
        "type": "h2",
        "value": "Écouter l'appel de l'intuition"
      },
      {
        "type": "p",
        "value": "La règle d'or en cartomancie est simple : laissez-vous attirer. Lorsque vous regardez les illustrations d'un jeu, que ressentez-vous ? Une connexion immédiate, une curiosité joyeuse ou une certaine confusion ? Vos yeux se poseront naturellement sur le jeu qui a un message pour vous. Ne vous fiez pas uniquement à la popularité d'un oracle sur les réseaux sociaux, mais à la réaction de votre cœur."
      },
      {
        "type": "h2",
        "value": "Tarot vs Oracle : Quelles différences ?"
      },
      {
        "type": "p",
        "value": "Il est crucial de comprendre l'outil que vous allez manipuler. Le Tarot (comme le Tarot de Marseille ou le Rider Waite Smith) possède une structure fixe de 78 cartes avec des arcanes majeurs et mineurs. C'est un système complexe qui demande un apprentissage rigoureux mais offre une précision inégalée. L'Oracle, quant à lui, est libre. Le nombre de cartes et les thématiques varient selon l'auteur. Les oracles sont souvent plus intuitifs et directs pour les débutants, idéaux pour une guidance émotionnelle quotidienne."
      },
      {
        "type": "h3",
        "value": "La qualité des illustrations et du toucher"
      },
      {
        "type": "p",
        "value": "Pour un premier jeu, assurez-vous que les images sont parlantes pour vous. Des illustrations riches en détails symboliques aideront votre intuition à s'exprimer plus facilement. Vérifiez également que le livret d'accompagnement est clair et pédagogique. Un bon guide doit vous aider à comprendre la philosophie du jeu sans brider votre propre ressenti."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Faut-il qu'on nous offre notre premier tarot ?",
            "answer": "Non, c'est une légende urbaine. Acheter son propre jeu est un acte d'engagement personnel fort envers sa pratique."
          },
          {
            "question": "Comment purifier son nouveau jeu ?",
            "answer": "Vous pouvez passer les cartes dans la fumée d'un encens de sauge ou les placer une nuit sur un amas de quartz."
          },
          {
            "question": "Peut-on prêter son jeu de cartes ?",
            "answer": "Il est préférable de le garder pour soi, car les cartes s'imprègnent de votre énergie personnelle."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/prestations'>guidance personnalisée par les cartes</a>  pour éclairer votre situation actuelle.",
          "<a href='/boutique'>catégorie Oracles & Tarots</a> ."
        ]
      }
    ]
  },
  {
    "slug": "5-signes-besoin-seance-reiki",
    "title": "5 Signes que vous avez besoin d'une Séance de Reiki",
    "metaDescription": "Fatigue chronique, blocages émotionnels, stress ? Découvrez les 5 signes qui indiquent qu'un soin Reiki est nécessaire pour rééquilibrer votre énergie.",
    "h1": "Quand faire une séance de Reiki ? Les signes qui ne trompent pas",
    "date": "2026-01-05",
    "tags": [
      "Reiki",
      "Énergie",
      "Bien-être"
    ],
    "cover": "✨",
    "category": "Reiki",
    "sections": [
      {
        "type": "h2",
        "value": "Une fatigue persistance malgré le repos"
      },
      {
        "type": "p",
        "value": "Si vous vous réveillez aussi fatigué(e) que la veille malgré une nuit complète, votre batterie énergétique est probablement épuisée ou fuit. Le Reiki agit comme un 'chargeur' naturel, colmatant les brèches de votre aura et revitalisant vos centres vitaux."
      },
      {
        "type": "h2",
        "value": "Un sentiment de submersion émotionnelle"
      },
      {
        "type": "p",
        "value": "Vous vous sentez à fleur de peau, irritable ou au bord des larmes sans raison apparente ? Vos émotions sont des énergies en mouvement qui se sont cristallisées. Le soin énergétique permet de libérer ces émotions stagnantes pour retrouver une clarté mentale et un apaisement immédiat."
      },
      {
        "type": "h3",
        "value": "Des douleurs physiques récurrentes"
      },
      {
        "type": "p",
        "value": "Le dos noué, des maux de tête fréquents ou des tensions dans le plexus solaire sont souvent les symptômes physiques de tensions énergétiques. Le Reiki aide à détendre les tissus en profondeur en agissant sur la cause vibratoire du malaise."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Le Reiki remplace-t-il un traitement médical ?",
            "answer": "Non, c'est un complément énergétique qui soutient le processus de guérison mais ne se substitue jamais à l'avis d'un médecin."
          },
          {
            "question": "Peut-on recevoir du Reiki si on ne croit pas aux énergies ?",
            "answer": "Oui, le Reiki fonctionne indépendamment des croyances. L'ouverture d'esprit facilite cependant la réception."
          },
          {
            "question": "Combien de temps dure l'effet d'un soin ?",
            "answer": "Les effets immédiats durent quelques jours, mais les transformations profondes s'inscrivent sur le long terme après plusieurs séances."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/reiki'>soins Reiki à distance</a>  et leurs bienfaits.",
          "<a href='/boutique'>pierres de lithothérapie</a> ."
        ]
      }
    ]
  },
  {
    "slug": "nettoyer-recharger-bijoux-pierres-naturelles",
    "title": "Comment Nettoyer et Recharger vos Bijoux en Pierres Naturelles",
    "metaDescription": "Découvrez les meilleures méthodes pour nettoyer, purifier et recharger vos bijoux en pierres naturelles. Guide complet pour préserver l'énergie de vos cristaux.",
    "h1": "Entretenir vos Bijoux en Pierres : Nettoyage et Rechargement",
    "date": "2026-01-08",
    "tags": [
      "Pierres",
      "Lithothérapie",
      "Entretien"
    ],
    "cover": "💎",
    "category": "Spiritualité",
    "sections": [
      {
        "type": "h2",
        "value": "Pourquoi nettoyer vos bijoux en pierres ?"
      },
      {
        "type": "p",
        "value": "Les pierres naturelles absorbent les énergies de leur environnement. Après un achat ou une utilisation prolongée, elles peuvent être saturées d'énergies négatives ou simplement épuisées. Un nettoyage régulier permet de les purifier et de restaurer leurs propriétés énergétiques."
      },
      {
        "type": "h2",
        "value": "Méthodes de nettoyage"
      },
      {
        "type": "h3",
        "value": "L'eau courante"
      },
      {
        "type": "p",
        "value": "Passez vos bijoux sous l'eau froide pendant quelques minutes en visualisant les énergies négatives qui s'écoulent. Attention : certaines pierres comme la sélénite ou la pyrite ne supportent pas l'eau !"
      },
      {
        "type": "h3",
        "value": "La fumigation"
      },
      {
        "type": "p",
        "value": "Utilisez de la sauge blanche, du palo santo ou de l'encens pour purifier vos pierres. Passez-les dans la fumée pendant quelques instants en formulant une intention de purification."
      },
      {
        "type": "h3",
        "value": "Le sel"
      },
      {
        "type": "p",
        "value": "Placez vos bijoux dans un bol de sel marin pendant quelques heures. Cette méthode est très efficace mais peut abîmer certaines pierres fragiles. Privilégiez le sel indirect (pierre dans un bol, bol dans le sel)."
      },
      {
        "type": "h2",
        "value": "Comment recharger vos pierres ?"
      },
      {
        "type": "h3",
        "value": "La lumière lunaire"
      },
      {
        "type": "p",
        "value": "Exposez vos bijoux à la lumière de la pleine lune pendant toute une nuit. C'est la méthode la plus douce et universelle, adaptée à toutes les pierres."
      },
      {
        "type": "h3",
        "value": "La lumière solaire"
      },
      {
        "type": "p",
        "value": "Quelques heures au soleil suffisent pour recharger la plupart des pierres. Attention : certaines pierres comme l'améthyste ou le quartz rose peuvent perdre leur couleur au soleil."
      },
      {
        "type": "h3",
        "value": "Les amas de quartz"
      },
      {
        "type": "p",
        "value": "Déposez vos bijoux sur une géode d'améthyste ou un amas de cristal de roche pendant plusieurs heures. Ces pierres ont la capacité de recharger les autres cristaux."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "À quelle fréquence nettoyer mes bijoux ?",
            "answer": "Idéalement après chaque utilisation intensive, ou au minimum une fois par mois pour un port quotidien."
          },
          {
            "question": "Puis-je porter mes bijoux pendant le nettoyage ?",
            "answer": "Non, il est préférable de les retirer pour un nettoyage efficace."
          },
          {
            "question": "Toutes les pierres supportent-elles l'eau ?",
            "answer": "Non, certaines pierres comme la sélénite, la pyrite ou la malachite se dissolvent ou s'oxydent au contact de l'eau. Privilégiez la fumigation pour ces pierres."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/boutique'>bijoux en pierres naturelles</a> de qualité sur notre boutique."
        ]
      }
    ]
  },
  {
    "slug": "nettoyage-energetique-sauge-palo-santo",
    "title": "Comment Purifier sa Maison : Sauge et Palo Santo",
    "metaDescription": "Énergies stagnantes ? Apprenez à nettoyer votre intérieur grâce à la fumigation de sauge blanche et de palo santo. Guide de purification spirituelle.",
    "h1": "Le Guide de la Purification Énergétique de votre Habitat",
    "date": "2026-01-12",
    "tags": [
      "Purification",
      "Sauge",
      "Maison"
    ],
    "cover": "🌿",
    "category": "Spiritualité",
    "sections": [
      {
        "type": "h2",
        "value": "La Sauge Blanche : Le grand nettoyage"
      },
      {
        "type": "p",
        "value": "La sauge blanche est l'outil de purification par excellence. Elle agit comme un véritable 'karcher' énergétique. On l'utilise pour déloger les énergies lourdes et négatives. Lors de la fumigation, passez dans chaque coin de vos pièces en gardant une intention de nettoyage claire."
      },
      {
        "type": "h2",
        "value": "Le Palo Santo : Inviter les énergies positives"
      },
      {
        "type": "p",
        "value": "Le 'Bois Sacré' d'Amérique du Sud a une vibration différente de la sauge. Tandis que la sauge nettoie tout, le palo santo a une action plus douce : il calme l'esprit et invite les énergies de paix."
      },
      {
        "type": "h3",
        "value": "Les précautions à prendre"
      },
      {
        "type": "p",
        "value": "Utilisez toujours un réceptacle résistant à la chaleur. Ne laissez jamais de fumigation sans surveillance et assurez-vous que tout est bien éteint après usage."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "À quelle fréquence purifier ?",
            "answer": "Une fois par saison ou après un événement difficile."
          },
          {
            "question": "Peut-on purifier sans fumée ?",
            "answer": "Oui, avec des sprays aux huiles essentielles."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/formations'>formations</a> .",
          "<a href='/boutique'>sauge et palo santo</a> ."
        ]
      }
    ]
  },
  {
    "slug": "7-chakras-comprendre-equilibrer",
    "title": "Guide des 7 Chakras : Signification et Harmonisation",
    "metaDescription": "Tout savoir sur les 7 chakras principaux. Apprenez à identifier les blocages et à harmoniser vos centres énergétiques pour un bien-être global.",
    "h1": "Comprendre et Équilibrer ses 7 Chakras Majeurs",
    "date": "2026-01-15",
    "tags": [
      "Chakras",
      "Énergie",
      "Bien-être"
    ],
    "cover": "🌈",
    "category": "Reiki",
    "sections": [
      {
        "type": "h2",
        "value": "Les chakras inférieurs"
      },
      {
        "type": "p",
        "value": "Les trois premiers chakras (Racine, Sacré, Plexus Solaire) nous lient à la terre. Le Racine gère la sécurité, le Sacré la créativité, et le Plexus la confiance en soi."
      },
      {
        "type": "h2",
        "value": "Le Chakra du Cœur"
      },
      {
        "type": "p",
        "value": "Situé au centre, c'est le pont entre les énergies terrestres et spirituelles. C'est le centre de l'amour inconditionnel et du pardon."
      },
      {
        "type": "h3",
        "value": "Les chakras supérieurs"
      },
      {
        "type": "p",
        "value": "La Gorge, le Troisième Œil et la Couronne nous connectent aux plans subtils. Ils régissent la communication, l'intuition et la spiritualité."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Comment savoir si un chakra est bloqué ?",
            "answer": "Par l'observation de vos peurs ou douleurs physiques."
          },
          {
            "question": "Le Reiki aide-t-il ?",
            "answer": "Oui, il réaligne et fluidifie la rotation des chakras."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/reiki'>soin Reiki</a>  harmonise vos chakras.",
          "<a href='/boutique'>pierres par chakra</a> ."
        ]
      }
    ]
  },
  {
    "slug": "voyance-bienveillante-lumiere-doute",
    "title": "Voyance Bienveillante : Pourquoi consulter en période de crise ?",
    "metaDescription": "La voyance peut être un outil de transformation. Découvrez comment une consultation éthique et bienveillante peut vous aider à surmonter vos doutes.",
    "h1": "La Voyance comme Outil de Croissance Personnelle",
    "date": "2026-01-18",
    "tags": [
      "Voyance",
      "Guidance",
      "Éthique"
    ],
    "cover": "👁️",
    "category": "Voyance",
    "sections": [
      {
        "type": "h2",
        "value": "Sortir de l'impasse mentale"
      },
      {
        "type": "p",
        "value": "La voyance permet de prendre de la hauteur. En canalisant les énergies du moment, le praticien identifie les obstacles cachés et les opportunités que vous ne percevez pas encore."
      },
      {
        "type": "h2",
        "value": "L'éthique au cœur de la consultation"
      },
      {
        "type": "p",
        "value": "Une voyance de qualité se reconnaît à son éthique. Je refuse toute forme de complaisance ou de prédictions anxiogènes. Mon rôle est de vous transmettre les messages avec douceur."
      },
      {
        "type": "h3",
        "value": "Préparer sa séance"
      },
      {
        "type": "p",
        "value": "Venez avec un esprit ouvert et des questions précises mais pas fermées. Cela permet une guidance beaucoup plus riche et constructive."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "La voyance est-elle infaillible ?",
            "answer": "Non, elle capte des potentiels. Votre libre arbitre peut modifier le futur."
          },
          {
            "question": "À quelle fréquence consulter ?",
            "answer": "Tous les 3 à 6 mois pour la même problématique."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/prestations'>consultations divinatoires</a> .",
          "<a href='/formations'>formations en cartomancie</a> ."
        ]
      }
    ]
  },
  {
    "slug": "vertus-amethyste-serenite-intuition",
    "title": "Améthyste : Propriétés, Bienfaits et Utilisation en Lithothérapie",
    "metaDescription": "Découvrez tout sur l'Améthyste. Ses vertus apaisantes, son rôle dans l'éveil spirituel et comment l'utiliser pour améliorer votre sommeil et votre intuition.",
    "h1": "L'Améthyste : La Reine des Pierres de Lithothérapie",
    "date": "2026-01-21",
    "tags": [
      "Lithothérapie",
      "Améthyste",
      "Pierres"
    ],
    "cover": "💜",
    "category": "Spiritualité",
    "sections": [
      {
        "type": "h2",
        "value": "Apaiser le mental et le stress"
      },
      {
        "type": "p",
        "value": "L'améthyste est avant tout une pierre de paix. Elle est extrêmement efficace pour calmer les pensées incessantes et l'anxiété. Elle est recommandée pour les insomnies."
      },
      {
        "type": "h2",
        "value": "Développer son intuition"
      },
      {
        "type": "p",
        "value": "Liée au chakra du Troisième Œil, l'améthyste facilite la méditation et l'accès aux plans supérieurs. Elle aide à affiner ses perceptions intuitives."
      },
      {
        "type": "h3",
        "value": "Nettoyer et recharger"
      },
      {
        "type": "p",
        "value": "Purifiez-la à l'eau claire ou par fumigation. Elle craint la lumière directe du soleil. Préférez un rechargement à la lune."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Où la placer ?",
            "answer": "Dans la chambre pour le sommeil ou le salon pour le calme."
          },
          {
            "question": "Usage quotidien ?",
            "answer": "Oui, c'est une pierre très stable."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/reiki'>séances de Reiki</a> .",
          "<a href='/boutique'>pierres</a> ."
        ]
      }
    ]
  },
  {
    "slug": "importance-ancrage-rester-serein",
    "title": "Comment s'ancrer : Techniques et Bienfaits de l'Ancrage",
    "metaDescription": "Vous vous sentez \"perché(e)\" ou anxieux(se) ? Découvrez l'importance de l'ancrage et des exercices simples pour revenir dans l'instant présent et stabiliser votre énergie.",
    "h1": "L'Ancrage : La Clé de la Stabilité Émotionnelle et Spirituelle",
    "date": "2026-01-24",
    "tags": [
      "Ancrage",
      "Sérénité",
      "Pratique"
    ],
    "cover": "🌳",
    "category": "Spiritualité",
    "sections": [
      {
        "type": "h2",
        "value": "Les signes d'un manque d'ancrage"
      },
      {
        "type": "p",
        "value": "Étoudries fréquentes, difficulté à passer à l'action, sensation de planer ou anxiété injustifiée sont les symptômes d'un manque de terre."
      },
      {
        "type": "h2",
        "value": "Techniques simples pour s'ancrer"
      },
      {
        "type": "p",
        "value": "Marcher pieds nus dans l'herbe, jardiner ou faire du sport. La visualisation de racines partant de vos pieds est aussi très puissante."
      },
      {
        "type": "h3",
        "value": "Les alliés de l'ancrage"
      },
      {
        "type": "p",
        "value": "En lithothérapie, les pierres noires et rouges sont vos alliées (Tourmaline noire, Jaspe rouge). Portez-les au niveau du bas du corps."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Pourquoi s'ancrer ?",
            "answer": "Sans racines solides, l'ouverture spirituelle peut devenir déstabilisante."
          },
          {
            "question": "Le Reiki aide-t-il ?",
            "answer": "Oui, on commence souvent par un travail sur le chakra racine."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/reiki'>soins énergétiques</a> .",
          "<a href='/boutique'>pierres d'ancrage</a> ."
        ]
      }
    ]
  },
  {
    "slug": "protection-energetique-empathes-hypersensibles",
    "title": "Protection Énergétique : Techniques pour Empathes et Hypersensibles",
    "metaDescription": "Vous êtes une éponge émotionnelle ? Apprenez à protéger votre énergie, à poser des limites et à nettoyer votre aura grâce à nos conseils d'experte.",
    "h1": "Se Protéger Énergétiquement : Le Guide des Hypersensibles",
    "date": "2026-01-27",
    "tags": [
      "Protection",
      "Énergie",
      "Hypersensibilité"
    ],
    "cover": "🛡️",
    "category": "Spiritualité",
    "sections": [
      {
        "type": "h2",
        "value": "Identifier les fuites"
      },
      {
        "type": "p",
        "value": "Apprendre à identifier les moments où l'autre puise dans votre réserve vitale est la première étape pour mettre en place des protections efficaces."
      },
      {
        "type": "h2",
        "value": "La bulle de lumière"
      },
      {
        "type": "p",
        "value": "Chaque matin, visualisez une bulle de lumière dorée tout autour de vous. Elle laisse passer l'amour mais bloque les énergies lourdes."
      },
      {
        "type": "h3",
        "value": "Labradorite et Tourmaline"
      },
      {
        "type": "p",
        "value": "La Labradorite protège sans absorber, tandis que la Tourmaline noire renvoie le négatif à la terre. Deux indispensables pour le public."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Comment se nettoyer ?",
            "answer": "Douche au sel marin ou fumigation de sauge."
          },
          {
            "question": "Pourquoi la fatigue en public ?",
            "answer": "Votre aura est peut-être trop poreuse."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/formations'>techniques de protection</a> .",
          "<a href='/boutique'>bijou en Labradorite</a> ."
        ]
      }
    ]
  },
  {
    "slug": "loi-attraction-manifester-desirs",
    "title": "Loi de l'Attraction : Le Guide pour Manifester vos Rêves",
    "metaDescription": "Comprenez enfin comment fonctionne la loi de l'attraction. Apprenez à aligner vos vibrations pour attirer l'abondance, l'amour et la réussite dans votre vie.",
    "h1": "Manifester sa Réalité : Tout savoir sur la Loi de l'Attraction",
    "date": "2026-01-30",
    "tags": [
      "Manifestation",
      "Abondance",
      "Vibration"
    ],
    "cover": "🧲",
    "category": "Spiritualité",
    "sections": [
      {
        "type": "h2",
        "value": "La vibration de l'abondance"
      },
      {
        "type": "p",
        "value": "Pour manifester, vous devez cultiver la gratitude pour ce que vous avez déjà. C'est la fréquence la plus proche de l'abondance."
      },
      {
        "type": "h2",
        "value": "Le pouvoir de la visualisation"
      },
      {
        "type": "p",
        "value": "En visualisant vos objectifs avec vos sens et en ressentant l'émotion associée, vous envoyez un signal puissant à votre subconscient."
      },
      {
        "type": "h3",
        "value": "Passer à l'action inspirée"
      },
      {
        "type": "p",
        "value": "La loi de l'attraction ne dispense pas d'agir. Elle permet de recevoir des impulsions qu'il faut suivre avec confiance."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Pourquoi ça ne marche pas ?",
            "answer": "À cause de croyances limitantes inconscientes."
          },
          {
            "question": "Quelles pierres aident ?",
            "answer": "La Citrine pour l'abondance ou le Quartz Rose pour l'amour."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/prestations'>voyance</a>  pour clarifier vos intentions.",
          "<a href='/boutique'>cristaux</a> ."
        ]
      }
    ]
  },
  {
    "slug": "reiki-enfants-soutien-doux",
    "title": "Reiki pour Enfants : Bienfaits, Stress et Sommeil",
    "metaDescription": "Le Reiki est une méthode naturelle idéale pour les enfants. Découvrez comment les soins énergétiques aident à gérer l'hyperactivité, l'anxiété et les troubles du sommeil chez les plus jeunes.",
    "h1": "Accompagner les Enfants avec le Reiki : Douceur et Équilibre",
    "date": "2026-02-02",
    "tags": [
      "Reiki",
      "Enfants",
      "Bien-être"
    ],
    "cover": "👶",
    "category": "Reiki",
    "sections": [
      {
        "type": "h2",
        "value": "Gérer l'hypersensibilité"
      },
      {
        "type": "p",
        "value": "Le Reiki aide les enfants à apaiser leur système nerveux et à mieux comprendre leurs émotions sans se laisser submerger."
      },
      {
        "type": "h2",
        "value": "Améliorer le sommeil"
      },
      {
        "type": "p",
        "value": "Une séance favorise une détente profonde, idéale pour calmer les peurs nocturnes et le stress scolaire."
      },
      {
        "type": "h3",
        "value": "Une pratique respectueuse"
      },
      {
        "type": "p",
        "value": "On respecte toujours le rythme de l'enfant. L'énergie passe même s'il ne reste pas immobile."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "À quel âge commencer ?",
            "answer": "Dès la naissance pour des séances très brèves."
          },
          {
            "question": "L'enfant doit-il être d'accord ?",
            "answer": "Oui, le consentement est primordial."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/reiki'>soins enfants</a> .",
          "<a href='/boutique'>pierres douces</a> ."
        ]
      }
    ]
  },
  {
    "slug": "signification-heures-miroirs-univers",
    "title": "Heures Miroirs : Signification et Messages Spirituels",
    "metaDescription": "Vous voyez souvent 11h11, 22h22 ou 12h12 ? Découvrez la signification cachée derrière les heures miroirs et les messages que vos guides tentent de vous transmettre.",
    "h1": "Heures Miroirs : Comment Décrypter les Signes de la Synchronicité",
    "date": "2026-02-05",
    "tags": [
      "Synchronicités",
      "Numérologie",
      "Signes"
    ],
    "cover": "⏰",
    "category": "Spiritualité",
    "sections": [
      {
        "type": "h2",
        "value": "Le 11h11 : Le réveil spirituel"
      },
      {
        "type": "p",
        "value": "C'est un signe de réalignement. L'univers vous invite à prêter attention à vos pensées car elles se manifestent."
      },
      {
        "type": "h2",
        "value": "Messages des nombres"
      },
      {
        "type": "p",
        "value": "Le 2 parle d'équilibre, le 3 de protection, le 4 de construction. Chaque heure a sa vibration propre."
      },
      {
        "type": "h3",
        "value": "Que faire ?"
      },
      {
        "type": "p",
        "value": "Notez ce que vous ressentiez à cet instant précis. L'heure miroir répond souvent à une interrogation intérieure."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Pourquoi j'en vois tout le temps ?",
            "answer": "Vous traversez une phase d'évolution rapide."
          },
          {
            "question": "Sont-elles toutes positives ?",
            "answer": "Oui, elles sont là pour vous guider."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/prestations'>guidance</a> .",
          "<a href='/boutique'>oracles</a> ."
        ]
      }
    ]
  },
  {
    "slug": "tarot-marseille-chemin-initiatique",
    "title": "Comprendre le Tarot de Marseille : Histoire et Symbolisme",
    "metaDescription": "Plongez dans l'univers fascinant du Tarot de Marseille. Découvrez la puissance symbolique des 22 arcanes majeurs et comment ils racontent l'histoire de l'évolution humaine.",
    "h1": "Le Tarot de Marseille : Plus qu'un Outil Divinatoire, un Guide de Vie",
    "date": "2026-02-08",
    "tags": [
      "Tarot",
      "Symbolisme",
      "Marseille"
    ],
    "cover": "🃏",
    "category": "Cartomancie",
    "sections": [
      {
        "type": "h2",
        "value": "Le voyage du Mat"
      },
      {
        "type": "p",
        "value": "Le Tarot raconte l'histoire de l'évolution humaine à travers des archétypes universels, du Bateleur au Monde."
      },
      {
        "type": "h2",
        "value": "Couleurs et regards"
      },
      {
        "type": "p",
        "value": "Rien n'est au hasard : le rouge pour l'action, le bleu pour l'esprit. Le regard des personnages indique le rapport au temps."
      },
      {
        "type": "h3",
        "value": "Un outil de vérité"
      },
      {
        "type": "p",
        "value": "Le Marseille montre la réalité brute, y compris les parts d'ombre, pour mieux nous aider à les transformer."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Différence avec le Rider Waite ?",
            "answer": "Le Marseille est plus traditionnel et symbolique."
          },
          {
            "question": "Peut-on apprendre seul ?",
            "answer": "Oui, mais un guide accélère la compréhension."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/prestations'>tirage complet</a> .",
          "<a href='/boutique'>jeu traditionnel</a> ."
        ]
      }
    ]
  },
  {
    "slug": "rituel-pleine-lune-liberer-briller",
    "title": "Rituel de Pleine Lune : Comment se Libérer et Manifester",
    "metaDescription": "La Pleine Lune est le moment idéal pour le lâcher-prise. Découvrez nos rituels simples et puissants pour nettoyer votre énergie et libérer ce qui ne vous sert plus.",
    "h1": "Profiter des Énergies de la Pleine Lune : Rituels et Conseils",
    "date": "2026-02-12",
    "tags": [
      "Lune",
      "Rituel",
      "Purification"
    ],
    "cover": "🌕",
    "category": "Spiritualité",
    "sections": [
      {
        "type": "h2",
        "value": "Libération par l'écrit"
      },
      {
        "type": "p",
        "value": "Écrivez ce que vous voulez laisser partir et brûlez la feuille en toute sécurité. C'est un acte de libération puissant."
      },
      {
        "type": "h2",
        "value": "Nettoyer ses cristaux"
      },
      {
        "type": "p",
        "value": "Exposez vos pierres à la lumière lunaire toute la nuit pour les purifier et les recharger naturellement."
      },
      {
        "type": "h3",
        "value": "Méditation lunaire"
      },
      {
        "type": "p",
        "value": "Profitez de l'intuition décuplée pour faire un bilan de votre mois et poser de nouvelles intentions."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Pourquoi je dors mal ?",
            "answer": "L'intensité énergétique stimule le système nerveux."
          },
          {
            "question": "Quel encens utiliser ?",
            "answer": "La Myrrhe est excellente pour les rituels lunaires."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/reiki'>soin de Pleine Lune</a> .",
          "<a href='/boutique'>encens</a> ."
        ]
      }
    ]
  },
  {
    "slug": "developper-intuition-exercices-simples",
    "title": "Comment Développer son Intuition : Exercices Pratiques",
    "metaDescription": "L'intuition n'est pas un don réservé à quelques élus. Apprenez à développer votre sixième sens grâce à des exercices quotidiens simples et efficaces.",
    "h1": "Réveiller son Intuition : Le Guide pour Écouter sa Guidance Intérieure",
    "date": "2026-02-15",
    "tags": [
      "Intuition",
      "Pratique",
      "Développement"
    ],
    "cover": "✨",
    "category": "Spiritualité",
    "sections": [
      {
        "type": "h2",
        "value": "Le test du Oui/Non"
      },
      {
        "type": "p",
        "value": "Apprenez à écouter les réactions de votre corps face à de petites décisions pour identifier le signal intuitif."
      },
      {
        "type": "h2",
        "value": "La devinette du quotidien"
      },
      {
        "type": "p",
        "value": "Essayez de deviner qui vous appelle ou la couleur de la prochaine voiture. Jouez avec l'information sans réfléchir."
      },
      {
        "type": "h3",
        "value": "Tirage sans livret"
      },
      {
        "type": "p",
        "value": "Regardez une carte et notez vos ressentis immédiats avant de lire la définition officielle."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Peur ou Intuition ?",
            "answer": "L'intuition est calme et brève, la peur est bruyante et répétitive."
          },
          {
            "question": "Tout le monde en a une ?",
            "answer": "Oui, c'est une compétence naturelle à réactiver."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/formations'>atelier</a> .",
          "<a href='/boutique'>oracle intuitif</a> ."
        ]
      }
    ]
  },
  {
    "slug": "reiki-gestion-stress-professionnel",
    "title": "Reiki et Stress au Travail : Prévenir le Burn-out Naturellement",
    "metaDescription": "Le stress professionnel vous épuise ? Découvrez comment le Reiki aide à prévenir le burn-out, à retrouver de la clarté et à gérer la pression au bureau.",
    "h1": "Le Reiki : Un Allié Puissant contre le Stress Professionnel",
    "date": "2026-02-18",
    "tags": [
      "Reiki",
      "Travail",
      "Stress"
    ],
    "cover": "💼",
    "category": "Reiki",
    "sections": [
      {
        "type": "h2",
        "value": "Libérer la charge mentale"
      },
      {
        "type": "p",
        "value": "Le Reiki agit comme une soupape de sécurité en calmant le système nerveux et en faisant baisser le cortisol."
      },
      {
        "type": "h2",
        "value": "Clarté et concentration"
      },
      {
        "type": "p",
        "value": "En harmonisant les chakras supérieurs, on retrouve une meilleure vision d'ensemble et plus de créativité."
      },
      {
        "type": "h3",
        "value": "Micro-pauses énergétiques"
      },
      {
        "type": "p",
        "value": "Apprenez des gestes simples pour vous recentrer en quelques minutes durant votre journée de travail."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Séance pendant le travail ?",
            "answer": "Oui, un soin à distance est possible pendant votre pause."
          },
          {
            "question": "Aide à s'affirmer ?",
            "answer": "Oui, en renforçant le chakra du plexus solaire."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/reiki'>forfaits pro</a> .",
          "<a href='/boutique'>pierres de calme</a> ."
        ]
      }
    ]
  },
  {
    "slug": "symbolique-couleurs-spiritualite",
    "title": "Symbolique des Couleurs en Spiritualité et Lithothérapie",
    "metaDescription": "Les couleurs influencent notre humeur et notre énergie. Apprenez à utiliser les couleurs en spiritualité pour harmoniser vos chakras et votre environnement.",
    "h1": "Le Pouvoir des Couleurs : Guide Vibratoire et Spirituel",
    "date": "2026-02-21",
    "tags": [
      "Couleurs",
      "Énergie",
      "Vibration"
    ],
    "cover": "🎨",
    "category": "Spiritualité",
    "sections": [
      {
        "type": "h2",
        "value": "Rouge et Orange"
      },
      {
        "type": "p",
        "value": "Vitalité, ancrage et créativité. À porter quand vous manquez de motivation ou de dynamisme."
      },
      {
        "type": "h2",
        "value": "Bleu et Violet"
      },
      {
        "type": "p",
        "value": "Communication, apaisement et sagesse spirituelle. Idéal pour la méditation et l'expression."
      },
      {
        "type": "h3",
        "value": "Vert et Rose"
      },
      {
        "type": "p",
        "value": "Les couleurs du cœur pour la guérison émotionnelle, la tendresse et l'équilibre intérieur."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Pour un entretien ?",
            "answer": "Bleu pour la clarté, jaune pour la confiance."
          },
          {
            "question": "Pour la protection ?",
            "answer": "Noir pour absorber, doré pour faire bouclier."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/reiki'>visualisation</a> .",
          "<a href='/boutique'>bougies colorées</a> ."
        ]
      }
    ]
  },
  {
    "slug": "tirage-croix-tarot-guide-interpretation",
    "title": "Comment faire un Tirage en Croix : Guide et Signification",
    "metaDescription": "Apprenez à maîtriser le tirage en croix, la méthode la plus célèbre du tarot. Guide pas à pas pour interpréter chaque position et obtenir des réponses précises.",
    "h1": "Maîtriser le Tirage en Croix : La Méthode de Référence du Tarologue",
    "date": "2026-02-24",
    "tags": [
      "Tarot",
      "Tirage",
      "Pratique"
    ],
    "cover": "⚔️",
    "category": "Cartomancie",
    "sections": [
      {
        "type": "h2",
        "value": "Les 5 positions clés"
      },
      {
        "type": "p",
        "value": "Du consultant au résultat, en passant par les obstacles, apprenez le rôle de chaque emplacement dans la croix."
      },
      {
        "type": "h2",
        "value": "La synthèse calculée"
      },
      {
        "type": "p",
        "value": "Utilisez la réduction théosophique pour obtenir une carte de synthèse qui confirme le message global."
      },
      {
        "type": "h3",
        "value": "Erreurs à éviter"
      },
      {
        "type": "p",
        "value": "Ne confondez pas l'atout avec l'issue. Prenez le temps d'observer les interactions entre les cartes."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Seul ou accompagné ?",
            "answer": "Faire son tirage demande une grande objectivité émotionnelle."
          },
          {
            "question": "Combien de fois poser la question ?",
            "answer": "Une seule fois pour ne pas brouiller les messages."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/prestations'>tirage pro</a> .",
          "<a href='/formations'>pratique</a> ."
        ]
      }
    ]
  },
  {
    "slug": "role-guides-spirituels-communication",
    "title": "Guides Spirituels : Qui sont-ils et Comment les Écouter ?",
    "metaDescription": "Nous avons tous des guides spirituels à nos côtés. Découvrez comment entrer en contact avec vos guides, reconnaître leurs signes et recevoir leur aide.",
    "h1": "Communiquer avec ses Guides Spirituels : Guide de Connexion",
    "date": "2026-02-27",
    "tags": [
      "Guides",
      "Signes",
      "Connexion"
    ],
    "cover": "👼",
    "category": "Spiritualité",
    "sections": [
      {
        "type": "h2",
        "value": "Reconnaître leur présence"
      },
      {
        "type": "p",
        "value": "Leurs signes sont subtils : plumes, chansons, odeurs ou synchronicités. Remerciez-les pour augmenter la fréquence."
      },
      {
        "type": "h2",
        "value": "Établir le contact"
      },
      {
        "type": "p",
        "value": "La méditation et l'écriture intuitive sont les meilleures portes d'entrée pour recevoir leurs messages clairs."
      },
      {
        "type": "h3",
        "value": "Demander de l'aide"
      },
      {
        "type": "p",
        "value": "Ils respectent votre libre arbitre. N'hésitez pas à solliciter leur soutien pour des choses concrètes."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Tout le monde en a ?",
            "answer": "Oui, personne n'est seul sur cette terre."
          },
          {
            "question": "Peuvent-ils faire peur ?",
            "answer": "Non, leur vibration est toujours bienveillante et constructive."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/prestations'>message de vos guides</a> .",
          "<a href='/boutique'>cristaux de connexion</a> ."
        ]
      }
    ]
  },
  {
    "slug": "liberer-relations-toxiques-nettoyage-energetique",
    "title": "Se Libérer des Liens Toxiques : Nettoyage Énergétique et Reiki",
    "metaDescription": "Comment rompre les liens énergétiques avec une personne toxique ? Découvrez les techniques de nettoyage et comment le Reiki vous aide à reprendre votre pouvoir.",
    "h1": "Rupture et Relations Toxiques : Le Nettoyage des Liens Énergétiques",
    "date": "2026-03-02",
    "tags": [
      "Relations",
      "Nettoyage",
      "Libération"
    ],
    "cover": "✂️",
    "category": "Reiki",
    "sections": [
      {
        "type": "h2",
        "value": "Identifier les cordes"
      },
      {
        "type": "p",
        "value": "Même après une rupture, des liens peuvent subsister. S'en libérer est nécessaire pour retrouver son autonomie."
      },
      {
        "type": "h2",
        "value": "Ciseaux de lumière"
      },
      {
        "type": "p",
        "value": "Une technique de visualisation puissante pour rendre l'énergie à l'autre et reprendre la sienne avec respect."
      },
      {
        "type": "h3",
        "value": "Le Reiki réparateur"
      },
      {
        "type": "p",
        "value": "Le soin aide à combler les failles de l'aura laissées par la relation et à reconstruire son estime de soi."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Oublie-t-on la personne ?",
            "answer": "Non, on cesse simplement d'être affecté énergétiquement par elle."
          },
          {
            "question": "Combien de temps ?",
            "answer": "Le soulagement est souvent immédiat après le nettoyage."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/reiki'>nettoyage de liens</a> .",
          "<a href='/boutique'>quartz rose</a> ."
        ]
      }
    ]
  },
  {
    "slug": "pouvoir-sacre-bougies-intentions",
    "title": "Magie des Bougies : Signification, Couleurs et Rituels",
    "metaDescription": "Apprenez à utiliser les bougies pour vos rituels et intentions. Guide complet sur la symbolique des couleurs et comment charger une bougie d'une intention sacrée.",
    "h1": "La Magie des Bougies : Illuminer vos Intentions Spirituelles",
    "date": "2026-03-05",
    "tags": [
      "Bougies",
      "Rituels",
      "Intentions"
    ],
    "cover": "🕯️",
    "category": "Spiritualité",
    "sections": [
      {
        "type": "h2",
        "value": "Choisir sa couleur"
      },
      {
        "type": "p",
        "value": "Le blanc pour la pureté, le rouge pour la passion, le vert pour l'abondance. Chaque teinte vibre à une fréquence spécifique."
      },
      {
        "type": "h2",
        "value": "Charger sa bougie"
      },
      {
        "type": "p",
        "value": "Tenez-la entre vos mains et visualisez votre souhait réalisé avant de l'allumer. L'intention est le moteur de la magie."
      },
      {
        "type": "h3",
        "value": "Lâcher-prise"
      },
      {
        "type": "p",
        "value": "Une fois allumée, confiez votre demande à l'univers. Ne soufflez jamais sur la bougie, utilisez un éteignoir."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Bougies parfumées ?",
            "answer": "Oui, si le parfum est naturel."
          },
          {
            "question": "Que faire de la cire ?",
            "answer": "Enterrez-la pour 'planter' l'intention."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/formations'>formation</a> .",
          "<a href='/boutique'>bougies artisanales</a> ."
        ]
      }
    ]
  },
  {
    "slug": "reiki-animaux-bien-etre-compagnons",
    "title": "Reiki pour Animaux : Soigner nos Compagnons à Distance",
    "metaDescription": "Les animaux sont très réceptifs au Reiki. Découvrez comment les soins énergétiques aident à soigner le stress, les douleurs et les traumatismes de vos animaux de compagnie.",
    "h1": "Le Reiki pour Animaux : Une Énergie de Guérison pour nos Amis à Quatre Pattes",
    "date": "2026-03-08",
    "tags": [
      "Reiki",
      "Animaux",
      "Soin"
    ],
    "cover": "🐾",
    "category": "Reiki",
    "sections": [
      {
        "type": "h2",
        "value": "Réceptivité animale"
      },
      {
        "type": "p",
        "value": "Les animaux acceptent l'énergie sans filtre mental. Ils baillent ou s'endorment souvent pendant le soin."
      },
      {
        "type": "h2",
        "value": "Quand consulter ?"
      },
      {
        "type": "p",
        "value": "Stress, post-opératoire, troubles du comportement ou accompagnement de fin de vie."
      },
      {
        "type": "h3",
        "value": "Lien maître-animal"
      },
      {
        "type": "p",
        "value": "L'apaisement de l'un favorise la guérison de l'autre. Le soin travaille souvent sur votre connexion commune."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Toucher nécessaire ?",
            "answer": "Non, le Reiki à distance fonctionne parfaitement."
          },
          {
            "question": "Durée d'une séance ?",
            "answer": "En général 15 à 30 minutes."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/reiki'>soin animalier</a> .",
          "<a href='/boutique'>pierres de protection</a> ."
        ]
      }
    ]
  },
  {
    "slug": "preparer-premiere-seance-reiki-distance",
    "title": "Préparer sa Séance de Reiki : Conseils pour un Soin Optimal",
    "metaDescription": "Vous avez réservé votre premier soin Reiki à distance ? Découvrez comment vous préparer physiquement et mentalement pour recevoir l'énergie au mieux.",
    "h1": "Réussir sa Séance de Reiki à Distance : Le Guide de Préparation",
    "date": "2026-03-12",
    "tags": [
      "Reiki",
      "Préparation",
      "Sérénité"
    ],
    "cover": "🧘",
    "category": "Reiki",
    "sections": [
      {
        "type": "h2",
        "value": "Espace sacré"
      },
      {
        "type": "p",
        "value": "Créez une ambiance calme chez vous : éteignez le téléphone, allumez un encens et installez-vous confortablement."
      },
      {
        "type": "h2",
        "value": "Poser une intention"
      },
      {
        "type": "p",
        "value": "Que souhaitez-vous pour cette séance ? L'intention dirige l'énergie vers vos besoins prioritaires."
      },
      {
        "type": "h3",
        "value": "Après le soin"
      },
      {
        "type": "p",
        "value": "Buvez beaucoup d'eau pour éliminer les toxines et restez au calme quelques minutes."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Et si je m'endors ?",
            "answer": "C'est parfait, votre réceptivité est maximale."
          },
          {
            "question": "Tenue vestimentaire ?",
            "answer": "Des vêtements amples et confortables."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/reiki'>séances</a> .",
          "<a href='/boutique'>ambiance zen</a> ."
        ]
      }
    ]
  },
  {
    "slug": "lithotherapie-sommeil-nuits-paisibles",
    "title": "Pierres pour Dormir : Guide Lithothérapie du Sommeil",
    "metaDescription": "Insomnies, cauchemars ou mental agité ? Découvrez les meilleures pierres de lithothérapie pour retrouver un sommeil réparateur et profond.",
    "h1": "Retrouver le Sommeil grâce à la Magie des Pierres",
    "date": "2026-03-15",
    "tags": [
      "Sommeil",
      "Pierres",
      "Détente"
    ],
    "cover": "🌙",
    "category": "Spiritualité",
    "sections": [
      {
        "type": "h2",
        "value": "Calmer le mental"
      },
      {
        "type": "p",
        "value": "L'Améthyste et la Lépidolite sont idéales pour stopper les pensées en boucle avant le coucher."
      },
      {
        "type": "h2",
        "value": "Bulle de douceur"
      },
      {
        "type": "p",
        "value": "Le Quartz Rose et l'Angélite sécurisent l'espace et favorisent une nuit sereine, surtout pour les enfants."
      },
      {
        "type": "h3",
        "value": "Utilisation"
      },
      {
        "type": "p",
        "value": "Placez une ou deux pierres maximum sur votre table de chevet. Purifiez-les régulièrement."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Sous le matelas ?",
            "answer": "Oui, c'est une option sûre."
          },
          {
            "question": "Meilleure pierre cauchemars ?",
            "answer": "La Tourmaline noire."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/reiki'>Reiki sommeil</a> .",
          "<a href='/boutique'>pierres de nuit</a> ."
        ]
      }
    ]
  },
  {
    "slug": "protection-habitat-sanctuaire-energetique",
    "title": "Protéger sa Maison : Techniques et Cristaux de Protection",
    "metaDescription": "Votre maison est votre temple. Apprenez à créer un bouclier énergétique chez vous pour vous protéger des influences extérieures négatives.",
    "h1": "Faire de sa Maison un Sanctuaire de Lumière et de Protection",
    "date": "2026-03-18",
    "tags": [
      "Habitat",
      "Protection",
      "Maison"
    ],
    "cover": "🏠",
    "category": "Spiritualité",
    "sections": [
      {
        "type": "h2",
        "value": "Sel et Cristaux"
      },
      {
        "type": "p",
        "value": "Le gros sel absorbe les charges lourdes. La Tourmaline noire à l'entrée bloque les mauvaises ondes."
      },
      {
        "type": "h2",
        "value": "Géométrie Sacrée"
      },
      {
        "type": "p",
        "value": "Placer une Fleur de Vie élève instantanément le taux vibratoire de votre salon."
      },
      {
        "type": "h3",
        "value": "Rangement conscient"
      },
      {
        "type": "p",
        "value": "Le désordre physique bloque l'énergie. Ranger avec intention libère la circulation du Chi."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Maison chargée ?",
            "answer": "Sensation d'oppression ou plantes qui dépérissent."
          },
          {
            "question": "Miroir en face de l'entrée ?",
            "answer": "À éviter, il renvoie l'énergie."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/reiki'>nettoyage à distance</a> .",
          "<a href='/boutique'>objets sacrés</a> ."
        ]
      }
    ]
  },
  {
    "slug": "bienfaits-quartz-rose-amour-universel",
    "title": "Quartz Rose : Vertus, Signification et Amour de Soi",
    "metaDescription": "Le Quartz Rose est la pierre du cœur. Découvrez comment il aide à guérir les blessures affectives, à attirer l'amour et à cultiver la bienveillance envers soi-même.",
    "h1": "Le Quartz Rose : Guérir le Cœur et Cultiver l'Amour de Soi",
    "date": "2026-03-21",
    "tags": [
      "Amour",
      "Quartz Rose",
      "Guérison"
    ],
    "cover": "💖",
    "category": "Spiritualité",
    "sections": [
      {
        "type": "h2",
        "value": "Guérir le passé"
      },
      {
        "type": "p",
        "value": "Le Quartz Rose apaise les cicatrices affectives (ruptures, deuils) et facilite le pardon."
      },
      {
        "type": "h2",
        "value": "Attirer l'amour"
      },
      {
        "type": "p",
        "value": "Cette pierre aligne votre vibration sur la fréquence de l'amour inconditionnel et de l'empathie."
      },
      {
        "type": "h3",
        "value": "Estime de soi"
      },
      {
        "type": "p",
        "value": "Indispensable pour les rituels de self-care et pour renouer avec son enfant intérieur."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Peut-on l'offrir ?",
            "answer": "C'est le cadeau idéal pour marquer son affection."
          },
          {
            "question": "Comment recharger ?",
            "answer": "À la lune, évitez le soleil."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/prestations'>tirages Amour</a> .",
          "<a href='/boutique'>gamme Rose</a> ."
        ]
      }
    ]
  },
  {
    "slug": "oracle-belline-tresor-divination",
    "title": "L'Oracle de Belline : Histoire et Méthode de Tirage",
    "metaDescription": "Découvrez l'Oracle de Belline, l'un des jeux les plus précis au monde. Apprenez son histoire mystérieuse et comment interpréter ses lames chargées de symbolisme planétaire.",
    "h1": "L'Oracle de Belline : La Puissance de la Divination Planétaire",
    "date": "2026-03-24",
    "tags": [
      "Belline",
      "Divination",
      "Oracle"
    ],
    "cover": "🔮",
    "category": "Cartomancie",
    "sections": [
      {
        "type": "h2",
        "value": "Structure planétaire"
      },
      {
        "type": "p",
        "value": "Les 52 cartes sont regroupées par familles planétaires (Soleil, Lune, Mars...), offrant une analyse très fine."
      },
      {
        "type": "h2",
        "value": "La Carte Bleue"
      },
      {
        "type": "p",
        "value": "Symbole de grâce et de protection totale, elle annonce une issue favorable quel que soit le tirage."
      },
      {
        "type": "h3",
        "value": "Pourquoi le choisir ?"
      },
      {
        "type": "p",
        "value": "Pour sa précision légendaire et ses réponses concrètes sur les domaines matériels et pros."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Difficile à apprendre ?",
            "answer": "Demande des bases en symbolisme planétaire."
          },
          {
            "question": "Indispensable médium ?",
            "answer": "Non, l'intuition suffit à lier les cartes."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/prestations'>tirage Belline</a> .",
          "<a href='/formations'>Belline</a> ."
        ]
      }
    ]
  },
  {
    "slug": "reconnecter-feminin-sacre-puissance",
    "title": "Féminin Sacré : Qu'est-ce que c'est et Comment le Cultiver ?",
    "metaDescription": "Redécouvrez votre puissance intérieure. Le Féminin Sacré est une invitation à renouer avec son intuition, sa créativité et son cycle naturel. Guide de reconnexion.",
    "h1": "Éveiller son Féminin Sacré : Retrouver sa Vérité Profonde",
    "date": "2026-03-27",
    "tags": [
      "Féminin",
      "Puissance",
      "Intuition"
    ],
    "cover": "🌹",
    "category": "Spiritualité",
    "sections": [
      {
        "type": "h2",
        "value": "Écouter ses cycles"
      },
      {
        "type": "p",
        "value": "La femme est cyclique comme la lune. Respecter ses phases d'énergie est la base de la reconnexion."
      },
      {
        "type": "h2",
        "value": "Libérer la créativité"
      },
      {
        "type": "p",
        "value": "Le féminin sacré réside dans le bas-ventre. Danser, chanter ou créer sont des rituels puissants."
      },
      {
        "type": "h3",
        "value": "Soutien du Reiki"
      },
      {
        "type": "p",
        "value": "En harmonisant le chakra sacré, le Reiki aide à libérer les mémoires ancestrales bloquantes."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Et les hommes ?",
            "answer": "Ils ont aussi une part féminine sacrée à équilibrer."
          },
          {
            "question": "Comment commencer ?",
            "answer": "En s'accordant du temps pour juste être."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/reiki'>spécial Féminin</a> .",
          "<a href='/boutique'>bijoux sacrés</a> ."
        ]
      }
    ]
  },
  {
    "slug": "lithotherapie-animaux-proteger-naturellement",
    "title": "Pierres pour Animaux : Bienfaits et Utilisation",
    "metaDescription": "Vos animaux aussi bénéficient des cristaux ! Découvrez quelles pierres de lithothérapie utiliser pour apaiser le stress ou les douleurs de votre chien ou chat.",
    "h1": "Lithothérapie Animalière : Le Pouvoir des Pierres pour nos Animaux",
    "date": "2026-03-30",
    "tags": [
      "Animaux",
      "Pierres",
      "Soin"
    ],
    "cover": "🐕",
    "category": "Spiritualité",
    "sections": [
      {
        "type": "h2",
        "value": "Quelles pierres ?"
      },
      {
        "type": "p",
        "value": "Quartz Rose pour l'anxiété, Labradorite pour les seniors, Améthyste pour les hyperactifs."
      },
      {
        "type": "h2",
        "value": "Comment faire ?"
      },
      {
        "type": "p",
        "value": "Fixez une petite pierre polie sur le collier ou placez-la sous son panier."
      },
      {
        "type": "h3",
        "value": "Purification"
      },
      {
        "type": "p",
        "value": "Les animaux absorbent nos émotions. Nettoyez leurs pierres à l'eau claire chaque semaine."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Risques ?",
            "answer": "Évitez les pierres toxiques si l'animal lèche (Malachite)."
          },
          {
            "question": "Délai résultat ?",
            "answer": "Souvent quelques jours."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/reiki'>Reiki animalier</a> .",
          "<a href='/boutique'>sélection animaux</a> ."
        ]
      }
    ]
  },
  {
    "slug": "vivre-pleine-conscience-spiritualite-quotidien",
    "title": "Vivre en Pleine Conscience : Guide pour une Vie Éveillée",
    "metaDescription": "La spiritualité ne s'arrête pas à la méditation. Apprenez à intégrer la pleine conscience dans chaque geste de votre vie quotidienne pour plus de paix et de joie.",
    "h1": "Spiritualité Moderne : Comment Vivre en Pleine Conscience Chaque Jour",
    "date": "2026-04-02",
    "tags": [
      "Pleine conscience",
      "Présence",
      "Joie"
    ],
    "cover": "🧘‍♂️",
    "category": "Spiritualité",
    "sections": [
      {
        "type": "h2",
        "value": "Rituels quotidiens"
      },
      {
        "type": "p",
        "value": "Transformez votre douche ou votre thé en méditation sensorielle pour recharger vos batteries."
      },
      {
        "type": "h2",
        "value": "Gratitude radicale"
      },
      {
        "type": "p",
        "value": "Notez chaque soir trois mercis. Cela modifie votre cerveau pour attirer plus de positif."
      },
      {
        "type": "h3",
        "value": "Déconnexion"
      },
      {
        "type": "p",
        "value": "Savoir débrancher des écrans pour se reconnecter à sa source divine dans le silence."
      },
      {
        "type": "faq",
        "value": [
          {
            "question": "Une religion ?",
            "answer": "Non, c'est une technique laïque et spirituelle."
          },
          {
            "question": "Bénéfices ?",
            "answer": "Réduction prouvée du stress et meilleur sommeil."
          }
        ]
      },
      {
        "type": "links",
        "value": [
          "<a href='/formations'>accompagnements</a> .",
          "<a href='/boutique'>pleine conscience</a> ."
        ]
      }
    ]
  }
];
