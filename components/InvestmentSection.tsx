'use client';

import React from 'react';
import { Product, Locale } from '@/types/product';
import Reveal from '@/components/Reveal';
import styles from './InvestmentSection.module.css';

interface InvestmentSectionProps {
  product: Product;
  locale: Locale;
}

export default function InvestmentSection({ product, locale }: InvestmentSectionProps) {
  const labels = {
    investmentTitle: {
      en: 'Investment Opportunity',
      ru: 'Инвестиционная возможность',
      be: 'Інвестыцыйная магчымасць',
      pl: 'Możliwość inwestycyjna',
      uk: 'Інвестиційна можливість',
    },
    problem: {
      en: 'The Problem',
      ru: 'Проблема',
      be: 'Праблема',
      pl: 'Problem',
      uk: 'Проблема',
    },
    solution: {
      en: 'Our Solution',
      ru: 'Наше решение',
      be: 'Наша рашэнне',
      pl: 'Nasze rozwiązanie',
      uk: 'Наше рішення',
    },
    metrics: {
      en: 'Key Metrics',
      ru: 'Ключевые метрики',
      be: 'Ключавыя метрыкі',
      pl: 'Kluczowe metryki',
      uk: 'Ключові метрики',
    },
    traction: {
      en: 'Traction & Growth',
      ru: 'Трэкшн и рост',
      be: 'Трэкшн і рост',
      pl: 'Wzrost i rozwój',
      uk: 'Трекшн і зростання',
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
              {labels.problem[locale]}
            </h3>
            <p className={styles.blockText}>{product.investment.problem[locale]}</p>
          </div>
        </Reveal>

        {/* Solution */}
        <Reveal delay={0.2}>
          <div className={styles.investmentBlock}>
            <h3 className={styles.blockTitle}>
              <span className={styles.blockIcon}>💡</span>
              {labels.solution[locale]}
            </h3>
            <p className={styles.blockText}>{product.investment.solution[locale]}</p>
          </div>
        </Reveal>

        {/* Metrics */}
        <Reveal delay={0.3}>
          <div className={styles.investmentBlock}>
            <h3 className={styles.blockTitle}>
              <span className={styles.blockIcon}>📊</span>
              {labels.metrics[locale]}
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
              {labels.traction[locale]}
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
              <p className={styles.contactLabel}>{labels.contact[locale]}:</p>
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
  );
}
