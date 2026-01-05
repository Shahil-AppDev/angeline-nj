'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

// Liste des 15 dernières vidéos TikTok (à remplacer par les vraies URLs)
const tiktokVideos = [
  'https://www.tiktok.com/@angelinenj/video/1',
  'https://www.tiktok.com/@angelinenj/video/2',
  'https://www.tiktok.com/@angelinenj/video/3',
  'https://www.tiktok.com/@angelinenj/video/4',
  'https://www.tiktok.com/@angelinenj/video/5',
  'https://www.tiktok.com/@angelinenj/video/6',
  'https://www.tiktok.com/@angelinenj/video/7',
  'https://www.tiktok.com/@angelinenj/video/8',
  'https://www.tiktok.com/@angelinenj/video/9',
  'https://www.tiktok.com/@angelinenj/video/10',
  'https://www.tiktok.com/@angelinenj/video/11',
  'https://www.tiktok.com/@angelinenj/video/12',
  'https://www.tiktok.com/@angelinenj/video/13',
  'https://www.tiktok.com/@angelinenj/video/14',
  'https://www.tiktok.com/@angelinenj/video/15',
];

export default function TikTokGallery() {
  useEffect(() => {
    // Charger le script TikTok embed
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-serif text-3xl font-bold text-gold mb-4 font-title">
          Mes Tirages Vidéo sur TikTok
        </h2>
        <p className="text-text-2 max-w-2xl mx-auto">
          Découvrez mes derniers tirages vidéo thématiques créés avec mes oracles. 
          Chaque vidéo apporte guidance et clarté sur des thématiques variées.
        </p>
      </motion.div>

      {/* Grille 5x3 - 15 vidéos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {tiktokVideos.map((videoUrl, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="aspect-[9/16] rounded-lg overflow-hidden bg-surface/30 border border-border/50"
          >
            <blockquote
              className="tiktok-embed h-full"
              cite={videoUrl}
              data-video-id={videoUrl.split('/').pop()}
              style={{ maxWidth: '100%', minWidth: '100%', margin: 0 }}
            >
              <section>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={videoUrl}
                  className="text-primary hover:text-gold transition-colors"
                >
                  Voir la vidéo sur TikTok
                </a>
              </section>
            </blockquote>
          </motion.div>
        ))}
      </div>

      {/* Lien vers le profil TikTok */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-12"
      >
        <a
          href="https://www.tiktok.com/@angelinenj"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-primary-2 text-white font-medium hover:shadow-glow transition-all"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
          </svg>
          Voir plus sur @angelinenj
        </a>
      </motion.div>
    </div>
  );
}
