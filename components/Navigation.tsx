'use client';

import { useState, useEffect } from 'react';
import { useI18n } from '@/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Navigation.module.css';

export default function Navigation() {
  const { t } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.navContent}>
          <a href="/" className={styles.logo} onClick={handleLinkClick}>
            <span className="text-neon">Pink-Black</span>
          </a>

          {/* Desktop Navigation */}
          <ul className={styles.navLinks}>
            <li><a href="/#about">{t.nav.about}</a></li>
            <li><a href="/projects">{t.nav.projects}</a></li>
            <li><a href="/#team">{t.nav.team}</a></li>
            <li><a href="/#invest">{t.nav.invest}</a></li>
            <li><a href="/#contact">{t.nav.contact}</a></li>
          </ul>

          <div className={styles.navRight}>
            <LanguageSwitcher />

            {/* Mobile Menu Button */}
            <button
              className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
        role="dialog"
        aria-modal="true"
      >
        <ul className={styles.mobileNavLinks}>
          <li><a href="/#about" onClick={handleLinkClick}>{t.nav.about}</a></li>
          <li><a href="/projects" onClick={handleLinkClick}>{t.nav.projects}</a></li>
          <li><a href="/#team" onClick={handleLinkClick}>{t.nav.team}</a></li>
          <li><a href="/#invest" onClick={handleLinkClick}>{t.nav.invest}</a></li>
          <li><a href="/#contact" onClick={handleLinkClick}>{t.nav.contact}</a></li>
        </ul>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
