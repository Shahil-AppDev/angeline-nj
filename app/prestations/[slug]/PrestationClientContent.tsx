'use client';

import TikTokGallery from '@/components/TikTokGallery';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import { getRelatedPrestations } from '@/lib/prestations';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Prestation {
  slug: string;
  icon: string;
  title: string;
  subtitle: string;
  badge: string;
  price: string;
  format: string;
  oldSiteUrl: string;
  intro: string;
  forWho: string[];
  whatYouGet: string[];
  process: { step: number; title: string; description: string }[];
  faq: { question: string; answer: string }[];
  relatedPrestations?: string[];
  shortDescription: string;
}

export default function PrestationClientContent({ prestation }: { prestation: Prestation }) {
  const relatedPrestations = getRelatedPrestations(prestation.slug, prestation.relatedPrestations || []);
  const isReiki = prestation.slug.includes('reiki');
  const isRituel = prestation.slug.includes('rituel');
  const isFormation = prestation.slug.includes('formation');
  
  // Déterminer le type de prestation pour adapter le texte
  const getPrestationType = () => {
    if (isReiki) return 'ce soin';
    if (isRituel) return 'ce rituel';
    if (isFormation) return 'cette formation';
    return 'ce tirage';
  };
  
  
  

  return (
    <>
      <Section className="pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-2 mb-4">
              <Link href="/prestations" className="text-text-2 hover:text-primary transition-colors">
                ← Retour aux prestations
              </Link>
            </div>

            <div className="flex items-start gap-6 mb-8">
              <div className="text-6xl">{prestation.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h1 className="font-serif text-4xl md:text-5xl font-bold text-text">
                    {prestation.title}
                  </h1>
                  <span className="px-3 py-1 rounded-full bg-surface border border-border text-sm text-text-2">
                    {prestation.badge}
                  </span>
                </div>
                <p className="text-xl text-text-2 mb-4">{prestation.subtitle}</p>
                
                {prestation.slug === 'tirage-visio' ? (
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="glass-card px-4 py-2 border-gold-2/30">
                        <span className="text-gold-2 font-semibold">30 min</span>
                        <span className="text-gold text-xl font-bold ml-2">50€</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="glass-card px-4 py-2 border-gold-2/30">
                        <span className="text-gold-2 font-semibold">45 min</span>
                        <span className="text-gold text-xl font-bold ml-2">70€</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="glass-card px-4 py-2 border-gold-2/30">
                        <span className="text-gold-2 font-semibold">60 min</span>
                        <span className="text-gold text-xl font-bold ml-2">90€</span>
                      </div>
                    </div>
                    <div className="text-sm text-text-2 mt-2">{prestation.format}</div>
                  </div>
                ) : (
                  <div className="flex items-center gap-6 text-text-2">
                    <div>
                      <span className="font-semibold text-primary text-2xl">{prestation.price}</span>
                    </div>
                    <div className="text-sm">
                      <div>{prestation.format}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <a href={prestation.oldSiteUrl} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-initial">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Commander
                </Button>
              </a>
              <Link href="/blog" className="flex-1 sm:flex-initial">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Consulter le blog
                </Button>
              </Link>
            </div>

            <Card className="bg-amber-700/5 border-amber-700/20">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div className="glass-card p-6 border-gold-2/30">
                  <p className="font-semibold text-amber-700 mb-2">Comment commander {getPrestationType()} ?</p>
                  {prestation.slug === 'rituel-pdf' ? (
                    <p className="leading-relaxed">
                      Après avoir cliqué sur "Commander", vous serez redirigé vers la page Rituels. Vous y trouverez 5 rituels PDF disponibles à 3,90€ chacun : Rituel d'Amour, Rituel de Protection, Rituel Abondance et Chance, Rituel pour Couper un Lien, Rituel de Manifestation de Projet. Sélectionnez le rituel qui correspond à votre intention, effectuez le paiement sécurisé, et téléchargez immédiatement votre guide complet en PDF. Chaque rituel contient toutes les instructions détaillées étape par étape pour le réaliser chez vous. Vous pourrez le réutiliser autant de fois que nécessaire.
                    </p>
                  ) : prestation.slug === 'formations' ? (
                    <p className="leading-relaxed">
                      Après avoir cliqué sur "Commander", vous serez redirigé vers la page Formations où vous trouverez toutes les formations disponibles : Formation Pendule (49€), Formation Oracle (49€), Reiki Module 1, 2 et 3. Sélectionnez la formation qui vous intéresse, effectuez le paiement sécurisé, et recevez un accès immédiat à tous les supports (vidéos explicatives, PDF téléchargeables, exercices pratiques). Un certificat de formation vous sera délivré à la fin du parcours.
                    </p>
                  ) : prestation.slug === 'tirage-visio' ? (
                    <p className="leading-relaxed">
                      Après avoir cliqué sur "Commander", vous serez redirigé vers la page de contact. Contactez-moi sur mes réseaux (Instagram, TikTok, Facebook) pour vérifier ma disponibilité et choisir votre durée : 30 minutes (50€), 45 minutes (70€) ou 60 minutes (90€). Une fois le paiement Paypal effectué, nous conviendrons ensemble d'une date et heure pour le rendez-vous. Le tirage se fait en direct par visioconférence, SMS ou vocaux selon votre préférence.
                    </p>
                  ) : prestation.slug === 'reiki-a-distance' ? (
                    <p className="leading-relaxed">
                      Après avoir cliqué sur "Commander", vous serez redirigé vers la page produit du Reiki à distance (40€). Effectuez le paiement sécurisé, puis vous recevrez un email avec un formulaire à remplir : photo récente sans filtre, date de naissance et votre intention pour le soin. Nous conviendrons ensuite ensemble d'une date et heure pour la séance. Une fois le soin réalisé, vous recevrez un compte-rendu détaillé avec mes ressentis et conseils personnalisés.
                    </p>
                  ) : prestation.slug === 'tirage-video' ? (
                    <p className="leading-relaxed">
                      Après avoir cliqué sur "Commander", vous serez redirigé vers la boutique catégorie "Mes prestations". Vous y trouverez plusieurs types de tirages vidéo : Tirage en urgence (80€), Tirage sentimental (30€), Tirage positif (30€), Question précise sur un domaine (25€), Question simple (10€), Question sur une semaine (15€). Sélectionnez le tirage qui correspond à vos besoins, et lors de la validation de commande, <strong className="text-amber-700">pensez à bien détailler votre question précise, les prénoms et âges dans l'espace "Informations complémentaires" (notes de commande)</strong>. Vous recevrez votre vidéo personnalisée sous 48 heures maximum.
                    </p>
                  ) : prestation.slug === 'rituel-video' ? (
                    <p className="leading-relaxed">
                      Après avoir cliqué sur "Commander", vous serez redirigé vers la page Rituels. Vous y trouverez 5 rituels vidéo disponibles à 19,90€ chacun : Rituel d'Amour, Rituel de Protection, Rituel Abondance et Chance, Rituel pour Couper un Lien, Rituel de Manifestation de Projet. Choisissez le rituel qui correspond à votre intention, et lors de la validation de commande, <strong className="text-amber-700">pensez à bien détailler votre intention pour le rituel dans l'espace "Informations complémentaires" (notes de commande)</strong> - plus vos informations sont précises, plus le rituel sera efficace. Une fois le paiement effectué, vous recevrez votre vidéo personnalisée sous 48 heures maximum.
                    </p>
                  ) : (
                    <p className="leading-relaxed">
                      Cliquez sur "Commander" pour accéder à la page produit. Suivez les instructions de commande et effectuez le paiement sécurisé. Vous recevrez ensuite toutes les informations nécessaires par email.
                    </p>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {prestation.slug === 'tirage-video' && (
        <Section className="py-16">
          <div className="container-custom max-w-7xl mx-auto">
            <TikTokGallery />
          </div>
        </Section>
      )}

      <Section className="py-16">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-amber-700 mb-4">
                Pourquoi choisir {getPrestationType()} ?
              </h2>
              <p className="text-text-2 leading-relaxed mb-6">{prestation.intro}</p>
            </Card>

            <Card className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-amber-700 mb-6">
                Pour qui ?
              </h2>
              <ul className="space-y-3">
                {prestation.forWho.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-text-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-amber-700 mb-6">
                Ce que vous obtiendrez
              </h2>
              <ul className="space-y-3">
                {prestation.whatYouGet.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-text-2">
                    <span className="text-primary mt-1">✨</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-amber-700 mb-8">
                Déroulement
              </h2>
              <div className="space-y-6">
                {prestation.process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-2 flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-amber-700 mb-2">{step.title}</h3>
                      <p className="text-text-2">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-amber-700 mb-6">
                Questions fréquentes
              </h2>
              <div className="space-y-6">
                {prestation.faq.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-amber-700 mb-2">{item.question}</h3>
                    <p className="text-text-2">{item.answer}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {prestation.slug === 'tirage-video' && (
        <Section className="py-16 border-t border-gold-2/10">
          <div className="container-custom max-w-7xl mx-auto">
            <TikTokGallery />
          </div>
        </Section>
      )}

      <Section className="py-16" gradient>
        <div className="container-custom max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl font-bold text-text mb-4">
              Prêt(e) à commencer ?
            </h2>
            <p className="text-text-2 mb-8">
              Commandez votre {prestation.title.toLowerCase()} dès maintenant et recevez votre guidance sous 48h.
            </p>
            <a href={prestation.oldSiteUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg">
                Commander
              </Button>
            </a>
          </motion.div>
        </div>
      </Section>

      {relatedPrestations.length > 0 && (
        <Section className="py-16">
          <div className="container-custom">
            <h2 className="font-serif text-3xl font-bold text-text mb-8 text-center">
              Prestations associées
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedPrestations.map((related) => (
                <motion.div
                  key={related.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card hover className="h-full flex flex-col">
                    <div className="text-4xl mb-3">{related.icon}</div>
                    <h3 className="font-serif text-xl font-semibold text-text mb-2">
                      {related.title}
                    </h3>
                    <p className="text-text-2 text-sm mb-4 flex-1">
                      {related.shortDescription}
                    </p>
                    <Link href={`/prestations/${related.slug}`}>
                      <Button variant="primary" size="sm" className="w-full">
                        Découvrir
                      </Button>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
