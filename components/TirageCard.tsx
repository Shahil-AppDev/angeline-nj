'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface TirageCardProps {
  title: string;
  description: string;
  icon?: string;
  iconImage?: string;
  href: string;
  delay?: number;
}

export default function TirageCard({ title, description, icon, iconImage, href, delay = 0 }: TirageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Link href={href} className="block group">
        <div className="glass-card card-hover-lift p-8 h-full">
          <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
            {iconImage ? (
              <div className="w-20 h-20 relative rounded-lg overflow-hidden">
                <Image
                  src={iconImage}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            ) : (
              <div className="text-5xl">{icon}</div>
            )}
          </div>
          <h3 className="font-serif text-2xl font-semibold text-gold mb-3 font-title group-hover:text-gold-1 transition-colors">
            {title}
          </h3>
          <p className="text-text-2 leading-relaxed">
            {description}
          </p>
          <div className="mt-6 flex items-center text-gold-2 font-medium group-hover:text-gold-1 transition-colors">
            <span>Découvrir</span>
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
