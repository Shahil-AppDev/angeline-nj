'use client';

import { motion } from 'framer-motion';
import { Flame, Moon, Sparkles, Star, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  icon: React.ReactNode;
  duration: number;
  delay: number;
  size: number;
}

export default function MysticParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const icons = [
      <Moon key="moon" />,
      <Sun key="sun" />,
      <Star key="star" />,
      <Sparkles key="sparkles" />,
      <Flame key="flame" />,
    ];

    const newParticles: Particle[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      icon: icons[Math.floor(Math.random() * icons.length)],
      duration: 18 + Math.random() * 12,
      delay: Math.random() * 8,
      size: 24 + Math.random() * 16,
    }));

    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-gold-1"
          style={{
            filter: 'brightness(1.1) saturate(1.3) drop-shadow(0 0 8px var(--gold-glow))',
            fontSize: `${particle.size}px`,
          }}
          initial={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            rotate: 0,
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            y: [`${particle.y}vh`, `${particle.y - 35}vh`, `${particle.y}vh`],
            rotate: [0, 360],
            opacity: [0, 0.7, 0],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {particle.icon}
        </motion.div>
      ))}
    </div>
  );
}
