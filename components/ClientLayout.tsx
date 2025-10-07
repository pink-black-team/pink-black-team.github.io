'use client';

import { ReactNode } from 'react';
import { I18nProvider } from '@/i18n';
import AnimationProvider from './AnimationProvider';
import Navigation from './Navigation';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <AnimationProvider>
        <Navigation />
        {children}
      </AnimationProvider>
    </I18nProvider>
  );
}
