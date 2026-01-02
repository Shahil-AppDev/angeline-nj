'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import { motion } from 'framer-motion';
import { useState } from 'react';

const visioOptions = [
  {
    id: 'visio-30',
    title: 'Consultation Visio 30 min',
    price: 50,
    duration: '30 minutes',
    description: 'Idéal pour une question précise ou un tirage rapide',
    features: [
      'Consultation en direct (SMS, vocal ou visio)',
      'Tirage de cartes personnalisé',
      'Réponses à vos questions',
      'Conseils et guidance',
    ],
  },
  {
    id: 'visio-45',
    title: 'Consultation Visio 45 min',
    price: 70,
    duration: '45 minutes',
    description: 'Pour approfondir plusieurs aspects de votre vie',
    features: [
      'Consultation en direct (SMS, vocal ou visio)',
      'Tirage approfondi',
      'Plusieurs questions possibles',
      'Guidance détaillée',
      'Conseils personnalisés',
    ],
    badge: 'Populaire',
  },
  {
    id: 'visio-60',
    title: 'Consultation Visio 1h',
    price: 90,
    duration: '60 minutes',
    description: 'Pour une séance complète et transformatrice',
    features: [
      'Consultation en direct (SMS, vocal ou visio)',
      'Tirage complet multi-thématique',
      'Questions illimitées',
      'Guidance approfondie',
      'Soin énergétique Reiki inclus',
      'Suivi par message après la séance',
    ],
    badge: 'Recommandé',
  },
];

export default function VisioPage() {
  const [, setSelectedVisio] = useState<string | null>(null);

  const handlePayment = (visioId: string, price: number) => {
    setSelectedVisio(visioId);
    // Redirection vers PayPal
    window.open(`https://www.paypal.com/paypalme/Angelinetirage/${price}`, '_blank');
  };

  return (
    <>
      <Navbar />
      
      <Section className="pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4 font-title">
              Consultations Visio en Direct
            </h1>
            <p className="text-xl text-text-2 max-w-3xl mx-auto mb-8">
              Réservez votre consultation vidéo personnalisée. Échangeons en direct pour répondre à vos questions avec bienveillance.
            </p>
          </motion.div>

          {/* Comment ça marche */}
          <Card className="mb-12 p-8 bg-primary/5 border-gold-2/20">
            <h2 className="text-2xl font-semibold text-gold mb-6 font-title text-center">
              📋 Comment ça marche ?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">1</span>
                </div>
                <h3 className="font-semibold text-text mb-2">Choisissez votre durée</h3>
                <p className="text-text-2 text-sm">Sélectionnez la formule qui vous convient (30, 45 ou 60 min)</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">2</span>
                </div>
                <h3 className="font-semibold text-text mb-2">Payez en ligne</h3>
                <p className="text-text-2 text-sm">Réglez votre consultation via PayPal de manière sécurisée</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">3</span>
                </div>
                <h3 className="font-semibold text-text mb-2">Prenez RDV</h3>
                <p className="text-text-2 text-sm">Contactez-moi sur Instagram ou TikTok pour fixer la date et l'heure</p>
              </div>
            </div>
          </Card>

          {/* Formules */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {visioOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full p-6 relative ${option.badge ? 'border-gold-2' : ''}`}>
                  {option.badge && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gold text-bg px-4 py-1 rounded-full text-sm font-semibold">
                        {option.badge}
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gold mb-2 font-title">
                      {option.title}
                    </h3>
                    <div className="text-3xl font-bold text-text mb-2">
                      {option.price}€
                    </div>
                    <div className="text-muted text-sm">{option.duration}</div>
                  </div>

                  <p className="text-text-2 text-center mb-6">
                    {option.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-text-2">
                        <svg className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handlePayment(option.id, option.price)}
                    className="w-full bg-gold hover:bg-gold-2 text-bg font-semibold py-3 px-6 rounded-lg transition-all hover:shadow-lg"
                  >
                    Réserver maintenant
                  </button>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact après paiement */}
          <Card className="p-8 bg-surface">
            <h2 className="text-2xl font-semibold text-gold mb-6 font-title text-center">
              📱 Après votre paiement
            </h2>
            <p className="text-text-2 text-center mb-6">
              Une fois votre paiement PayPal effectué, contactez-moi sur mes réseaux sociaux pour convenir ensemble d'une date et d'un horaire. Le tirage peut être fait par SMS, vocaux ou visioconférence selon votre préférence.
            </p>
            <div className="bg-primary/5 p-4 rounded-lg border border-gold-2/20 mb-6">
              <p className="text-text-2 text-sm text-center">
                <strong className="text-gold">⚠️ Important :</strong> La question doit être précise !<br/>
                ❌ "Je souhaiterais tout savoir pour mon avenir professionnel" (trop vaste)<br/>
                ✅ "Est-ce que je vais trouver un nouveau travail prochainement ?" (claire)<br/><br/>
                <strong className="text-gold">Je ne réponds pas aux questions sur :</strong> la santé • la mort
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/Angeline.NJ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all border border-gold-2/20"
              >
                <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="font-semibold text-text">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@angeline.nj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all border border-gold-2/20"
              >
                <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <span className="font-semibold text-text">TikTok</span>
              </a>
            </div>
          </Card>
        </div>
      </Section>

      <Footer />
    </>
  );
}
