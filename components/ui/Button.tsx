import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg overflow-hidden group';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-primary-2 text-white hover:shadow-glow border border-primary/50',
    secondary: 'glass-surface text-text hover:border-gold-2',
    ghost: 'text-text-2 hover:text-text hover:bg-surface'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <span className="btn-shimmer group-hover:opacity-100" />
      )}
    </button>
  );
}
