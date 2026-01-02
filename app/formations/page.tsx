'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import productsData from '@/data/products.json';
import { motion } from 'framer-motion';
import Link from 'next/link';

const formationProducts = productsData.filter(p => 
  p.category === 'formations-reiki' || 
  p.category === 'pendule' || 
  p.category === 'formation-tirage-oracle' ||
  p.title.toLowerCase().includes('formation') ||
  p.title.toLowerCase().includes('reiki') ||
  p.title.toLowerCase().includes('pendule')
);

const formations = [
  {
    title: 'Formation Pendule',
    icon: '🔮',
    description: 'Découvrez l\'art de la maîtrise du pendule : développez votre intuition, affinez votre ressenti, et laissez-vous guider par l\'énergie invisible qui vous entoure.',
    slug: 'formation-pendule',
    level: 'Débutant',
  },
  {
    title: 'Formation Oracles Divinatoires',
    icon: '🃏',
    description: 'Maîtrisez l\'art divinatoire de lire les cartes. Apprenez à interpréter vos oracles avec clarté et à poser les bonnes questions pour des réponses précises.',
    slug: 'formation-oracles-divinatoires',
    level: 'Tous niveaux',
  },
  {
    title: 'Reiki Module 1',
    icon: '✨',
    description: 'Plongez dans l\'univers du Reiki avec ce module d\'initiation complet ! Découvrez l\'histoire de cette pratique ancestrale, apprenez à canaliser l\'énergie universelle et réalignez vos chakras.',
    slug: 'module-reiki-1',
    level: 'Niveau 1',
  },
  {
    title: 'Reiki Module 2',
    icon: '🌟',
    description: 'Approfondissez votre pratique avec le module de Reiki 2 ! Découvrez comment transmettre l\'énergie à distance, même au-delà du temps et de l\'espace.',
    slug: 'reiki-module-2',
    level: 'Niveau 2',
  },
  {
    title: 'Reiki Module 3',
    icon: '💫',
    description: 'Atteignez l\'excellence avec le module de Reiki 3, dédié à la maîtrise ! Apprenez à incarner pleinement le rôle de maître Reiki et transmettez cette énergie sacrée.',
    slug: 'reiki-module-3',
    level: 'Niveau 3',
  },
];

