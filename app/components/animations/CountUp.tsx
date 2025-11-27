'use client';

import { motion, useInView, useSpring, useTransform, MotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  value: string;
  className?: string;
}

export function CountUp({ value, className = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState(value);

  // Extract number from string if it exists
  const numericMatch = value.match(/[\d.]+/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const prefix = value.substring(0, value.indexOf(numericMatch?.[0] || ''));
  const suffix = value.substring((value.indexOf(numericMatch?.[0] || '') + (numericMatch?.[0]?.length || 0)));

  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });

  useEffect(() => {
    if (isInView && numericValue > 0) {
      spring.set(numericValue);
    }
  }, [isInView, numericValue, spring]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      const formatted = latest.toFixed(numericValue % 1 === 0 ? 0 : 1);
      setDisplayValue(`${prefix}${formatted}${suffix}`);
    });

    return () => unsubscribe();
  }, [spring, prefix, suffix, numericValue]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
