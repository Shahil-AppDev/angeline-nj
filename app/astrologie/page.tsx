'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AstrologiePage() {
  const tools = [
    {
      title: 'Calculateur d\'Ascendant',
      description: 'Découvrez votre ascendant astrologique et son influence sur votre personnalité',
      icon: '🌅',
      href: '/astrologie/ascendant',
      cta: 'Calculer mon ascendant'
    },
    {
      title: 'Compatibilité Amoureuse',
      description: 'Analysez votre compatibilité avec votre partenaire selon les astres',
      icon: '💕',
      href: '/astrologie/compatibilite',
      cta: 'Tester ma compatibilité'
    },
    {
      title: 'Signe Lunaire',
      description: 'Calculez votre signe lunaire et explorez votre monde émotionnel',
      icon: '🌙',
      href: '/astrologie/signe-lunaire',
      cta: 'Découvrir ma Lune'
    },
    {
      title: 'Thème Astral Complet',
      description: 'Générez votre carte du ciel et explorez votre thème natal',
      icon: '🗺️',
      href: '/astrologie/theme-astral',
      cta: 'Mon thème astral'
    }
  ];

  const horoscopes = [
    {
      title: 'Horoscope du Jour',
      description: 'Consultez votre horoscope quotidien pour tous les signes',
      icon: '📅',
      href: '/astrologie/horoscope-du-jour'
    },
    {
      title: 'Horoscope Pleine Lune',
      description: 'Découvrez l\'influence de la pleine lune sur votre signe',
      icon: '🌕',
      href: '/astrologie/horoscope-pleine-lune'
    },
    {
      title: 'Horoscope 2025',
      description: 'Vos prévisions astrologiques pour toute l\'année',
      icon: '📆',
      href: '/astrologie/horoscope-2025'
    }
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold text-gold mb-6 font-title">
              Astrologie & Guidance Céleste
            </h1>
            <p className="text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
              Explorez les mystères des astres et découvrez ce que les étoiles révèlent sur votre chemin de vie
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
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4 font-title">
              Calculateurs Astrologiques
            </h2>
            <p className="text-text-2 text-lg max-w-2xl mx-auto">
              Outils gratuits pour explorer votre carte du ciel et mieux vous connaître
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 hover:scale-105 transition-transform"
              >
                <div className="text-6xl mb-4 text-center">{tool.icon}</div>
                <h3 className="text-2xl font-semibold text-gold mb-3 font-title text-center">
                  {tool.title}
                </h3>
                <p className="text-text-2 mb-6 text-center">
                  {tool.description}
                </p>
                <Link 
                  href={tool.href}
                  className="btn-primary w-full text-center block"
                >
                  <span>{tool.cta}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding mystic-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4 font-title">
              Horoscopes & Prévisions
            </h2>
            <p className="text-text-2 text-lg max-w-2xl mx-auto">
              Guidance astrologique quotidienne et prévisions lunaires
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {horoscopes.map((horoscope, index) => (
              <motion.div
                key={horoscope.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={horoscope.href} className="block glass-card p-6 hover:scale-105 transition-transform">
                  <div className="text-5xl mb-4 text-center">{horoscope.icon}</div>
                  <h3 className="text-xl font-semibold text-gold mb-2 font-title text-center">
                    {horoscope.title}
                  </h3>
                  <p className="text-text-2 text-sm text-center">
                    {horoscope.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4 font-title">
              Les 12 Signes du Zodiaque
            </h2>
            <p className="text-text-2 text-lg max-w-2xl mx-auto mb-8">
              Découvrez les traits, forces et compatibilités de chaque signe astrologique
            </p>
            <Link href="/astrologie/signes" className="btn-secondary">
              <span>Explorer les signes</span>
            </Link>
          </motion.div>
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
              Besoin d'une Guidance Personnalisée ?
            </h2>
            <p className="text-text-2 text-lg mb-8">
              Les calculateurs vous donnent des informations générales, mais pour une guidance vraiment personnalisée basée sur votre énergie unique, je vous propose un tirage de cartes sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary soft-glow">
                <span>Tirage Personnalisé</span>
              </Link>
              <Link href="/boutique" className="btn-secondary">
                <span>Pierres & Bougies Astrologiques</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
