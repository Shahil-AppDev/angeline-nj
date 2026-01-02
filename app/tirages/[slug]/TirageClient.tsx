'use client';

import { motion } from 'framer-motion';

interface TirageClientProps {
  tirage: {
    title: string;
    icon: string;
    description: string;
    details: string[];
    duration: string;
    price: string;
  };
}

export default function TirageClient({ tirage }: TirageClientProps) {
  return (
    <>
      <section className="pt-32 pb-16 aurora-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="text-6xl mb-6">{tirage.icon}</div>
            <h1 className="text-gold mb-6 font-title">
              {tirage.title}
            </h1>
            <p className="text-xl text-text-2 max-w-2xl mx-auto leading-relaxed">
              {tirage.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding dark-mystic-bg">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl text-gold mb-6 font-title">
                  Ce que vous découvrirez
                </h2>
                <div className="space-y-4">
                  {tirage.details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <svg
                        className="w-6 h-6 text-gold-1 flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-text-2">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-12 glass-card p-8"
                >
                  <h3 className="text-2xl text-gold mb-4 font-title">
                    Déroulement de la consultation
                  </h3>
                  <p className="text-text-2 leading-relaxed mb-4">
                    Chaque consultation est un moment privilégié où je me connecte à votre énergie pour vous apporter des réponses claires et bienveillantes.
                  </p>
                  <p className="text-text-2 leading-relaxed">
                    Nous prenons le temps nécessaire pour explorer votre question en profondeur. Je vous guide avec douceur et respect, dans un espace de confiance et de confidentialité absolue.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-card p-8 sticky top-24"
              >
                <h3 className="text-2xl text-gold mb-6 font-title">
                  Informations
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <svg className="w-5 h-5 text-gold-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold text-gold-2">Durée</span>
                    </div>
                    <p className="text-text-2 ml-7">{tirage.duration}</p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <svg className="w-5 h-5 text-gold-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold text-gold-2">Tarif</span>
                    </div>
                    <p className="text-text-2 ml-7">{tirage.price}</p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <svg className="w-5 h-5 text-gold-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="font-semibold text-gold-2">Format</span>
                    </div>
                    <p className="text-text-2 ml-7">Visio ou téléphone</p>
                  </div>
                </div>

                <a href="/contact" className="btn-primary w-full mt-8 block text-center">
                  <span>Réserver ce tirage</span>
                </a>

                <p className="text-sm text-gold-2 text-center mt-4">
                  Réponse sous 24h
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
