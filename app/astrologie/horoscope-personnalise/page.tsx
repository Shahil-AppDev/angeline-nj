'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ZodiacSign } from '@/lib/astrology/types';
import { zodiacSigns } from '@/lib/astrology/zodiacData';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function HoroscopePersonnalisePage() {
  const [formData, setFormData] = useState({
    sign: 'belier' as ZodiacSign,
    name: '',
    birthDate: '',
    question: '',
    type: 'personalized' as 'daily' | 'love' | 'career' | 'personalized'
  });
  
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const signs: ZodiacSign[] = ['belier', 'taureau', 'gemeaux', 'cancer', 'lion', 'vierge', 'balance', 'scorpion', 'sagittaire', 'capricorne', 'verseau', 'poissons'];

  const horoscopeTypes = [
    { value: 'personalized', label: 'Guidance Personnalisée', icon: '🔮', description: 'Guidance complète adaptée à votre situation' },
    { value: 'daily', label: 'Horoscope du Jour', icon: '📅', description: 'Prévisions quotidiennes personnalisées' },
    { value: 'love', label: 'Amour & Relations', icon: '💕', description: 'Guidance amoureuse et relationnelle' },
    { value: 'career', label: 'Carrière & Travail', icon: '💼', description: 'Conseils professionnels et opportunités' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('/api/horoscope-ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la génération');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setResult(null);
    setError('');
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
              Horoscope Personnalisé par IA
            </h1>
            <p className="text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
              Recevez une guidance astrologique unique, générée spécialement pour vous par intelligence artificielle
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
                Créez votre horoscope personnalisé
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="type" className="block text-text mb-3 font-semibold">
                    Type de guidance *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {horoscopeTypes.map(type => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setFormData({...formData, type: type.value as any})}
                        className={`glass-card p-4 text-left transition-all ${
                          formData.type === type.value ? 'border-primary bg-primary/10' : 'hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-3xl">{type.icon}</span>
                          <div>
                            <div className="font-semibold text-gold mb-1">{type.label}</div>
                            <div className="text-sm text-text-2">{type.description}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="sign" className="block text-text mb-2 font-semibold">
                    Votre signe astrologique *
                  </label>
                  <select
                    id="sign"
                    value={formData.sign}
                    onChange={(e) => setFormData({...formData, sign: e.target.value as ZodiacSign})}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text focus:border-primary focus:outline-none"
                  >
                    {signs.map(sign => (
                      <option key={sign} value={sign}>
                        {zodiacSigns[sign].emoji} {zodiacSigns[sign].name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="name" className="block text-text mb-2 font-semibold">
                    Votre prénom (optionnel)
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Marie, Thomas..."
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text placeholder:text-text-2/60 focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="birthDate" className="block text-text mb-2 font-semibold">
                    Date de naissance (optionnel)
                  </label>
                  <input
                    id="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                    className="w-full px-4 py-3 bg-lavande border border-border rounded-lg text-text focus:border-primary focus:outline-none"
                  />
                </div>

                {formData.type === 'personalized' && (
                  <div>
                    <label htmlFor="question" className="block text-text mb-2 font-semibold">
                      Votre question ou situation (optionnel)
                    </label>
                    <textarea
                      id="question"
                      value={formData.question}
                      onChange={(e) => setFormData({...formData, question: e.target.value})}
                      placeholder="Décrivez votre situation ou posez votre question..."
                      rows={4}
                      className="w-full px-4 py-3 bg-primary/10 border border-primary/30 rounded-lg text-text placeholder:text-text-2/60 focus:border-primary focus:outline-none resize-none"
                    />
                  </div>
                )}

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full soft-glow"
                >
                  <span>{loading ? 'Génération en cours... ✨' : 'Générer mon horoscope personnalisé'}</span>
                </button>
              </form>

              <div className="mt-8 p-6 bg-surface/50 rounded-lg">
                <h3 className="text-gold font-semibold mb-3">🤖 Horoscope par Intelligence Artificielle</h3>
                <p className="text-text-2 text-sm leading-relaxed">
                  Notre système utilise l'IA DeepSeek pour créer des horoscopes uniques et personnalisés, 
                  combinant l'astrologie traditionnelle avec une guidance spirituelle moderne et bienveillante.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="glass-card p-8 text-center">
                <div className="text-8xl mb-4">{zodiacSigns[formData.sign].emoji}</div>
                <h2 className="text-3xl font-bold text-gold mb-2 font-title">
                  {formData.name ? `${formData.name}, ` : ''}Votre Guidance Personnalisée
                </h2>
                <p className="text-text-2 mb-4">
                  {zodiacSigns[formData.sign].name} • {new Date().toLocaleDateString('fr-FR')}
                </p>
                {result.mood && (
                  <div className="inline-block px-4 py-2 bg-primary/20 rounded-full">
                    <span className="text-primary font-semibold">Humeur du jour: {result.mood}</span>
                  </div>
                )}
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-gold mb-4 font-title">Votre Horoscope</h3>
                <p className="text-text-2 leading-relaxed mb-6 whitespace-pre-line">
                  {result.horoscope}
                </p>

                <h4 className="text-xl font-semibold text-gold mb-3 font-title">✨ Conseil Spirituel</h4>
                <p className="text-text-2 leading-relaxed mb-6">
                  {result.advice}
                </p>

                {(result.luckyNumber || result.luckyColor || result.energy) && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    {result.luckyNumber && (
                      <div className="glass-card p-4 text-center">
                        <div className="text-3xl mb-2">🍀</div>
                        <div className="text-sm text-text-2 mb-1">Chiffre chanceux</div>
                        <div className="text-2xl font-bold text-gold">{result.luckyNumber}</div>
                      </div>
                    )}
                    {result.luckyColor && (
                      <div className="glass-card p-4 text-center">
                        <div className="text-3xl mb-2">🎨</div>
                        <div className="text-sm text-text-2 mb-1">Couleur du jour</div>
                        <div className="text-lg font-semibold text-primary">{result.luckyColor}</div>
                      </div>
                    )}
                    {result.energy && (
                      <div className="glass-card p-4 text-center">
                        <div className="text-3xl mb-2">⚡</div>
                        <div className="text-sm text-text-2 mb-1">Niveau d'énergie</div>
                        <div className="text-2xl font-bold text-gold">{result.energy}/10</div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="glass-card p-8 bg-primary/5">
                <h3 className="text-2xl font-bold text-gold mb-4 font-title text-center">
                  Aller Plus Loin
                </h3>
                <p className="text-text-2 text-center mb-6">
                  Cet horoscope IA vous offre une guidance personnalisée. Pour une consultation vraiment approfondie 
                  avec un tirage de cartes et une analyse complète de votre situation, contactez-moi directement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-primary soft-glow">
                    <span>Consultation Privée (45€)</span>
                  </Link>
                  <button onClick={resetForm} className="btn-secondary">
                    <span>Nouvelle guidance</span>
                  </button>
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
