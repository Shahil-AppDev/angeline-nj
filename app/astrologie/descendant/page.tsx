'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { calculateAscendant } from '@/lib/astrology/calculations';
import { ZodiacSign } from '@/lib/astrology/types';
import { zodiacSigns } from '@/lib/astrology/zodiacData';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const oppositeSign: Record<ZodiacSign, ZodiacSign> = {
  belier: 'balance',
  taureau: 'scorpion',
  gemeaux: 'sagittaire',
  cancer: 'capricorne',
  lion: 'verseau',
  vierge: 'poissons',
  balance: 'belier',
  scorpion: 'taureau',
  sagittaire: 'gemeaux',
  capricorne: 'cancer',
  verseau: 'lion',
  poissons: 'vierge'
};

const descendantInterpretation: Record<ZodiacSign, {
  relationship: string;
  partner: string;
  attraction: string;
  challenges: string;
  advice: string;
}> = {
  belier: {
    relationship: "Avec un Descendant en Bélier, vous êtes attiré par des partenaires dynamiques, indépendants et courageux. Vous recherchez quelqu'un qui vous stimule et vous challenge.",
    partner: "Votre partenaire idéal est passionné, direct et n'a pas peur de prendre des initiatives. Vous admirez le courage et la détermination.",
    attraction: "Vous êtes attiré par les personnes énergiques, spontanées et qui savent ce qu'elles veulent. L'audace et la confiance vous séduisent.",
    challenges: "Attention aux conflits d'ego et à la compétition dans le couple. Apprenez à collaborer plutôt que de rivaliser.",
    advice: "Cultivez la patience et l'écoute. Votre partenaire a besoin d'espace pour s'exprimer et briller aussi."
  },
  taureau: {
    relationship: "Descendant en Taureau: vous recherchez la stabilité, la sécurité et la sensualité dans vos relations. Le confort et la loyauté sont essentiels.",
    partner: "Votre partenaire idéal est fiable, patient et apprécie les plaisirs simples de la vie. La fidélité et la constance sont primordiales.",
    attraction: "Vous êtes attiré par les personnes sensuelles, stables et qui apprécient la beauté. Le calme et la douceur vous séduisent.",
    challenges: "Attention à la possessivité et à la résistance au changement. Laissez de l'espace pour l'évolution.",
    advice: "Acceptez que votre partenaire puisse avoir besoin de nouveauté. La stabilité ne signifie pas stagnation."
  },
  gemeaux: {
    relationship: "Descendant en Gémeaux: vous êtes attiré par l'intelligence, la communication et la variété. Les échanges intellectuels sont essentiels.",
    partner: "Votre partenaire idéal est curieux, communicatif et adaptable. L'humour et la vivacité d'esprit sont importants.",
    attraction: "Vous êtes séduit par les personnes intelligentes, bavarde et polyvalentes. La stimulation mentale est cruciale.",
    challenges: "Attention à la superficialité et au manque d'engagement émotionnel profond. Apprenez à vous connecter au-delà des mots.",
    advice: "Cultivez la profondeur émotionnelle. Votre partenaire a besoin de sentir une connexion au-delà de l'intellect."
  },
  cancer: {
    relationship: "Descendant en Cancer: vous recherchez la sécurité émotionnelle, la tendresse et un foyer chaleureux. La famille est importante.",
    partner: "Votre partenaire idéal est attentionné, protecteur et émotionnellement disponible. La sensibilité et l'empathie sont essentielles.",
    attraction: "Vous êtes attiré par les personnes nurturantes, intuitives et qui créent un sentiment de sécurité.",
    challenges: "Attention à la dépendance émotionnelle et aux sautes d'humeur. Maintenez votre indépendance.",
    advice: "Équilibrez le besoin de sécurité avec l'autonomie. Votre partenaire n'est pas là pour vous compléter mais pour vous accompagner."
  },
  lion: {
    relationship: "Descendant en Lion: vous êtes attiré par la générosité, la créativité et le charisme. Vous recherchez un partenaire qui brille.",
    partner: "Votre partenaire idéal est chaleureux, généreux et confiant. La loyauté et la fierté sont importantes.",
    attraction: "Vous êtes séduit par les personnes charismatiques, créatives et qui ont une présence forte.",
    challenges: "Attention au besoin d'admiration constant et aux jeux de pouvoir. Partagez la lumière.",
    advice: "Apprenez à valoriser votre partenaire autant que vous voulez être valorisé. Le respect mutuel est la clé."
  },
  vierge: {
    relationship: "Descendant en Vierge: vous recherchez la perfection, l'ordre et le service dans vos relations. L'amélioration mutuelle est importante.",
    partner: "Votre partenaire idéal est organisé, attentionné et cherche à s'améliorer. La santé et le bien-être sont prioritaires.",
    attraction: "Vous êtes attiré par les personnes méthodiques, serviables et qui ont le souci du détail.",
    challenges: "Attention au perfectionnisme et à la critique excessive. Acceptez les imperfections.",
    advice: "Lâchez prise sur le besoin de tout contrôler. Votre partenaire est parfait dans son imperfection."
  },
  balance: {
    relationship: "Descendant en Balance: vous recherchez l'harmonie, l'équilibre et la beauté dans vos relations. Le partenariat est essentiel.",
    partner: "Votre partenaire idéal est diplomate, charmant et recherche l'équité. L'esthétique et la justice sont importantes.",
    attraction: "Vous êtes séduit par les personnes élégantes, équilibrées et qui valorisent l'harmonie.",
    challenges: "Attention à l'indécision et à l'évitement des conflits. Affirmez-vous.",
    advice: "Apprenez à exprimer vos besoins clairement. L'harmonie ne signifie pas l'absence de désaccords."
  },
  scorpion: {
    relationship: "Descendant en Scorpion: vous êtes attiré par l'intensité, la passion et la profondeur. La transformation est au cœur de vos relations.",
    partner: "Votre partenaire idéal est intense, loyal et n'a pas peur de l'intimité émotionnelle. La passion et la fidélité sont cruciales.",
    attraction: "Vous êtes séduit par les personnes mystérieuses, passionnées et qui ont une profondeur émotionnelle.",
    challenges: "Attention à la jalousie, au contrôle et aux jeux de pouvoir. Cultivez la confiance.",
    advice: "Apprenez à lâcher prise et à faire confiance. Votre partenaire a besoin de liberté dans l'intimité."
  },
  sagittaire: {
    relationship: "Descendant en Sagittaire: vous recherchez l'aventure, la liberté et la croissance dans vos relations. L'exploration est essentielle.",
    partner: "Votre partenaire idéal est optimiste, aventureux et philosophe. La liberté et l'honnêteté sont importantes.",
    attraction: "Vous êtes attiré par les personnes joyeuses, aventureuses et qui ont une vision large de la vie.",
    challenges: "Attention au manque d'engagement et à la fuite des responsabilités. Ancrez-vous.",
    advice: "Équilibrez le besoin de liberté avec l'engagement. Votre partenaire mérite votre présence."
  },
  capricorne: {
    relationship: "Descendant en Capricorne: vous recherchez la maturité, l'ambition et la structure dans vos relations. Le respect est fondamental.",
    partner: "Votre partenaire idéal est responsable, ambitieux et fiable. La stabilité et le succès sont importants.",
    attraction: "Vous êtes séduit par les personnes matures, déterminées et qui ont des objectifs clairs.",
    challenges: "Attention au manque d'expression émotionnelle et à la rigidité. Laissez place à la spontanéité.",
    advice: "Apprenez à vous détendre et à montrer vos émotions. Votre partenaire a besoin de votre vulnérabilité."
  },
  verseau: {
    relationship: "Descendant en Verseau: vous êtes attiré par l'originalité, l'indépendance et l'innovation. L'amitié dans le couple est essentielle.",
    partner: "Votre partenaire idéal est unique, indépendant et visionnaire. La liberté et l'authenticité sont cruciales.",
    attraction: "Vous êtes séduit par les personnes originales, intellectuelles et qui pensent différemment.",
    challenges: "Attention au détachement émotionnel et à la distance. Cultivez l'intimité.",
    advice: "Apprenez à vous connecter émotionnellement. Votre partenaire a besoin de sentir votre présence affective."
  },
  poissons: {
    relationship: "Descendant en Poissons: vous recherchez la compassion, la spiritualité et la fusion dans vos relations. L'empathie est essentielle.",
    partner: "Votre partenaire idéal est empathique, créatif et spirituel. La sensibilité et l'intuition sont importantes.",
    attraction: "Vous êtes attiré par les personnes rêveuses, artistiques et qui ont une profondeur spirituelle.",
    challenges: "Attention à l'idéalisation et à la perte de limites. Maintenez votre identité.",
    advice: "Établissez des limites claires. Votre partenaire a besoin que vous restiez ancré dans la réalité."
  }
};

