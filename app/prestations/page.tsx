'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import { prestations } from '@/lib/prestations';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrestationsPage() {
  return (
    <>
      <Navbar />
      
      <Section className="pt-32 pb-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-bold text-gold mb-6 font-title" style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)' }}>
              Mes Prestations
            </h1>
            <p className="text-text-2 max-w-3xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
              Choisissez le tirage qui correspond à votre situation. Chaque prestation est réalisée avec bienveillance et authenticité pour vous guider sur votre chemin.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prestations.map((prestation, index) => (
              <motion.div
                key={prestation.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover glow className="h-full flex flex-col">
                  <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                    <div className="text-5xl">{prestation.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gold font-title break-words">
                          {prestation.title}
                        </h2>
                        <span className="px-2 py-1 rounded-full bg-surface border border-border text-xs text-text-2 whitespace-nowrap inline-block">
                          {prestation.badge}
                        </span>
                      </div>
                      <p className="text-text-2 mb-2 text-sm sm:text-base">{prestation.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-text-2 mb-6 flex-1">
                    {prestation.shortDescription}
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-border">
                    <div className="text-text-2 text-sm">
                      <div className="font-semibold text-primary text-lg whitespace-pre-line">{prestation.price}</div>
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto">
                      <Link href={`/prestations/${prestation.slug}`}>
                        <Button variant="primary" size="sm">
                          Découvrir
                        </Button>
                      </Link>
                      <a href={prestation.oldSiteUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="primary" size="sm">
                          Commander
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-16" gradient>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4 font-title">
              Besoin d'être guidé(e) pour choisir ?
            </h2>
            <p className="text-text-2 mb-8 max-w-2xl mx-auto">
              Découvrez nos formations pour apprendre à maîtriser les oracles divinatoires ou explorez notre boutique pour trouver vos outils spirituels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/formations">
                <Button variant="primary" size="lg">
                  Voir les formations
                </Button>
              </Link>
              <Link href="/boutique/categorie/rituels">
                <Button variant="primary" size="lg">
                  Voir les rituels
                </Button>
              </Link>
              <Link href="/boutique">
                <Button variant="primary" size="lg">
                  Découvrir la boutique
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="py-16 border-t border-gold-2/10">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none text-text-2 space-y-6 text-justify"
          >
            <h2 className="text-gold font-title text-center mb-8">Votre Accompagnement en Cartomancie et Voyance</h2>
            <p>
              La <strong>voyance</strong> et la guidance spirituelle sont des outils précieux pour naviguer dans les eaux parfois troubles de l'existence. Chaque consultation que je propose est conçue comme un miroir de votre âme, permettant de mettre en lumière les dynamiques invisibles qui influencent votre quotidien. Que ce soit pour des questions sentimentales ou professionnelles, mes tirages offrent une perspective claire et bienveillante.
            </p>
            <p>
              Mon approche de la <strong>cartomancie</strong> repose sur une alliance entre mes oracles divinatoires personnalisés et une intuition profonde. Il ne s'agit pas de prédire un futur figé, mais de vous redonner votre libre arbitre en identifiant les chemins les plus lumineux pour vous. Chaque séance est un espace de non-jugement où votre parole est accueillie avec respect et confidentialité.
            </p>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
