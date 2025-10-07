'use client';

import React from 'react';
import { getProductCards } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import Reveal from '@/components/Reveal';
import { useI18n } from '@/i18n';
import styles from './page.module.css';

export default function ProjectsPage() {
  const { locale } = useI18n();
  const products = getProductCards();

  const pageContent = {
    title: {
      en: 'Our Projects',
      ru: 'Наши Проекты',
      be: 'Нашы Праекты',
      pl: 'Nasze Projekty',
      uk: 'Наші Проекти',
    },
    subtitle: {
      en: 'Innovative AI-powered solutions that are transforming industries and attracting global investment',
      ru: 'Инновационные AI-решения, которые трансформируют индустрии и привлекают глобальные инвестиции',
      be: 'Інавацыйныя AI-рашэнні, якія трансфармуюць індустрыі і прыцягваюць глабальныя інвестыцыі',
      pl: 'Innowacyjne rozwiązania AI, które transformują branże i przyciągają globalne inwestycje',
      uk: 'Інноваційні AI-рішення, які трансформують індустрії та залучають глобальні інвестиції',
    },
    emptyTitle: {
      en: 'No Projects Yet',
      ru: 'Пока нет проектов',
      be: 'Пакуль няма праектаў',
      pl: 'Brak projektów',
      uk: 'Поки немає проектів',
    },
    emptyText: {
      en: 'We are currently working on exciting new projects. Check back soon!',
      ru: 'Мы сейчас работаем над захватывающими новыми проектами. Скоро вернитесь!',
      be: 'Мы зараз працуем над захапляльнымі новымі праектамі. Вярніцеся хутка!',
      pl: 'Obecnie pracujemy nad ekscytującymi nowymi projektami. Wróć wkrótce!',
      uk: 'Ми зараз працюємо над захопливими новими проектами. Повертайтеся незабаром!',
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundGrid} aria-hidden="true" />

      <header className={styles.header}>
        <Reveal>
          <h1 className={styles.title}>{pageContent.title[locale]}</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className={styles.subtitle}>{pageContent.subtitle[locale]}</p>
        </Reveal>
      </header>

      {products.length > 0 ? (
        <div className={styles.grid}>
          {products.map((product, index) => (
            <Reveal key={product.id} delay={0.1 * (index % 6)}>
              <ProductCard product={product} priority={index < 3} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <h2 className={styles.emptyStateTitle}>{pageContent.emptyTitle[locale]}</h2>
          <p className={styles.emptyStateText}>{pageContent.emptyText[locale]}</p>
        </div>
      )}
    </div>
  );
}
