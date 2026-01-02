import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({ children, className = '', hover = true, glow = false }: CardProps) {
  const baseStyles = 'glass-card p-6';
  const hoverStyles = hover ? 'hover:scale-[1.02]' : '';
  const glowStyles = glow ? 'soft-glow' : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${glowStyles} ${className}`}>
      {children}
    </div>
  );
}
