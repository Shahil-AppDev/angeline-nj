'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Video } from 'lucide-react';

export default function DirectContactBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative overflow-hidden rounded-lg border border-primary/20 bg-gradient-to-r from-surface/30 to-surface/10 backdrop-blur-sm"
    >
      {/* Shimmer effect subtil */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent shimmer-effect" />
      
      <div className="relative px-6 py-4 sm:px-8 sm:py-5">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          {/* Icônes discrètes */}
          <div className="flex gap-2 opacity-60">
            <MessageCircle className="w-5 h-5 text-primary" strokeWidth={1.5} />
            <Video className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </div>
          
          {/* Texte principal */}
          <p className="text-center sm:text-left text-sm sm:text-base leading-relaxed">
            <span className="text-muted">Pour un tirage en direct </span>
            <span className="text-primary font-medium">(audio ou visio)</span>
            <span className="text-muted">, </span>
            <span className="text-gold-1 font-medium shimmer-text">contacte-moi sur mes réseaux</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
