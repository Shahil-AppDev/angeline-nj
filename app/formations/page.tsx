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
    fullDescription: 'Souvent perçu comme mystérieux, le pendule est en réalité une extension de notre propre intuition. Cet atelier pratique vous enseigne comment choisir votre pendule, comment le purifier et surtout comment formuler vos questions pour obtenir des réponses fiables. Nous explorons ensemble la radiesthésie moderne pour que vous puissiez utiliser cet outil pour tester la vitalité d\'un lieu, choisir vos pierres de lithothérapie ou obtenir des éclairages sur vos choix de vie.',
    slug: 'formation-pendule',
    level: 'Débutant',
  },
  {
    title: 'Module Cartomancie',
    icon: '/carte-1.png',
    description: 'Devenez maître dans l\'art de lire les oracles. Les cartes vous attirent, mais vous ne savez pas par où commencer ? Ce module est fait pour vous.',
    fullDescription: 'Ici, on va à l\'essentiel, avec des explications simples, des techniques accessibles et des exercices pratiques qui vous feront rapidement parler le langage des cartes. Vous allez apprendre comment fonctionne un oracle, les bases pour interpréter les cartes et obtenir des messages clairs et percutants, des techniques simples pour poser les bonnes questions, et des tirages incontournables pour explorer vos intuitions.',
    slug: 'formation-oracles-divinatoires',
    level: 'Tous niveaux',
  },
  {
    title: 'Reiki Module 1',
    icon: '✨',
    description: 'Les Fondations du Reiki – Découvrez le Pouvoir Caché entre Vos Mains. C\'est ici que tout commence : l\'éveil de votre capacité à canaliser l\'énergie Reiki.',
    fullDescription: 'Vous le ressentez, n\'est-ce pas ? Cet appel à explorer quelque chose de plus grand, à connecter avec l\'énergie qui vous entoure ? Le Module 1 est votre point de départ. Vous allez apprendre l\'histoire fascinante du Reiki, les symboles dès le début pour harmoniser vos énergies, les auto-soins Reiki pour équilibrer vos chakras, l\'initiation à l\'énergie universelle, et les techniques de base pour soigner les autres.',
    slug: 'module-reiki-1',
    level: 'Niveau 1',
  },
  {
    title: 'Reiki Module 2',
    icon: '🌟',
    description: 'Déployez Votre Puissance Énergétique et Agissez à Distance ! Débloquez des outils puissants pour amplifier votre pratique et envoyer de l\'énergie où que vous soyez.',
    fullDescription: 'Avec ce Module 2, vous allez apprendre à envoyer de l\'énergie à distance pour soigner vos proches où qu\'ils soient, découvrir les symboles avancés du Reiki (Raku, symbole à distance), devenir un(e) guérisseur(se) universel(le) pour soigner les animaux, les plantes et même la Terre, développer votre intuition pour capter des messages, et créer un bouclier énergétique puissant.',
    slug: 'reiki-module-2',
    level: 'Niveau 2',
  },
  {
    title: 'Reiki Module 3',
    icon: '💫',
    description: 'Maîtrise Reiki – Réveillez le maître qui sommeille en vous ! C\'est le couronnement de votre parcours, la clé pour accéder à une toute nouvelle dimension.',
    fullDescription: 'Vous avez exploré les bases, vous avez dompté les énergies, et maintenant, il est temps de devenir maître Reiki. Vous allez découvrir les secrets du Dai Ko Myo (le symbole de maîtrise), l\'art de l\'initiation pour transmettre le Reiki à d\'autres avec puissance et précision, et perfectionner votre pratique avec des techniques avancées pour vous démarquer en tant que praticien(ne).',
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

      <section className="section-padding">
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
                Se former avec Angeline NJ, c'est bénéficier d'un contenu riche, structuré et accessible <strong>immédiatement après votre paiement</strong>. Toutes les formations sont <strong>téléchargeables instantanément</strong> et contiennent tous les supports nécessaires pour maîtriser l'art : vidéos explicatives détaillées, livrets PDF complets, exercices pratiques et certificat. Je mets un point d'honneur à allier la théorie indispensable à une pratique intensive, car c'est par l'expérience que l'on intègre véritablement les concepts spirituels.
              </p>
            </div>
          </motion.div>

          <div className="space-y-16">
            {formations.map((formation, index) => {
              const product = formationProducts.find(p => p.slug === formation.slug);
              
              return (
                <motion.div
                  key={formation.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-8 hover:border-gold-2 transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 text-center lg:text-left">
                      <div className="mb-4 flex justify-center lg:justify-start">
                        {formation.icon.startsWith('/') ? (
                          <img src={formation.icon} alt={formation.title} className="w-20 h-20 object-contain" />
                        ) : (
                          <div className="text-7xl">{formation.icon}</div>
                        )}
                      </div>
                      
                      <div className="mb-4">
                        <span className="inline-block px-4 py-2 bg-amber-700/30 text-amber-900 text-sm rounded-full font-semibold">
                          {formation.level}
                        </span>
                      </div>

                      <h3 className="font-serif text-3xl font-bold text-gold font-title mb-4">
                        {formation.title}
                      </h3>

                      {product && (
                        <div className="mb-6 p-4 bg-surface/50 rounded-lg">
                          <div className="text-center">
                            {product.on_sale && product.regular_price && (
                              <span className="block text-sm text-muted line-through mb-1">
                                {product.regular_price.toFixed(2)}€
                              </span>
                            )}
                            <span className="block text-3xl font-bold text-gold">
                              {product.price.toFixed(2)}€
                            </span>
                          </div>
                        </div>
                      )}
                      
                      <Link 
                        href={product ? `/produit/${formation.slug}` : '/boutique'}
                        className="btn-primary w-full text-center"
                      >
                        <span>Commander</span>
                      </Link>
                    </div>

                    <div className="lg:col-span-2">
                      <p className="text-text-2 text-lg mb-6 leading-relaxed">
                        {formation.description}
                      </p>
                      
                      <div className="h-px bg-gold-2/20 my-6"></div>
                      
                      <p className="text-text-2 leading-relaxed">
                        {formation.fullDescription}
                      </p>
                    </div>
                  </div>
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
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-gold font-title mb-3">
                  Accès Instantané
                </h3>
                <p className="text-text-2">
                  Téléchargement immédiat après paiement avec tous les supports pour maîtriser l'art
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
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-gold font-title mb-3">
                  Supports Complets
                </h3>
                <p className="text-text-2">
                  Vidéos, PDF, exercices pratiques - tout pour maîtriser votre art à votre rythme
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
