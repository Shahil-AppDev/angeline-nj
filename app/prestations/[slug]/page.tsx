'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import { siteConfig } from '@/lib/config';
import { getPrestationBySlug, getRelatedPrestations } from '@/lib/prestations';
import { motion } from 'framer-motion';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const prestation = getPrestationBySlug(params.slug);
  if (!prestation) return {};

  return {
    title: `${prestation.title} | Consultation Angeline NJ`,
    description: prestation.subtitle || prestation.shortDescription,
  };
}

export default function PrestationDetailPage({ params }: { params: { slug: string } }) {
  const prestation = getPrestationBySlug(params.slug);

  if (!prestation) {
    notFound();
  }

  const relatedPrestations = getRelatedPrestations(prestation.slug, prestation.relatedPrestations);

  return (
    <>
      <Navbar />
      
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
                <div className="flex items-center gap-6 text-text-2">
                  <div>
                    <span className="font-semibold text-primary text-2xl">{prestation.price}</span>
                  </div>
                  <div className="text-sm">
                    <div>{prestation.duration}</div>
                    <div>{prestation.format}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-12">
              <a href={siteConfig.rdv.url} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-initial">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Prendre rendez-vous
                </Button>
              </a>
              <Link href="/contact" className="flex-1 sm:flex-initial">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Poser une question
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="py-16">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-text mb-4">
                Pourquoi choisir ce tirage ?
              </h2>
              <p className="text-text-2 leading-relaxed mb-6">{prestation.intro}</p>
            </Card>

            <Card className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-text mb-6">
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
              <h2 className="font-serif text-2xl font-semibold text-text mb-6">
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
              <h2 className="font-serif text-2xl font-semibold text-text mb-8">
                Déroulement
              </h2>
              <div className="space-y-6">
                {prestation.process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-2 flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-text mb-2">{step.title}</h3>
                      <p className="text-text-2">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-text mb-6">
                Questions fréquentes
              </h2>
              <div className="space-y-6">
                {prestation.faq.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-text mb-2">{item.question}</h3>
                    <p className="text-text-2">{item.answer}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

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
              Réservez votre {prestation.title.toLowerCase()} dès maintenant et recevez votre guidance sous 48h.
            </p>
            <a href={siteConfig.rdv.url} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg">
                Prendre rendez-vous
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
                      <Button variant="ghost" size="sm" className="w-full">
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

      <Footer />
    </>
  );
}
