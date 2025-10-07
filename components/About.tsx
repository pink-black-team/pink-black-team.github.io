'use client';

import { useI18n } from '@/i18n';
import Reveal from './Reveal';
import styles from './About.module.css';

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <Reveal>
          <div className={styles.header}>
            <h2 className={styles.title}>{t.about.title}</h2>
            <p className={styles.subtitle}>{t.about.subtitle}</p>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <p className={styles.description}>{t.about.description}</p>
        </Reveal>
      </div>
    </section>
  );
}
