import { ZodiacSign } from '@/lib/astrology/types';
import { zodiacSigns } from '@/lib/astrology/zodiacData';

interface BirthChartProps {
  sun: ZodiacSign;
  moon: ZodiacSign;
  ascendant: ZodiacSign;
  size?: number;
}

export default function BirthChartOptimized({ sun, moon, ascendant, size = 400 }: BirthChartProps) {
  const center = size / 2;
  const outerRadius = size * 0.42;
  const middleRadius = size * 0.32;
  const innerRadius = size * 0.22;

  const signs: ZodiacSign[] = ['belier', 'taureau', 'gemeaux', 'cancer', 'lion', 'vierge', 'balance', 'scorpion', 'sagittaire', 'capricorne', 'verseau', 'poissons'];
  
  const getPosition = (sign: ZodiacSign, radius: number, offset: number = 0) => {
    const index = signs.indexOf(sign);
    const angle = ((index * 30) + offset - 90) * (Math.PI / 180);
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle)
    };
  };

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mx-auto">
      <defs>
        <radialGradient id="bgGradient">
          <stop offset="0%" stopColor="rgba(200, 182, 255, 0.15)" />
          <stop offset="100%" stopColor="rgba(200, 182, 255, 0.03)" />
        </radialGradient>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </linearGradient>
      </defs>

      {/* Background circles */}
      <circle cx={center} cy={center} r={outerRadius} fill="url(#bgGradient)" stroke="#C8B6FF" strokeWidth="2" opacity="0.4" />
      <circle cx={center} cy={center} r={middleRadius} fill="none" stroke="#C8B6FF" strokeWidth="1" opacity="0.3" />
      <circle cx={center} cy={center} r={innerRadius} fill="none" stroke="#C8B6FF" strokeWidth="1" opacity="0.3" />

      {/* Zodiac wheel divisions */}
      {signs.map((_, index) => {
        const angle = (index * 30 - 90) * (Math.PI / 180);
        const x2 = center + outerRadius * Math.cos(angle);
        const y2 = center + outerRadius * Math.sin(angle);
        
        return (
          <line
            key={`line-${index}`}
            x1={center}
            y1={center}
            x2={x2}
            y2={y2}
            stroke="#C8B6FF"
            strokeWidth="0.5"
            opacity="0.2"
          />
        );
      })}

      {/* Zodiac signs on outer ring */}
      {signs.map((sign) => {
        const pos = getPosition(sign, outerRadius * 0.85);
        const isActive = sign === sun || sign === moon || sign === ascendant;
        
        return (
          <text
            key={`sign-${sign}`}
            x={pos.x}
            y={pos.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="20"
            opacity={isActive ? 1 : 0.3}
            filter={isActive ? "url(#softGlow)" : undefined}
          >
            {zodiacSigns[sign].emoji}
          </text>
        );
      })}

      {/* Sun */}
      <g>
        <circle 
          cx={getPosition(sun, middleRadius).x} 
          cy={getPosition(sun, middleRadius).y} 
          r="22" 
          fill="url(#goldGradient)" 
          opacity="0.3"
          filter="url(#softGlow)"
        />
        <text
          x={getPosition(sun, middleRadius).x}
          y={getPosition(sun, middleRadius).y}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="26"
        >
          ☀️
        </text>
      </g>

      {/* Moon */}
      <g>
        <circle 
          cx={getPosition(moon, middleRadius, 12).x} 
          cy={getPosition(moon, middleRadius, 12).y} 
          r="20" 
          fill="rgba(200, 182, 255, 0.3)"
          filter="url(#softGlow)"
        />
        <text
          x={getPosition(moon, middleRadius, 12).x}
          y={getPosition(moon, middleRadius, 12).y}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="24"
        >
          🌙
        </text>
      </g>

      {/* Ascendant */}
      <g>
        <circle 
          cx={getPosition(ascendant, middleRadius, -12).x} 
          cy={getPosition(ascendant, middleRadius, -12).y} 
          r="20" 
          fill="rgba(255, 182, 193, 0.3)"
          filter="url(#softGlow)"
        />
        <text
          x={getPosition(ascendant, middleRadius, -12).x}
          y={getPosition(ascendant, middleRadius, -12).y}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="24"
        >
          🌅
        </text>
      </g>

      {/* Center text */}
      <text x={center} y={center - 15} textAnchor="middle" fill="#C8B6FF" fontSize="16" fontWeight="bold">
        CARTE DU CIEL
      </text>
      <text x={center} y={center + 5} textAnchor="middle" fill="#9D8FCC" fontSize="11">
        Thème Natal
      </text>

      {/* Legend */}
      <g transform={`translate(${center - 90}, ${size - 55})`}>
        <text x="0" y="0" fill="#FFD700" fontSize="11">☀️ {zodiacSigns[sun].name}</text>
        <text x="0" y="16" fill="#C8B6FF" fontSize="11">🌙 {zodiacSigns[moon].name}</text>
        <text x="0" y="32" fill="#FFB6C1" fontSize="11">🌅 {zodiacSigns[ascendant].name}</text>
      </g>
    </svg>
  );
}
