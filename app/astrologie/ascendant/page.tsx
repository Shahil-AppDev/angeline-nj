'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { calculateAscendant } from '@/lib/astrology/calculations';
import { AscendantResult } from '@/lib/astrology/types';
import { zodiacSigns } from '@/lib/astrology/zodiacData';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function AscendantPage() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    city: '',
    latitude: 48.8566,
    longitude: 2.3522,
    timezone: 'Europe/Paris'
  });
  
  const [result, setResult] = useState<AscendantResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      const ascendant = calculateAscendant({
        date: formData.date,
        time: formData.time,
        latitude: formData.latitude,
        longitude: formData.longitude,
        timezone: formData.timezone
      });
      
      setResult(ascendant);
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
              Calculateur d'Ascendant Astrologique
            </h1>
            <p className="text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
              Découvrez votre ascendant et son influence sur votre personnalité
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
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text focus:border-primary focus:outline-none"
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
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text focus:border-primary focus:outline-none"
                  />
                  <p className="text-text-2 text-sm mt-2">
                    L'heure exacte est importante pour un calcul précis
                  </p>
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
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text focus:border-primary focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full soft-glow"
                >
                  <span>{loading ? 'Calcul en cours...' : 'Calculer mon ascendant'}</span>
                </button>
              </form>

              <div className="mt-8 p-6 bg-surface/50 rounded-lg">
                <h3 className="text-gold font-semibold mb-3">💡 Qu'est-ce que l'ascendant ?</h3>
                <p className="text-text-2 text-sm leading-relaxed">
                  L'ascendant est le signe astrologique qui se levait à l'horizon Est au moment exact de votre naissance. 
                  Il représente votre masque social et influence votre apparence physique.
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
                <div className="text-8xl mb-4">{zodiacSigns[result.sign].emoji}</div>
                <h2 className="text-3xl font-bold text-gold mb-2 font-title">
                  Votre Ascendant: {zodiacSigns[result.sign].name}
                </h2>
                <p className="text-text-2 mb-4">{zodiacSigns[result.sign].symbol} {zodiacSigns[result.sign].dateRange}</p>
                <div className="inline-block px-4 py-2 bg-primary/20 rounded-full">
                  <span className="text-primary font-semibold">
                    Élément: {zodiacSigns[result.sign].element.charAt(0).toUpperCase() + zodiacSigns[result.sign].element.slice(1)}
                  </span>
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-gold mb-4 font-title">Interprétation</h3>
                <p className="text-text-2 leading-relaxed mb-6">
                  {result.interpretation}
                </p>
                
                <h4 className="text-xl font-semibold text-gold mb-3 font-title">Recommandations Spirituelles</h4>
                <ul className="space-y-3">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-gold text-xl">✨</span>
                      <span className="text-text-2">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-8 bg-primary/5">
                <h3 className="text-2xl font-bold text-gold mb-4 font-title text-center">
                  Approfondir Votre Guidance
                </h3>
                <p className="text-text-2 text-center mb-6">
                  Pour une guidance complète et personnalisée, je vous propose un tirage de cartes sur mesure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-primary soft-glow">
                    <span>Tirage Personnalisé (25€)</span>
                  </Link>
                  <Link href="/boutique" className="btn-gold">
                    <span>Pierres & Bougies</span>
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
