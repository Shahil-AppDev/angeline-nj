'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function GuidancePage() {
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
              Guidance Spirituelle
            </h1>
            <p className="text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
              Un accompagnement bienveillant pour éclairer votre chemin et vous reconnecter à votre essence profonde
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl text-gold font-title mb-6">
              Qu'est-ce que la guidance spirituelle ?
            </h2>
            <p className="text-text-2 text-lg leading-relaxed mb-6">
              La guidance spirituelle est un accompagnement profond qui vous aide à vous reconnecter à votre intuition, 
              à comprendre votre chemin de vie et à trouver des réponses aux questions existentielles qui vous habitent.
            </p>
            <p className="text-text-2 text-lg leading-relaxed mb-6">
              À travers la cartomancie et mon intuition, je vous aide à voir plus clair dans votre situation, 
              à identifier les blocages qui vous retiennent et à découvrir les ressources qui sommeillent en vous.
            </p>
            <p className="text-text-2 text-lg leading-relaxed">
              Chaque séance est unique et s'adapte à vos besoins du moment. C'est un espace sacré où vous pouvez 
              vous exprimer librement, sans jugement, dans la bienveillance et la confidentialité.
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
              Mon approche
            </h2>
            <p className="text-text-2 text-lg max-w-2xl mx-auto">
              Une pratique ancrée dans l'éthique, la bienveillance et le respect
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8"
            >
              <div className="w-16 h-16 rounded-full bg-gold-2 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤍</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gold font-title mb-3 text-center">
                Bienveillance
              </h3>
              <p className="text-text-2 text-center">
                Je vous accueille avec douceur et sans jugement, dans un espace de confiance et de sécurité.
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
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gold font-title mb-3 text-center">
                Confidentialité
              </h3>
              <p className="text-text-2 text-center">
                Tout ce qui se dit durant nos échanges reste strictement confidentiel.
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
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gold font-title mb-3 text-center">
                Authenticité
              </h3>
              <p className="text-text-2 text-center">
                Je vous transmets les messages tels qu'ils me viennent, avec honnêteté et clarté.
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
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gold font-title mb-3 text-center">
                Respect
              </h3>
              <p className="text-text-2 text-center">
                Je respecte votre libre arbitre et votre rythme. Vous restez maître de vos choix.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card p-8"
            >
              <div className="w-16 h-16 rounded-full bg-gold-2 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💫</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gold font-title mb-3 text-center">
                Intuition
              </h3>
              <p className="text-text-2 text-center">
                Je m'appuie sur mon intuition et ma connexion spirituelle pour vous guider.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-card p-8"
            >
              <div className="w-16 h-16 rounded-full bg-gold-2 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌙</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gold font-title mb-3 text-center">
                Éthique
              </h3>
              <p className="text-text-2 text-center">
                Ma pratique est guidée par des valeurs éthiques fortes et un profond respect de l'humain.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl text-gold font-title mb-6">
              Pour qui ?
            </h2>
            <p className="text-text-2 text-lg leading-relaxed mb-6">
              La guidance spirituelle s'adresse à toute personne en quête de réponses, de clarté ou de sens :
            </p>
            <ul className="space-y-4">
              {[
                'Vous traversez une période de questionnement ou de transition',
                'Vous cherchez à mieux vous comprendre et à vous reconnecter à vous-même',
                'Vous avez besoin de clarté sur une situation ou une décision importante',
                'Vous souhaitez explorer votre chemin spirituel et votre mission de vie',
                'Vous ressentez le besoin d\'un accompagnement bienveillant',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <svg
                    className="w-6 h-6 text-gold 500 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-text-2 text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="section-padding aurora-background text-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-gold font-title mb-6">
              Prête à vous accompagner
            </h2>
            <p className="text-text-2 text-lg mb-8 max-w-2xl mx-auto">
              Prenez rendez-vous pour une séance de guidance personnalisée
            </p>
            <Link href="/contact" className="btn-primary soft-glow">
              <span>Prendre rendez-vous</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
