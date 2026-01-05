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
      name: "Le Reiki à distance est-il aussi puissant qu'en présentiel ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolument. L'énergie ne dépend pas de la proximité physique. En physique quantique comme en spiritualité, tout est lié. Le soin à distance est souvent ressenti de manière encore plus subtile et profonde.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment se préparer à une séance de Reiki à distance ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Il suffit de vous accorder 45 minutes de calme, de vous allonger confortablement et de porter des vêtements souples. Je vous recommande de créer une ambiance apaisante (bougies, musique douce) si vous le souhaitez.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de séances sont nécessaires pour un résultat durable ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Si une séance apporte un soulagement ponctuel, un cycle de 4 séances rapprochées est idéal pour un travail de fond sur une problématique ancienne ou un blocage sévère.",
      },
    },
    {
      '@type': 'Question',
      name: 'Y a-t-il des contre-indications au Reiki ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non, le Reiki est une méthode douce et naturelle sans aucun danger. Il peut être pratiqué sur tout le monde, des enfants aux personnes âgées, et même sur les animaux.',
      },
    },
    {
      '@type': 'Question',
      name: 'Que faire après avoir reçu un soin énergétique ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Il est crucial de bien s'hydrater (boire de l'eau) pour favoriser l'élimination des toxines libérées et de rester à l'écoute de ses ressentis sans forcer les choses.",
      },
    },
  ],
};

