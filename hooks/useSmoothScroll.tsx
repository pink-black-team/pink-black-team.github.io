'use client';

import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;

      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const targetElement = document.querySelector(href);
      if (!targetElement) return;

      e.preventDefault();

      const navHeight = 80; // Height of fixed navigation
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });

      // Update URL without triggering navigation
      if (history.pushState) {
        history.pushState(null, '', href);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
}
