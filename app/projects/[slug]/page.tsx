'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductBySlug } from '@/lib/products';
import { useI18n } from '@/i18n';
import Reveal from '@/components/Reveal';
import styles from './page.module.css';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { locale } = useI18n();
  const slug = params.slug as string;

  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className={styles.container}>
        <div style={{ maxWidth: '800px', margin: '100px auto', textAlign: 'center', padding: '0 20px' }}>
          <h1 style={{ fontSize: '3rem', color: 'var(--color-pink)', marginBottom: '20px' }}>
            {locale === 'en' && 'Product Not Found'}
            {locale === 'ru' && 'Продукт не найден'}
            {locale === 'be' && 'Прадукт не знойдзены'}
            {locale === 'pl' && 'Produkt nie znaleziony'}
            {locale === 'uk' && 'Продукт не знайдено'}
          </h1>
          <Link href="/projects" className={styles.linkButton}>
            {locale === 'en' && 'Back to Projects'}
            {locale === 'ru' && 'Назад к проектам'}
            {locale === 'be' && 'Вярнуцца да праектаў'}
            {locale === 'pl' && 'Powrót do projektów'}
            {locale === 'uk' && 'Назад до проектів'}
          </Link>
        </div>
      </div>
    );
  }

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
    links: {
      en: 'Links',
      ru: 'Ссылки',
      be: 'Спасылкі',
      pl: 'Linki',
      uk: 'Посилання',
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
    investmentTitle: {
      en: 'Investment Opportunity',
      ru: 'Инвестиционная возможность',
      be: 'Інвестыцыйная магчымасць',
      pl: 'Możliwość inwestycyjna',
      uk: 'Інвестиційна можливість',
    },
    problem: {
      en: '🎯 The Problem',
      ru: '🎯 Проблема',
      be: '🎯 Праблема',
      pl: '🎯 Problem',
      uk: '🎯 Проблема',
    },
    solution: {
      en: '💡 Our Solution',
      ru: '💡 Наше решение',
      be: '💡 Наша рашэнне',
      pl: '💡 Nasze rozwiązanie',
      uk: '💡 Наше рішення',
    },
    metrics: {
      en: '📊 Key Metrics',
      ru: '📊 Ключевые метрики',
      be: '📊 Ключавыя метрыкі',
      pl: '📊 Kluczowe metryki',
      uk: '📊 Ключові метрики',
    },
    traction: {
      en: '🚀 Traction & Growth',
      ru: '🚀 Трэкшн и рост',
      be: '🚀 Трэкшн і рост',
      pl: '🚀 Wzrost i rozwój',
      uk: '🚀 Трекшн і зростання',
    },
    request: {
      en: '💰 Investment Request',
      ru: '💰 Запрос инвестиций',
      be: '💰 Запыт інвестыцый',
      pl: '💰 Prośba o inwestycję',
      uk: '💰 Запит інвестицій',
    },
    contact: {
      en: 'Contact Us',
      ru: 'Связаться с нами',
      be: 'Звязацца з намі',
      pl: 'Skontaktuj się z nami',
      uk: "Зв'язатися з нами",
    },
  };

  return (
    <div className={styles.container}>
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
                  <h3 style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', marginBottom: '12px' }}>
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
                <div style={{ width: '100%', height: '100%', background: 'rgba(255, 20, 147, 0.1)' }} />
              )}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Investment Section */}
      <section className={styles.investmentSection}>
        <Reveal>
          <h2 className={styles.sectionTitle}>{labels.investmentTitle[locale]}</h2>
        </Reveal>

        <div className={styles.investmentGrid}>
          {/* Problem */}
          <Reveal delay={0.1}>
            <div className={styles.investmentBlock}>
              <h3 className={styles.blockTitle}>
                <span className={styles.blockIcon}>🎯</span>
                {labels.problem[locale].replace('🎯 ', '')}
              </h3>
              <p className={styles.blockText}>{product.investment.problem[locale]}</p>
            </div>
          </Reveal>

          {/* Solution */}
          <Reveal delay={0.2}>
            <div className={styles.investmentBlock}>
              <h3 className={styles.blockTitle}>
                <span className={styles.blockIcon}>💡</span>
                {labels.solution[locale].replace('💡 ', '')}
              </h3>
              <p className={styles.blockText}>{product.investment.solution[locale]}</p>
            </div>
          </Reveal>

          {/* Metrics */}
          <Reveal delay={0.3}>
            <div className={styles.investmentBlock}>
              <h3 className={styles.blockTitle}>
                <span className={styles.blockIcon}>📊</span>
                {labels.metrics[locale].replace('📊 ', '')}
              </h3>
              <div className={styles.metricsGrid}>
                {product.investment.metrics.map((metric, index) => (
                  <div key={index} className={styles.metricCard}>
                    <div className={styles.metricValue}>
                      {metric.value}
                      {metric.trend === 'up' && <span className={`${styles.metricTrend} ${styles.up}`}>↑</span>}
                    </div>
                    <div className={styles.metricLabel}>{metric.key[locale]}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Traction */}
          <Reveal delay={0.4}>
            <div className={styles.investmentBlock}>
              <h3 className={styles.blockTitle}>
                <span className={styles.blockIcon}>🚀</span>
                {labels.traction[locale].replace('🚀 ', '')}
              </h3>
              <p className={styles.blockText}>{product.investment.traction[locale]}</p>
            </div>
          </Reveal>

          {/* Investment Request */}
          <Reveal delay={0.5}>
            <div className={styles.requestBlock}>
              <h3 className={styles.requestTitle}>{product.investment.request.round[locale]}</h3>
              <div className={styles.requestAmount}>{product.investment.request.amount[locale]}</div>

              <div className={styles.contactInfo}>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: '0 0 16px' }}>{labels.contact[locale]}:</p>
                <a href={`mailto:${product.investment.contact.email}`} className={styles.contactLink}>
                  📧 {product.investment.contact.email}
                </a>
                {product.investment.contact.telegram && (
                  <a
                    href={`https://t.me/${product.investment.contact.telegram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    💬 {product.investment.contact.telegram}
                  </a>
                )}
                {product.investment.contact.linkedin && (
                  <a
                    href={product.investment.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    🔗 LinkedIn
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
