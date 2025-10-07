'use client';

import { useI18n } from '@/i18n';
import Reveal from './Reveal';
import styles from './Invest.module.css';

export default function Invest() {
  const { t } = useI18n();

  return (
    <section id="invest" className={styles.invest}>
      <div className="container">
        <Reveal animation="scale">
          <div className={styles.content}>
            <h2 className={styles.title}>{t.invest.title}</h2>
            <p className={styles.subtitle}>{t.invest.subtitle}</p>
            <p className={styles.description}>{t.invest.description}</p>
            <a href="#contact" className="btn btn-primary btn-lg">
              {t.invest.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
