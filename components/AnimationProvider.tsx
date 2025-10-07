'use client';

import { ReactNode } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { useSEO } from '@/hooks/useSEO';

export default function AnimationProvider({ children }: { children: ReactNode }) {
  useSmoothScroll();
  useSEO();
  return <>{children}</>;
}
