'use client';

import { useI18n } from '@/i18n';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3 className="text-neon">Pink-Black Team</h3>
            <p className={styles.tagline}>AI Innovation & Investment</p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.linkGroup}>
              <h4>{t.nav.about}</h4>
              <ul>
                <li><a href="#about">{t.about.title}</a></li>
                <li><a href="#team">{t.team.title}</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>{t.nav.projects}</h4>
              <ul>
                <li><a href="/projects">{t.projects.title}</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>{t.nav.invest}</h4>
              <ul>
                <li><a href="#invest">{t.invest.title}</a></li>
                <li><a href="#contact">{t.contact.title}</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
