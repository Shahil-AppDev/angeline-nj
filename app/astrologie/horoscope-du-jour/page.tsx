'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { dailyHoroscopes } from '@/lib/astrology/horoscopeData';
import { ZodiacSign } from '@/lib/astrology/types';
import { zodiacSigns } from '@/lib/astrology/zodiacData';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function HoroscopeDuJourPage() {
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);
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
              Horoscope du Jour
            </h1>
            <p className="text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
              Découvrez ce que les astres vous réservent aujourd'hui
            </p>
            <p className="text-text-2 mt-4">
              {new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {!selectedSign ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gold mb-4 font-title">
                  Sélectionnez votre signe
                </h2>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {signs.map((sign, index) => (
                  <motion.button
                    key={sign}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    onClick={() => setSelectedSign(sign)}
                    className="glass-card p-6 hover:scale-105 transition-transform cursor-pointer"
                  >
                    <div className="text-5xl mb-3">{zodiacSigns[sign].emoji}</div>
                    <h3 className="text-xl font-semibold text-gold font-title">
                      {zodiacSigns[sign].name}
                    </h3>
                    <p className="text-text-2 text-sm mt-1">{zodiacSigns[sign].dateRange}</p>
                  </motion.button>
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              <div className="glass-card p-8 text-center">
                <div className="text-8xl mb-4">{zodiacSigns[selectedSign].emoji}</div>
                <h2 className="text-3xl font-bold text-gold mb-2 font-title">
                  {zodiacSigns[selectedSign].name}
                </h2>
                <p className="text-text-2 mb-4">{zodiacSigns[selectedSign].dateRange}</p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <div className="inline-block px-4 py-2 bg-primary/20 rounded-full">
                    <span className="text-primary font-semibold">
                      Chiffre chanceux: {dailyHoroscopes[selectedSign].luckyNumber}
                    </span>
                  </div>
                  <div className="inline-block px-4 py-2 bg-primary/20 rounded-full">
                    <span className="text-primary font-semibold">
                      Couleur: {dailyHoroscopes[selectedSign].luckyColor}
                    </span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-gold mb-4 font-title">🌟 Général</h3>
                <p className="text-text-2 leading-relaxed mb-6">
                  {dailyHoroscopes[selectedSign].general}
                </p>

                <h3 className="text-2xl font-bold text-gold mb-4 font-title">💕 Amour</h3>
                <p className="text-text-2 leading-relaxed mb-6">
                  {dailyHoroscopes[selectedSign].love}
                </p>

                <h3 className="text-2xl font-bold text-gold mb-4 font-title">💼 Travail</h3>
                <p className="text-text-2 leading-relaxed mb-6">
                  {dailyHoroscopes[selectedSign].career}
                </p>

                <h3 className="text-2xl font-bold text-gold mb-4 font-title">🌿 Santé</h3>
                <p className="text-text-2 leading-relaxed mb-6">
                  {dailyHoroscopes[selectedSign].health}
                </p>

                <h3 className="text-2xl font-bold text-gold mb-4 font-title">✨ Conseil du Jour</h3>
                <p className="text-text-2 leading-relaxed">
                  {dailyHoroscopes[selectedSign].advice}
                </p>
              </div>

              <div className="glass-card p-8 bg-primary/5">
                <h3 className="text-2xl font-bold text-gold mb-4 font-title text-center">
                  Guidance Personnalisée
                </h3>
                <p className="text-text-2 text-center mb-6">
                  Cet horoscope vous donne une vision générale. Pour une guidance vraiment personnalisée basée sur votre situation unique et votre énergie du moment, je vous propose un tirage de cartes sur mesure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-primary soft-glow">
                    <span>Tirage du Jour (15€)</span>
                  </Link>
                  <Link href="/boutique" className="btn-secondary">
                    <span>Bougies & Pierres</span>
                  </Link>
                </div>
              </div>

              <div className="text-center">
                <button onClick={() => setSelectedSign(null)} className="btn-secondary">
                  <span>Voir tous les signes</span>
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
