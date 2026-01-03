'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { calculateAscendant, calculateMoonSign, getSunSign } from '@/lib/astrology/calculations';
import { ZodiacSign } from '@/lib/astrology/types';
import { zodiacSigns } from '@/lib/astrology/zodiacData';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function ThemeAstralPage() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    city: '',
    latitude: 48.8566,
    longitude: 2.3522,
    timezone: 'Europe/Paris'
  });
  
  const [result, setResult] = useState<{
    sun: ZodiacSign;
    moon: ZodiacSign;
    ascendant: ZodiacSign;
    birthData: typeof formData;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      const birthData = {
        date: formData.date,
        time: formData.time,
        latitude: formData.latitude,
        longitude: formData.longitude,
        timezone: formData.timezone
      };

      const sunSign = getSunSign(formData.date);
      const ascendant = calculateAscendant(birthData);
      const moonSign = calculateMoonSign(birthData);
      
      setResult({
        sun: sunSign,
        ascendant: ascendant.sign,
        moon: moonSign.sign,
        birthData: formData
      });
      setLoading(false);
    }, 1500);
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
              Thème Astral Complet
            </h1>
            <p className="text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
              Générez votre carte du ciel et découvrez les positions planétaires à votre naissance
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
                Informations de naissance
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="date" className="block text-text mb-2 font-semibold">
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
                  <label htmlFor="time" className="block text-text mb-2 font-semibold">
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
                </div>

                <div>
                  <label htmlFor="city" className="block text-text mb-2 font-semibold">
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
                  <span>{loading ? 'Génération en cours...' : 'Générer mon thème astral'}</span>
                </button>
              </form>

              <div className="mt-8 p-6 bg-surface/50 rounded-lg">
                <h3 className="text-gold font-semibold mb-3">🗺️ Qu'est-ce qu'un thème astral ?</h3>
                <p className="text-text-2 text-sm leading-relaxed">
                  Votre thème astral est une carte du ciel au moment exact de votre naissance. Il révèle les positions du Soleil, de la Lune et des planètes, 
                  offrant une vision complète de votre personnalité, vos talents et votre chemin de vie.
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
                <h2 className="text-3xl font-bold text-gold mb-6 font-title">
                  Votre Thème Astral
                </h2>
                <p className="text-text-2 mb-8">
                  Né(e) le {new Date(result.birthData.date).toLocaleDateString('fr-FR')} à {result.birthData.time} - {result.birthData.city}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="glass-card p-6">
                    <div className="text-6xl mb-3">☀️</div>
                    <h3 className="text-xl font-bold text-gold mb-2 font-title">Soleil</h3>
                    <p className="text-2xl text-primary mb-2">{zodiacSigns[result.sun].name}</p>
                    <p className="text-text-2 text-sm">Votre essence</p>
                  </div>

                  <div className="glass-card p-6">
                    <div className="text-6xl mb-3">🌙</div>
                    <h3 className="text-xl font-bold text-gold mb-2 font-title">Lune</h3>
                    <p className="text-2xl text-primary mb-2">{zodiacSigns[result.moon].name}</p>
                    <p className="text-text-2 text-sm">Vos émotions</p>
                  </div>

                  <div className="glass-card p-6">
                    <div className="text-6xl mb-3">🌅</div>
                    <h3 className="text-xl font-bold text-gold mb-2 font-title">Ascendant</h3>
                    <p className="text-2xl text-primary mb-2">{zodiacSigns[result.ascendant].name}</p>
                    <p className="text-text-2 text-sm">Votre apparence</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-gold mb-4 font-title">Interprétation de votre Trinité</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gold mb-2 font-title">☀️ Soleil en {zodiacSigns[result.sun].name}</h4>
                    <p className="text-text-2 leading-relaxed">{zodiacSigns[result.sun].description}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gold mb-2 font-title">🌙 Lune en {zodiacSigns[result.moon].name}</h4>
                    <p className="text-text-2 leading-relaxed">
                      Votre monde émotionnel est teinté de l'énergie {zodiacSigns[result.moon].element}. 
                      {zodiacSigns[result.moon].description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gold mb-2 font-title">🌅 Ascendant {zodiacSigns[result.ascendant].name}</h4>
                    <p className="text-text-2 leading-relaxed">
                      Vous projetez l'énergie de {zodiacSigns[result.ascendant].name} dans vos interactions sociales. 
                      {zodiacSigns[result.ascendant].description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 bg-primary/5">
                <h3 className="text-2xl font-bold text-gold mb-4 font-title text-center">
                  Aller Plus Loin
                </h3>
                <p className="text-text-2 text-center mb-6">
                  Ce thème astral vous donne les bases de votre carte du ciel. Pour une analyse complète et personnalisée de votre chemin de vie, 
                  je vous propose une consultation de guidance approfondie qui intègre votre thème astral à un tirage de cartes sur mesure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-primary soft-glow">
                    <span>Guidance Complète (45€)</span>
                  </Link>
                  <Link href="/astrologie" className="btn-secondary">
                    <span>Autres calculateurs</span>
                  </Link>
                </div>
              </div>

              <div className="text-center">
                <button onClick={resetForm} className="btn-secondary">
                  <span>Nouveau thème</span>
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
