'use client';

import { useI18n } from '@/i18n';
import AnimatedGrid from './AnimatedGrid';
import ParallaxLayer from './ParallaxLayer';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <AnimatedGrid />
        <ParallaxLayer speed={0.3}>
          <div className={styles.gradientOverlay}></div>
        </ParallaxLayer>
      </div>

      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            {t.hero.title}
          </h1>

          <p className={styles.heroSubtitle}>
            {t.hero.subtitle}
          </p>

          <p className={styles.heroDescription}>
            {t.hero.description}
          </p>

          <div className={styles.heroCta}>
            <a href="#invest" className="btn btn-primary btn-lg">
              {t.hero.ctaPrimary}
            </a>
            <a href="/projects" className="btn btn-outline btn-lg">
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>4</div>
              <div className={styles.statLabel}>{t.hero.stats.projects}</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>3</div>
              <div className={styles.statLabel}>{t.hero.stats.team}</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>100%</div>
              <div className={styles.statLabel}>{t.hero.stats.innovation}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
