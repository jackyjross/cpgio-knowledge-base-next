'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({ children, className = '', hover = true, onClick }: GlassCardProps) {
  return (
    <motion.div
      className={`
        bg-white/70 backdrop-blur-md
        border border-white/20
        rounded-2xl
        shadow-glass
        ${hover ? 'cursor-pointer' : ''}
        ${className}
      `}
      whileHover={hover ? {
        y: -5,
        boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.12)',
      } : undefined}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
