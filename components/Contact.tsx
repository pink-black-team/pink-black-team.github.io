'use client';

import { useI18n } from '@/i18n';
import { useState } from 'react';
import Reveal from './Reveal';
import styles from './Contact.module.css';

export default function Contact() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <Reveal>
          <div className={styles.header}>
            <h2 className={styles.title}>{t.contact.title}</h2>
            <p className={styles.subtitle}>{t.contact.subtitle}</p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="name">{t.contact.form.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">{t.contact.form.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">{t.contact.form.message}</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-lg">
              {t.contact.form.submit}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
