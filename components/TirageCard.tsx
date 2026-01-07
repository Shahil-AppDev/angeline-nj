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
      className="h-full w-full"
    >
      <Link href={href} className="block group h-full">
        <div className="glass-card card-hover-lift p-8 h-full flex flex-col min-h-[400px]">
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
          <h3 className="font-serif text-2xl font-semibold mb-3 font-title group-hover:text-gold-1 transition-colors">
            <span className="gold-halo text-gold inline-block">{title}</span>
          </h3>
          <p className="text-text-2 leading-relaxed mb-6 flex-1">
            {description}
          </p>
          <div className="mt-auto pt-4">
            <button className="btn-gold w-full">
              <span>Découvrir</span>
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
