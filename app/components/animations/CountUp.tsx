'use client';

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CountUpProps {
  value: string;
  className?: string;
}

export function CountUp({ value, className = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Extract number from string if it exists
  const numericMatch = value.match(/[\d.]+/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const prefix = value.substring(0, value.indexOf(numericMatch?.[0] || ''));
  const suffix = value.substring((value.indexOf(numericMatch?.[0] || '') + (numericMatch?.[0]?.length || 0)));

  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => {
    const formatted = current.toFixed(numericValue % 1 === 0 ? 0 : 1);
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, numericValue, spring]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
