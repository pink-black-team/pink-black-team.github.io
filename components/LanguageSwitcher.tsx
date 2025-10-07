'use client';

import { useI18n, Locale, localeNames } from '@/i18n';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value as Locale);
  };

  return (
    <div className={styles.switcher}>
      <label htmlFor="language-select" className="sr-only">
        Select Language
      </label>
      <select
        id="language-select"
        value={locale}
        onChange={handleChange}
        className={styles.select}
        aria-label="Language selector"
      >
        {Object.entries(localeNames).map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}
