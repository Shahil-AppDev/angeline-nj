'use client';

import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Comment se passe un tirage en vidéo ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Une fois votre commande passée, je réalise votre tirage personnalisé en me connectant à votre énergie. J\'enregistre l\'interprétation complète en vidéo et je vous l\'envoie par email ou via Instagram sous 48h.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels domaines pouvez-vous aborder ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Je peux aborder les domaines sentimental, professionnel, spirituel ou personnel. Cependant, je ne réponds pas aux questions concernant la santé ou la mort, par éthique.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ai-je besoin d\'être présent en direct ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non, c\'est l\'avantage du format vidéo différé. Je me connecte à votre énergie à distance grâce à votre photo et votre date de naissance. Vous pouvez visionner votre guidance tranquillement, au moment qui vous convient le mieux.',
      },
    },
  ],
};

const benefices = [
  {
    title: 'Nouvelles perspectives',
    description: 'Une lecture de cartes peut aider à voir une situation sous un nouvel angle, ou à réfléchir à quelque chose que vous n\'avez pas considéré auparavant.',
    icon: '🔍',
  },
  {
    title: 'Clarté',
    description: 'Les cartes peuvent aider à clarifier des situations ou des sentiments qui peuvent sembler confus ou compliqués.',
    icon: '💡',
  },
  {
    title: 'Guidance',
    description: 'Les lectures de cartomancie peuvent offrir des conseils sur la façon de naviguer dans des situations difficiles ou des décisions importantes.',
    icon: '🧭',
  },
  {
    title: 'Affirmation',
    description: 'Parfois, une lecture de cartes peut confirmer ce que vous ressentez déjà intuitivement ou ce que vous savez être vrai.',
    icon: '✨',
  },
];

export default function TiragesPage() {
  return (
    <>
      <JsonLd data={faqData} />
      <Navbar />
      
      <section className="pt-32 pb-16 aurora-background">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-gold mb-6 font-title">
              Tirages de Cartes & Guidance Personnalisée
            </h1>
            <p className="text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
              La cartomancie est une forme de divination qui utilise les cartes pour obtenir des indications sur divers aspects de la vie
            </p>
            <p className="text-lg text-text-2 max-w-3xl mx-auto leading-relaxed mt-4">
              Je propose des tirages de cartes et du contenu astrologique tous les jours sur mon TikTok
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
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl text-gold mb-4 font-title">
              À quoi sert la cartomancie ?
            </h2>
            <p className="text-text-2 text-lg max-w-3xl mx-auto">
              La cartomancie est généralement utilisée pour aider une personne à comprendre et à naviguer dans différents aspects de sa vie
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefices.map((benefice, index) => (
              <motion.div
                key={benefice.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8"
              >
                <div className="text-5xl mb-4">{benefice.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 font-title">
                  <span className="gold-halo text-gold">{benefice.title}</span>
                </h3>
                <p className="text-text-2 leading-relaxed">
                  {benefice.description}
                </p>
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
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-serif text-3xl text-gold font-title mb-8 text-center">
              Votre réponse en vidéo !
            </h2>
            
            <div className="glass-card p-8 mb-8">
              <p className="text-text-2 text-lg leading-relaxed mb-6">
                La réponse à votre question est envoyée <strong>SOUS maximum 48 heures</strong>.
              </p>
              
              <h3 className="font-serif text-2xl font-title mb-4">
                <span className="gold-halo text-gold">Modalités</span>
              </h3>
              <p className="text-text-2 leading-relaxed mb-6">
                Je l'envoie par mail ou sur Instagram en fonction de votre préférence (laissez moi un message sur mon Instagram @reiki.by.angie).
              </p>
              <p className="text-text-2 leading-relaxed mb-6">
                Je ne réponds pas aux questions sur :
              </p>
              <ul className="list-disc list-inside text-text-2 mb-6 space-y-2">
                <li>la santé</li>
                <li>la mort</li>
              </ul>
              
              <h3 className="font-serif text-2xl font-title mb-4">
                <span className="gold-halo text-gold">La question doit être précise !</span>
              </h3>
              <div className="bg-surface p-6 rounded-lg mb-4">
                <p className="text-text-2 mb-2">
                  ❌ <em>« Je souhaiterais tout savoir pour mon avenir professionnel »</em>
                </p>
                <p className="text-gold-2 text-sm">
                  Cette question est trop vaste…
                </p>
              </div>
              <div className="bg-surface p-6 rounded-lg">
                <p className="text-text-2 mb-2">
                  ✅ <em>« Est-ce que je vais trouver un nouveau travail prochainement »</em>
                </p>
                <p className="text-gold-2 text-sm">
                  Cette question est claire et aura donc une réponse claire.
                </p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://www.tiktok.com/@angelinenj"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center space-x-2 mb-4"
              >
                <span>Mon TikTok : @angelinenj</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <p className="text-text-2 mb-6">
                Pour un tirage personnalisé en direct, vous pouvez me contacter sur mes réseaux
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="btn-primary soft-glow">
                  <span>Commander un tirage en vidéo</span>
                </Link>
                <Link href="/boutique" className="btn-gold">
                  <span>Découvrir mes oracles</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
