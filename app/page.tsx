'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TestimonialCard from '@/components/TestimonialCard';
import TirageCard from '@/components/TirageCard';
import AuroraGlow from '@/components/background/AuroraGlow';
import StarfieldBackground from '@/components/background/StarfieldBackground';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { siteConfig } from '@/lib/config';
import { prestations } from '@/lib/prestations';
import { motion } from 'framer-motion';
import NextImage from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'L’Art de la Cartomancie',
    description: 'Plongez dans la symbolique sacrée des cartes pour obtenir des réponses claires sur votre passé, votre présent et les potentiels de votre avenir. Une guidance lumineuse pour avancer avec confiance.',
    icon: '🃏',
    href: '/tirages',
  },
  {
    title: 'Le Pouvoir du Reiki',
    description: 'Retrouvez votre harmonie énergétique naturelle. Le Reiki à distance agit sur les corps subtils pour dissoudre les tensions, réduire l’anxiété et revitaliser votre être profond.',
    icon: '✨',
    href: '/reiki',
  },
  {
    title: 'Boutique & Savoir',
    description: 'Équipez-vous d’outils vibratoires de haute qualité et formez-vous aux arts énergétiques pour devenir acteur de votre propre bien-être quotidien.',
    icon: '🔮',
    href: '/boutique',
  },
];

