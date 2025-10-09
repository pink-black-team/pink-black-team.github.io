'use client';

import React from 'react';
import Link from 'next/link';
import { Locale } from '@/types/product';
import styles from './ProductNotFound.module.css';

interface ProductNotFoundProps {
  locale: Locale;
}

export default function ProductNotFound({ locale }: ProductNotFoundProps) {
  const labels = {
    title: {
      en: 'Product Not Found',
      ru: 'Продукт не найден',
      be: 'Прадукт не знойдзены',
      pl: 'Produkt nie znaleziony',
      uk: 'Продукт не знайдено',
    },
    backToProjects: {
      en: 'Back to Projects',
      ru: 'Назад к проектам',
      be: 'Вярнуцца да праектаў',
      pl: 'Powrót do projektów',
      uk: 'Назад до проектів',
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{labels.title[locale]}</h1>
        <Link href="/projects" className={styles.linkButton}>
          {labels.backToProjects[locale]}
        </Link>
      </div>
    </div>
  );
}