export default function DescendantPage() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    city: '',
    latitude: 48.8566,
    longitude: 2.3522,
    timezone: 'Europe/Paris'
  });
  
  const [result, setResult] = useState<{ ascendant: ZodiacSign; descendant: ZodiacSign } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      const ascendantResult = calculateAscendant({
        date: formData.date,
        time: formData.time,
        latitude: formData.latitude,
        longitude: formData.longitude,
        timezone: formData.timezone
      });
      
      const descendant = oppositeSign[ascendantResult.sign];
      
      setResult({
        ascendant: ascendantResult.sign,
        descendant
      });
      setLoading(false);
    }, 1000);
  };

  const resetForm = () => {
    setResult(null);
    setFormData({ date: '', time: '', city: '', latitude: 48.8566, longitude: 2.3522, timezone: 'Europe/Paris' });
  };

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
              Calculateur de Descendant
            </h1>
            <p className="text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
              Découvrez votre Descendant et ce qu'il révèle sur vos relations et votre partenaire idéal
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {!result ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold text-gold mb-6 font-title text-center">
                Entrez vos informations de naissance
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="date" className="block text-gray-800 mb-2 font-semibold">
                    Date de naissance *
                  </label>
                  <input
                    id="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-gray-900 focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-gray-800 mb-2 font-semibold">
                    Heure de naissance *
                  </label>
                  <input
                    id="time"
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-gray-900 focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-gray-800 mb-2 font-semibold">
                    Ville de naissance *
                  </label>
                  <input
                    id="city"
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    placeholder="Paris, France"
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-gray-900 focus:border-primary focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full soft-glow"
                >
                  <span>{loading ? 'Calcul en cours...' : 'Calculer mon Descendant'}</span>
                </button>
              </form>

              <div className="mt-8 p-6 bg-surface/50 rounded-lg">
                <h3 className="text-gold font-semibold mb-3">💕 Qu'est-ce que le Descendant ?</h3>
                <p className="text-text-2 text-sm leading-relaxed">
                  Le Descendant est le signe opposé à votre Ascendant. Il représente ce que vous recherchez chez un partenaire, 
                  vos relations et les qualités que vous admirez chez les autres. C'est la clé pour comprendre vos dynamiques relationnelles.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="glass-card p-8">
                <h2 className="text-3xl font-bold text-gold mb-6 font-title text-center">
                  Votre Axe Ascendant-Descendant
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="glass-card p-6 text-center">
                    <div className="text-6xl mb-3">🌅</div>
                    <h3 className="text-xl font-bold text-gold mb-2 font-title">Ascendant</h3>
                    <p className="text-3xl text-primary mb-2">{zodiacSigns[result.ascendant].name}</p>
                    <p className="text-text-2 text-sm">Comment vous apparaissez</p>
                  </div>

                  <div className="glass-card p-6 text-center bg-primary/5">
                    <div className="text-6xl mb-3">💕</div>
                    <h3 className="text-xl font-bold text-gold mb-2 font-title">Descendant</h3>
                    <p className="text-3xl text-primary mb-2">{zodiacSigns[result.descendant].name}</p>
                    <p className="text-text-2 text-sm">Ce que vous recherchez</p>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <p className="text-text-2">
                    Votre Descendant en {zodiacSigns[result.descendant].name} révèle vos besoins relationnels profonds
                  </p>
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-gold mb-4 font-title">Votre Descendant en {zodiacSigns[result.descendant].name}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gold mb-2 font-title">💕 Vos Relations</h4>
                    <p className="text-text-2 leading-relaxed">{descendantInterpretation[result.descendant].relationship}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gold mb-2 font-title">👥 Votre Partenaire Idéal</h4>
                    <p className="text-text-2 leading-relaxed">{descendantInterpretation[result.descendant].partner}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gold mb-2 font-title">✨ Ce Qui Vous Attire</h4>
                    <p className="text-text-2 leading-relaxed">{descendantInterpretation[result.descendant].attraction}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gold mb-2 font-title">⚠️ Défis Relationnels</h4>
                    <p className="text-text-2 leading-relaxed">{descendantInterpretation[result.descendant].challenges}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gold mb-2 font-title">💡 Conseil</h4>
                    <p className="text-text-2 leading-relaxed">{descendantInterpretation[result.descendant].advice}</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 bg-primary/5">
                <h3 className="text-2xl font-bold text-gold mb-4 font-title text-center">
                  Approfondir Vos Relations
                </h3>
                <p className="text-text-2 text-center mb-6">
                  Cette analyse vous donne les clés de vos dynamiques relationnelles. Pour une guidance de couple personnalisée 
                  et des conseils adaptés à votre situation unique, je vous propose une consultation relationnelle approfondie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-primary soft-glow">
                    <span>Consultation Relationnelle (40€)</span>
                  </Link>
                  <Link href="/astrologie/compatibilite" className="btn-gold">
                    <span>Test de Compatibilité</span>
                  </Link>
                </div>
              </div>

              <div className="text-center">
                <button onClick={resetForm} className="btn-gold">
                  <span>Nouveau calcul</span>
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
