'use client';

import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import Navbar from '@/components/Navbar';
import { ZodiacSign } from '@/lib/astrology/types';
import { zodiacSigns } from '@/lib/astrology/zodiacData';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { use } from 'react';

export default function SignePage({ params }: { params: Promise<{ sign: string }> }) {
  const { sign } = use(params);
  const signData = zodiacSigns[sign as ZodiacSign];

  if (!signData) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gold mb-4">Signe non trouvé</h1>
            <Link href="/astrologie/signes" className="btn-primary">
              <span>Retour aux signes</span>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `${signData.name} - Signe Astrologique du Zodiaque`,
        "description": signData.description,
        "image": "https://angeline-nj.xyz/og-image.jpg",
        "author": {
          "@type": "Person",
          "name": "Angeline NJ"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Angeline NJ",
          "logo": {
            "@type": "ImageObject",
            "url": "https://angeline-nj.xyz/icon.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://angeline-nj.xyz/astrologie/signes/${sign}`
        }
      }} />
      <Navbar />
      
      <section className="pt-32 pb-16 aurora-background">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-8xl mb-6">{signData.emoji}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4 font-title">
              {signData.name}
            </h1>
            <p className="text-2xl text-text-2 mb-4">{signData.symbol} {signData.dateRange}</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <span className="px-4 py-2 bg-primary/20 rounded-full text-primary font-semibold">
                Élément: {signData.element.charAt(0).toUpperCase() + signData.element.slice(1)}
              </span>
              <span className="px-4 py-2 bg-surface rounded-full text-text-2 font-semibold">
                Planète: {signData.planet}
              </span>
              <span className="px-4 py-2 bg-surface rounded-full text-text-2 font-semibold">
                Modalité: {signData.modality.charAt(0).toUpperCase() + signData.modality.slice(1)}
              </span>
            </div>
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
            <h2 className="text-3xl font-bold text-gold mb-6 font-title">Description</h2>
            <p className="text-text-2 text-lg leading-relaxed">
              {signData.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold text-gold mb-4 font-title">✨ Forces</h3>
              <ul className="space-y-2">
                {signData.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-gold">•</span>
                    <span className="text-text-2">{strength}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold text-gold mb-4 font-title">⚠️ Défis</h3>
              <ul className="space-y-2">
                {signData.weaknesses.map((weakness, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-gold">•</span>
                    <span className="text-text-2">{weakness}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-gold mb-6 font-title">💕 Amour & Relations</h2>
            <p className="text-text-2 text-lg leading-relaxed mb-6">
              {signData.loveDescription}
            </p>
            
            <h3 className="text-xl font-semibold text-gold mb-3 font-title">Compatibilité</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-500/10 rounded-lg">
                <h4 className="text-green-400 font-semibold mb-2">Excellente</h4>
                <div className="flex flex-wrap gap-2">
                  {signData.compatibility.best.map((compatSign) => (
                    <Link 
                      key={compatSign}
                      href={`/astrologie/signes/${compatSign}`}
                      className="px-3 py-1 bg-surface rounded-full text-sm hover:bg-primary/20 transition-colors"
                    >
                      {zodiacSigns[compatSign].emoji} {zodiacSigns[compatSign].name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-blue-500/10 rounded-lg">
                <h4 className="text-blue-400 font-semibold mb-2">Bonne</h4>
                <div className="flex flex-wrap gap-2">
                  {signData.compatibility.good.map((compatSign) => (
                    <Link 
                      key={compatSign}
                      href={`/astrologie/signes/${compatSign}`}
                      className="px-3 py-1 bg-surface rounded-full text-sm hover:bg-primary/20 transition-colors"
                    >
                      {zodiacSigns[compatSign].emoji} {zodiacSigns[compatSign].name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-orange-500/10 rounded-lg">
                <h4 className="text-orange-400 font-semibold mb-2">Challengeante</h4>
                <div className="flex flex-wrap gap-2">
                  {signData.compatibility.challenging.map((compatSign) => (
                    <Link 
                      key={compatSign}
                      href={`/astrologie/signes/${compatSign}`}
                      className="px-3 py-1 bg-surface rounded-full text-sm hover:bg-primary/20 transition-colors"
                    >
                      {zodiacSigns[compatSign].emoji} {zodiacSigns[compatSign].name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold text-gold mb-4 font-title">💼 Carrière</h3>
              <p className="text-text-2 leading-relaxed">
                {signData.careerDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold text-gold mb-4 font-title">🌿 Santé</h3>
              <p className="text-text-2 leading-relaxed">
                {signData.healthDescription}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 bg-primary/5"
          >
            <h3 className="text-2xl font-bold text-gold mb-4 font-title text-center">
              Guidance Personnalisée pour {signData.name}
            </h3>
            <p className="text-text-2 text-center mb-6">
              Ces informations générales vous donnent un aperçu de votre signe. Pour une guidance vraiment personnalisée qui prend en compte votre thème astral complet et votre situation unique, je vous propose un tirage sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary soft-glow">
                <span>Tirage Personnalisé (25€)</span>
              </Link>
              <Link href="/astrologie/compatibilite" className="btn-secondary">
                <span>Test de Compatibilité</span>
              </Link>
            </div>
          </motion.div>

          <div className="mt-8 text-center">
            <Link href="/astrologie/signes" className="btn-secondary">
              <span>Voir tous les signes</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
