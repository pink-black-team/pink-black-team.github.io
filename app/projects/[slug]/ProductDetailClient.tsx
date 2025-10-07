'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductBySlug } from '@/lib/products';
import { useI18n } from '@/i18n';
import Reveal from '@/components/Reveal';
import AnimatedChart from '@/components/AnimatedChart';
import Timeline, { TimelineItem } from '@/components/Timeline';
import styles from './page.module.css';

interface ProductDetailClientProps {
  slug: string;
}

export default function ProductDetailClient({ slug }: ProductDetailClientProps) {
  const router = useRouter();
  const { locale } = useI18n();

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

  // Check if this is FoodReceipts project for enhanced view
  const isFoodReceipts = product.slug === 'foodreceipts';

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

      {/* FoodReceipts: Enhanced Sections */}
      {isFoodReceipts && (
        <>
          {/* Business Model */}
          <section className={styles.enhancedSection}>
            <Reveal>
              <h2 className={styles.sectionTitle}>
                {locale === 'en' && '💼 Business Model'}
                {locale === 'ru' && '💼 Бизнес-модель'}
                {locale === 'be' && '💼 Бізнес-мадэль'}
                {locale === 'pl' && '💼 Model biznesowy'}
                {locale === 'uk' && '💼 Бізнес-модель'}
              </h2>
            </Reveal>

            <div className={styles.businessModelGrid}>
              <Reveal delay={0.1}>
                <div className={styles.businessCard}>
                  <h3 className={styles.cardTitle}>
                    {locale === 'en' && 'Revenue Streams'}
                    {locale === 'ru' && 'Источники дохода'}
                    {locale === 'be' && 'Крыніцы даходу'}
                    {locale === 'pl' && 'Źródła przychodów'}
                    {locale === 'uk' && 'Джерела доходу'}
                  </h3>
                  <ul className={styles.featureList}>
                    <li>
                      {locale === 'en' && '💰 Commission from grocery partners (15-20%)'}
                      {locale === 'ru' && '💰 Комиссия от партнеров-магазинов (15-20%)'}
                      {locale === 'be' && '💰 Камісія ад партнёраў-крам (15-20%)'}
                      {locale === 'pl' && '💰 Prowizja od partnerów spożywczych (15-20%)'}
                      {locale === 'uk' && '💰 Комісія від партнерів-магазинів (15-20%)'}
                    </li>
                    <li>
                      {locale === 'en' && '📱 Premium subscriptions ($4.99/mo)'}
                      {locale === 'ru' && '📱 Премиум подписки ($4.99/мес)'}
                      {locale === 'be' && '📱 Прэміум падпіскі ($4.99/мес)'}
                      {locale === 'pl' && '📱 Subskrypcje premium ($4.99/mies)'}
                      {locale === 'uk' && '📱 Преміум підписки ($4.99/міс)'}
                    </li>
                    <li>
                      {locale === 'en' && '🎯 Sponsored recipes from brands'}
                      {locale === 'ru' && '🎯 Спонсируемые рецепты от брендов'}
                      {locale === 'be' && '🎯 Спансаваныя рэцэпты ад брэндаў'}
                      {locale === 'pl' && '🎯 Sponsorowane przepisy od marek'}
                      {locale === 'uk' && '🎯 Спонсоровані рецепти від брендів'}
                    </li>
                    <li>
                      {locale === 'en' && '📊 API access for food tech companies'}
                      {locale === 'ru' && '📊 API-доступ для food tech компаний'}
                      {locale === 'be' && '📊 API-доступ для food tech кампаній'}
                      {locale === 'pl' && '📊 Dostęp API dla firm food tech'}
                      {locale === 'uk' && '📊 API-доступ для food tech компаній'}
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className={styles.businessCard}>
                  <h3 className={styles.cardTitle}>
                    {locale === 'en' && 'Target Market'}
                    {locale === 'ru' && 'Целевой рынок'}
                    {locale === 'be' && 'Мэтавы рынак'}
                    {locale === 'pl' && 'Rynek docelowy'}
                    {locale === 'uk' && 'Цільовий ринок'}
                  </h3>
                  <ul className={styles.featureList}>
                    <li>
                      {locale === 'en' && '👨‍👩‍👧‍👦 Families (25-45 yo, 2-4 members)'}
                      {locale === 'ru' && '👨‍👩‍👧‍👦 Семьи (25-45 лет, 2-4 члена)'}
                      {locale === 'be' && '👨‍👩‍👧‍👦 Сем\'і (25-45 год, 2-4 члены)'}
                      {locale === 'pl' && '👨‍👩‍👧‍👦 Rodziny (25-45 lat, 2-4 osoby)'}
                      {locale === 'uk' && '👨‍👩‍👧‍👦 Сім\'ї (25-45 років, 2-4 члени)'}
                    </li>
                    <li>
                      {locale === 'en' && '💼 Working professionals (time-constrained)'}
                      {locale === 'ru' && '💼 Работающие профессионалы (ограничены во времени)'}
                      {locale === 'be' && '💼 Працуючыя прафесіяналы (абмежаваны ў часе)'}
                      {locale === 'pl' && '💼 Pracujący profesjonaliści (ograniczeni czasowo)'}
                      {locale === 'uk' && '💼 Працюючі професіонали (обмежені в часі)'}
                    </li>
                    <li>
                      {locale === 'en' && '🏋️ Health-conscious consumers'}
                      {locale === 'ru' && '🏋️ Потребители, заботящиеся о здоровье'}
                      {locale === 'be' && '🏋️ Спажыўцы, якія клапоцяцца аб здароўі'}
                      {locale === 'pl' && '🏋️ Konsumenci dbający o zdrowie'}
                      {locale === 'uk' && '🏋️ Споживачі, що дбають про здоров\'я'}
                    </li>
                    <li>
                      {locale === 'en' && '🌍 Expats & international food lovers'}
                      {locale === 'ru' && '🌍 Эмигранты и любители международной кухни'}
                      {locale === 'be' && '🌍 Эмігранты і аматары міжнароднай кухні'}
                      {locale === 'pl' && '🌍 Ekspatrianci i miłośnicy kuchni międzynarodowej'}
                      {locale === 'uk' && '🌍 Емігранти та любителі міжнародної кухні'}
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Market Analysis */}
          <section className={styles.enhancedSection}>
            <Reveal>
              <h2 className={styles.sectionTitle}>
                {locale === 'en' && '📈 Market Analysis'}
                {locale === 'ru' && '📈 Рыночный анализ'}
                {locale === 'be' && '📈 Рыначны аналіз'}
                {locale === 'pl' && '📈 Analiza rynku'}
                {locale === 'uk' && '📈 Ринковий аналіз'}
              </h2>
            </Reveal>

            <div className={styles.statsGrid}>
              <Reveal delay={0.1}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>$12B</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Meal Planning Market'}
                    {locale === 'ru' && 'Рынок планирования питания'}
                    {locale === 'be' && 'Рынак планавання харчавання'}
                    {locale === 'pl' && 'Rynek planowania posiłków'}
                    {locale === 'uk' && 'Ринок планування харчування'}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>42%</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Annual Growth (CAGR)'}
                    {locale === 'ru' && 'Годовой рост (CAGR)'}
                    {locale === 'be' && 'Гадавы рост (CAGR)'}
                    {locale === 'pl' && 'Wzrost roczny (CAGR)'}
                    {locale === 'uk' && 'Річний ріст (CAGR)'}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>38M</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Poland Population'}
                    {locale === 'ru' && 'Население Польши'}
                    {locale === 'be' && 'Насельніцтва Польшчы'}
                    {locale === 'pl' && 'Populacja Polski'}
                    {locale === 'uk' && 'Населення Польщі'}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>68%</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Online Grocery Adoption'}
                    {locale === 'ru' && 'Онлайн-покупки продуктов'}
                    {locale === 'be' && 'Анлайн-пакупкі прадуктаў'}
                    {locale === 'pl' && 'Zakupy spożywcze online'}
                    {locale === 'uk' && 'Онлайн-покупки продуктів'}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        </>
      )}

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

      {/* FoodReceipts: Additional Enhanced Sections */}
      {isFoodReceipts && (
        <>
          {/* Growth Metrics */}
          <section className={styles.enhancedSection}>
            <Reveal>
              <h2 className={styles.sectionTitle}>
                {locale === 'en' && '📊 Growth Metrics'}
                {locale === 'ru' && '📊 Метрики роста'}
                {locale === 'be' && '📊 Метрыкі росту'}
                {locale === 'pl' && '📊 Metryki wzrostu'}
                {locale === 'uk' && '📊 Метрики зростання'}
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <AnimatedChart
                data={[
                  { label: locale === 'en' ? 'Dec' : locale === 'ru' ? 'Дек' : locale === 'be' ? 'Сне' : locale === 'pl' ? 'Gru' : 'Гру', value: 1200 },
                  { label: locale === 'en' ? 'Jan' : locale === 'ru' ? 'Янв' : locale === 'be' ? 'Сту' : locale === 'pl' ? 'Sty' : 'Січ', value: 1850 },
                  { label: locale === 'en' ? 'Feb' : locale === 'ru' ? 'Фев' : locale === 'be' ? 'Лют' : locale === 'pl' ? 'Lut' : 'Лют', value: 2400 },
                  { label: locale === 'en' ? 'Mar' : locale === 'ru' ? 'Мар' : locale === 'be' ? 'Сак' : locale === 'pl' ? 'Mar' : 'Бер', value: 3200 },
                ]}
                height={350}
              />
            </Reveal>

            <Reveal delay={0.3}>
              <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                {locale === 'en' && '🚀 35% Month-over-Month growth in active users'}
                {locale === 'ru' && '🚀 Рост активных пользователей на 35% месяц к месяцу'}
                {locale === 'be' && '🚀 Рост актыўных карыстальнікаў на 35% месяц да месяца'}
                {locale === 'pl' && '🚀 35% wzrost aktywnych użytkowników miesiąc do miesiąca'}
                {locale === 'uk' && '🚀 Зростання активних користувачів на 35% місяць до місяця'}
              </p>
            </Reveal>
          </section>

          {/* Roadmap */}
          <section className={styles.enhancedSection}>
            <Reveal>
              <h2 className={styles.sectionTitle}>
                {locale === 'en' && '🗺️ Product Roadmap'}
                {locale === 'ru' && '🗺️ Дорожная карта'}
                {locale === 'be' && '🗺️ Дарожная карта'}
                {locale === 'pl' && '🗺️ Mapa drogowa'}
                {locale === 'uk' && '🗺️ Дорожня карта'}
              </h2>
            </Reveal>

            <Timeline
              locale={locale}
              items={[
                {
                  quarter: {
                    en: 'Q4 2024',
                    ru: 'Q4 2024',
                    be: 'Q4 2024',
                    pl: 'Q4 2024',
                    uk: 'Q4 2024',
                  },
                  title: {
                    en: 'MVP Launch & Lisek Integration',
                    ru: 'Запуск MVP и интеграция с Lisek',
                    be: 'Запуск MVP і інтэграцыя з Lisek',
                    pl: 'Uruchomienie MVP i integracja z Lisek',
                    uk: 'Запуск MVP та інтеграція з Lisek',
                  },
                  description: {
                    en: 'Basic recipe extraction, AI-powered ingredient matching, and first grocery delivery partner integration.',
                    ru: 'Базовое извлечение рецептов, AI-сопоставление ингредиентов и первая интеграция с партнером по доставке.',
                    be: 'Базавае здабыванне рэцэптаў, AI-супастаўленне інгрэдыентаў і першая інтэграцыя з партнёрам па дастаўцы.',
                    pl: 'Podstawowe wyodrębnianie przepisów, dopasowywanie składników AI i pierwsza integracja partnera dostawczego.',
                    uk: 'Базове витягування рецептів, AI-зіставлення інгредієнтів та перша інтеграція з партнером з доставки.',
                  },
                  status: 'completed',
                },
                {
                  quarter: {
                    en: 'Q1 2025',
                    ru: 'Q1 2025',
                    be: 'Q1 2025',
                    pl: 'Q1 2025',
                    uk: 'Q1 2025',
                  },
                  title: {
                    en: 'Uber Eats & Bolt Food Integration',
                    ru: 'Интеграция с Uber Eats и Bolt Food',
                    be: 'Інтэграцыя з Uber Eats і Bolt Food',
                    pl: 'Integracja Uber Eats i Bolt Food',
                    uk: 'Інтеграція з Uber Eats та Bolt Food',
                  },
                  description: {
                    en: 'Expand delivery options, add weekly menu planning, and launch social sharing features.',
                    ru: 'Расширение опций доставки, добавление планирования недельного меню и запуск функций социального обмена.',
                    be: 'Пашырэнне опцый дастаўкі, даданне планавання тыднёвага меню і запуск функцый сацыяльнага абмену.',
                    pl: 'Rozszerzenie opcji dostawy, dodanie planowania tygodniowego menu i uruchomienie funkcji udostępniania społecznościowego.',
                    uk: 'Розширення опцій доставки, додавання планування тижневого меню та запуск функцій соціального обміну.',
                  },
                  status: 'in-progress',
                },
                {
                  quarter: {
                    en: 'Q2 2025',
                    ru: 'Q2 2025',
                    be: 'Q2 2025',
                    pl: 'Q2 2025',
                    uk: 'Q2 2025',
                  },
                  title: {
                    en: 'Mobile Apps & Premium Features',
                    ru: 'Мобильные приложения и премиум-функции',
                    be: 'Мабільныя прыкладанні і прэміум-функцыі',
                    pl: 'Aplikacje mobilne i funkcje premium',
                    uk: 'Мобільні додатки та преміум-функції',
                  },
                  description: {
                    en: 'iOS & Android apps, offline recipe storage, advanced meal planning with AI recommendations.',
                    ru: 'Приложения для iOS и Android, офлайн-хранение рецептов, расширенное планирование питания с AI-рекомендациями.',
                    be: 'Прыкладанні для iOS і Android, афлайн-захаванне рэцэптаў, пашыранае планаванне харчавання з AI-рэкамендацыямі.',
                    pl: 'Aplikacje na iOS i Android, przechowywanie przepisów offline, zaawansowane planowanie posiłków z rekomendacjami AI.',
                    uk: 'Додатки для iOS та Android, офлайн-зберігання рецептів, розширене планування харчування з AI-рекомендаціями.',
                  },
                  status: 'planned',
                },
                {
                  quarter: {
                    en: 'Q3 2025',
                    ru: 'Q3 2025',
                    be: 'Q3 2025',
                    pl: 'Q3 2025',
                    uk: 'Q3 2025',
                  },
                  title: {
                    en: 'European Expansion',
                    ru: 'Европейская экспансия',
                    be: 'Еўрапейская экспансія',
                    pl: 'Ekspansja europejska',
                    uk: 'Європейська експансія',
                  },
                  description: {
                    en: 'Launch in Germany, Czech Republic, and Slovakia. Partner with local grocery delivery services.',
                    ru: 'Запуск в Германии, Чехии и Словакии. Партнерство с местными службами доставки продуктов.',
                    be: 'Запуск у Германіі, Чэхіі і Славакіі. Партнёрства з мясцовымі службамі дастаўкі прадуктаў.',
                    pl: 'Uruchomienie w Niemczech, Czechach i Słowacji. Partnerstwo z lokalnymi usługami dostawy spożywczej.',
                    uk: 'Запуск у Німеччині, Чехії та Словаччині. Партнерство з місцевими службами доставки продуктів.',
                  },
                  status: 'planned',
                },
              ]}
            />
          </section>

          {/* Financial Projections */}
          <section className={styles.enhancedSection}>
            <Reveal>
              <h2 className={styles.sectionTitle}>
                {locale === 'en' && '💎 Financial Projections'}
                {locale === 'ru' && '💎 Финансовые прогнозы'}
                {locale === 'be' && '💎 Фінансавыя прагнозы'}
                {locale === 'pl' && '💎 Prognozy finansowe'}
                {locale === 'uk' && '💎 Фінансові прогнози'}
              </h2>
            </Reveal>

            <div className={styles.statsGrid}>
              <Reveal delay={0.1}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>$800K</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Projected Revenue 2025'}
                    {locale === 'ru' && 'Прогноз выручки 2025'}
                    {locale === 'be' && 'Прагноз выручкі 2025'}
                    {locale === 'pl' && 'Prognozowane przychody 2025'}
                    {locale === 'uk' && 'Прогноз виручки 2025'}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>$2.5M</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Projected Revenue 2026'}
                    {locale === 'ru' && 'Прогноз выручки 2026'}
                    {locale === 'be' && 'Прагноз выручкі 2026'}
                    {locale === 'pl' && 'Prognozowane przychody 2026'}
                    {locale === 'uk' && 'Прогноз виручки 2026'}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>50K+</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Target Users by EOY 2025'}
                    {locale === 'ru' && 'Целевые пользователи к концу 2025'}
                    {locale === 'be' && 'Мэтавыя карыстальнікі да канца 2025'}
                    {locale === 'pl' && 'Docelowi użytkownicy do końca 2025'}
                    {locale === 'uk' && 'Цільові користувачі до кінця 2025'}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>18mo</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Runway with $1.8M'}
                    {locale === 'ru' && 'Runway с $1.8M'}
                    {locale === 'be' && 'Runway з $1.8M'}
                    {locale === 'pl' && 'Runway z $1.8M'}
                    {locale === 'uk' && 'Runway з $1.8M'}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.5}>
              <div style={{ marginTop: '50px', padding: '30px', background: 'rgba(0, 0, 0, 0.4)', borderRadius: '16px', border: '1px solid rgba(255, 20, 147, 0.3)' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--color-pink)', marginBottom: '20px' }}>
                  {locale === 'en' && '🎯 Use of Funds ($1.8M)'}
                  {locale === 'ru' && '🎯 Использование средств ($1.8M)'}
                  {locale === 'be' && '🎯 Выкарыстанне сродкаў ($1.8M)'}
                  {locale === 'pl' && '🎯 Wykorzystanie środków ($1.8M)'}
                  {locale === 'uk' && '🎯 Використання коштів ($1.8M)'}
                </h3>
                <ul className={styles.featureList} style={{ fontSize: '1.05rem' }}>
                  <li>💻 {locale === 'en' ? 'Product Development (40%) - $720K' : locale === 'ru' ? 'Разработка продукта (40%) - $720K' : locale === 'be' ? 'Распрацоўка прадукту (40%) - $720K' : locale === 'pl' ? 'Rozwój produktu (40%) - $720K' : 'Розробка продукту (40%) - $720K'}</li>
                  <li>📢 {locale === 'en' ? 'Marketing & User Acquisition (30%) - $540K' : locale === 'ru' ? 'Маркетинг и привлечение пользователей (30%) - $540K' : locale === 'be' ? 'Маркетынг і прыцягненне карыстальнікаў (30%) - $540K' : locale === 'pl' ? 'Marketing i pozyskiwanie użytkowników (30%) - $540K' : 'Маркетинг та залучення користувачів (30%) - $540K'}</li>
                  <li>👥 {locale === 'en' ? 'Team Expansion (20%) - $360K' : locale === 'ru' ? 'Расширение команды (20%) - $360K' : locale === 'be' ? 'Пашырэнне каманды (20%) - $360K' : locale === 'pl' ? 'Rozszerzenie zespołu (20%) - $360K' : 'Розширення команди (20%) - $360K'}</li>
                  <li>🏢 {locale === 'en' ? 'Operations & Infrastructure (10%) - $180K' : locale === 'ru' ? 'Операции и инфраструктура (10%) - $180K' : locale === 'be' ? 'Аперацыі і інфраструктура (10%) - $180K' : locale === 'pl' ? 'Operacje i infrastruktura (10%) - $180K' : 'Операції та інфраструктура (10%) - $180K'}</li>
                </ul>
              </div>
            </Reveal>
          </section>
        </>
      )}
    </div>
  );
}