export default function ReikiPage() {
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
            <h1 className="font-serif text-gold font-title mb-6">
              Soins Reiki à Distance : Harmonisez votre Énergie Vitale
            </h1>
            <p className="text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
              Une thérapie énergétique douce et puissante pour votre bien-être physique, émotionnel et spirituel.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding dark-mystic-bg">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl text-gold font-title mb-6">
              Qu'est-ce que le Reiki et ses bienfaits ?
            </h2>
            <div className="text-text-2 text-lg leading-relaxed space-y-6">
              <p>
                Le <strong>Reiki à distance</strong> est une pratique puissante et subtile qui permet de bénéficier des vertus de l'énergie universelle sans avoir besoin de se déplacer. Fondé sur les enseignements de Mikao Usui, le Reiki est bien plus qu'une simple technique de relaxation ; c'est un art de vivre et un chemin de guérison globale agissant sur les plans physique, émotionnel, mental et spirituel.
              </p>
              <p>
                Le principe fondamental du Reiki repose sur l'idée que tout ce qui existe est composé d'énergie. Lorsque cette énergie circule librement en nous, nous ressentons un état de bien-être et de vitalité. Cependant, les chocs émotionnels, le stress chronique, les pensées négatives ou les traumatismes passés peuvent créer des "nœuds" ou des blocages dans nos centres énergétiques (les chakras) et nos méridiens. Ces blocages finissent par se manifester sous forme de fatigue, d'anxiété, de douleurs physiques ou de sentiment de stagnation.
              </p>
              <p>
                En tant que praticienne Reiki expérimentée, j'agis comme un canal pour l'énergie universelle. Lors d'une séance de <strong>Reiki à distance</strong>, j'utilise des techniques de visualisation et des symboles sacrés spécifiques qui me permettent de me connecter à votre champ vibratoire, indépendamment de l'espace et du temps. L'énergie, dotée d'une intelligence propre, se dirige naturellement vers les zones de votre être qui en ont le plus besoin pour dissoudre les tensions et restaurer l'équilibre.
              </p>
              <p>
                Les bienfaits d'un soin Reiki sont multiples. Immédiatement après une séance, la plupart des personnes ressentent une relaxation profonde, un sentiment de paix intérieure et une réduction notable du stress. À plus long terme, le Reiki soutient le système immunitaire, améliore la qualité du sommeil, aide à la gestion des émotions difficiles et favorise une meilleure connaissance de soi. C'est un accompagnement idéal pour compléter un protocole médical classique ou pour soutenir une démarche de développement personnel.
              </p>
            </div>

            <h3 className="font-serif text-2xl text-gold font-title mb-4 mt-12">
              Comment se déroule votre séance énergétique ?
            </h3>
            <p className="text-text-2 text-lg leading-relaxed mb-6">
              Chaque séance est unique. Durant le soin, vous pouvez ressentir des sensations de chaleur, de picotements, ou simplement un état de détente absolue. Certains voient des couleurs ou reçoivent des messages intuitifs, tandis que d'autres s'endorment paisiblement. Quel que soit votre ressenti, l'énergie travaille en profondeur pour réaligner votre fréquence vibratoire avec celle du bien-être et de la joie.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding mystic-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl text-gold font-title mb-4">
              Les bienfaits du Reiki
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8"
            >
              <div className="w-16 h-16 rounded-full bg-gold-2 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gold font-title mb-3 text-center">
                Confiance en soi
              </h3>
              <p className="text-text-2 text-center">
                Renforcez votre confiance en vous avec le pouvoir du Reiki : Épanouissement et assurance intérieure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8"
            >
              <div className="w-16 h-16 rounded-full bg-gold-2 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gold font-title mb-3 text-center">
                Coup de boost
              </h3>
              <p className="text-text-2 text-center">
                Donnez un coup de boost à votre vitalité avec le Reiki : Énergie renouvelée et bien-être dynamique.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-8"
            >
              <div className="w-16 h-16 rounded-full bg-gold-2 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">😌</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gold font-title mb-3 text-center">
                Dépression & Douleur
              </h3>
              <p className="text-text-2 text-center">
                Apaisez vos douleurs et favorisez la guérison. Lutte contre le stress et la dépression.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-8"
            >
              <div className="w-16 h-16 rounded-full bg-gold-2 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">😴</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gold font-title mb-3 text-center">
                Sommeil & Addictions
              </h3>
              <p className="text-text-2 text-center">
                Trouvez un sommeil réparateur et libérez-vous des dépendances avec le Reiki : Retrouvez la sérénité et l'équilibre intérieur.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <div className="glass-card p-8">
              <h3 className="font-serif text-2xl text-gold font-title mb-6 text-center">
                Autres bienfaits
              </h3>
              <ul className="space-y-3 text-text-2 text-lg">
                <li className="flex items-start">
                  <span className="text-gold-1 mr-3">•</span>
                  <span>Augmente la confiance en soi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-1 mr-3">•</span>
                  <span>Donne un regain d'énergie, lutte contre le stress et la dépression</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-1 mr-3">•</span>
                  <span>Améliore le sommeil et réduit les dépendances</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-1 mr-3">•</span>
                  <span>Aide à la relaxation et à l'amélioration de la concentration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-1 mr-3">•</span>
                  <span>Soulage les douleurs, accélère la guérison</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-1 mr-3">•</span>
                  <span>Améliore la digestion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-1 mr-3">•</span>
                  <span>Favorise un sentiment de paix et d'équilibre</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding dark-mystic-bg">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl text-gold font-title mb-8">
              Déroulement d'une séance de Reiki à distance
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl text-gold font-title mb-4">
                  Préparation
                </h3>
                <p className="text-text-2 text-lg leading-relaxed">
                  Pour pratiquer une séance à distance il me faudra, une photo récente et la date de naissance. Ces informations permettent de me connecter plus efficacement à l'énergie de la personne.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-gold font-title mb-4">
                  Pendant la séance
                </h3>
                <p className="text-text-2 text-lg leading-relaxed">
                  Le jour de la séance, le bénéficiaire doit se trouver dans un environnement calme et paisible chez lui.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-gold font-title mb-4">
                  Fin de séance
                </h3>
                <p className="text-text-2 text-lg leading-relaxed">
                  Après la séance, il est fortement recommandé de boire de l'eau en plus grande quantité que d'habitude pendant les trois jours suivants. L'eau, en tant que conducteur naturel d'énergie, aide à faciliter le processus de guérison et d'équilibrage énergétique en cours, en plus d'éliminer les toxines libérées.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding mystic-gradient">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl text-gold font-title mb-6">
              Combien de séances sont nécessaires ?
            </h2>
            <p className="text-text-2 text-lg leading-relaxed mb-8">
              Le Reiki recommande souvent une série de 4 séances rapprochées pour bénéficier pleinement de ses effets.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <h3 className="font-serif text-xl font-semibold text-gold font-title mb-3">
                  Nettoyage Énergétique Profond
                </h3>
                <p className="text-text-2">
                  Plusieurs séances permettent d'éliminer les blocages énergétiques accumulés sur de longues périodes.
                </p>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-serif text-xl font-semibold text-gold font-title mb-3">
                  Effet Cumulatif
                </h3>
                <p className="text-text-2">
                  Les bienfaits du Reiki se renforcent avec chaque séance, améliorant l'équilibre énergétique et la capacité d'auto-guérison du corps.
                </p>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-serif text-xl font-semibold text-gold font-title mb-3">
                  Adaptation du Corps
                </h3>
                <p className="text-text-2">
                  Des séances rapprochées aident le corps à s'adapter à l'augmentation du flux d'énergie, maximisant les effets du Reiki.
                </p>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-serif text-xl font-semibold text-gold font-title mb-3">
                  Relaxation Approfondie
                </h3>
                <p className="text-text-2">
                  Chaque séance augmente la détente, réduit le stress et favorise le bien-être.
                </p>
              </div>
            </div>

            <div className="text-center mt-12 glass-card p-8">
              <p className="text-3xl font-serif font-bold text-gold font-title mb-4">
                40€ la séance
              </p>
              <p className="text-text-2 mb-6 max-w-2xl mx-auto">
                Offrez à votre corps et à votre esprit le repos qu’ils méritent. Cliquez ici pour réserver votre séance de Reiki à distance et initier votre processus de transformation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="btn-primary soft-glow">
                  <span>Prendre rendez-vous</span>
                </Link>
                <Link href="/boutique" className="btn-gold">
                  <span>Voir les pierres & encens</span>
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
