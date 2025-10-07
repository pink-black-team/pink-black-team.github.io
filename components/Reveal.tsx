'use client';

import { useReveal } from '@/hooks/useReveal';
import { CSSProperties, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  threshold?: number;
  className?: string;
  animation?: 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scale';
}

const animationStyles: Record<string, { initial: CSSProperties; animate: CSSProperties }> = {
  fadeUp: {
    initial: { opacity: 0, transform: 'translateY(30px)' },
    animate: { opacity: 1, transform: 'translateY(0)' },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  fadeLeft: {
    initial: { opacity: 0, transform: 'translateX(-30px)' },
    animate: { opacity: 1, transform: 'translateX(0)' },
  },
  fadeRight: {
    initial: { opacity: 0, transform: 'translateX(30px)' },
    animate: { opacity: 1, transform: 'translateX(0)' },
  },
  scale: {
    initial: { opacity: 0, transform: 'scale(0.9)' },
    animate: { opacity: 1, transform: 'scale(1)' },
  },
};

export default function Reveal({
  children,
  delay = 0,
  threshold = 0.1,
  className = '',
  animation = 'fadeUp',
}: RevealProps) {
  const { ref, isVisible } = useReveal({ delay, threshold });

  const styles = animationStyles[animation];
  const style: CSSProperties = {
    ...(isVisible ? styles.animate : styles.initial),
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
  };

  return (
    <div ref={ref as any} style={style} className={className}>
      {children}
    </div>
  );
}
