'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ZodiacSign } from '@/lib/astrology/types';
import { zodiacSigns } from '@/lib/astrology/zodiacData';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SignesPage() {
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
              Les 12 Signes du Zodiaque
            </h1>
            <p className="text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
              Découvrez les traits, forces et compatibilités de chaque signe astrologique
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gold mb-4 font-title">
              Les Quatre Éléments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-8">
              <div className="glass-card p-6">
                <div className="text-4xl mb-2">🔥</div>
                <h3 className="text-xl font-bold text-red-400 mb-2 font-title">Feu</h3>
                <p className="text-text-2 text-sm">Passion, Action, Énergie</p>
              </div>
              <div className="glass-card p-6">
                <div className="text-4xl mb-2">🌍</div>
                <h3 className="text-xl font-bold text-green-400 mb-2 font-title">Terre</h3>
                <p className="text-text-2 text-sm">Stabilité, Pratique, Matériel</p>
              </div>
              <div className="glass-card p-6">
                <div className="text-4xl mb-2">💨</div>
                <h3 className="text-xl font-bold text-blue-400 mb-2 font-title">Air</h3>
                <p className="text-text-2 text-sm">Intellect, Communication, Social</p>
              </div>
              <div className="glass-card p-6">
                <div className="text-4xl mb-2">💧</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2 font-title">Eau</h3>
                <p className="text-text-2 text-sm">Émotion, Intuition, Profondeur</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signs.map((sign, index) => {
              const signInfo = zodiacSigns[sign];
              return (
                <motion.div
                  key={sign}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="glass-card p-6 hover:scale-105 transition-transform h-full flex flex-col">
                    <div className="text-center mb-4">
                      <div className="text-6xl mb-3">{signInfo.emoji}</div>
                      <h3 className="text-2xl font-bold text-gold inline-block mb-1 font-title">
                        {signInfo.name}
                      </h3>
                      <p className="text-text-2 text-sm mb-2">{signInfo.symbol} {signInfo.dateRange}</p>
                      <div className="flex justify-center gap-2 flex-wrap">
                        <span className="px-3 py-1 bg-primary/20 rounded-full text-xs text-primary">
                          {signInfo.element.charAt(0).toUpperCase() + signInfo.element.slice(1)}
                        </span>
                        <span className="px-3 py-1 bg-surface rounded-full text-xs text-text-2">
                          {signInfo.planet}
                        </span>
                      </div>
                    </div>
                    <p className="text-text-2 text-sm text-center line-clamp-3 flex-1">
                      {signInfo.description}
                    </p>
                    <div className="mt-4 text-center">
                      <Link href={`/astrologie/signes/${sign}`} className="btn-gold w-full block">
                        <span>Découvrir</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding mystic-gradient">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gold mb-6 font-title">
              Découvrez Votre Carte du Ciel
            </h2>
            <p className="text-text-2 text-lg mb-8">
              Votre signe solaire n'est qu'une partie de votre identité astrologique. 
              Explorez votre thème astral complet pour une vision globale de votre personnalité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/astrologie/theme-astral" className="btn-primary soft-glow">
                <span>Mon Thème Astral</span>
              </Link>
              <Link href="/astrologie/compatibilite" className="btn-gold">
                <span>Compatibilité Amoureuse</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
