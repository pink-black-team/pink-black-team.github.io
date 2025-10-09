'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product, Locale } from '@/types/product';
import Reveal from '@/components/Reveal';
import styles from './ProductHero.module.css';

interface ProductHeroProps {
  product: Product;
  locale: Locale;
}

export default function ProductHero({ product, locale }: ProductHeroProps) {
  const labels = {
    backToProjects: {
      en: '← Back to Projects',
      ru: '← Назад к проектам',
      be: '← Вярнуцца да праектаў',
      pl: '← Powrót do projektów',
      uk: '← Назад до проектів',
    },
    techStack: {
      en: 'Technology Stack',
      ru: 'Стек технологий',
      be: 'Стэк тэхналогій',
      pl: 'Stos technologiczny',
      uk: 'Стек технологій',
    },
    website: {
      en: 'Visit Website',
      ru: 'Посетить сайт',
      be: 'Наведаць сайт',
      pl: 'Odwiedź stronę',
      uk: 'Відвідати сайт',
    },
    demo: {
      en: 'Try Demo',
      ru: 'Попробовать демо',
      be: 'Паспрабаваць дэма',
      pl: 'Wypróbuj demo',
      uk: 'Спробувати демо',
    },
    github: {
      en: 'View on GitHub',
      ru: 'Смотреть на GitHub',
      be: 'Глядзець на GitHub',
      pl: 'Zobacz na GitHub',
      uk: 'Дивитися на GitHub',
    },
  };

  return (
    <div className={styles.hero}>
      <Link href="/projects" className={styles.backLink}>
        {labels.backToProjects[locale]}
      </Link>

      <Reveal>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>{product.title[locale]}</h1>
            <p className={styles.description}>{product.description[locale]}</p>

            {product.techStack && product.techStack.length > 0 && (
              <div>
                <h3 className={styles.techStackLabel}>
                  {labels.techStack[locale]}
                </h3>
                <div className={styles.techStack}>
                  {product.techStack.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {(product.links.website || product.links.demo || product.links.github) && (
              <div className={styles.links}>
                {product.links.website && (
                  <a
                    href={product.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.linkButton} ${styles.primary}`}
                  >
                    {labels.website[locale]} →
                  </a>
                )}
                {product.links.demo && (
                  <a
                    href={product.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkButton}
                  >
                    {labels.demo[locale]}
                  </a>
                )}
                {product.links.github && (
                  <a
                    href={product.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkButton}
                  >
                    {labels.github[locale]}
                  </a>
                )}
              </div>
            )}
          </div>

          <div className={styles.heroImage}>
            {product.thumbnail.src ? (
              <Image
                src={product.thumbnail.src}
                alt={product.thumbnail.alt[locale]}
                fill
                className={styles.thumbnailImage}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className={styles.placeholderImage} />
            )}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
