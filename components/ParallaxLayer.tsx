'use client';

import { useParallax } from '@/hooks/useParallax';
import { ReactNode, CSSProperties } from 'react';

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  direction?: 'vertical' | 'horizontal';
  className?: string;
  style?: CSSProperties;
}

export default function ParallaxLayer({
  children,
  speed = 0.5,
  direction = 'vertical',
  className = '',
  style: customStyle = {},
}: ParallaxLayerProps) {
  const { ref, style: parallaxStyle } = useParallax({ speed, direction });

  return (
    <div
      ref={ref as any}
      className={className}
      style={{ ...customStyle, ...parallaxStyle }}
    >
      {children}
    </div>
  );
}