export default function FormationsPage() {
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
            <h1 className="font-serif text-gold font-title mb-6">
              Formations
            </h1>
            <p className="text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos formations complètes en Reiki, avec 3 niveaux progressifs pour maîtriser cette pratique énergétique, et des ateliers exclusifs pour apprendre à tirer les cartes et explorer votre intuition.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding dark-mystic-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 bg-gold-2/20 text-gold-2 rounded-full mb-6">
              ✨ Nouveautés !
            </div>
            <h2 className="font-serif text-3xl text-gold font-title mb-4">
              Devenez Acteur de votre Bien-être Énergétique
            </h2>
            <div className="text-text-2 max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
              <p>
                Transmettre le savoir est pour moi une mission aussi importante que celle de soigner. Les <strong>formations spirituelles</strong> que je propose chez Angeline NJ ont été conçues pour vous permettre de devenir autonome dans votre pratique énergétique et divinatoire. Que vous souhaitiez en faire votre métier ou simplement disposer d'outils pour votre bien-être personnel et celui de vos proches, mes programmes vous guident pas à pas, avec pédagogie et bienveillance.
              </p>
              <p>
                La formation au <strong>Reiki Usui</strong> est un voyage initiatique structuré en trois niveaux progressifs. Le Module 1 pose les fondations : vous apprenez l'auto-traitement, l'histoire du Reiki et les techniques de base pour canaliser l'énergie. Le Module 2 vous ouvre aux symboles sacrés et au soin à distance, amplifiant considérablement votre puissance de canalisation. Enfin, le Module 3 vous mène vers la maîtrise, approfondissant la dimension spirituelle et vous préparant à incarner pleinement cette énergie de guérison. Chaque niveau est validé par un certificat attestant de votre lignée et de vos compétences.
              </p>
              <p>
                En complément du Reiki, je propose une formation dédiée au <strong>pendule divinatoire</strong>. Souvent perçu comme mystérieux, le pendule est en réalité une extension de notre propre intuition. Cet atelier pratique vous enseigne comment choisir votre pendule, comment le purifier et surtout comment formuler vos questions pour obtenir des réponses fiables. Nous explorons ensemble la radiesthésie moderne pour que vous puissiez utiliser cet outil pour tester la vitalité d'un lieu, choisir vos pierres de lithothérapie ou obtenir des éclairages sur vos choix de vie.
              </p>
              <p>
                Se former avec Angeline NJ, c'est bénéficier d'un contenu riche, structuré et accessible. Mes supports de cours sont détaillés, incluant des vidéos explicatives et des livrets PDF complets. Je mets un point d'honneur à allier la théorie indispensable à une pratique intensive, car c'est par l'expérience que l'on intègre véritablement les concepts spirituels.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formations.map((formation, index) => {
              const product = formationProducts.find(p => p.slug === formation.slug);
              
              return (
                <motion.div
                  key={formation.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 group hover:border-gold-2 transition-all"
                >
                  <div className="text-6xl mb-4 text-center">
                    {formation.icon}
                  </div>
                  
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-gold-2/20 text-gold-2 text-sm rounded-full">
                      {formation.level}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-gold font-title mb-3">
                    {formation.title}
                  </h3>
                  
                  <p className="text-text-2 mb-6 leading-relaxed">
                    {formation.description}
                  </p>

                  {product && (
                    <div className="mb-6 p-4 bg-surface rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted">Prix</span>
                        <div className="flex flex-col items-end">
                          {product.on_sale && product.regular_price && (
                            <span className="text-sm text-muted line-through">
                              {product.regular_price.toFixed(2)}€
                            </span>
                          )}
                          <span className="text-2xl font-bold text-gold">
                            {product.price.toFixed(2)}€
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <Link 
                    href={product ? `/produit/${formation.slug}` : '/boutique'}
                    className="btn-primary w-full text-center"
                  >
                    <span>En savoir plus</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-gold font-title mb-4">À qui s’adressent ces formations ?</h3>
              <p className="text-text-2 leading-relaxed">
                Mes formations s'adressent à toutes les âmes en quête de sens, aux thérapeutes souhaitant ajouter une dimension énergétique à leur offre, ou aux débutants curieux de découvrir leur potentiel caché. Aucune aptitude particulière n'est requise, si ce n'est une ouverture d'esprit et l'envie sincère d'apprendre et de progresser sur son chemin personnel.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 border-gold-2/30"
            >
              <h3 className="text-gold font-title mb-4">Pourquoi se former avec Angeline NJ ?</h3>
              <p className="text-text-2 leading-relaxed">
                Choisir Angeline NJ, c'est opter pour une expertise reconnue et une approche moderne de la spiritualité. Vous recevez un contenu complet et structuré avec des méthodes éprouvées par des années de pratique. Chaque formation inclut des supports détaillés (vidéos + PDF) pour vous permettre d'apprendre à votre rythme.
              </p>
            </motion.div>
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
            className="text-center"
          >
            <h2 className="font-serif text-3xl text-gold font-title mb-6">
              Pourquoi choisir nos formations ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
              <div className="glass-card p-6">
                <div className="w-16 h-16 rounded-full bg-gold-2/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-gold font-title mb-3">
                  Contenu Complet
                </h3>
                <p className="text-text-2">
                  Des modules détaillés avec vidéos explicatives et supports PDF téléchargeables
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="w-16 h-16 rounded-full bg-gold-2/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎓</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-gold font-title mb-3">
                  Certification
                </h3>
                <p className="text-text-2">
                  Recevez un certificat à la fin de chaque formation
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="w-16 h-16 rounded-full bg-gold-2/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⏰</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-gold font-title mb-3">
                  À votre rythme
                </h3>
                <p className="text-text-2">
                  Accès illimité aux contenus pour apprendre selon votre disponibilité
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Link href="/boutique" className="btn-primary soft-glow">
                <span>Voir toutes les formations</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
