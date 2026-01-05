'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AProposPage() {
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
            <h1 className="text-4xl md:text-5xl text-gold mb-6 font-title">
              Mon Parcours & Mon Éthique
            </h1>
            <p className="text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
              Angeline NJ : Thérapeute Reiki certifiée et Cartomancienne passionnée
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
              Qui suis-je ?
            </h2>
            <div className="text-text-2 text-lg leading-relaxed space-y-6">
              <p>
                Mon nom est Angeline NJ. En tant que <strong>thérapeute Reiki</strong> et <strong>cartomancienne</strong>, mon objectif est de vous aider à vous sentir mieux et de vous guider dans votre processus de guérison intérieure et d'éveil spirituel.
              </p>
              <p>
                Depuis plusieurs années, je me consacre à l'étude des énergies et des arts divinatoires. Mon parcours est celui d'une recherche constante d'équilibre et de vérité. Formée au Reiki Usui, je pratique des soins qui agissent en profondeur sur les corps subtils pour libérer les tensions et restaurer la vitalité.
              </p>
              <p>
                Parallèlement, la <strong>cartomancie</strong> est devenue pour moi un langage sacré. J'utilise les cartes non pas pour prédire un destin figé, mais pour traduire les messages de l'univers et vous offrir des clés de compréhension sur votre chemin de vie.
              </p>
              <p>
                Je propose des tirages de cartes et du contenu astrologique tous les jours sur mon TikTok pour une communauté grandissante. Si vous souhaitez un tirage privé ou une séance de Reiki personnalisée, je vous accueille avec bienveillance pour une consultation à distance.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <a 
                href="https://www.tiktok.com/@angelinenj?_r=1&_t=ZN-92jl0gNLqDO"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center space-x-2"
              >
                <span>Mon TikTok</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/reiki.by.angie?igsh=MXMxMGNtejZhN3QxbA=="
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center space-x-2"
              >
                <span>Mon Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com/@angelinenj-j7z?si=csJ4O1SUYl2SOX0K"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center space-x-2"
              >
                <span>Mon YouTube</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/share/1AdgYgoytY/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center space-x-2"
              >
                <span>Mon Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
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
              Mes Services
            </h2>
            <p className="text-text-2 text-lg max-w-2xl mx-auto">
              Je propose deux types de prestations pour votre bien-être
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8"
            >
              <div className="mb-4 flex justify-center">
                <img src="/carte-1.png" alt="Tirage de Cartes" className="w-16 h-16 object-contain" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-gold font-title mb-4">
                Tirage de Cartes
              </h3>
              <p className="text-text-2 leading-relaxed mb-4">
                Donne de nouvelles perspectives, d'inspiration et d'espoir. La cartomancie vous aide à clarifier vos situations et à trouver guidance.
              </p>
              <Link href="/tirages" className="btn-gold inline-block">
                <span>En savoir plus</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8"
            >
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-serif text-2xl font-semibold text-gold font-title mb-4">
                Reiki à Distance
              </h3>
              <p className="text-text-2 leading-relaxed mb-4">
                Donne un regain d'énergie, lutte contre le stress et la dépression. Renforce la confiance en soi et favorise la guérison.
              </p>
              <Link href="/reiki" className="btn-gold inline-block">
                <span>En savoir plus</span>
              </Link>
            </motion.div>
          </div>
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
              Ma pratique
            </h2>
            <p className="text-text-2 text-lg leading-relaxed mb-6">
              Je travaille principalement avec mes oracles divinatoires personnalisés, 
              que je choisis en fonction de votre question et de votre énergie du moment.
            </p>
            <p className="text-text-2 text-lg leading-relaxed mb-6">
              Mon approche allie la symbolique des cartes, mon intuition et une écoute profonde de votre situation. 
              Je ne me contente pas de lire les cartes : je les ressens, je les vis avec vous.
            </p>
            <p className="text-text-2 text-lg leading-relaxed">
              Chaque consultation est unique et personnalisée. Je m'adapte à vos besoins, 
              à votre sensibilité et à votre rythme pour vous offrir une guidance qui vous ressemble.
            </p>
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
            className="glass-card p-12 text-center"
          >
            <h2 className="font-serif text-3xl text-gold font-title mb-6">
              Pourquoi me faire confiance ?
            </h2>
            <p className="text-text-2 text-lg leading-relaxed mb-8">
              Parce que je mets tout mon cœur et mon authenticité dans chaque consultation. 
              Parce que je respecte profondément votre histoire et votre cheminement. 
              Et parce que je crois sincèrement au pouvoir de la guidance bienveillante pour éclairer votre chemin.
            </p>
            <p className="text-text-2 text-lg leading-relaxed font-medium">
              Je serais honorée de vous accompagner sur votre chemin.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding dark-mystic-bg text-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-gold font-title mb-6">
              Prête à vous guider
            </h2>
            <p className="text-text-2 text-lg mb-8 max-w-2xl mx-auto">
              Prenez rendez-vous pour une consultation personnalisée
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
