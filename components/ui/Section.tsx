import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  gradient?: boolean;
}

export default function Section({ children, className = '', id, gradient = false }: SectionProps) {
  const baseStyles = 'relative py-16 md:py-24';
  const gradientStyles = gradient ? 'mystic-gradient' : '';

  return (
    <section id={id} className={`${baseStyles} ${gradientStyles} ${className}`}>
      <div className="container-custom relative z-10">
        {children}
      </div>
    </section>
  );
}
