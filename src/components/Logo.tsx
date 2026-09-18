'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  variant?: 'emblem' | 'full';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ variant = 'full', className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const emblem = (
    <motion.div
      whileHover={{ boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)' }}
      className={`relative flex items-center justify-center rounded-full border border-gold p-1 ${sizeClasses[size]}`}
    >
      <div className="absolute inset-0 rounded-full border border-ivory/30 m-1" />
      <svg viewBox="0 0 100 100" className="w-full h-full fill-gold">
        <text
          x="50"
          y="50"
          dominantBaseline="central"
          textAnchor="middle"
          className="font-heading font-bold text-4xl"
          fill="currentColor"
        >
          JH
        </text>
      </svg>
    </motion.div>
  );

  if (variant === 'emblem') {
    return <div className={`inline-flex ${className}`}>{emblem}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-4 ${className}`}>
      {emblem}
      <div className="flex flex-col">
        <span className="font-heading text-xl tracking-widest text-ivory">JH KREASI</span>
        <div className="flex items-center gap-2 text-[0.65rem] tracking-widest text-gold uppercase">
          <span>STUDIO • BRAND SERVICES</span>
          <span className="opacity-50">|</span>
          <span>EST. IN JAKARTA</span>
        </div>
      </div>
    </div>
  );
}
