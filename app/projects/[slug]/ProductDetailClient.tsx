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

  // Check if this is FoodReceipts, CheckTruth, Astrologia.guru, or NovaStorm AI project for enhanced view
  const isFoodReceipts = product.slug === 'foodreceipts';
  const isCheckTruth = product.slug === 'checktruth';
  const isAstrologiaGuru = product.slug === 'astrologia-guru';
  const isNovaStormAI = product.slug === 'novastorm-ai';

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

      {/* CheckTruth: Enhanced Sections */}
      {isCheckTruth && (
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
                      {locale === 'en' && '🎯 Display advertising on free tier'}
                      {locale === 'ru' && '🎯 Медийная реклама на бесплатном уровне'}
                      {locale === 'be' && '🎯 Медыйная рэклама на бясплатным узроўні'}
                      {locale === 'pl' && '🎯 Reklama displayowa na poziomie darmowym'}
                      {locale === 'uk' && '🎯 Медійна реклама на безкоштовному рівні'}
                    </li>
                    <li>
                      {locale === 'en' && '💼 Enterprise API ($500-5,000/mo)'}
                      {locale === 'ru' && '💼 Корпоративный API ($500-5,000/мес)'}
                      {locale === 'be' && '💼 Карпаратыўны API ($500-5,000/мес)'}
                      {locale === 'pl' && '💼 API dla firm ($500-5,000/mies)'}
                      {locale === 'uk' && '💼 Корпоративний API ($500-5,000/міс)'}
                    </li>
                    <li>
                      {locale === 'en' && '📰 Partnerships with media organizations'}
                      {locale === 'ru' && '📰 Партнерства с медиа-организациями'}
                      {locale === 'be' && '📰 Партнёрствы з медыя-арганізацыямі'}
                      {locale === 'pl' && '📰 Partnerstwa z organizacjami medialnymi'}
                      {locale === 'uk' && '📰 Партнерства з медіа-організаціями'}
                    </li>
                    <li>
                      {locale === 'en' && '🔬 Custom AI solutions for platforms'}
                      {locale === 'ru' && '🔬 Кастомные AI-решения для платформ'}
                      {locale === 'be' && '🔬 Кастомныя AI-рашэнні для платформаў'}
                      {locale === 'pl' && '🔬 Niestandardowe rozwiązania AI dla platform'}
                      {locale === 'uk' && '🔬 Кастомні AI-рішення для платформ'}
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className={styles.businessCard}>
                  <h3 className={styles.cardTitle}>
                    {locale === 'en' && 'Target Customers'}
                    {locale === 'ru' && 'Целевые клиенты'}
                    {locale === 'be' && 'Мэтавыя кліенты'}
                    {locale === 'pl' && 'Docelowi klienci'}
                    {locale === 'uk' && 'Цільові клієнти'}
                  </h3>
                  <ul className={styles.featureList}>
                    <li>
                      {locale === 'en' && '👥 Individual users (free tools)'}
                      {locale === 'ru' && '👥 Индивидуальные пользователи (бесплатно)'}
                      {locale === 'be' && '👥 Індывідуальныя карыстальнікі (бясплатна)'}
                      {locale === 'pl' && '👥 Użytkownicy indywidualni (za darmo)'}
                      {locale === 'uk' && '👥 Індивідуальні користувачі (безкоштовно)'}
                    </li>
                    <li>
                      {locale === 'en' && '📰 News & media organizations'}
                      {locale === 'ru' && '📰 Новостные и медиа-организации'}
                      {locale === 'be' && '📰 Навінавыя і медыя-арганізацыі'}
                      {locale === 'pl' && '📰 Organizacje informacyjne i medialne'}
                      {locale === 'uk' && '📰 Новинні та медіа-організації'}
                    </li>
                    <li>
                      {locale === 'en' && '🏢 Social media platforms'}
                      {locale === 'ru' && '🏢 Платформы социальных сетей'}
                      {locale === 'be' && '🏢 Платформы сацыяльных сетак'}
                      {locale === 'pl' && '🏢 Platformy mediów społecznościowych'}
                      {locale === 'uk' && '🏢 Платформи соціальних мереж'}
                    </li>
                    <li>
                      {locale === 'en' && '🎓 Educational institutions'}
                      {locale === 'ru' && '🎓 Образовательные учреждения'}
                      {locale === 'be' && '🎓 Адукацыйныя ўстановы'}
                      {locale === 'pl' && '🎓 Instytucje edukacyjne'}
                      {locale === 'uk' && '🎓 Освітні заклади'}
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
                  <div className={styles.statNumber}>$500M+</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Content Moderation Market'}
                    {locale === 'ru' && 'Рынок модерации контента'}
                    {locale === 'be' && 'Рынак мадэрацыі кантэнту'}
                    {locale === 'pl' && 'Rynek moderacji treści'}
                    {locale === 'uk' && 'Ринок модерації контенту'}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>6x</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Disinfo Spreads Faster'}
                    {locale === 'ru' && 'Дезинфо быстрее правды'}
                    {locale === 'be' && 'Дэзінфа хутчэй праўды'}
                    {locale === 'pl' && 'Dezinfo szybsza niż prawda'}
                    {locale === 'uk' && 'Дезінфо швидше правди'}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>68%</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Share Without Verifying'}
                    {locale === 'ru' && 'Делятся без проверки'}
                    {locale === 'be' && 'Дзеляцца без праверкі'}
                    {locale === 'pl' && 'Udostępniają bez weryfikacji'}
                    {locale === 'uk' && 'Діляться без перевірки'}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>8B</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Global Social Media Users'}
                    {locale === 'ru' && 'Пользователей соцсетей'}
                    {locale === 'be' && 'Карыстальнікаў соцсетак'}
                    {locale === 'pl' && 'Użytkowników mediów społecznościowych'}
                    {locale === 'uk' && 'Користувачів соцмереж'}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Growth Projections */}
          <section className={styles.enhancedSection}>
            <Reveal>
              <h2 className={styles.sectionTitle}>
                {locale === 'en' && '📊 User Growth Projections (2025-2026)'}
                {locale === 'ru' && '📊 Прогноз роста пользователей (2025-2026)'}
                {locale === 'be' && '📊 Прагноз росту карыстальнікаў (2025-2026)'}
                {locale === 'pl' && '📊 Prognozy wzrostu użytkowników (2025-2026)'}
                {locale === 'uk' && '📊 Прогноз зростання користувачів (2025-2026)'}
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <AnimatedChart
                data={[
                  { label: 'Q1 2025', value: 1500 },
                  { label: 'Q2 2025', value: 5000 },
                  { label: 'Q3 2025', value: 12000 },
                  { label: 'Q4 2025', value: 25000 },
                  { label: 'Q2 2026', value: 50000 },
                  { label: 'Q4 2026', value: 100000 },
                ]}
                height={350}
              />
            </Reveal>

            <Reveal delay={0.3}>
              <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                {locale === 'en' && '🚀 Conservative growth: 25K users + 5 API clients EOY 2025 → 100K users + 20 API clients EOY 2026'}
                {locale === 'ru' && '🚀 Консервативный рост: 25K пользователей + 5 API клиентов конец 2025 → 100K пользователей + 20 API клиентов конец 2026'}
                {locale === 'be' && '🚀 Кансерватыўны рост: 25K карыстальнікаў + 5 API кліентаў канец 2025 → 100K карыстальнікаў + 20 API кліентаў канец 2026'}
                {locale === 'pl' && '🚀 Konserwatywny wzrost: 25K użytkowników + 5 klientów API koniec 2025 → 100K użytkowników + 20 klientów API koniec 2026'}
                {locale === 'uk' && '🚀 Консервативне зростання: 25K користувачів + 5 API клієнтів кінець 2025 → 100K користувачів + 20 API клієнтів кінець 2026'}
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
                    en: 'TikTok Platform Launch',
                    ru: 'Запуск платформы для TikTok',
                    be: 'Запуск платформы для TikTok',
                    pl: 'Uruchomienie platformy TikTok',
                    uk: 'Запуск платформи для TikTok',
                  },
                  description: {
                    en: 'Audio transcription (6 languages), claim identification, multi-source fact-checking operational.',
                    ru: 'Транскрипция аудио (6 языков), выявление утверждений, проверка фактов из нескольких источников работает.',
                    be: 'Транскрыпцыя аўдыё (6 моў), выяўленне сцвярджэнняў, праверка фактаў з некалькіх крыніц працуе.',
                    pl: 'Transkrypcja audio (6 języków), identyfikacja twierdzeń, sprawdzanie faktów z wielu źródeł działa.',
                    uk: 'Транскрипція аудіо (6 мов), виявлення тверджень, перевірка фактів з декількох джерел працює.',
                  },
                  status: 'completed',
                },
                {
                  quarter: {
                    en: 'Q1-Q3 2025',
                    ru: 'Q1-Q3 2025',
                    be: 'Q1-Q3 2025',
                    pl: 'Q1-Q3 2025',
                    uk: 'Q1-Q3 2025',
                  },
                  title: {
                    en: 'Multi-Platform Expansion',
                    ru: 'Расширение на платформы',
                    be: 'Пашырэнне на платформы',
                    pl: 'Ekspansja wieloplatformowa',
                    uk: 'Розширення на платформи',
                  },
                  description: {
                    en: 'Add Instagram, YouTube, Twitter/X, Facebook support. Launch AI content detection beta. Target: 15K-25K users.',
                    ru: 'Добавление Instagram, YouTube, Twitter/X, Facebook. Запуск бета AI-детекции. Цель: 15K-25K пользователей.',
                    be: 'Даданне Instagram, YouTube, Twitter/X, Facebook. Запуск бета AI-дэтэкцыі. Мэта: 15K-25K карыстальнікаў.',
                    pl: 'Dodanie Instagram, YouTube, Twitter/X, Facebook. Uruchomienie beta detekcji AI. Cel: 15K-25K użytkowników.',
                    uk: 'Додавання Instagram, YouTube, Twitter/X, Facebook. Запуск бета AI-детекції. Мета: 15K-25K користувачів.',
                  },
                  status: 'in-progress',
                },
                {
                  quarter: {
                    en: 'Q4 2025',
                    ru: 'Q4 2025',
                    be: 'Q4 2025',
                    pl: 'Q4 2025',
                    uk: 'Q4 2025',
                  },
                  title: {
                    en: 'Enterprise API Beta',
                    ru: 'Бета корпоративного API',
                    be: 'Бета карпаратыўнага API',
                    pl: 'Beta API dla firm',
                    uk: 'Бета корпоративного API',
                  },
                  description: {
                    en: 'Launch API beta with 3-5 pilot customers. Refine pricing model based on usage patterns.',
                    ru: 'Запуск бета API с 3-5 пилотными клиентами. Доработка ценовой модели на основе паттернов использования.',
                    be: 'Запуск бета API з 3-5 пілотнымі кліентамі. Дапрацоўка цэнавай мадэлі на аснове патэрнаў выкарыстання.',
                    pl: 'Uruchomienie beta API z 3-5 klientami pilotażowymi. Dopracowanie modelu cenowego na podstawie wzorców użycia.',
                    uk: 'Запуск бета API з 3-5 пілотними клієнтами. Доопрацювання цінової моделі на основі патернів використання.',
                  },
                  status: 'planned',
                },
                {
                  quarter: {
                    en: 'Q1-Q2 2026',
                    ru: 'Q1-Q2 2026',
                    be: 'Q1-Q2 2026',
                    pl: 'Q1-Q2 2026',
                    uk: 'Q1-Q2 2026',
                  },
                  title: {
                    en: 'API v1.0 & Mobile Apps',
                    ru: 'API v1.0 и мобильные приложения',
                    be: 'API v1.0 і мабільныя прыкладанні',
                    pl: 'API v1.0 i aplikacje mobilne',
                    uk: 'API v1.0 та мобільні додатки',
                  },
                  description: {
                    en: 'Full API launch, iOS/Android apps. Enhanced AI detection for deepfakes. Target: 40K-60K users, 10-15 API clients.',
                    ru: 'Полный запуск API, iOS/Android приложения. Улучшенная AI-детекция дипфейков. Цель: 40K-60K пользователей, 10-15 API клиентов.',
                    be: 'Поўны запуск API, iOS/Android прыкладанні. Паляпшаная AI-дэтэкцыя дыпфейкаў. Мэта: 40K-60K карыстальнікаў, 10-15 API кліентаў.',
                    pl: 'Pełne uruchomienie API, aplikacje iOS/Android. Ulepszona detekcja deepfake\'ów AI. Cel: 40K-60K użytkowników, 10-15 klientów API.',
                    uk: 'Повний запуск API, iOS/Android додатки. Покращена AI-детекція дипфейків. Мета: 40K-60K користувачів, 10-15 API клієнтів.',
                  },
                  status: 'planned',
                },
                {
                  quarter: {
                    en: 'Q3-Q4 2026',
                    ru: 'Q3-Q4 2026',
                    be: 'Q3-Q4 2026',
                    pl: 'Q3-Q4 2026',
                    uk: 'Q3-Q4 2026',
                  },
                  title: {
                    en: 'Scale & Partnerships',
                    ru: 'Масштабирование и партнерства',
                    be: 'Маштабаванне і партнёрствы',
                    pl: 'Skalowanie i partnerstwa',
                    uk: 'Масштабування та партнерства',
                  },
                  description: {
                    en: 'Media partnerships, browser extensions. Multi-language expansion. Target: 80K-100K users, 20+ API clients.',
                    ru: 'Партнерства с медиа, браузерные расширения. Расширение языков. Цель: 80K-100K пользователей, 20+ API клиентов.',
                    be: 'Партнёрствы з медыя, браўзерныя пашырэнні. Пашырэнне моў. Мэта: 80K-100K карыстальнікаў, 20+ API кліентаў.',
                    pl: 'Partnerstwa medialne, rozszerzenia przeglądarki. Ekspansja językowa. Cel: 80K-100K użytkowników, 20+ klientów API.',
                    uk: 'Партнерства з медіа, браузерні розширення. Розширення мов. Мета: 80K-100K користувачів, 20+ API клієнтів.',
                  },
                  status: 'planned',
                },
                {
                  quarter: {
                    en: '2027+',
                    ru: '2027+',
                    be: '2027+',
                    pl: '2027+',
                    uk: '2027+',
                  },
                  title: {
                    en: 'Global Expansion',
                    ru: 'Глобальная экспансия',
                    be: 'Глабальная экспансія',
                    pl: 'Ekspansja globalna',
                    uk: 'Глобальна експансія',
                  },
                  description: {
                    en: 'International markets, enterprise white-label solutions, educational programs. Target: 500K+ users, enterprise tier clients.',
                    ru: 'Международные рынки, white-label решения для предприятий, образовательные программы. Цель: 500K+ пользователей, корпоративные клиенты.',
                    be: 'Міжнародныя рынкі, white-label рашэнні для прадпрыемстваў, адукацыйныя праграмы. Мэта: 500K+ карыстальнікаў, карпаратыўныя кліенты.',
                    pl: 'Rynki międzynarodowe, rozwiązania white-label dla firm, programy edukacyjne. Cel: 500K+ użytkowników, klienci korporacyjni.',
                    uk: 'Міжнародні ринки, white-label рішення для підприємств, освітні програми. Мета: 500K+ користувачів, корпоративні клієнти.',
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
                  <div className={styles.statNumber}>$35-55K</div>
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
                  <div className={styles.statNumber}>$450-600K</div>
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
                  <div className={styles.statNumber}>100K+</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Free Users EOY 2026'}
                    {locale === 'ru' && 'Бесплатных польз. конец 2026'}
                    {locale === 'be' && 'Бясплатных карыст. канец 2026'}
                    {locale === 'pl' && 'Darmowych użytk. koniec 2026'}
                    {locale === 'uk' && 'Безкошт. корист. кінець 2026'}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>12-15mo</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Runway with Investment'}
                    {locale === 'ru' && 'Runway с инвестициями'}
                    {locale === 'be' && 'Runway з інвестыцыямі'}
                    {locale === 'pl' && 'Runway z inwestycjami'}
                    {locale === 'uk' && 'Runway з інвестиціями'}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.5}>
              <div style={{ marginTop: '50px', padding: '30px', background: 'rgba(0, 0, 0, 0.4)', borderRadius: '16px', border: '1px solid rgba(255, 20, 147, 0.3)' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--color-pink)', marginBottom: '20px' }}>
                  {locale === 'en' && '💰 Revenue Breakdown (Conservative)'}
                  {locale === 'ru' && '💰 Разбивка доходов (консервативно)'}
                  {locale === 'be' && '💰 Разбіўка даходаў (кансерватыўна)'}
                  {locale === 'pl' && '💰 Podział przychodów (konserwatywnie)'}
                  {locale === 'uk' && '💰 Розбивка доходів (консервативно)'}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                  <div>
                    <h4 style={{ color: 'var(--color-pink)', fontSize: '1.1rem', marginBottom: '12px' }}>2025</h4>
                    <ul className={styles.featureList}>
                      <li>📊 {locale === 'en' ? 'Display Ads: $8-12K (avg $0.30/user/mo)' : locale === 'ru' ? 'Медийная реклама: $8-12K ($0.30/польз./мес)' : locale === 'be' ? 'Медыйная рэклама: $8-12K ($0.30/карыст./мес)' : locale === 'pl' ? 'Reklamy: $8-12K ($0.30/użytk./mies)' : 'Медійна реклама: $8-12K ($0.30/корист./міс)'}</li>
                      <li>💼 {locale === 'en' ? 'API Revenue: $27-43K (3-5 clients, $1.5-2K/mo avg)' : locale === 'ru' ? 'API доходы: $27-43K (3-5 клиентов, $1.5-2K/мес)' : locale === 'be' ? 'API даходы: $27-43K (3-5 кліентаў, $1.5-2K/мес)' : locale === 'pl' ? 'Przychody API: $27-43K (3-5 klientów, $1.5-2K/mies)' : 'API доходи: $27-43K (3-5 клієнтів, $1.5-2K/міс)'}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--color-pink)', fontSize: '1.1rem', marginBottom: '12px' }}>2026</h4>
                    <ul className={styles.featureList}>
                      <li>📊 {locale === 'en' ? 'Display Ads: $180-270K (avg $0.35/user/mo)' : locale === 'ru' ? 'Медийная реклама: $180-270K ($0.35/польз./мес)' : locale === 'be' ? 'Медыйная рэклама: $180-270K ($0.35/карыст./мес)' : locale === 'pl' ? 'Reklamy: $180-270K ($0.35/użytk./mies)' : 'Медійна реклама: $180-270K ($0.35/корист./міс)'}</li>
                      <li>💼 {locale === 'en' ? 'API Revenue: $270-330K (15-20 clients, $1.8-2.5K/mo avg)' : locale === 'ru' ? 'API доходы: $270-330K (15-20 клиентов, $1.8-2.5K/мес)' : locale === 'be' ? 'API даходы: $270-330K (15-20 кліентаў, $1.8-2.5K/мес)' : locale === 'pl' ? 'Przychody API: $270-330K (15-20 klientów, $1.8-2.5K/mies)' : 'API доходи: $270-330K (15-20 клієнтів, $1.8-2.5K/міс)'}</li>
                    </ul>
                  </div>
                </div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--color-pink)', marginBottom: '20px', marginTop: '30px' }}>
                  {locale === 'en' && '🎯 Use of Funds ($200-400K)'}
                  {locale === 'ru' && '🎯 Использование средств ($200-400K)'}
                  {locale === 'be' && '🎯 Выкарыстанне сродкаў ($200-400K)'}
                  {locale === 'pl' && '🎯 Wykorzystanie środków ($200-400K)'}
                  {locale === 'uk' && '🎯 Використання коштів ($200-400K)'}
                </h3>
                <ul className={styles.featureList} style={{ fontSize: '1.05rem' }}>
                  <li>💻 {locale === 'en' ? 'Product Development (45%): Platform expansion, AI improvements, mobile apps' : locale === 'ru' ? 'Разработка продукта (45%): Расширение платформ, улучшение AI, мобильные приложения' : locale === 'be' ? 'Распрацоўка прадукту (45%): Пашырэнне платформаў, паляпшэнне AI, мабільныя прыкладанні' : locale === 'pl' ? 'Rozwój produktu (45%): Ekspansja platform, ulepszenia AI, aplikacje mobilne' : 'Розробка продукту (45%): Розширення платформ, покращення AI, мобільні додатки'}</li>
                  <li>📢 {locale === 'en' ? 'Marketing & Growth (25%): Content marketing, partnerships, PR campaigns' : locale === 'ru' ? 'Маркетинг и рост (25%): Контент-маркетинг, партнерства, PR-кампании' : locale === 'be' ? 'Маркетынг і рост (25%): Кантэнт-маркетынг, партнёрствы, PR-кампаніі' : locale === 'pl' ? 'Marketing i wzrost (25%): Content marketing, partnerstwa, kampanie PR' : 'Маркетинг та зростання (25%): Контент-маркетинг, партнерства, PR-кампанії'}</li>
                  <li>👥 {locale === 'en' ? 'Team & Salaries (20%): 2 developers + part-time roles (design, content)' : locale === 'ru' ? 'Команда и зарплаты (20%): 2 разработчика + part-time роли (дизайн, контент)' : locale === 'be' ? 'Каманда і зарплаты (20%): 2 распрацоўшчыка + part-time ролі (дызайн, кантэнт)' : locale === 'pl' ? 'Zespół i pensje (20%): 2 programistów + role part-time (projekt, treść)' : 'Команда та зарплати (20%): 2 розробники + part-time ролі (дизайн, контент)'}</li>
                  <li>🏢 {locale === 'en' ? 'Infrastructure (10%): Cloud costs, AI APIs, CDN, security, office' : locale === 'ru' ? 'Инфраструктура (10%): Облако, AI API, CDN, безопасность, офис' : locale === 'be' ? 'Інфраструктура (10%): Воблака, AI API, CDN, бяспека, офіс' : locale === 'pl' ? 'Infrastruktura (10%): Chmura, AI API, CDN, bezpieczeństwo, biuro' : 'Інфраструктура (10%): Хмара, AI API, CDN, безпека, офіс'}</li>
                </ul>
                <p style={{ marginTop: '25px', fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6' }}>
                  {locale === 'en' && '* Projections based on: 25% organic user growth, 80% ad fill rate, $2-3 CPM, API pricing $1,500-2,500/mo depending on volume. Conservative estimates assume lower conversion rates and slower growth.'}
                  {locale === 'ru' && '* Прогнозы основаны на: 25% органического роста пользователей, 80% fill rate рекламы, $2-3 CPM, цены API $1,500-2,500/мес в зависимости от объема. Консервативные оценки предполагают низкую конверсию и медленный рост.'}
                  {locale === 'be' && '* Прагнозы заснаваны на: 25% арганічнага росту карыстальнікаў, 80% fill rate рэкламы, $2-3 CPM, цэны API $1,500-2,500/мес у залежнасці ад аб\'ёму. Кансерватыўныя ацэнкі прадугледжваюць нізкую канверсію і павольны рост.'}
                  {locale === 'pl' && '* Prognozy oparte na: 25% organicznym wzroście użytkowników, 80% fill rate reklam, $2-3 CPM, cenach API $1,500-2,500/mies w zależności od wolumenu. Konserwatywne szacunki zakładają niższe współczynniki konwersji i wolniejszy wzrost.'}
                  {locale === 'uk' && '* Прогнози засновані на: 25% органічному зростанні користувачів, 80% fill rate реклами, $2-3 CPM, ціни API $1,500-2,500/міс залежно від обсягу. Консервативні оцінки передбачають низьку конверсію та повільне зростання.'}
                </p>
              </div>
            </Reveal>
          </section>
        </>
      )}

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

      {/* Astrologia.guru: Enhanced Sections */}
      {isAstrologiaGuru && (
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
                      {locale === 'en' && '💫 Paid AI readings ($12-35 per session)'}
                      {locale === 'ru' && '💫 Платные AI-чтения ($12-35 за сеанс)'}
                      {locale === 'be' && '💫 Платныя AI-чытанні ($12-35 за сеанс)'}
                      {locale === 'pl' && '💫 Płatne czytania AI ($12-35 za sesję)'}
                      {locale === 'uk' && '💫 Платні AI-читання ($12-35 за сеанс)'}
                    </li>
                    <li>
                      {locale === 'en' && '🔄 Subscription model ($9.99/mo unlimited, planned 2025)'}
                      {locale === 'ru' && '🔄 Модель подписки ($9.99/мес безлимит, план 2025)'}
                      {locale === 'be' && '🔄 Мадэль падпіскі ($9.99/мес безліміт, план 2025)'}
                      {locale === 'pl' && '🔄 Model subskrypcyjny ($9.99/mies nielimitowany, plan 2025)'}
                      {locale === 'uk' && '🔄 Модель підписки ($9.99/міс безліміт, план 2025)'}
                    </li>
                    <li>
                      {locale === 'en' && '🔧 White-label API for astrology businesses'}
                      {locale === 'ru' && '🔧 White-label API для астро-бизнесов'}
                      {locale === 'be' && '🔧 White-label API для астра-бізнесаў'}
                      {locale === 'pl' && '🔧 White-label API dla firm astrologicznych'}
                      {locale === 'uk' && '🔧 White-label API для астро-бізнесів'}
                    </li>
                    <li>
                      {locale === 'en' && '📊 Affiliate partnerships with lifestyle brands'}
                      {locale === 'ru' && '📊 Партнерские программы с lifestyle брендами'}
                      {locale === 'be' && '📊 Партнёрскія праграмы з lifestyle брэндамі'}
                      {locale === 'pl' && '📊 Programy partnerskie z markami lifestyle'}
                      {locale === 'uk' && '📊 Партнерські програми з lifestyle брендами'}
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className={styles.businessCard}>
                  <h3 className={styles.cardTitle}>
                    {locale === 'en' && 'Target Customers'}
                    {locale === 'ru' && 'Целевые клиенты'}
                    {locale === 'be' && 'Мэтавыя кліенты'}
                    {locale === 'pl' && 'Docelowi klienci'}
                    {locale === 'uk' && 'Цільові клієнти'}
                  </h3>
                  <ul className={styles.featureList}>
                    <li>
                      {locale === 'en' && '💝 Individuals seeking relationship guidance'}
                      {locale === 'ru' && '💝 Люди, ищущие советы в отношениях'}
                      {locale === 'be' && '💝 Людзі, якія шукаюць парады ў адносінах'}
                      {locale === 'pl' && '💝 Osoby poszukujące wskazówek dotyczących związków'}
                      {locale === 'uk' && '💝 Люди, які шукають поради у стосунках'}
                    </li>
                    <li>
                      {locale === 'en' && '🌟 Spiritual & self-development enthusiasts'}
                      {locale === 'ru' && '🌟 Энтузиасты духовности и саморазвития'}
                      {locale === 'be' && '🌟 Энтузіясты духоўнасці і саморазвіцця'}
                      {locale === 'pl' && '🌟 Entuzjaści duchowości i rozwoju osobistego'}
                      {locale === 'uk' && '🌟 Ентузіасти духовності та саморозвитку'}
                    </li>
                    <li>
                      {locale === 'en' && '🔮 Small-scale astrologers (white-label API)'}
                      {locale === 'ru' && '🔮 Мелкие астрологи (white-label API)'}
                      {locale === 'be' && '🔮 Дробныя астролагі (white-label API)'}
                      {locale === 'pl' && '🔮 Mali astrolodzy (white-label API)'}
                      {locale === 'uk' && '🔮 Дрібні астрологи (white-label API)'}
                    </li>
                    <li>
                      {locale === 'en' && '📱 Media & lifestyle brands (partnerships)'}
                      {locale === 'ru' && '📱 Медиа и lifestyle бренды (партнерства)'}
                      {locale === 'be' && '📱 Медыя і lifestyle брэнды (партнёрствы)'}
                      {locale === 'pl' && '📱 Media i marki lifestyle (partnerstwa)'}
                      {locale === 'uk' && '📱 Медіа та lifestyle бренди (партнерства)'}
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
                    {locale === 'en' && 'Global Astrology Market'}
                    {locale === 'ru' && 'Мировой рынок астрологии'}
                    {locale === 'be' && 'Сусветны рынак астралогіі'}
                    {locale === 'pl' && 'Globalny rynek astrologii'}
                    {locale === 'uk' && 'Світовий ринок астрології'}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>70M+</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Polish Speakers Globally'}
                    {locale === 'ru' && 'Польскоговорящих глобально'}
                    {locale === 'be' && 'Польскамоўных глабальна'}
                    {locale === 'pl' && 'Osoby mówiące po polsku na świecie'}
                    {locale === 'uk' && 'Польськомовних глобально'}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>40%</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Read Horoscopes Regularly'}
                    {locale === 'ru' && 'Регулярно читают гороскопы'}
                    {locale === 'be' && 'Рэгулярна чытаюць гараскопы'}
                    {locale === 'pl' && 'Regularnie czytają horoskopy'}
                    {locale === 'uk' && 'Регулярно читають гороскопи'}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>70-85%</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Profit Margin (AI vs Human)'}
                    {locale === 'ru' && 'Маржа (AI vs человек)'}
                    {locale === 'be' && 'Маржа (AI vs чалавек)'}
                    {locale === 'pl' && 'Marża (AI vs człowiek)'}
                    {locale === 'uk' && 'Маржа (AI vs людина)'}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Customer Growth Projections */}
          <section className={styles.enhancedSection}>
            <Reveal>
              <h2 className={styles.sectionTitle}>
                {locale === 'en' && '📊 Paying Customer Growth (2026-2027)'}
                {locale === 'ru' && '📊 Рост платящих клиентов (2026-2027)'}
                {locale === 'be' && '📊 Рост плацяжных кліентаў (2026-2027)'}
                {locale === 'pl' && '📊 Wzrost płacących klientów (2026-2027)'}
                {locale === 'uk' && '📊 Зростання платних клієнтів (2026-2027)'}
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <AnimatedChart
                data={[
                  { label: 'Q1 2026', value: 100 },
                  { label: 'Q2 2026', value: 300 },
                  { label: 'Q3 2026', value: 700 },
                  { label: 'Q4 2026', value: 1200 },
                  { label: 'Q2 2027', value: 3500 },
                  { label: 'Q4 2027', value: 6000 },
                ]}
                height={350}
              />
            </Reveal>

            <Reveal delay={0.3}>
              <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                {locale === 'en' && '🚀 Bootstrapped growth: 500-1,500 customers EOY 2026 ($10-30K revenue) → 3,000-8,000 customers EOY 2027 ($60-160K revenue)'}
                {locale === 'ru' && '🚀 Bootstrapped рост: 500-1,500 клиентов конец 2026 ($10-30K выручки) → 3,000-8,000 клиентов конец 2027 ($60-160K выручки)'}
                {locale === 'be' && '🚀 Bootstrapped рост: 500-1,500 кліентаў канец 2026 ($10-30K выручкі) → 3,000-8,000 кліентаў канец 2027 ($60-160K выручкі)'}
                {locale === 'pl' && '🚀 Wzrost bootstrapped: 500-1,500 klientów koniec 2026 ($10-30K przychodów) → 3,000-8,000 klientów koniec 2027 ($60-160K przychodów)'}
                {locale === 'uk' && '🚀 Bootstrapped зростання: 500-1,500 клієнтів кінець 2026 ($10-30K виручки) → 3,000-8,000 клієнтів кінець 2027 ($60-160K виручки)'}
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
                    en: 'Oct 2025',
                    ru: 'Окт 2025',
                    be: 'Кас 2025',
                    pl: 'Paź 2025',
                    uk: 'Жов 2025',
                  },
                  title: {
                    en: 'Platform Launch (No Ads)',
                    ru: 'Запуск платформы (без рекламы)',
                    be: 'Запуск платформы (без рэкламы)',
                    pl: 'Uruchomienie platformy (bez reklam)',
                    uk: 'Запуск платформи (без реклами)',
                  },
                  description: {
                    en: '4 AI reading services live in Polish: love horoscopes, annual tarot, partner compatibility, natal charts. Building SEO foundation through blog content.',
                    ru: '4 AI-сервиса на польском: любовные гороскопы, годовое таро, совместимость, натальные карты. Создание SEO-фундамента через блог.',
                    be: '4 AI-сэрвісы на польскай: каханыя гараскопы, гадавое тара, сумяшчальнасць, натальныя карты. Стварэнне SEO-фундамента праз блог.',
                    pl: '4 usługi AI po polsku: horoskopy miłosne, roczny tarot, kompatybilność, karty urodzenia. Budowanie fundamentu SEO przez blog.',
                    uk: '4 AI-сервіси польською: любовні гороскопи, річне таро, сумісність, натальні карти. Створення SEO-фундаменту через блог.',
                  },
                  status: 'completed',
                },
                {
                  quarter: {
                    en: 'Q1-Q2 2026',
                    ru: 'Q1-Q2 2026',
                    be: 'Q1-Q2 2026',
                    pl: 'Q1-Q2 2026',
                    uk: 'Q1-Q2 2026',
                  },
                  title: {
                    en: 'Start Paid Marketing',
                    ru: 'Старт платного маркетинга',
                    be: 'Старт платнага маркетынгу',
                    pl: 'Start płatnego marketingu',
                    uk: 'Старт платного маркетингу',
                  },
                  description: {
                    en: 'Launch minimal Facebook/TikTok ads ($10-20 CAC target). SEO optimization. Validate product-market fit. Target: 100-500 paying customers.',
                    ru: 'Запуск минимальной Facebook/TikTok рекламы ($10-20 CAC). SEO-оптимизация. Проверка product-market fit. Цель: 100-500 клиентов.',
                    be: 'Запуск мінімальнай Facebook/TikTok рэкламы ($10-20 CAC). SEO-аптымізацыя. Праверка product-market fit. Мэта: 100-500 кліентаў.',
                    pl: 'Minimalne reklamy Facebook/TikTok ($10-20 CAC). Optymalizacja SEO. Walidacja product-market fit. Cel: 100-500 klientów.',
                    uk: 'Запуск мінімальної Facebook/TikTok реклами ($10-20 CAC). SEO-оптимізація. Перевірка product-market fit. Мета: 100-500 клієнтів.',
                  },
                  status: 'planned',
                },
                {
                  quarter: {
                    en: 'Q3-Q4 2026',
                    ru: 'Q3-Q4 2026',
                    be: 'Q3-Q4 2026',
                    pl: 'Q3-Q4 2026',
                    uk: 'Q3-Q4 2026',
                  },
                  title: {
                    en: 'Mobile Apps Launch',
                    ru: 'Запуск мобильных приложений',
                    be: 'Запуск мабільных прыкладанняў',
                    pl: 'Uruchomienie aplikacji mobilnych',
                    uk: 'Запуск мобільних додатків',
                  },
                  description: {
                    en: 'iOS/Android apps. Enhanced user experience. Scale marketing if metrics are positive. Target: 500-1,500 total customers EOY 2026.',
                    ru: 'iOS/Android приложения. Улучшенный UX. Масштабирование маркетинга при положительных метриках. Цель: 500-1,500 клиентов к концу 2026.',
                    be: 'iOS/Android прыкладанні. Паляпшаны UX. Маштабаванне маркетынгу пры станоўчых метрыках. Мэта: 500-1,500 кліентаў да канца 2026.',
                    pl: 'Aplikacje iOS/Android. Ulepszony UX. Skalowanie marketingu przy pozytywnych metrykach. Cel: 500-1,500 klientów do końca 2026.',
                    uk: 'iOS/Android додатки. Покращений UX. Масштабування маркетингу при позитивних метриках. Мета: 500-1,500 клієнтів до кінця 2026.',
                  },
                  status: 'planned',
                },
                {
                  quarter: {
                    en: 'Q1-Q2 2027',
                    ru: 'Q1-Q2 2027',
                    be: 'Q1-Q2 2027',
                    pl: 'Q1-Q2 2027',
                    uk: 'Q1-Q2 2027',
                  },
                  title: {
                    en: 'Subscription Model',
                    ru: 'Модель подписки',
                    be: 'Мадэль падпіскі',
                    pl: 'Model subskrypcyjny',
                    uk: 'Модель підписки',
                  },
                  description: {
                    en: 'Launch $9.99/mo unlimited readings subscription. Enhanced personalization. Target: 2,000-4,000 customers, 100-200 subscribers.',
                    ru: 'Запуск подписки $9.99/мес безлимит. Улучшенная персонализация. Цель: 2,000-4,000 клиентов, 100-200 подписчиков.',
                    be: 'Запуск падпіскі $9.99/мес безліміт. Паляпшаная персаналізацыя. Мэта: 2,000-4,000 кліентаў, 100-200 падпісчыкаў.',
                    pl: 'Subskrypcja $9.99/mies nielimitowana. Ulepszona personalizacja. Cel: 2,000-4,000 klientów, 100-200 subskrybentów.',
                    uk: 'Запуск підписки $9.99/міс безліміт. Покращена персоналізація. Мета: 2,000-4,000 клієнтів, 100-200 підписників.',
                  },
                  status: 'planned',
                },
                {
                  quarter: {
                    en: 'Q3-Q4 2027',
                    ru: 'Q3-Q4 2027',
                    be: 'Q3-Q4 2027',
                    pl: 'Q3-Q4 2027',
                    uk: 'Q3-Q4 2027',
                  },
                  title: {
                    en: 'Multi-language Expansion',
                    ru: 'Многоязычное расширение',
                    be: 'Шматмоўнае пашырэнне',
                    pl: 'Ekspansja wielojęzyczna',
                    uk: 'Багатомовне розширення',
                  },
                  description: {
                    en: 'Russian, English, Ukrainian, Belarusian versions. Localized content. Target: 3,000-8,000 total customers across markets.',
                    ru: 'Русская, английская, украинская, белорусская версии. Локализованный контент. Цель: 3,000-8,000 клиентов по всем рынкам.',
                    be: 'Руская, англійская, украінская, беларуская версіі. Лакалізаваны кантэнт. Мэта: 3,000-8,000 кліентаў па ўсіх рынках.',
                    pl: 'Wersje rosyjska, angielska, ukraińska, białoruska. Zlokalizowane treści. Cel: 3,000-8,000 klientów na wszystkich rynkach.',
                    uk: 'Російська, англійська, українська, білоруська версії. Локалізований контент. Мета: 3,000-8,000 клієнтів по всіх ринках.',
                  },
                  status: 'planned',
                },
                {
                  quarter: {
                    en: '2028+',
                    ru: '2028+',
                    be: '2028+',
                    pl: '2028+',
                    uk: '2028+',
                  },
                  title: {
                    en: 'White-label API Platform',
                    ru: 'White-label API платформа',
                    be: 'White-label API платформа',
                    pl: 'Platforma white-label API',
                    uk: 'White-label API платформа',
                  },
                  description: {
                    en: 'API for small astrology businesses. Partnerships with lifestyle apps. New revenue stream beyond direct consumers.',
                    ru: 'API для мелких астро-бизнесов. Партнерства с lifestyle приложениями. Новый источник дохода помимо прямых клиентов.',
                    be: 'API для дробных астра-бізнесаў. Партнёрствы з lifestyle прыкладаннямі. Новая крыніца даходу акрамя прамых кліентаў.',
                    pl: 'API dla małych firm astrologicznych. Partnerstwa z aplikacjami lifestyle. Nowe źródło przychodów poza bezpośrednimi konsumentami.',
                    uk: 'API для дрібних астро-бізнесів. Партнерства з lifestyle додатками. Нове джерело доходу окрім прямих клієнтів.',
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
                  <div className={styles.statNumber}>$10-30K</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Projected Revenue 2026'}
                    {locale === 'ru' && 'Прогноз выручки 2026'}
                    {locale === 'be' && 'Прагноз выручкі 2026'}
                    {locale === 'pl' && 'Prognozowane przychody 2026'}
                    {locale === 'uk' && 'Прогноз виручки 2026'}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>$60-160K</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Projected Revenue 2027'}
                    {locale === 'ru' && 'Прогноз выручки 2027'}
                    {locale === 'be' && 'Прагноз выручкі 2027'}
                    {locale === 'pl' && 'Prognozowane przychody 2027'}
                    {locale === 'uk' && 'Прогноз виручки 2027'}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>3K-8K</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Customers EOY 2027'}
                    {locale === 'ru' && 'Клиентов конец 2027'}
                    {locale === 'be' && 'Кліентаў канец 2027'}
                    {locale === 'pl' && 'Klientów koniec 2027'}
                    {locale === 'uk' && 'Клієнтів кінець 2027'}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>12-18mo</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Runway with Investment'}
                    {locale === 'ru' && 'Runway с инвестициями'}
                    {locale === 'be' && 'Runway з інвестыцыямі'}
                    {locale === 'pl' && 'Runway z inwestycjami'}
                    {locale === 'uk' && 'Runway з інвестиціями'}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.5}>
              <div style={{ marginTop: '50px', padding: '30px', background: 'rgba(0, 0, 0, 0.4)', borderRadius: '16px', border: '1px solid rgba(255, 20, 147, 0.3)' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--color-pink)', marginBottom: '20px' }}>
                  {locale === 'en' && '💰 Revenue Breakdown (Conservative)'}
                  {locale === 'ru' && '💰 Разбивка доходов (консервативно)'}
                  {locale === 'be' && '💰 Разбіўка даходаў (кансерватыўна)'}
                  {locale === 'pl' && '💰 Podział przychodów (konserwatywnie)'}
                  {locale === 'uk' && '💰 Розбивка доходів (консервативно)'}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                  <div>
                    <h4 style={{ color: 'var(--color-pink)', fontSize: '1.1rem', marginBottom: '12px' }}>2026</h4>
                    <ul className={styles.featureList}>
                      <li>💫 {locale === 'en' ? 'One-time Readings: $10-30K (500-1,500 customers, avg $20/reading)' : locale === 'ru' ? 'Разовые чтения: $10-30K (500-1,500 клиентов, средний $20/чтение)' : locale === 'be' ? 'Разовыя чытанні: $10-30K (500-1,500 кліентаў, сярэдні $20/чытанне)' : locale === 'pl' ? 'Jednorazowe czytania: $10-30K (500-1,500 klientów, śr. $20/czytanie)' : 'Разові читання: $10-30K (500-1,500 клієнтів, середній $20/читання)'}</li>
                      <li>📊 {locale === 'en' ? 'Customer Acquisition: Mostly organic SEO, minimal paid ads ($10-20 CAC)' : locale === 'ru' ? 'Привлечение клиентов: В основном органический SEO, минимум платной рекламы ($10-20 CAC)' : locale === 'be' ? 'Прыцягненне кліентаў: У асноўным арганічны SEO, мінімум платнай рэкламы ($10-20 CAC)' : locale === 'pl' ? 'Pozyskiwanie klientów: Głównie organiczne SEO, minimalne płatne reklamy ($10-20 CAC)' : 'Залучення клієнтів: В основному органічний SEO, мінімум платної реклами ($10-20 CAC)'}</li>
                      <li>🔄 {locale === 'en' ? 'Repeat Purchase Rate: 15-20% (2-3 readings/year)' : locale === 'ru' ? 'Повторные покупки: 15-20% (2-3 чтения/год)' : locale === 'be' ? 'Паўторныя пакупкі: 15-20% (2-3 чытанні/год)' : locale === 'pl' ? 'Wskaźnik powtórnych zakupów: 15-20% (2-3 czytania/rok)' : 'Повторні покупки: 15-20% (2-3 читання/рік)'}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--color-pink)', fontSize: '1.1rem', marginBottom: '12px' }}>2027</h4>
                    <ul className={styles.featureList}>
                      <li>💫 {locale === 'en' ? 'One-time: $40-120K (2,000-6,000 customers)' : locale === 'ru' ? 'Разовые: $40-120K (2,000-6,000 клиентов)' : locale === 'be' ? 'Разовыя: $40-120K (2,000-6,000 кліентаў)' : locale === 'pl' ? 'Jednorazowe: $40-120K (2,000-6,000 klientów)' : 'Разові: $40-120K (2,000-6,000 клієнтів)'}</li>
                      <li>🔄 {locale === 'en' ? 'Subscriptions: $20-40K (100-200 subs @ $9.99/mo, Q1 2027 launch)' : locale === 'ru' ? 'Подписки: $20-40K (100-200 подписок @ $9.99/мес, запуск Q1 2027)' : locale === 'be' ? 'Падпіскі: $20-40K (100-200 падпісак @ $9.99/мес, запуск Q1 2027)' : locale === 'pl' ? 'Subskrypcje: $20-40K (100-200 subskr. @ $9.99/mies, start Q1 2027)' : 'Підписки: $20-40K (100-200 підписок @ $9.99/міс, запуск Q1 2027)'}</li>
                      <li>🌍 {locale === 'en' ? 'Multi-language markets: RU/EN/UK/BE expansion in Q3-Q4 2027' : locale === 'ru' ? 'Многоязычные рынки: RU/EN/UK/BE расширение в Q3-Q4 2027' : locale === 'be' ? 'Шматмоўныя рынкі: RU/EN/UK/BE пашырэнне ў Q3-Q4 2027' : locale === 'pl' ? 'Rynki wielojęzyczne: ekspansja RU/EN/UK/BE w Q3-Q4 2027' : 'Багатомовні ринки: RU/EN/UK/BE розширення в Q3-Q4 2027'}</li>
                    </ul>
                  </div>
                </div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--color-pink)', marginBottom: '20px', marginTop: '30px' }}>
                  {locale === 'en' && '🎯 Use of Funds ($50-100K)'}
                  {locale === 'ru' && '🎯 Использование средств ($50-100K)'}
                  {locale === 'be' && '🎯 Выкарыстанне сродкаў ($50-100K)'}
                  {locale === 'pl' && '🎯 Wykorzystanie środków ($50-100K)'}
                  {locale === 'uk' && '🎯 Використання коштів ($50-100K)'}
                </h3>
                <ul className={styles.featureList} style={{ fontSize: '1.05rem' }}>
                  <li>💻 {locale === 'en' ? 'Product Development (30%): Mobile apps (iOS/Android), AI improvements, subscription features' : locale === 'ru' ? 'Разработка продукта (30%): Мобильные приложения (iOS/Android), улучшения AI, функции подписки' : locale === 'be' ? 'Распрацоўка прадукту (30%): Мабільныя прыкладанні (iOS/Android), паляпшэнні AI, функцыі падпіскі' : locale === 'pl' ? 'Rozwój produktu (30%): Aplikacje mobilne (iOS/Android), ulepszenia AI, funkcje subskrypcyjne' : 'Розробка продукту (30%): Мобільні додатки (iOS/Android), покращення AI, функції підписки'}</li>
                  <li>📢 {locale === 'en' ? 'Marketing & Growth (45%): Minimal paid ads, SEO content, influencer partnerships' : locale === 'ru' ? 'Маркетинг и рост (45%): Минимум платной рекламы, SEO-контент, партнерства с инфлюенсерами' : locale === 'be' ? 'Маркетынг і рост (45%): Мінімум платнай рэкламы, SEO-кантэнт, партнёрствы з інфлюэнсерамі' : locale === 'pl' ? 'Marketing i wzrost (45%): Minimalne płatne reklamy, treści SEO, partnerstwa z influencerami' : 'Маркетинг та зростання (45%): Мінімум платної реклами, SEO-контент, партнерства з інфлюенсерами'}</li>
                  <li>👥 {locale === 'en' ? 'Team (10%): Part-time developer, content creator' : locale === 'ru' ? 'Команда (10%): Part-time разработчик, создатель контента' : locale === 'be' ? 'Каманда (10%): Part-time распрацоўшчык, стваральнік кантэнту' : locale === 'pl' ? 'Zespół (10%): Programista part-time, twórca treści' : 'Команда (10%): Part-time розробник, творець контенту'}</li>
                  <li>🏢 {locale === 'en' ? 'Infrastructure (15%): Hosting, GPT-4 API costs, payment processing, tools, legal/accounting' : locale === 'ru' ? 'Инфраструктура (15%): Хостинг, GPT-4 API, обработка платежей, инструменты, юр./бухгалтерия' : locale === 'be' ? 'Інфраструктура (15%): Хостынг, GPT-4 API, апрацоўка плацяжоў, інструменты, юр./бухгалтэрыя' : locale === 'pl' ? 'Infrastruktura (15%): Hosting, koszty API GPT-4, przetwarzanie płatności, narzędzia, prawne/księgowe' : 'Інфраструктура (15%): Хостинг, GPT-4 API, обробка платежів, інструменти, юр./бухгалтерія'}</li>
                </ul>
                <p style={{ marginTop: '25px', fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6' }}>
                  {locale === 'en' && '* Bootstrapped projections based on: 2-4% conversion rate from organic SEO traffic, $10-20 CAC via minimal paid ads, 15-20% repeat purchase rate, $20 average order value, 75-85% gross margin. Conservative estimates assume slow organic growth with limited marketing budget.'}
                  {locale === 'ru' && '* Bootstrapped прогнозы основаны на: 2-4% конверсии из органического SEO-трафика, $10-20 CAC через минимальную платную рекламу, 15-20% повторных покупок, $20 средний чек, 75-85% валовая маржа. Консервативные оценки предполагают медленный органический рост с ограниченным маркетинговым бюджетом.'}
                  {locale === 'be' && '* Bootstrapped прагнозы заснаваны на: 2-4% канверсіі з арганічнага SEO-трафіку, $10-20 CAC праз мінімальную платную рэкламу, 15-20% паўторных пакупак, $20 сярэдні чэк, 75-85% валавая маржа. Кансерватыўныя ацэнкі прадугледжваюць павольны арганічны рост з абмежаваным маркетынгавым бюджэтам.'}
                  {locale === 'pl' && '* Prognozy bootstrapped oparte na: 2-4% współczynniku konwersji z organicznego ruchu SEO, $10-20 CAC przez minimalne płatne reklamy, 15-20% wskaźniku powtórnych zakupów, $20 średniej wartości zamówienia, 75-85% marży brutto. Konserwatywne szacunki zakładają wolny organiczny wzrost z ograniczonym budżetem marketingowym.'}
                  {locale === 'uk' && '* Bootstrapped прогнози засновані на: 2-4% конверсії з органічного SEO-трафіку, $10-20 CAC через мінімальну платну рекламу, 15-20% повторних покупок, $20 середній чек, 75-85% валова маржа. Консервативні оцінки передбачають повільне органічне зростання з обмеженим маркетинговим бюджетом.'}
                </p>
              </div>
            </Reveal>
          </section>
        </>
      )}

      {/* NovaStorm AI: Enhanced Sections */}
      {isNovaStormAI && (
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
                      {locale === 'en' && '🎬 Freemium SaaS: Free (5 videos/mo) → Pro $29/mo → Business $99/mo → Enterprise $499+/mo'}
                      {locale === 'ru' && '🎬 Freemium SaaS: Бесплатно (5 видео/мес) → Pro $29/мес → Business $99/мес → Enterprise $499+/мес'}
                      {locale === 'be' && '🎬 Freemium SaaS: Бясплатна (5 відэа/мес) → Pro $29/мес → Business $99/мес → Enterprise $499+/мес'}
                      {locale === 'pl' && '🎬 Freemium SaaS: Za darmo (5 filmów/mies) → Pro $29/mies → Business $99/mies → Enterprise $499+/mies'}
                      {locale === 'uk' && '🎬 Freemium SaaS: Безкоштовно (5 відео/міс) → Pro $29/міс → Business $99/міс → Enterprise $499+/міс'}
                    </li>
                    <li>
                      {locale === 'en' && '💳 Pay-per-video: $3-5 per video for occasional users'}
                      {locale === 'ru' && '💳 Оплата за видео: $3-5 за видео для разовых пользователей'}
                      {locale === 'be' && '💳 Аплата за відэа: $3-5 за відэа для разавых карыстальнікаў'}
                      {locale === 'pl' && '💳 Płatność za film: $3-5 za film dla okazjonalnych użytkowników'}
                      {locale === 'uk' && '💳 Оплата за відео: $3-5 за відео для разових користувачів'}
                    </li>
                    <li>
                      {locale === 'en' && '🔌 API Access: $0.10-0.50 per video generation request (white-label)'}
                      {locale === 'ru' && '🔌 API-доступ: $0.10-0.50 за запрос генерации видео (white-label)'}
                      {locale === 'be' && '🔌 API-доступ: $0.10-0.50 за запыт генерацыі відэа (white-label)'}
                      {locale === 'pl' && '🔌 Dostęp API: $0.10-0.50 za żądanie generowania filmu (white-label)'}
                      {locale === 'uk' && '🔌 API-доступ: $0.10-0.50 за запит генерації відео (white-label)'}
                    </li>
                    <li>
                      {locale === 'en' && '🤝 Brand Partnerships: Sponsored templates, affiliate commissions'}
                      {locale === 'ru' && '🤝 Партнерства с брендами: Спонсируемые шаблоны, партнерские комиссии'}
                      {locale === 'be' && '🤝 Партнёрствы з брэндамі: Спансаваныя шаблоны, партнёрскія камісіі'}
                      {locale === 'pl' && '🤝 Partnerstwa z markami: Sponsorowane szablony, prowizje partnerskie'}
                      {locale === 'uk' && '🤝 Партнерства з брендами: Спонсоровані шаблони, партнерські комісії'}
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className={styles.businessCard}>
                  <h3 className={styles.cardTitle}>
                    {locale === 'en' && 'Target Customers'}
                    {locale === 'ru' && 'Целевые клиенты'}
                    {locale === 'be' && 'Мэтавыя кліенты'}
                    {locale === 'pl' && 'Docelowi klienci'}
                    {locale === 'uk' && 'Цільові клієнти'}
                  </h3>
                  <ul className={styles.featureList}>
                    <li>
                      {locale === 'en' && '🎨 Content Creators & Influencers (TikTok, Instagram, YouTube)'}
                      {locale === 'ru' && '🎨 Создатели контента и инфлюенсеры (TikTok, Instagram, YouTube)'}
                      {locale === 'be' && '🎨 Стваральнікі кантэнту і інфлюэнсеры (TikTok, Instagram, YouTube)'}
                      {locale === 'pl' && '🎨 Twórcy treści i influencerzy (TikTok, Instagram, YouTube)'}
                      {locale === 'uk' && '🎨 Створювачі контенту та інфлюенсери (TikTok, Instagram, YouTube)'}
                    </li>
                    <li>
                      {locale === 'en' && '🏢 Small-Medium Businesses (marketing videos, product demos)'}
                      {locale === 'ru' && '🏢 Малый и средний бизнес (маркетинговые видео, демо продуктов)'}
                      {locale === 'be' && '🏢 Малы і сярэдні бізнес (маркетынгавыя відэа, дэма прадуктаў)'}
                      {locale === 'pl' && '🏢 Małe i średnie firmy (filmy marketingowe, demo produktów)'}
                      {locale === 'uk' && '🏢 Малий та середній бізнес (маркетингові відео, демо продуктів)'}
                    </li>
                    <li>
                      {locale === 'en' && '🎓 Educators & Journalists (verified educational content)'}
                      {locale === 'ru' && '🎓 Преподаватели и журналисты (проверенный образовательный контент)'}
                      {locale === 'be' && '🎓 Выкладчыкі і журналісты (праверані адукацыйны кантэнт)'}
                      {locale === 'pl' && '🎓 Edukatorzy i dziennikarze (zweryfikowane treści edukacyjne)'}
                      {locale === 'uk' && '🎓 Викладачі та журналісти (перевірений освітній контент)'}
                    </li>
                    <li>
                      {locale === 'en' && '📱 Social Media Managers & Agencies (multi-client workflows)'}
                      {locale === 'ru' && '📱 Социальные медиа менеджеры и агентства (работа с клиентами)'}
                      {locale === 'be' && '📱 Сацыяльныя медыя менеджэры і агенцтвы (праца з кліентамі)'}
                      {locale === 'pl' && '📱 Menedżerowie mediów społecznościowych i agencje (przepływy pracy wieloklientowe)'}
                      {locale === 'uk' && '📱 Соціальні медіа менеджери та агенції (робота з клієнтами)'}
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
                  <div className={styles.statNumber}>$104B</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Creator Economy (2024)'}
                    {locale === 'ru' && 'Экономика создателей (2024)'}
                    {locale === 'be' && 'Эканоміка стваральнікаў (2024)'}
                    {locale === 'pl' && 'Ekonomia twórców (2024)'}
                    {locale === 'uk' && 'Економіка створювачів (2024)'}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>$480B</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Projected by 2027'}
                    {locale === 'ru' && 'Прогноз к 2027'}
                    {locale === 'be' && 'Прагноз да 2027'}
                    {locale === 'pl' && 'Prognoza do 2027'}
                    {locale === 'uk' && 'Прогноз до 2027'}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>82%</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Internet Traffic is Video'}
                    {locale === 'ru' && 'Трафик интернета - видео'}
                    {locale === 'be' && 'Трафік інтэрнэту - відэа'}
                    {locale === 'pl' && 'Ruch internetowy to wideo'}
                    {locale === 'uk' && 'Трафік інтернету - відео'}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>6x</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Misinfo Spreads Faster'}
                    {locale === 'ru' && 'Дезинфо быстрее правды'}
                    {locale === 'be' && 'Дэзінфа хутчэй праўды'}
                    {locale === 'pl' && 'Dezinfo szybsza niż prawda'}
                    {locale === 'uk' && 'Дезінфо швидше правди'}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Growth Projections */}
          <section className={styles.enhancedSection}>
            <Reveal>
              <h2 className={styles.sectionTitle}>
                {locale === 'en' && '📊 User Growth Projections (2025-2028)'}
                {locale === 'ru' && '📊 Прогноз роста пользователей (2025-2028)'}
                {locale === 'be' && '📊 Прагноз росту карыстальнікаў (2025-2028)'}
                {locale === 'pl' && '📊 Prognozy wzrostu użytkowników (2025-2028)'}
                {locale === 'uk' && '📊 Прогноз зростання користувачів (2025-2028)'}
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <AnimatedChart
                data={[
                  { label: 'Q4 2025', value: 0 },
                  { label: 'Q1 2026', value: 200 },
                  { label: 'Q3 2026', value: 8000 },
                  { label: 'Q4 2026', value: 12000 },
                  { label: 'Q2 2027', value: 40000 },
                  { label: 'Q4 2027', value: 65000 },
                  { label: 'Q2 2028', value: 150000 },
                  { label: 'Q4 2028', value: 250000 },
                ]}
                height={350}
              />
            </Reveal>

            <Reveal delay={0.3}>
              <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                {locale === 'en' && '🚀 Conservative: MVP Q4 2025 → Launch Mid 2026 → 5K-15K users EOY 2026 → 25K-75K EOY 2027 → 100K-300K EOY 2028'}
                {locale === 'ru' && '🚀 Консервативно: MVP Q4 2025 → Запуск Середина 2026 → 5K-15K пользователей конец 2026 → 25K-75K конец 2027 → 100K-300K конец 2028'}
                {locale === 'be' && '🚀 Кансерватыўна: MVP Q4 2025 → Запуск Сярэдзіна 2026 → 5K-15K карыстальнікаў канец 2026 → 25K-75K канец 2027 → 100K-300K канец 2028'}
                {locale === 'pl' && '🚀 Konserwatywnie: MVP Q4 2025 → Uruchomienie Połowa 2026 → 5K-15K użytkowników koniec 2026 → 25K-75K koniec 2027 → 100K-300K koniec 2028'}
                {locale === 'uk' && '🚀 Консервативно: MVP Q4 2025 → Запуск Середина 2026 → 5K-15K користувачів кінець 2026 → 25K-75K кінець 2027 → 100K-300K кінець 2028'}
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
                    en: 'Q3-Q4 2025',
                    ru: 'Q3-Q4 2025',
                    be: 'Q3-Q4 2025',
                    pl: 'Q3-Q4 2025',
                    uk: 'Q3-Q4 2025',
                  },
                  title: {
                    en: 'MVP Development',
                    ru: 'Разработка MVP',
                    be: 'Распрацоўка MVP',
                    pl: 'Rozwój MVP',
                    uk: 'Розробка MVP',
                  },
                  description: {
                    en: 'Core video generation engine, text-to-speech (5 languages), 10 templates, basic fact-checking integration with CheckTruth. Internal testing and iteration. Secure seed funding ($500K-$1M).',
                    ru: 'Основной движок генерации видео, text-to-speech (5 языков), 10 шаблонов, базовая интеграция проверки фактов с CheckTruth. Внутреннее тестирование и итерации. Привлечение seed финансирования ($500K-$1M).',
                    be: 'Асноўны рухавік генерацыі відэа, text-to-speech (5 моў), 10 шаблонаў, базавая інтэграцыя праверкі фактаў з CheckTruth. Унутранае тэставанне і ітэрацыі. Прыцягненне seed фінансавання ($500K-$1M).',
                    pl: 'Główny silnik generowania filmów, text-to-speech (5 języków), 10 szablonów, podstawowa integracja sprawdzania faktów z CheckTruth. Wewnętrzne testowanie i iteracje. Pozyskanie finansowania seed ($500K-$1M).',
                    uk: 'Основний двигун генерації відео, text-to-speech (5 мов), 10 шаблонів, базова інтеграція перевірки фактів з CheckTruth. Внутрішнє тестування та ітерації. Залучення seed фінансування ($500K-$1M).',
                  },
                  status: 'planned',
                },
                {
                  quarter: {
                    en: 'Q1-Q2 2026',
                    ru: 'Q1-Q2 2026',
                    be: 'Q1-Q2 2026',
                    pl: 'Q1-Q2 2026',
                    uk: 'Q1-Q2 2026',
                  },
                  title: {
                    en: 'Private Beta Testing',
                    ru: 'Закрытое бета-тестирование',
                    be: 'Закрытае бета-тэставанне',
                    pl: 'Prywatne testy beta',
                    uk: 'Закрите бета-тестування',
                  },
                  description: {
                    en: 'Invite-only beta with 100-500 early adopters (content creators, educators, journalists). Gather feedback, refine AI models, optimize user experience. Build initial case studies and testimonials.',
                    ru: 'Закрытая бета по приглашениям с 100-500 ранними пользователями (создатели контента, преподаватели, журналисты). Сбор обратной связи, доработка AI-моделей, оптимизация UX. Создание первых кейс-стади и отзывов.',
                    be: 'Закрытая бета па запрашэннях з 100-500 ранімі карыстальнікамі (стваральнікі кантэнту, выкладчыкі, журналісты). Збор зваротнай сувязі, дапрацоўка AI-мадэляў, аптымізацыя UX. Стварэнне першых кейс-стадзі і водгукаў.',
                    pl: 'Beta tylko na zaproszenia z 100-500 wczesnymi użytkownikami (twórcy treści, edukatorzy, dziennikarze). Zbieranie informacji zwrotnych, udoskonalanie modeli AI, optymalizacja UX. Tworzenie pierwszych studiów przypadków i referencji.',
                    uk: 'Закрита бета за запрошеннями з 100-500 ранніми користувачами (створювачі контенту, викладачі, журналісти). Збір зворотного зв\'язку, доопрацювання AI-моделей, оптимізація UX. Створення перших кейс-стаді та відгуків.',
                  },
                  status: 'planned',
                },
                {
                  quarter: {
                    en: 'Q2-Q3 2026',
                    ru: 'Q2-Q3 2026',
                    be: 'Q2-Q3 2026',
                    pl: 'Q2-Q3 2026',
                    uk: 'Q2-Q3 2026',
                  },
                  title: {
                    en: 'Public Launch & Feature Expansion',
                    ru: 'Публичный запуск и расширение функций',
                    be: 'Публічны запуск і пашырэнне функцый',
                    pl: 'Publiczne uruchomienie i rozszerzenie funkcji',
                    uk: 'Публічний запуск та розширення функцій',
                  },
                  description: {
                    en: 'Expand to 20+ languages, 50+ templates, brand kit customization, advanced verification dashboard, A/B testing. Freemium model launch. Target: 5K-15K users, 500-1,500 paying by EOY 2026.',
                    ru: 'Расширение до 20+ языков, 50+ шаблонов, кастомизация брендкита, расширенная панель проверки, A/B тестирование. Запуск freemium модели. Цель: 5K-15K пользователей, 500-1,500 платящих к концу 2026.',
                    be: 'Пашырэнне да 20+ моў, 50+ шаблонаў, наладжванне брэндкіта, пашыраная панэль праверкі, A/B тэставанне. Запуск freemium мадэлі. Мэта: 5K-15K карыстальнікаў, 500-1,500 плацяжных да канца 2026.',
                    pl: 'Rozszerzenie do ponad 20 języków, ponad 50 szablonów, dostosowanie brand kit, zaawansowany panel weryfikacji, testowanie A/B. Uruchomienie modelu freemium. Cel: 5K-15K użytkowników, 500-1,500 płacących do końca 2026.',
                    uk: 'Розширення до 20+ мов, 50+ шаблонів, налаштування брендкіту, розширена панель перевірки, A/B тестування. Запуск freemium моделі. Мета: 5K-15K користувачів, 500-1,500 платних до кінця 2026.',
                  },
                  status: 'planned',
                },
                {
                  quarter: {
                    en: 'Q1-Q2 2027',
                    ru: 'Q1-Q2 2027',
                    be: 'Q1-Q2 2027',
                    pl: 'Q1-Q2 2027',
                    uk: 'Q1-Q2 2027',
                  },
                  title: {
                    en: 'Enterprise & API Launch',
                    ru: 'Запуск Enterprise и API',
                    be: 'Запуск Enterprise і API',
                    pl: 'Uruchomienie Enterprise i API',
                    uk: 'Запуск Enterprise та API',
                  },
                  description: {
                    en: 'White-label video API, Enterprise tier, custom template builder, team collaboration, advanced analytics. Target: 25K-75K users, 3K-10K paying, $720K-$2.4M revenue.',
                    ru: 'White-label видео API, уровень Enterprise, конструктор шаблонов, командная работа, расширенная аналитика. Цель: 25K-75K пользователей, 3K-10K платящих, $720K-$2.4M выручки.',
                    be: 'White-label відэа API, узровень Enterprise, канструктар шаблонаў, камандная праца, пашыраная аналітыка. Мэта: 25K-75K карыстальнікаў, 3K-10K плацяжных, $720K-$2.4M выручкі.',
                    pl: 'API wideo white-label, poziom Enterprise, kreator szablonów niestandardowych, współpraca zespołowa, zaawansowana analityka. Cel: 25K-75K użytkowników, 3K-10K płacących, $720K-$2.4M przychodów.',
                    uk: 'White-label відео API, рівень Enterprise, конструктор шаблонів, командна робота, розширена аналітика. Мета: 25K-75K користувачів, 3K-10K платних, $720K-$2.4M виручки.',
                  },
                  status: 'planned',
                },
                {
                  quarter: {
                    en: 'Q3-Q4 2027',
                    ru: 'Q3-Q4 2027',
                    be: 'Q3-Q4 2027',
                    pl: 'Q3-Q4 2027',
                    uk: 'Q3-Q4 2027',
                  },
                  title: {
                    en: 'Mobile Apps & Advanced AI',
                    ru: 'Мобильные приложения и продвинутый AI',
                    be: 'Мабільныя прыкладанні і прасунуты AI',
                    pl: 'Aplikacje mobilne i zaawansowane AI',
                    uk: 'Мобільні додатки та просунутий AI',
                  },
                  description: {
                    en: 'iOS/Android apps, AI avatar support, voice cloning, real-time editing, community template marketplace, Zapier/Make integrations.',
                    ru: 'iOS/Android приложения, поддержка AI-аватаров, клонирование голоса, редактирование в реальном времени, маркетплейс шаблонов, интеграция Zapier/Make.',
                    be: 'iOS/Android прыкладанні, падтрымка AI-аватараў, кланаванне голасу, рэдагаванне ў рэальным часе, маркетплейс шаблонаў, інтэграцыя Zapier/Make.',
                    pl: 'Aplikacje iOS/Android, obsługa awatarów AI, klonowanie głosu, edycja w czasie rzeczywistym, rynek szablonów społeczności, integracje Zapier/Make.',
                    uk: 'iOS/Android додатки, підтримка AI-аватарів, клонування голосу, редагування в реальному часі, маркетплейс шаблонів, інтеграція Zapier/Make.',
                  },
                  status: 'planned',
                },
                {
                  quarter: {
                    en: '2028+',
                    ru: '2028+',
                    be: '2028+',
                    pl: '2028+',
                    uk: '2028+',
                  },
                  title: {
                    en: 'Global Scale & Innovation',
                    ru: 'Глобальный масштаб и инновации',
                    be: 'Глабальны маштаб і інавацыі',
                    pl: 'Globalna skala i innowacje',
                    uk: 'Глобальний масштаб та інновації',
                  },
                  description: {
                    en: '50+ languages, live video fact-checking, deepfake detection, C2PA watermarking, educational partnerships, open API ecosystem. Target: 100K-300K users, 15K-45K paying, $3.6M-$10.8M revenue.',
                    ru: '50+ языков, проверка фактов в прямом эфире, обнаружение дипфейков, водяные знаки C2PA, образовательные партнерства, открытая экосистема API. Цель: 100K-300K пользователей, 15K-45K платящих, $3.6M-$10.8M выручки.',
                    be: '50+ моў, праверка фактаў у прамым эфіры, выяўленне дыпфейкаў, вадзяныя знакі C2PA, адукацыйныя партнёрствы, адкрытая экасістэма API. Мэта: 100K-300K карыстальнікаў, 15K-45K плацяжных, $3.6M-$10.8M выручкі.',
                    pl: 'Ponad 50 języków, sprawdzanie faktów na żywo, wykrywanie deepfake, znakowanie wodne C2PA, partnerstwa edukacyjne, otwarta ekosystem API. Cel: 100K-300K użytkowników, 15K-45K płacących, $3.6M-$10.8M przychodów.',
                    uk: '50+ мов, перевірка фактів у прямому ефірі, виявлення дипфейків, водяні знаки C2PA, освітні партнерства, відкрита екосистема API. Мета: 100K-300K користувачів, 15K-45K платних, $3.6M-$10.8M виручки.',
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
                  <div className={styles.statNumber}>$150-450K</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Projected Revenue 2026'}
                    {locale === 'ru' && 'Прогноз выручки 2026'}
                    {locale === 'be' && 'Прагноз выручкі 2026'}
                    {locale === 'pl' && 'Prognozowane przychody 2026'}
                    {locale === 'uk' && 'Прогноз виручки 2026'}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>$720K-$2.4M</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Projected Revenue 2027'}
                    {locale === 'ru' && 'Прогноз выручки 2027'}
                    {locale === 'be' && 'Прагноз выручкі 2027'}
                    {locale === 'pl' && 'Prognozowane przychody 2027'}
                    {locale === 'uk' && 'Прогноз виручки 2027'}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>$3.6M-$10.8M</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Projected Revenue 2028'}
                    {locale === 'ru' && 'Прогноз выручки 2028'}
                    {locale === 'be' && 'Прагноз выручкі 2028'}
                    {locale === 'pl' && 'Prognozowane przychody 2028'}
                    {locale === 'uk' && 'Прогноз виручки 2028'}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>18-24mo</div>
                  <div className={styles.statLabel}>
                    {locale === 'en' && 'Runway with Investment'}
                    {locale === 'ru' && 'Runway с инвестициями'}
                    {locale === 'be' && 'Runway з інвестыцыямі'}
                    {locale === 'pl' && 'Runway z inwestycjami'}
                    {locale === 'uk' && 'Runway з інвестиціями'}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.5}>
              <div style={{ marginTop: '50px', padding: '30px', background: 'rgba(0, 0, 0, 0.4)', borderRadius: '16px', border: '1px solid rgba(255, 20, 147, 0.3)' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--color-pink)', marginBottom: '20px' }}>
                  {locale === 'en' && '💰 Revenue Breakdown (Conservative)'}
                  {locale === 'ru' && '💰 Разбивка доходов (консервативно)'}
                  {locale === 'be' && '💰 Разбіўка даходаў (кансерватыўна)'}
                  {locale === 'pl' && '💰 Podział przychodów (konserwatywnie)'}
                  {locale === 'uk' && '💰 Розбивка доходів (консервативно)'}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                  <div>
                    <h4 style={{ color: 'var(--color-pink)', fontSize: '1.1rem', marginBottom: '12px' }}>2026 (Year 1)</h4>
                    <ul className={styles.featureList}>
                      <li>📊 {locale === 'en' ? 'Subscriptions: $120-360K (500-1,500 paying @ avg $20/mo)' : locale === 'ru' ? 'Подписки: $120-360K (500-1,500 платящих @ $20/мес)' : locale === 'be' ? 'Падпіскі: $120-360K (500-1,500 плацяжных @ $20/мес)' : locale === 'pl' ? 'Subskrypcje: $120-360K (500-1,500 płacących @ $20/mies)' : 'Підписки: $120-360K (500-1,500 платних @ $20/міс)'}</li>
                      <li>💳 {locale === 'en' ? 'Pay-per-video: $30-90K (occasional users)' : locale === 'ru' ? 'Оплата за видео: $30-90K (разовые пользователи)' : locale === 'be' ? 'Аплата за відэа: $30-90K (разавыя карыстальнікі)' : locale === 'pl' ? 'Płatność za film: $30-90K (użytkownicy okazjonalni)' : 'Оплата за відео: $30-90K (разові користувачі)'}</li>
                      <li>🎯 {locale === 'en' ? '10% free-to-paid conversion, $30-50 CAC' : locale === 'ru' ? '10% конверсия бесплатные → платные, $30-50 CAC' : locale === 'be' ? '10% канверсія бясплатныя → платныя, $30-50 CAC' : locale === 'pl' ? '10% konwersja bezpłatne → płatne, $30-50 CAC' : '10% конверсія безкоштовні → платні, $30-50 CAC'}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--color-pink)', fontSize: '1.1rem', marginBottom: '12px' }}>2027 (Year 2)</h4>
                    <ul className={styles.featureList}>
                      <li>📊 {locale === 'en' ? 'Subscriptions: $600K-$2M (3K-10K paying)' : locale === 'ru' ? 'Подписки: $600K-$2M (3K-10K платящих)' : locale === 'be' ? 'Падпіскі: $600K-$2M (3K-10K плацяжных)' : locale === 'pl' ? 'Subskrypcje: $600K-$2M (3K-10K płacących)' : 'Підписки: $600K-$2M (3K-10K платних)'}</li>
                      <li>🔌 {locale === 'en' ? 'API/Enterprise: $120-400K (white-label clients)' : locale === 'ru' ? 'API/Enterprise: $120-400K (white-label клиенты)' : locale === 'be' ? 'API/Enterprise: $120-400K (white-label кліенты)' : locale === 'pl' ? 'API/Enterprise: $120-400K (klienci white-label)' : 'API/Enterprise: $120-400K (white-label клієнти)'}</li>
                      <li>📈 {locale === 'en' ? '70-75% gross margin (economies of scale)' : locale === 'ru' ? '70-75% валовая маржа (экономия на масштабе)' : locale === 'be' ? '70-75% валавая маржа (эканомія на маштабе)' : locale === 'pl' ? '70-75% marża brutto (ekonomia skali)' : '70-75% валова маржа (економія на масштабі)'}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--color-pink)', fontSize: '1.1rem', marginBottom: '12px' }}>2028 (Year 3)</h4>
                    <ul className={styles.featureList}>
                      <li>🚀 {locale === 'en' ? 'Revenue: $3.6M-$10.8M (15K-45K paying customers)' : locale === 'ru' ? 'Выручка: $3.6M-$10.8M (15K-45K платящих клиентов)' : locale === 'be' ? 'Выручка: $3.6M-$10.8M (15K-45K плацяжных кліентаў)' : locale === 'pl' ? 'Przychody: $3.6M-$10.8M (15K-45K płacących klientów)' : 'Виручка: $3.6M-$10.8M (15K-45K платних клієнтів)'}</li>
                      <li>💼 {locale === 'en' ? 'Enterprise tier 30% of revenue, mobile apps 15%' : locale === 'ru' ? 'Enterprise уровень 30% выручки, мобильные приложения 15%' : locale === 'be' ? 'Enterprise узровень 30% выручкі, мабільныя прыкладанні 15%' : locale === 'pl' ? 'Poziom Enterprise 30% przychodów, aplikacje mobilne 15%' : 'Enterprise рівень 30% виручки, мобільні додатки 15%'}</li>
                      <li>✅ {locale === 'en' ? '75-80% gross margin, path to profitability' : locale === 'ru' ? '75-80% валовая маржа, путь к прибыльности' : locale === 'be' ? '75-80% валавая маржа, шлях да прыбытковасці' : locale === 'pl' ? '75-80% marża brutto, droga do rentowności' : '75-80% валова маржа, шлях до прибутковості'}</li>
                    </ul>
                  </div>
                </div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--color-pink)', marginBottom: '20px', marginTop: '30px' }}>
                  {locale === 'en' && '🎯 Use of Funds ($500K-$1M Seed)'}
                  {locale === 'ru' && '🎯 Использование средств ($500K-$1M Seed)'}
                  {locale === 'be' && '🎯 Выкарыстанне сродкаў ($500K-$1M Seed)'}
                  {locale === 'pl' && '🎯 Wykorzystanie środków ($500K-$1M Seed)'}
                  {locale === 'uk' && '🎯 Використання коштів ($500K-$1M Seed)'}
                </h3>
                <ul className={styles.featureList} style={{ fontSize: '1.05rem' }}>
                  <li>💻 {locale === 'en' ? 'Product Development (40%): AI model training, core platform, cloud infrastructure, QA' : locale === 'ru' ? 'Разработка продукта (40%): Обучение AI-моделей, основная платформа, облачная инфраструктура, QA' : locale === 'be' ? 'Распрацоўка прадукту (40%): Навучанне AI-мадэляў, асноўная платформа, воблачная інфраструктура, QA' : locale === 'pl' ? 'Rozwój produktu (40%): Szkolenie modeli AI, platforma podstawowa, infrastruktura chmurowa, QA' : 'Розробка продукту (40%): Навчання AI-моделей, основна платформа, хмарна інфраструктура, QA'}</li>
                  <li>👥 {locale === 'en' ? 'Team & Talent (30%): 2-3 engineers, 1 AI/ML specialist, 1 product designer, part-time marketing' : locale === 'ru' ? 'Команда и таланты (30%): 2-3 инженера, 1 AI/ML специалист, 1 дизайнер, part-time маркетинг' : locale === 'be' ? 'Каманда і таленты (30%): 2-3 інжынера, 1 AI/ML спецыяліст, 1 дызайнер, part-time маркетынг' : locale === 'pl' ? 'Zespół i talenty (30%): 2-3 inżynierów, 1 specjalista AI/ML, 1 projektant produktu, part-time marketing' : 'Команда та таланти (30%): 2-3 інженери, 1 AI/ML спеціаліст, 1 дизайнер, part-time маркетинг'}</li>
                  <li>📢 {locale === 'en' ? 'Marketing & Growth (20%): Beta launch campaign, content marketing (SEO/YouTube/TikTok), influencer partnerships, paid ads' : locale === 'ru' ? 'Маркетинг и рост (20%): Кампания бета-запуска, контент-маркетинг (SEO/YouTube/TikTok), партнерства с инфлюенсерами, платная реклама' : locale === 'be' ? 'Маркетынг і рост (20%): Кампанія бета-запуску, кантэнт-маркетынг (SEO/YouTube/TikTok), партнёрствы з інфлюэнсерамі, платная рэклама' : locale === 'pl' ? 'Marketing i wzrost (20%): Kampania uruchomienia beta, content marketing (SEO/YouTube/TikTok), partnerstwa z influencerami, płatne reklamy' : 'Маркетинг та зростання (20%): Кампанія бета-запуску, контент-маркетинг (SEO/YouTube/TikTok), партнерства з інфлюенсерами, платна реклама'}</li>
                  <li>🏢 {locale === 'en' ? 'Infrastructure & Tools (10%): Cloud hosting (AWS/GCP), AI API costs, SaaS tools, legal/incorporation' : locale === 'ru' ? 'Инфраструктура и инструменты (10%): Облачный хостинг (AWS/GCP), AI API, SaaS инструменты, юр./регистрация' : locale === 'be' ? 'Інфраструктура і інструменты (10%): Воблачны хостынг (AWS/GCP), AI API, SaaS інструменты, юр./рэгістрацыя' : locale === 'pl' ? 'Infrastruktura i narzędzia (10%): Hosting w chmurze (AWS/GCP), koszty API AI, narzędzia SaaS, prawne/rejestracja' : 'Інфраструктура та інструменти (10%): Хмарний хостинг (AWS/GCP), AI API, SaaS інструменти, юр./реєстрація'}</li>
                </ul>
                <p style={{ marginTop: '25px', fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6' }}>
                  {locale === 'en' && '* Conservative projections based on: $30-50 CAC via content marketing + SEO, 10% free-to-paid conversion, 60-70% Year 1 gross margin (AI processing costs), <5% monthly churn, 20% organic growth. Series A ($3-5M) planned for 2027 to scale to 50K-100K users and expand enterprise/mobile.'}
                  {locale === 'ru' && '* Консервативные прогнозы основаны на: $30-50 CAC через контент-маркетинг + SEO, 10% конверсия бесплатных в платные, 60-70% валовая маржа Год 1 (затраты на AI-обработку), <5% месячный отток, 20% органический рост. Series A ($3-5M) планируется на 2027 для масштабирования до 50K-100K пользователей и расширения enterprise/mobile.'}
                  {locale === 'be' && '* Кансерватыўныя прагнозы заснаваны на: $30-50 CAC праз кантэнт-маркетынг + SEO, 10% канверсія бясплатных у платныя, 60-70% валавая маржа Год 1 (выдаткі на AI-апрацоўку), <5% месячны адток, 20% арганічны рост. Series A ($3-5M) плануецца на 2027 для маштабавання да 50K-100K карыстальнікаў і пашырэння enterprise/mobile.'}
                  {locale === 'pl' && '* Konserwatywne prognozy oparte na: $30-50 CAC przez content marketing + SEO, 10% konwersja bezpłatnych na płatne, 60-70% marża brutto Rok 1 (koszty przetwarzania AI), <5% miesięczny churn, 20% wzrost organiczny. Series A ($3-5M) planowane na 2027 w celu skalowania do 50K-100K użytkowników i rozszerzenia enterprise/mobile.'}
                  {locale === 'uk' && '* Консервативні прогнози засновані на: $30-50 CAC через контент-маркетинг + SEO, 10% конверсія безкоштовних у платні, 60-70% валова маржа Рік 1 (витрати на AI-обробку), <5% місячний відтік, 20% органічне зростання. Series A ($3-5M) планується на 2027 для масштабування до 50K-100K користувачів та розширення enterprise/mobile.'}
                </p>
              </div>
            </Reveal>
          </section>
        </>
      )}
    </div>
  );
}
