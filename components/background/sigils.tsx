/**
 * SVG Sigils / Runes pour ambiance Grimoire
 * Ultra discrets, stroke doré uniquement
 */

export const Sigil1 = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cercle extérieur */}
    <circle cx="100" cy="100" r="80" stroke="var(--gold-2)" strokeWidth="0.5" opacity="0.3" />
    
    {/* Étoile à 6 branches */}
    <path
      d="M100 30 L110 70 L150 70 L120 95 L130 135 L100 110 L70 135 L80 95 L50 70 L90 70 Z"
      stroke="var(--gold-1)"
      strokeWidth="0.8"
      opacity="0.4"
    />
    
    {/* Cercle intérieur */}
    <circle cx="100" cy="100" r="40" stroke="var(--gold-3)" strokeWidth="0.5" opacity="0.25" />
    
    {/* Croix centrale */}
    <line x1="100" y1="60" x2="100" y2="140" stroke="var(--gold-2)" strokeWidth="0.6" opacity="0.3" />
    <line x1="60" y1="100" x2="140" y2="100" stroke="var(--gold-2)" strokeWidth="0.6" opacity="0.3" />
  </svg>
);

export const Sigil2 = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Lune croissant */}
    <path
      d="M100 20 A 60 60 0 1 0 100 180 A 50 50 0 1 1 100 20"
      stroke="var(--gold-1)"
      strokeWidth="0.7"
      opacity="0.35"
    />
    
    {/* Étoiles autour */}
    <circle cx="50" cy="60" r="2" fill="var(--gold-2)" opacity="0.4" />
    <circle cx="150" cy="80" r="1.5" fill="var(--gold-1)" opacity="0.3" />
    <circle cx="70" cy="140" r="2.5" fill="var(--gold-2)" opacity="0.35" />
    
    {/* Runes */}
    <path d="M100 100 L100 120 M95 110 L105 110" stroke="var(--gold-3)" strokeWidth="0.5" opacity="0.25" />
  </svg>
);

export const Sigil3 = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Pentagone */}
    <path
      d="M100 30 L170 80 L145 160 L55 160 L30 80 Z"
      stroke="var(--gold-2)"
      strokeWidth="0.6"
      opacity="0.3"
    />
    
    {/* Lignes intérieures */}
    <line x1="100" y1="30" x2="55" y2="160" stroke="var(--gold-1)" strokeWidth="0.4" opacity="0.2" />
    <line x1="170" y1="80" x2="30" y2="80" stroke="var(--gold-1)" strokeWidth="0.4" opacity="0.2" />
    <line x1="145" y1="160" x2="100" y2="30" stroke="var(--gold-1)" strokeWidth="0.4" opacity="0.2" />
    
    {/* Point central */}
    <circle cx="100" cy="100" r="3" fill="var(--gold-2)" opacity="0.4" />
  </svg>
);

export const Sigil4 = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Spirale */}
    <path
      d="M100 100 Q120 100 120 120 Q120 140 100 140 Q80 140 80 120 Q80 100 100 100 Q140 100 140 140 Q140 180 100 180"
      stroke="var(--gold-1)"
      strokeWidth="0.7"
      opacity="0.3"
    />
    
    {/* Ornements */}
    <circle cx="100" cy="100" r="60" stroke="var(--gold-3)" strokeWidth="0.4" opacity="0.2" strokeDasharray="4 8" />
  </svg>
);

export const TarotCardSilhouette = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Contour carte */}
    <rect
      x="2"
      y="2"
      width="96"
      height="156"
      rx="4"
      stroke="var(--gold-2)"
      strokeWidth="0.5"
      opacity="0.4"
    />
    
    {/* Motif intérieur - étoile */}
    <path
      d="M50 40 L55 55 L70 55 L58 65 L63 80 L50 70 L37 80 L42 65 L30 55 L45 55 Z"
      stroke="var(--gold-1)"
      strokeWidth="0.4"
      opacity="0.3"
    />
    
    {/* Lignes décoratives */}
    <line x1="20" y1="100" x2="80" y2="100" stroke="var(--gold-3)" strokeWidth="0.3" opacity="0.25" />
    <line x1="30" y1="110" x2="70" y2="110" stroke="var(--gold-3)" strokeWidth="0.3" opacity="0.25" />
    
    {/* Cercle bas */}
    <circle cx="50" cy="130" r="8" stroke="var(--gold-2)" strokeWidth="0.4" opacity="0.3" />
  </svg>
);
