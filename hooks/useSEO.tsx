'use client';

import { useEffect } from 'react';
import { useI18n, Locale } from '@/i18n';

const seoTranslations: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'Pink-Black Team | AI Innovation & Investment',
    description: 'Innovative AI development team seeking investment for cutting-edge projects',
  },
  ru: {
    title: 'Команда Pink-Black | ИИ Инновации и Инвестиции',
    description: 'Инновационная команда разработчиков ИИ, ищущая инвестиции для передовых проектов',
  },
  be: {
    title: 'Каманда Pink-Black | Інавацыі ШІ і Інвестыцыі',
    description: 'Інавацыйная каманда распрацоўшчыкаў ШІ, якая шукае інвестыцыі для перадавых праектаў',
  },
  pl: {
    title: 'Zespół Pink-Black | Innowacje AI i Inwestycje',
    description: 'Innowacyjny zespół programistów AI szukający inwestycji w projekty najnowszej technologii',
  },
  uk: {
    title: 'Команда Pink-Black | ШІ Інновації та Інвестиції',
    description: 'Інноваційна команда розробників ШІ, яка шукає інвестиції для передових проектів',
  },
};

export function useSEO() {
  const { locale } = useI18n();

  useEffect(() => {
    const seo = seoTranslations[locale];

    // Update title
    document.title = seo.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seo.description);

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', seo.title);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', seo.description);

    let ogLocale = document.querySelector('meta[property="og:locale"]');
    if (!ogLocale) {
      ogLocale = document.createElement('meta');
      ogLocale.setAttribute('property', 'og:locale');
      document.head.appendChild(ogLocale);
    }
    ogLocale.setAttribute('content', locale);

    // Update lang attribute
    document.documentElement.lang = locale;

    // Add hreflang links
    const locales: Locale[] = ['en', 'ru', 'be', 'pl', 'uk'];
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';

    // Remove existing hreflang links
    document.querySelectorAll('link[rel="alternate"]').forEach((link) => link.remove());

    // Add new hreflang links
    locales.forEach((loc) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', loc);
      link.setAttribute('href', `${baseUrl}?lang=${loc}`);
      document.head.appendChild(link);
    });

    // Add x-default
    const xDefault = document.createElement('link');
    xDefault.setAttribute('rel', 'alternate');
    xDefault.setAttribute('hreflang', 'x-default');
    xDefault.setAttribute('href', baseUrl);
    document.head.appendChild(xDefault);
  }, [locale]);
}