const testimonials = [
  {
    name: 'Lauriane T.',
    text: 'Angeline est une personne très douce et accueillante. J\'ai fais plusieurs séances de Reiki avec elle et j\'en referai certainement d\'autres, cela fait un bien fou, moment agréable et de détente assurés. Je recommande les yeux fermés.',
    rating: 5,
  },
  {
    name: 'Michèle M.',
    text: 'Une expérience très agréable et Angéline est une personne douce et très à l\'écoute. Elle m\'a fait connaître le Reiki et cela m\'a impressionné. Si vous hésitez encore, je vous conseille d\'y aller sans aucun doute. Merci Angéline.',
    rating: 5,
  },
  {
    name: 'Maïlys M.',
    text: 'Une excellente expérience de massage aux pierres chaudes ! Hâte de le refaire 🙂 je recommande à 100000%. Détente douceur chaleur… septique par les pierres chaudes au départ je suis largement convaincue par celui ci. Encore merci pour ce moment.',
    rating: 5,
  },
  {
    name: 'Justine',
    text: 'Angeline est très douce et très agréable. Le lieu est cosy, propre et propice à la détente. J\'ai découvert le Reiki avec Angeline et j\'en suis ravie. Je me suis sentie en confiance et à l\'aise rapidement, j\'ai été surprise de ce qu\'Angeline a pu relevé des la première séance.',
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden dark-mystic-bg">
        <StarfieldBackground />
        <AuroraGlow />
        
        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-gold mb-6 font-title">
                Guidance Spirituelle & Soins Énergétiques : Éclairez votre Chemin avec Angeline NJ
              </h1>
              <p className="text-lg md:text-xl text-text-2 mb-8 leading-relaxed">
                Bienvenue dans l’univers d’Angeline NJ, un sanctuaire dédié à l’éveil spirituel, à la cartomancie et aux soins énergétiques par le Reiki à distance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href="/prendre-rdv" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full">
                    Prendre rendez-vous
                  </Button>
                </Link>
                <Link href="/tirages" className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full">
                    Découvrir les tirages
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted text-sm">
                <svg className="w-5 h-5 text-gold-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Consultations à distance – Réponses claires et bienveillantes</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full max-w-md">
                <div className="glass-card p-8 glow-border">
                  <div className="grid grid-cols-3 gap-4">
                    {['carte-1.png', 'carte-2.png', 'carte-3.png'].map((img, i) => (
                      <motion.div
                        key={i}
                        className="aspect-[2/3] rounded-lg overflow-hidden border border-gold-2/30 relative bg-gradient-to-br from-gold-2/10 to-gold-1/10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                      >
                        <NextImage
                          src={`/${img}`}
                          alt={`Carte de tarot ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 200px"
                          priority={i === 0}
                        />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-center text-muted text-sm mt-6">Tirages personnalisés</p>
                </div>
                <div className="absolute -z-10 inset-0 bg-gradient-to-br from-gold-2/20 to-gold-1/20 blur-3xl opacity-50" />
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            className="w-6 h-6 text-muted"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
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
            <h2 className="text-gold mb-4 font-title">
              Mes Services
            </h2>
            <p className="text-text-2 text-lg max-w-2xl mx-auto">
              Je propose des tirages de cartes et du Reiki à distance pour vous accompagner dans votre bien-être
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <TirageCard
                key={service.href}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding mystic-gradient">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-gold mb-6 font-title">
                Une approche bienveillante et authentique
              </h2>
              <p className="text-text-2 text-lg leading-relaxed mb-6">
                Je vous accompagne avec douceur et respect dans votre quête de réponses. Chaque consultation est un moment privilégié où les cartes deviennent un miroir de votre âme.
              </p>
              <p className="text-text-2 text-lg leading-relaxed mb-8">
                Mon approche allie intuition, écoute profonde et bienveillance pour vous offrir une guidance éclairante et porteuse de sens.
              </p>
              <Link href="/a-propos">
                <Button variant="primary">En savoir plus</Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="glass-card p-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold-2/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🌙</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gold mb-2 font-title">
                      Écoute bienveillante
                    </h3>
                    <p className="text-text-2">
                      Un espace sécurisé où vous pouvez vous exprimer librement
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold-2/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gold mb-2 font-title">
                      Guidance personnalisée
                    </h3>
                    <p className="text-text-2">
                      Chaque tirage est unique et adapté à votre situation
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold-2/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💜</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gold mb-2 font-title">
                      Approche éthique
                    </h3>
                    <p className="text-text-2">
                      Respect, confidentialité et bienveillance au cœur de ma pratique
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-gold mb-4 font-title">
              Prestations
            </h2>
            <p className="text-text-2 text-lg max-w-2xl mx-auto">
              Choisissez le tirage qui correspond à votre situation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {prestations.map((prestation, index) => (
              <motion.div
                key={prestation.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover glow className="h-full flex flex-col">
                  <div className="text-5xl mb-4 text-center">{prestation.icon}</div>
                  <h3 className="text-xl font-semibold text-gold mb-2 text-center font-title">
                    {prestation.title}
                  </h3>
                  <p className="text-text-2 text-sm mb-4 flex-1 text-center">
                    {prestation.shortDescription}
                  </p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="px-3 py-1 rounded-full bg-surface border border-border text-xs text-text-2">
                      {prestation.badge}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <Link href={`/prestations/${prestation.slug}`} className="block">
                      <Button variant="ghost" size="sm" className="w-full">
                        Découvrir
                      </Button>
                    </Link>
                    <a href={siteConfig.rdv.url} target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="primary" size="sm" className="w-full">
                        Prendre RDV
                      </Button>
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 text-center"
          >
            <p className="text-text-2 text-lg mb-6">
              Besoin d'être guidé(e) pour choisir ?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Me conseiller
                </Button>
              </Link>
              <a href={siteConfig.rdv.url} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg">
                  Prendre rendez-vous
                </Button>
              </a>
            </div>
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
            <h2 className="text-gold mb-4 font-title">
              Témoignages
            </h2>
            <p className="text-text-2 text-lg max-w-2xl mx-auto">
              Les mots de celles et ceux qui ont fait confiance à ma guidance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                {...testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding mystic-gradient text-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-gold mb-6 font-title">
              Prête à éclairer votre chemin ?
            </h2>
            <p className="text-text-2 text-lg mb-8 max-w-2xl mx-auto">
              Prêt(e) à dissiper les ombres et à embrasser votre véritable potentiel ? Réservez dès maintenant votre consultation personnalisée pour un voyage au cœur de votre âme.
            </p>
            <Link href="/prendre-rdv">
              <Button variant="primary" className="soft-glow">Prendre rendez-vous</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
