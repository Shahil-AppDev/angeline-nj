'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const DENSITY = 55; // Ajustable : 40 (léger) / 55 (moyen) / 70 (dense)

// Types de particules avec leurs probabilités
const RAIN_ITEMS = [
  { type: 'star', weight: 25 },
  { type: 'dust', weight: 25 },
  { type: 'crystal', weight: 15 },
  { type: 'card', weight: 15 },
  { type: 'glyph', weight: 10 },
  { type: 'logo', weight: 10 }, // Logo Angeline NJ
];

// Fonction pour sélectionner un type aléatoire selon les poids
function getRandomType() {
  const totalWeight = RAIN_ITEMS.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;
  
  for (const item of RAIN_ITEMS) {
    random -= item.weight;
    if (random <= 0) return item.type;
  }
  return 'star';
}

// Génération des items de pluie
function generateRainItems() {
  return Array.from({ length: DENSITY }, (_, i) => {
    const type = getRandomType();
    const left = Math.random() * 100;
    const top = -(Math.random() * 100);
    const size = type === 'logo' ? 14 + Math.random() * 12 : 10 + Math.random() * 30;
    const duration = 12 + Math.random() * 18;
    const delay = Math.random() * 20;
    const opacity = type === 'logo' ? 0.10 + Math.random() * 0.12 : 0.08 + Math.random() * 0.18;
    
    return { id: i, type, left, top, size, duration, delay, opacity };
  });
}

export default function MysticUniverseRain() {
  const [rainItems, setRainItems] = useState<any[]>([]);

  useEffect(() => {
    // Générer items côté client uniquement pour éviter hydration mismatch
    setRainItems(generateRainItems());
  }, []);
  return (
    <div
      className="fixed inset-0 z-10 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* LAYER 1: Starfield CSS (sans canvas) */}
      <div
        className="absolute inset-0 starfield-rain"
        style={{
          background: `
            radial-gradient(1px 1px at 20% 30%, var(--gold-1), transparent),
            radial-gradient(1px 1px at 60% 70%, var(--gold-2), transparent),
            radial-gradient(1px 1px at 50% 50%, var(--gold-1), transparent),
            radial-gradient(1px 1px at 80% 10%, var(--gold-3), transparent),
            radial-gradient(1px 1px at 90% 60%, var(--gold-1), transparent),
            radial-gradient(1px 1px at 33% 80%, var(--gold-2), transparent),
            radial-gradient(1px 1px at 15% 90%, var(--gold-1), transparent)
          `,
          backgroundSize: '200px 200px, 250px 250px, 300px 300px, 180px 180px, 220px 220px, 260px 260px, 240px 240px',
          opacity: 0.3,
        }}
      />

      {/* LAYER 3: RAIN (particules DOM) */}
      <div className="absolute inset-0">
        {rainItems.map((item) => (
          <motion.div
            key={item.id}
            className="absolute rain-item"
            style={{
              left: `${item.left}%`,
              top: `${item.top}vh`,
              width: `${item.size}px`,
              height: item.type === 'card' ? `${item.size * 1.5}px` : `${item.size}px`,
              opacity: item.opacity,
            }}
            animate={{
              y: ['0vh', '120vh'],
              x: [0, Math.sin(item.id) * 14, 0],
              rotate: [0, Math.cos(item.id) * 5, 0],
              opacity: [0, item.opacity, item.opacity, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: 'linear',
            }}
          >
            {item.type === 'star' && (
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: 'var(--gold-1)',
                  boxShadow: '0 0 2px var(--gold-glow)',
                }}
              />
            )}

            {item.type === 'dust' && (
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: 'var(--gold-2)',
                  boxShadow: '0 0 3px var(--gold-glow)',
                }}
              />
            )}

            {item.type === 'crystal' && (
              <div
                className="w-full h-full rounded-full"
                style={{
                  border: '1px solid var(--gold-2)',
                  background: 'radial-gradient(circle, rgba(214, 168, 74, 0.15) 0%, transparent 70%)',
                }}
              />
            )}

            {item.type === 'card' && (
              <div
                className="w-full h-full rounded-sm"
                style={{
                  border: '0.5px solid var(--gold-2)',
                  background: 'rgba(214, 168, 74, 0.05)',
                }}
              >
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2"
                  style={{
                    border: '0.3px solid var(--gold-1)',
                    opacity: 0.4,
                  }}
                />
              </div>
            )}

            {item.type === 'glyph' && (
              <svg viewBox="0 0 20 20" fill="none" className="w-full h-full">
                {item.id % 3 === 0 && (
                  <circle cx="10" cy="10" r="7" stroke="var(--gold-2)" strokeWidth="0.5" />
                )}
                {item.id % 3 === 1 && (
                  <path d="M10 3 L13 10 L10 17 L7 10 Z" stroke="var(--gold-1)" strokeWidth="0.5" />
                )}
                {item.id % 3 === 2 && (
                  <path d="M10 3 A 7 7 0 1 0 10 17 A 6 6 0 1 1 10 3" stroke="var(--gold-2)" strokeWidth="0.5" />
                )}
              </svg>
            )}

            {item.type === 'logo' && (
              <img
                src="/logo.png"
                alt=""
                width={item.size}
                height={item.size}
                className="object-contain"
                style={{
                  filter: 'drop-shadow(0 0 2px var(--gold-glow))',
                }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* LAYER 4: Vignette sombre (réduite pour visibilité) */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(closest-side at 50% 35%, rgba(7, 4, 15, 0.25) 0%, rgba(7, 4, 15, 0.35) 60%, rgba(7, 4, 15, 0.85) 100%)',
        }}
      />
    </div>
  );
}
