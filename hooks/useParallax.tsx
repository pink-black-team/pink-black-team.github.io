'use client';

import { useEffect, useRef, useState } from 'react';

interface UseParallaxOptions {
  speed?: number; // 0.1 to 1.0, lower = slower
  direction?: 'vertical' | 'horizontal';
  disabled?: boolean;
}

export function useParallax(options: UseParallaxOptions = {}) {
  const { speed = 0.5, direction = 'vertical', disabled = false } = options;
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (disabled) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const element = ref.current;
    if (!element) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = element.getBoundingClientRect();
          const scrollY = window.scrollY || window.pageYOffset;
          const elementTop = rect.top + scrollY;
          const elementCenter = elementTop + rect.height / 2;
          const viewportCenter = scrollY + window.innerHeight / 2;
          const distance = viewportCenter - elementCenter;

          if (direction === 'vertical') {
            setOffset({ x: 0, y: distance * speed });
          } else {
            setOffset({ x: distance * speed, y: 0 });
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction, disabled]);

  return {
    ref,
    style: {
      transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
      willChange: 'transform',
    },
  };
}
