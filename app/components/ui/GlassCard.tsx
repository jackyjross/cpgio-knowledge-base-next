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
        bg-white/90 backdrop-blur-md
        border border-white/20
        rounded-2xl
        shadow-glass
        p-6
        ${hover ? 'cursor-pointer' : ''}
        ${className}
      `}
      whileHover={hover ? {
        y: -5,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderColor: 'rgba(59, 130, 246, 0.4)',
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
