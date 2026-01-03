'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { calculateCompatibility } from '@/lib/astrology/calculations';
import { CompatibilityResult, ZodiacSign } from '@/lib/astrology/types';
import { zodiacSigns } from '@/lib/astrology/zodiacData';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function CompatibilitePage() {
  const [sign1, setSign1] = useState<ZodiacSign>('belier');
  const [sign2, setSign2] = useState<ZodiacSign>('lion');
  const [result, setResult] = useState<CompatibilityResult | null>(null);

  const signs: ZodiacSign[] = ['belier', 'taureau', 'gemeaux', 'cancer', 'lion', 'vierge', 'balance', 'scorpion', 'sagittaire', 'capricorne', 'verseau', 'poissons'];

  const handleCalculate = () => {
    const compatibility = calculateCompatibility(sign1, sign2);
    setResult(compatibility);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 65) return 'text-blue-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-orange-400';
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
              Compatibilité Amoureuse Astrologique
            </h1>
            <p className="text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
              Découvrez votre compatibilité avec votre partenaire selon les astres
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
              Sélectionnez vos signes astrologiques
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="sign1" className="block text-text mb-3 font-semibold text-center">
                  Votre signe
                </label>
                <select
                  id="sign1"
                  value={sign1}
                  onChange={(e) => setSign1(e.target.value as ZodiacSign)}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text focus:border-primary focus:outline-none text-center"
                >
                  {signs.map(sign => (
                    <option key={sign} value={sign}>
                      {zodiacSigns[sign].emoji} {zodiacSigns[sign].name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="sign2" className="block text-text mb-3 font-semibold text-center">
                  Signe de votre partenaire
                </label>
                <select
                  id="sign2"
                  value={sign2}
                  onChange={(e) => setSign2(e.target.value as ZodiacSign)}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text focus:border-primary focus:outline-none text-center"
                >
                  {signs.map(sign => (
                    <option key={sign} value={sign}>
                      {zodiacSigns[sign].emoji} {zodiacSigns[sign].name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleCalculate}
              className="btn-primary w-full soft-glow"
            >
              <span>Calculer la compatibilité</span>
            </button>
          </motion.div>

          {result && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="glass-card p-8 text-center">
                <div className="flex justify-center items-center gap-8 mb-6">
                  <div>
                    <div className="text-6xl mb-2">{zodiacSigns[result.sign1].emoji}</div>
                    <p className="text-gold font-semibold">{zodiacSigns[result.sign1].name}</p>
                  </div>
                  <div className="text-4xl">💕</div>
                  <div>
                    <div className="text-6xl mb-2">{zodiacSigns[result.sign2].emoji}</div>
                    <p className="text-gold font-semibold">{zodiacSigns[result.sign2].name}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className={`text-6xl font-bold ${getScoreColor(result.score)} mb-2`}>
                    {result.score}%
                  </div>
                  <p className="text-text-2">Score de compatibilité</p>
                </div>

                <div className="w-full bg-surface rounded-full h-4 mb-4">
                  <div
                    className="h-4 rounded-full bg-gradient-to-r from-primary to-gold transition-all"
                    style={{ width: `${result.score}%` }}
                  />
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-gold mb-4 font-title">Compatibilité Générale</h3>
                <p className="text-text-2 leading-relaxed mb-6">{result.overall}</p>

                <h4 className="text-xl font-semibold text-gold mb-3 font-title">💕 Amour & Romance</h4>
                <p className="text-text-2 leading-relaxed mb-6">{result.love}</p>

                <h4 className="text-xl font-semibold text-gold mb-3 font-title">💬 Communication</h4>
                <p className="text-text-2 leading-relaxed mb-6">{result.communication}</p>

                <h4 className="text-xl font-semibold text-gold mb-3 font-title">⚠️ Défis Potentiels</h4>
                <p className="text-text-2 leading-relaxed mb-6">{result.challenges}</p>

                <h4 className="text-xl font-semibold text-gold mb-3 font-title">✨ Conseils</h4>
                <p className="text-text-2 leading-relaxed">{result.advice}</p>
              </div>

              <div className="glass-card p-8 bg-primary/5">
                <h3 className="text-2xl font-bold text-gold mb-4 font-title text-center">
                  Approfondir Votre Relation
                </h3>
                <p className="text-text-2 text-center mb-6">
                  Cette analyse astrologique vous donne un aperçu général. Pour une guidance de couple vraiment personnalisée et des conseils adaptés à votre situation unique, je vous propose un tirage de couple sur mesure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-primary soft-glow">
                    <span>Tirage de Couple (35€)</span>
                  </Link>
                  <Link href="/boutique/bougies" className="btn-secondary">
                    <span>Bougies d'Amour</span>
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
