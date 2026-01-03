'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { subscriptionPlans } from '@/lib/subscription/stripe';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AbonnementPage() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleSubscribe = async (planId: string) => {
    setLoading(planId);
    
    try {
      const response = await fetch('/api/subscription/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ planId })
      });

      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Erreur lors de la création de la session');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue');
    } finally {
      setLoading(null);
    }
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
              Abonnements Spirituels
            </h1>
            <p className="text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
              Rejoignez notre communauté et bénéficiez d'une guidance continue sur votre chemin spirituel
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subscriptionPlans.map((plan, index) => {
              const isPopular = plan.id === 'guidance-premium';
              
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`glass-card p-8 relative ${isPopular ? 'border-2 border-primary' : ''}`}
                >
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-1 bg-primary rounded-full text-white text-sm font-semibold">
                        ⭐ POPULAIRE
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gold mb-2 font-title">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-primary">{plan.price}€</span>
                      <span className="text-text-2">/ {plan.interval === 'month' ? 'mois' : 'an'}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary text-xl">✓</span>
                        <span className="text-text-2 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleSubscribe(plan.id)}
                    disabled={loading === plan.id}
                    className={`w-full ${isPopular ? 'btn-primary soft-glow' : 'btn-secondary'}`}
                  >
                    <span>{loading === plan.id ? 'Chargement...' : 'S\'abonner'}</span>
                  </button>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 mt-12 text-center"
          >
            <h3 className="text-2xl font-bold text-gold mb-4 font-title">
              Questions Fréquentes
            </h3>
            <div className="space-y-4 text-left max-w-3xl mx-auto">
              <div>
                <h4 className="font-semibold text-gold mb-2">Puis-je annuler à tout moment ?</h4>
                <p className="text-text-2 text-sm">
                  Oui, vous pouvez annuler votre abonnement à tout moment depuis votre espace personnel. 
                  Vous conserverez l'accès jusqu'à la fin de votre période payée.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gold mb-2">Comment sont générés les horoscopes ?</h4>
                <p className="text-text-2 text-sm">
                  Nos horoscopes sont générés quotidiennement par intelligence artificielle (DeepSeek) 
                  et personnalisés selon votre profil astrologique.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gold mb-2">Quels moyens de paiement acceptez-vous ?</h4>
                <p className="text-text-2 text-sm">
                  Nous acceptons toutes les cartes bancaires via Stripe (Visa, Mastercard, American Express).
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
