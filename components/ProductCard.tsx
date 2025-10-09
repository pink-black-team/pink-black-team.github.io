'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProductCard as ProductCardType } from '@/types/product';
import { useI18n } from '@/i18n';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: ProductCardType;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const { locale } = useI18n();

  const title = product.title[locale];
  const description = product.shortDescription?.[locale] || '';
  const thumbnailAlt = product.thumbnail.alt[locale];

  const statusLabels = {
    active: {
      en: 'Active',
      ru: 'Активен',
      be: 'Актыўны',
      pl: 'Aktywny',
      uk: 'Активний',
    },
    'in-development': {
      en: 'In Development',
      ru: 'В разработке',
      be: 'У распрацоўцы',
      pl: 'W rozwoju',
      uk: 'В розробці',
    },
    paused: {
      en: 'Paused',
      ru: 'Приостановлен',
      be: 'Прыпынены',
      pl: 'Wstrzymany',
      uk: 'Призупинений',
    },
    planned: {
      en: 'Planned',
      ru: 'Запланирован',
      be: 'Запланаваны',
      pl: 'Planowany',
      uk: 'Запланований',
    },
  };

  const featuredLabel = {
    en: 'Featured',
    ru: 'Рекомендуем',
    be: 'Рэкамендуем',
    pl: 'Polecane',
    uk: 'Рекомендуємо',
  };

  return (
    <Link href={`/projects/${product.slug}`} className={styles.card} aria-label={title}>
      <div className={styles.thumbnailContainer}>
        {product.thumbnail.src ? (
          <Image
            src={product.thumbnail.src}
            alt={thumbnailAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.thumbnail}
            priority={priority}
            loading={priority ? 'eager' : 'lazy'}
          />
        ) : (
          <div className={styles.placeholderImage} aria-hidden="true">
            {title}
          </div>
        )}

        {product.featured && (
          <span className={styles.featuredBadge} aria-label={featuredLabel[locale]}>
            {featuredLabel[locale]}
          </span>
        )}

        {product.status && (
          <span
            className={`${styles.statusBadge} ${
              product.status === 'in-development' ? styles.inDevelopment : ''
            } ${product.status === 'paused' ? styles.paused : ''} ${
              product.status === 'planned' ? styles.planned : ''
            }`}
            aria-label={statusLabels[product.status][locale]}
          >
            {statusLabels[product.status][locale]}
          </span>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        {description && <p className={styles.description}>{description}</p>}

        {product.techStack && product.techStack.length > 0 && (
          <div className={styles.techStack} aria-label="Technology stack">
            {product.techStack.map((tech) => (
              <span key={tech} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
