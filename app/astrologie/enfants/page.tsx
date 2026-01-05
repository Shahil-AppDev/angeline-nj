'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { getSunSign } from '@/lib/astrology/calculations';
import { ZodiacSign } from '@/lib/astrology/types';
import { zodiacSigns } from '@/lib/astrology/zodiacData';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function AstrologieEnfantsPage() {
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);
  const [childName, setChildName] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handleCalculate = () => {
    if (birthDate) {
      const sign = getSunSign(birthDate);
      setSelectedSign(sign);
    }
  };

  const childGuidance: Record<ZodiacSign, {
    temperament: string;
    strengths: string[];
    challenges: string[];
    education: string[];
    activities: string[];
    parentTips: string[];
  }> = {
    belier: {
      temperament: "Votre enfant Bélier est un petit leader né, débordant d'énergie et de courage. Il aime être le premier et n'a pas peur de relever des défis.",
      strengths: ["Courageux et audacieux", "Leader naturel", "Enthousiaste et énergique", "Honnête et direct"],
      challenges: ["Impatience", "Impulsivité", "Difficulté à partager", "Tendance à l'agressivité"],
      education: ["Canaliser son énergie par le sport", "Lui apprendre la patience", "Encourager l'empathie", "Fixer des limites claires"],
      activities: ["Sports d'équipe", "Arts martiaux", "Activités de plein air", "Jeux de compétition"],
      parentTips: ["Soyez ferme mais juste", "Donnez-lui des responsabilités", "Encouragez son indépendance", "Canalisez son énergie positivement"]
    },
    taureau: {
      temperament: "Votre enfant Taureau est calme, affectueux et aime la routine. Il apprécie le confort, la nature et les plaisirs sensoriels.",
      strengths: ["Patient et déterminé", "Affectueux et loyal", "Sens artistique développé", "Stable et fiable"],
      challenges: ["Entêtement", "Résistance au changement", "Possessivité", "Gourmandise"],
      education: ["Respecter son besoin de routine", "Introduire les changements progressivement", "Encourager la créativité", "Valoriser ses efforts"],
      activities: ["Jardinage", "Arts plastiques", "Musique", "Cuisine", "Activités nature"],
      parentTips: ["Soyez patient et constant", "Créez un environnement stable", "Encouragez l'expression artistique", "Respectez son rythme"]
    },
    gemeaux: {
      temperament: "Votre enfant Gémeaux est curieux, bavard et toujours en mouvement. Il adore apprendre, communiquer et découvrir de nouvelles choses.",
      strengths: ["Intelligent et curieux", "Communicatif", "Adaptable", "Créatif et imaginatif"],
      challenges: ["Dispersion", "Difficulté à se concentrer", "Nervosité", "Superficialité"],
      education: ["Stimuler sa curiosité intellectuelle", "Varier les activités", "Apprendre à terminer ce qu'il commence", "Canaliser son énergie mentale"],
      activities: ["Lecture", "Écriture", "Théâtre", "Langues étrangères", "Jeux de société"],
      parentTips: ["Encouragez sa curiosité", "Variez les stimulations", "Aidez-le à se concentrer", "Favorisez la communication"]
    },
    cancer: {
      temperament: "Votre enfant Cancer est sensible, intuitif et très attaché à sa famille. Il a besoin de sécurité affective et d'un foyer chaleureux.",
      strengths: ["Empathique et attentionné", "Imagination riche", "Loyal et protecteur", "Intuitif"],
      challenges: ["Hypersensibilité", "Timidité", "Peur du rejet", "Tendance à se replier"],
      education: ["Créer un environnement sécurisant", "Valoriser ses émotions", "Encourager l'expression des sentiments", "Développer sa confiance"],
      activities: ["Arts créatifs", "Cuisine", "Jeux d'eau", "Activités familiales", "Lecture"],
      parentTips: ["Soyez rassurant et présent", "Respectez sa sensibilité", "Créez des rituels familiaux", "Encouragez doucement"]
    },
    lion: {
      temperament: "Votre enfant Lion est charismatique, généreux et aime être au centre de l'attention. Il a besoin de reconnaissance et d'admiration.",
      strengths: ["Confiant et courageux", "Généreux et chaleureux", "Créatif", "Leader naturel"],
      challenges: ["Besoin d'attention constant", "Orgueil", "Autoritarisme", "Difficulté à accepter la critique"],
      education: ["Valoriser sans flatter", "Apprendre l'humilité", "Encourager la générosité", "Développer l'empathie"],
      activities: ["Théâtre", "Danse", "Sports", "Arts de la scène", "Leadership"],
      parentTips: ["Donnez-lui de l'attention positive", "Encouragez ses talents", "Apprenez-lui à partager la lumière", "Soyez fier de lui"]
    },
    vierge: {
      temperament: "Votre enfant Vierge est méticuleux, observateur et aime aider. Il apprécie l'ordre, la routine et cherche la perfection.",
      strengths: ["Organisé et méthodique", "Serviable", "Intelligent et analytique", "Responsable"],
      challenges: ["Perfectionnisme", "Anxiété", "Critique envers soi-même", "Difficulté à lâcher prise"],
      education: ["Valoriser l'effort plus que le résultat", "Apprendre à accepter l'imperfection", "Réduire l'anxiété", "Encourager la spontanéité"],
      activities: ["Puzzles", "Sciences", "Jardinage", "Artisanat", "Bénévolat"],
      parentTips: ["Rassurez-le sur ses capacités", "Évitez les critiques excessives", "Encouragez la détente", "Valorisez ses qualités"]
    },
    balance: {
      temperament: "Votre enfant Balance est charmant, sociable et recherche l'harmonie. Il aime la beauté, l'art et déteste les conflits.",
      strengths: ["Diplomate et équilibré", "Sociable et charmant", "Sens esthétique", "Juste et équitable"],
      challenges: ["Indécision", "Évitement des conflits", "Dépendance aux autres", "Difficulté à dire non"],
      education: ["Apprendre à faire des choix", "Gérer les conflits sainement", "Développer l'affirmation de soi", "Encourager l'indépendance"],
      activities: ["Arts plastiques", "Musique", "Danse", "Activités sociales", "Médiation"],
      parentTips: ["Aidez-le à décider", "Créez un environnement harmonieux", "Encouragez l'expression de ses besoins", "Valorisez son sens de la justice"]
    },
    scorpion: {
      temperament: "Votre enfant Scorpion est intense, passionné et mystérieux. Il ressent les choses profondément et possède une forte intuition.",
      strengths: ["Déterminé et courageux", "Loyal et protecteur", "Intuitif", "Passionné"],
      challenges: ["Intensité émotionnelle", "Jalousie", "Rancune", "Besoin de contrôle"],
      education: ["Respecter son intimité", "Apprendre à pardonner", "Gérer les émotions intenses", "Canaliser sa passion"],
      activities: ["Sports intenses", "Mystères et enquêtes", "Sciences", "Psychologie", "Arts martiaux"],
      parentTips: ["Soyez honnête et authentique", "Respectez ses secrets", "Aidez-le à gérer ses émotions", "Encouragez la transformation positive"]
    },
    sagittaire: {
      temperament: "Votre enfant Sagittaire est optimiste, aventureux et philosophe. Il aime explorer, apprendre et découvrir le monde.",
      strengths: ["Optimiste et joyeux", "Aventureux", "Honnête et direct", "Curieux intellectuellement"],
      challenges: ["Imprudence", "Manque de tact", "Difficulté à se concentrer", "Impatience"],
      education: ["Encourager l'exploration", "Apprendre la prudence", "Développer le tact", "Canaliser l'énergie"],
      activities: ["Voyages", "Sports d'aventure", "Langues", "Philosophie", "Nature"],
      parentTips: ["Donnez-lui de la liberté", "Encouragez sa curiosité", "Apprenez-lui la responsabilité", "Partagez des aventures"]
    },
    capricorne: {
      temperament: "Votre enfant Capricorne est mature, responsable et ambitieux. Il aime les règles, la structure et vise l'excellence.",
      strengths: ["Responsable et mature", "Déterminé", "Patient", "Respectueux des règles"],
      challenges: ["Trop sérieux", "Pessimisme", "Difficulté à s'amuser", "Pression auto-imposée"],
      education: ["Encourager le jeu et la légèreté", "Valoriser l'enfance", "Réduire la pression", "Développer l'optimisme"],
      activities: ["Sports structurés", "Musique classique", "Échecs", "Construction", "Responsabilités"],
      parentTips: ["Encouragez le jeu", "Célébrez les petites victoires", "Apprenez-lui à se détendre", "Valorisez ses efforts"]
    },
    verseau: {
      temperament: "Votre enfant Verseau est original, indépendant et humaniste. Il aime l'innovation, la liberté et pense différemment.",
      strengths: ["Original et créatif", "Indépendant", "Humaniste", "Intelligent"],
      challenges: ["Rébellion", "Détachement émotionnel", "Difficulté avec l'autorité", "Excentricité"],
      education: ["Respecter son individualité", "Encourager l'expression unique", "Apprendre l'empathie", "Canaliser la rébellion"],
      activities: ["Sciences", "Technologies", "Activités de groupe", "Causes humanitaires", "Innovation"],
      parentTips: ["Donnez-lui de la liberté", "Encouragez son originalité", "Expliquez les règles logiquement", "Valorisez ses idées"]
    },
    poissons: {
      temperament: "Votre enfant Poissons est rêveur, empathique et créatif. Il vit dans un monde imaginaire et ressent profondément les émotions.",
      strengths: ["Empathique et compatissant", "Créatif et artistique", "Intuitif", "Doux et gentil"],
      challenges: ["Hypersensibilité", "Difficulté avec la réalité", "Tendance à fuir", "Vulnérabilité"],
      education: ["Protéger sans surprotéger", "Ancrer dans la réalité", "Encourager la créativité", "Développer les limites"],
      activities: ["Arts créatifs", "Musique", "Danse", "Natation", "Méditation"],
      parentTips: ["Soyez doux et compréhensif", "Créez un environnement apaisant", "Encouragez l'imagination", "Aidez-le à s'ancrer"]
    }
  };

  const signs: ZodiacSign[] = ['belier', 'taureau', 'gemeaux', 'cancer', 'lion', 'vierge', 'balance', 'scorpion', 'sagittaire', 'capricorne', 'verseau', 'poissons'];

  return (
    <>
      <Navbar />
      
      <section className="pt-32 pb-16 aurora-background">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gold mb-6 font-title">
              Astrologie des Enfants
            </h1>
            <p className="text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
              Comprendre votre enfant à travers son signe astrologique pour mieux l'accompagner
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-gold mb-6 font-title text-center">
              Découvrez le signe de votre enfant
            </h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="childName" className="block text-gray-800 mb-2 font-semibold">
                  Prénom de l'enfant (optionnel)
                </label>
                <input
                  id="childName"
                  type="text"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  placeholder="Emma, Lucas..."
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="birthDate" className="block text-gray-800 mb-2 font-semibold">
                  Date de naissance *
                </label>
                <input
                  id="birthDate"
                  type="date"
                  required
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text focus:border-primary focus:outline-none"
                />
              </div>

              <button
                onClick={handleCalculate}
                disabled={!birthDate}
                className="btn-primary w-full soft-glow"
              >
                <span>Découvrir son signe</span>
              </button>

              <div className="text-center text-text-2 text-sm">
                Ou sélectionnez directement un signe ci-dessous
              </div>

              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {signs.map(sign => (
                  <button
                    key={sign}
                    onClick={() => setSelectedSign(sign)}
                    className={`glass-card p-3 text-center hover:border-primary transition-all ${
                      selectedSign === sign ? 'border-primary bg-primary/10' : ''
                    }`}
                  >
                    <div className="text-3xl mb-1">{zodiacSigns[sign].emoji}</div>
                    <div className="text-xs text-text-2">{zodiacSigns[sign].name}</div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {selectedSign && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="glass-card p-8 text-center">
                <div className="text-8xl mb-4">{zodiacSigns[selectedSign].emoji}</div>
                <h2 className="text-3xl font-bold text-gold mb-2 font-title">
                  {childName ? `${childName}, ` : ''}Enfant {zodiacSigns[selectedSign].name}
                </h2>
                <p className="text-text-2 mb-4">
                  {zodiacSigns[selectedSign].dateRange} • Élément {zodiacSigns[selectedSign].element.charAt(0).toUpperCase() + zodiacSigns[selectedSign].element.slice(1)}
                </p>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-gold mb-4 font-title">Tempérament</h3>
                <p className="text-text-2 leading-relaxed mb-6">
                  {childGuidance[selectedSign].temperament}
                </p>

                <h4 className="text-xl font-semibold text-gold mb-3 font-title">✨ Forces Naturelles</h4>
                <ul className="space-y-2 mb-6">
                  {childGuidance[selectedSign].strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-gold">•</span>
                      <span className="text-text-2">{strength}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-xl font-semibold text-gold mb-3 font-title">⚠️ Défis à Accompagner</h4>
                <ul className="space-y-2 mb-6">
                  {childGuidance[selectedSign].challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-orange-400">•</span>
                      <span className="text-text-2">{challenge}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-xl font-semibold text-gold mb-3 font-title">📚 Conseils Éducatifs</h4>
                <ul className="space-y-2 mb-6">
                  {childGuidance[selectedSign].education.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span className="text-text-2">{tip}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-xl font-semibold text-gold mb-3 font-title">🎨 Activités Recommandées</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {childGuidance[selectedSign].activities.map((activity, index) => (
                    <span key={index} className="px-4 py-2 bg-primary/20 rounded-full text-primary text-sm">
                      {activity}
                    </span>
                  ))}
                </div>

                <h4 className="text-xl font-semibold text-gold mb-3 font-title">💡 Conseils aux Parents</h4>
                <ul className="space-y-2">
                  {childGuidance[selectedSign].parentTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-gold">💫</span>
                      <span className="text-text-2">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-8 bg-primary/5">
                <h3 className="text-2xl font-bold text-gold mb-4 font-title text-center">
                  Guidance Personnalisée pour Votre Famille
                </h3>
                <p className="text-text-2 text-center mb-6">
                  Chaque enfant est unique. Pour une guidance vraiment personnalisée qui prend en compte le thème astral complet de votre enfant 
                  et les dynamiques familiales, je vous propose une consultation famille sur mesure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-primary soft-glow">
                    <span>Consultation Famille (55€)</span>
                  </Link>
                  <Link href="/astrologie/theme-astral" className="btn-gold">
                    <span>Thème Astral Enfant</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
