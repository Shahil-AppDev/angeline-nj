'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { calculateMoonSign } from '@/lib/astrology/calculations';
import { MoonSignResult } from '@/lib/astrology/types';
import { zodiacSigns } from '@/lib/astrology/zodiacData';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function SigneLunairePage() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    city: '',
    latitude: 48.8566,
    longitude: 2.3522,
    timezone: 'Europe/Paris'
  });
  
  const [result, setResult] = useState<MoonSignResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      const moonSign = calculateMoonSign({
        date: formData.date,
        time: formData.time,
        latitude: formData.latitude,
        longitude: formData.longitude,
        timezone: formData.timezone
      });
      
      setResult(moonSign);
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
              Calculateur de Signe Lunaire
            </h1>
            <p className="text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
              Découvrez votre signe lunaire et explorez votre monde émotionnel intérieur
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
                  <span>{loading ? 'Calcul en cours...' : 'Calculer mon signe lunaire'}</span>
                </button>
              </form>

              <div className="mt-8 p-6 bg-surface/50 rounded-lg">
                <h3 className="text-gold font-semibold mb-3">🌙 Qu'est-ce que le signe lunaire ?</h3>
                <p className="text-text-2 text-sm leading-relaxed">
                  Votre signe lunaire représente votre monde émotionnel intérieur, vos besoins profonds et votre façon de ressentir. 
                  Alors que le signe solaire montre qui vous êtes, la Lune révèle ce que vous ressentez et comment vous nourrissez votre âme.
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
                <div className="text-8xl mb-4">🌙</div>
                <h2 className="text-3xl font-bold text-gold mb-2 font-title">
                  Votre Lune en {zodiacSigns[result.sign].name}
                </h2>
                <p className="text-text-2 mb-4">{zodiacSigns[result.sign].symbol} Phase actuelle: {result.phase}</p>
                <div className="inline-block px-4 py-2 bg-primary/20 rounded-full">
                  <span className="text-primary font-semibold">
                    Élément émotionnel: {zodiacSigns[result.sign].element.charAt(0).toUpperCase() + zodiacSigns[result.sign].element.slice(1)}
                  </span>
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-gold mb-4 font-title">Votre Monde Émotionnel</h3>
                <p className="text-text-2 leading-relaxed mb-6">
                  {result.interpretation}
                </p>
                
                <h4 className="text-xl font-semibold text-gold mb-3 font-title">Recommandations Spirituelles</h4>
                <ul className="space-y-3">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-gold text-xl">🌙</span>
                      <span className="text-text-2">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-8 bg-primary/5">
                <h3 className="text-2xl font-bold text-gold mb-4 font-title text-center">
                  Harmoniser Votre Énergie Lunaire
                </h3>
                <p className="text-text-2 text-center mb-6">
                  Découvrez nos pierres et bougies spécialement sélectionnées pour votre signe lunaire, ou bénéficiez d'une guidance personnalisée pour mieux comprendre vos besoins émotionnels.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-primary soft-glow">
                    <span>Guidance Émotionnelle (25€)</span>
                  </Link>
                  <Link href="/boutique/pierres" className="btn-gold">
                    <span>Pierres Lunaires</span>
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
