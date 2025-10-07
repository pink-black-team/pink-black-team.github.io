'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Import translations
import en from './locales/en.json';
import ru from './locales/ru.json';
import be from './locales/be.json';
import pl from './locales/pl.json';
import uk from './locales/uk.json';

export type Locale = 'en' | 'ru' | 'be' | 'pl' | 'uk';

type Translations = typeof en;

const translations: Record<Locale, Translations> = {
  en,
  ru,
  be,
  pl,
  uk,
};

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ru: 'Русский',
  be: 'Беларуская',
  pl: 'Polski',
  uk: 'Українська',
};

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

function detectBrowserLocale(): Locale {
  if (typeof window === 'undefined') return 'en';

  const browserLang = navigator.language.split('-')[0];
  const supportedLocales: Locale[] = ['en', 'ru', 'be', 'pl', 'uk'];

  return supportedLocales.includes(browserLang as Locale)
    ? (browserLang as Locale)
    : 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load locale from localStorage or detect from browser
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    const initialLocale = savedLocale || detectBrowserLocale();
    setLocaleState(initialLocale);
    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    // Update html lang attribute for accessibility
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLocale;
    }
  };

  // Always provide context, even before mounting
  const value: I18nContextValue = {
    locale,
    setLocale,
    t: translations[locale],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}

// Helper function to get nested translation keys
export function getNestedTranslation(obj: any, path: string): string {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path;
}
