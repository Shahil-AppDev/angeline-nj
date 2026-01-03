'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ZodiacSign } from '@/lib/astrology/types';
import { zodiacSigns } from '@/lib/astrology/zodiacData';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Horoscope2026Page() {
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
              Horoscope 2026
            </h1>
            <p className="text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
              Vos prévisions astrologiques pour toute l'année 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-gold mb-6 font-title text-center">
              L'Année 2026 - Énergies Globales
            </h2>
            <p className="text-text-2 leading-relaxed mb-6">
              L'année 2026 s'annonce comme une période de transformation profonde et de croissance spirituelle. 
              Les transits planétaires majeurs nous invitent à embrasser le changement et à nous aligner avec notre véritable essence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center">
                <div className="text-4xl mb-3">💫</div>
                <h3 className="text-lg font-semibold text-gold mb-2 font-title">Transformation</h3>
                <p className="text-text-2 text-sm">Évolution personnelle et spirituelle</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="text-lg font-semibold text-gold mb-2 font-title">Opportunités</h3>
                <p className="text-text-2 text-sm">Nouvelles portes s'ouvrent</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl mb-3">✨</div>
                <h3 className="text-lg font-semibold text-gold mb-2 font-title">Alignement</h3>
                <p className="text-text-2 text-sm">Connexion à votre mission d'âme</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gold mb-6 font-title text-center">
              Prévisions par Signe
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {signs.map((sign, index) => (
                <motion.div
                  key={sign}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glass-card p-6 text-center hover:scale-105 transition-transform"
                >
                  <div className="text-5xl mb-3">{zodiacSigns[sign].emoji}</div>
                  <h3 className="text-xl font-semibold text-gold font-title">
                    {zodiacSigns[sign].name}
                  </h3>
                  <p className="text-text-2 text-sm mt-2">
                    Année de {sign === 'belier' ? 'nouveaux départs' : 
                              sign === 'taureau' ? 'stabilité' :
                              sign === 'gemeaux' ? 'communication' :
                              sign === 'cancer' ? 'émotions' :
                              sign === 'lion' ? 'créativité' :
                              sign === 'vierge' ? 'organisation' :
                              sign === 'balance' ? 'harmonie' :
                              sign === 'scorpion' ? 'transformation' :
                              sign === 'sagittaire' ? 'expansion' :
                              sign === 'capricorne' ? 'ambition' :
                              sign === 'verseau' ? 'innovation' : 'spiritualité'}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 bg-primary/5"
          >
            <h3 className="text-2xl font-bold text-gold mb-4 font-title text-center">
              Votre Année 2026 Personnalisée
            </h3>
            <p className="text-text-2 text-center mb-6">
              Ces prévisions générales vous donnent un aperçu de l'année. Pour une guidance vraiment personnalisée 
              qui prend en compte votre thème astral unique, vos défis et vos opportunités spécifiques, 
              je vous propose un tirage annuel complet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary soft-glow">
                <span>Tirage Annuel 2026 (65€)</span>
              </Link>
              <Link href="/astrologie/theme-astral" className="btn-secondary">
                <span>Mon Thème Astral</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
