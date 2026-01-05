'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HoroscopePleineLunePage() {
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
              Horoscope de la Pleine Lune
            </h1>
            <p className="text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
              Découvrez l'influence de la pleine lune sur votre signe astrologique
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
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">🌕</div>
              <h2 className="text-3xl font-bold text-gold mb-4 font-title">
                Prochaine Pleine Lune
              </h2>
              <p className="text-text-2 text-lg">
                La pleine lune est un moment de culmination, de révélation et de libération. 
                C'est le moment idéal pour laisser aller ce qui ne vous sert plus et célébrer vos accomplissements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-gold mb-3 font-title">🌙 Rituels de Pleine Lune</h3>
                <ul className="space-y-2 text-text-2">
                  <li>✨ Méditation sous la lune</li>
                  <li>✨ Écriture de gratitude</li>
                  <li>✨ Libération des blocages</li>
                  <li>✨ Rechargement des pierres</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-gold mb-3 font-title">🕯️ Bougies Recommandées</h3>
                <ul className="space-y-2 text-text-2">
                  <li>🕯️ Bougie blanche (purification)</li>
                  <li>🕯️ Bougie argentée (énergie lunaire)</li>
                  <li>🕯️ Bougie violette (spiritualité)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-gold mb-6 font-title text-center">
              Influence par Signe
            </h2>
            <p className="text-text-2 text-center mb-8">
              La pleine lune affecte chaque signe différemment selon sa position dans le zodiaque. 
              Consultez l'horoscope du jour pour des prévisions spécifiques à votre signe.
            </p>
            <div className="text-center">
              <Link href="/astrologie/horoscope-du-jour" className="btn-primary soft-glow">
                <span>Voir l'horoscope du jour</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 bg-primary/5"
          >
            <h3 className="text-2xl font-bold text-gold mb-4 font-title text-center">
              Rituel de Pleine Lune Personnalisé
            </h3>
            <p className="text-text-2 text-center mb-6">
              Pour un rituel de pleine lune adapté à votre situation unique et à vos intentions, 
              je vous propose une guidance personnalisée avec tirage de cartes et recommandations spirituelles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary soft-glow">
                <span>Guidance Pleine Lune (35€)</span>
              </Link>
              <Link href="/boutique/bougies" className="btn-gold">
                <span>Bougies Rituelles</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
