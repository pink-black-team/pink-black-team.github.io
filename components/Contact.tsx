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
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const payload = {
      name: formData.name,
      email: formData.email,
      description: formData.message,
    };

    try {
      const response = await fetch('http://api.novastorm.ai/v4/pinkblack/mail/contact', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        let errorText = '';
        try {
          errorText = await response.text();
        } catch (e) {
          errorText = 'Could not read error response';
        }
        throw new Error(`HTTP ${response.status}: ${errorText || response.statusText}`);
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');

      let errorMsg = 'Failed to send message';
      if (error instanceof Error) {
        if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
          errorMsg = 'Network error. Please check CORS settings or try again.';
        } else {
          errorMsg = error.message;
        }
      }
      setErrorMessage(errorMsg);
    }
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

            {status === 'success' && (
              <div className={styles.successMessage}>
                ✓ {t.contact.form.successMessage || 'Message sent successfully! We will get back to you soon.'}
              </div>
            )}

            {status === 'error' && (
              <div className={styles.errorMessage}>
                ✗ {t.contact.form.errorMessage || 'Failed to send message. Please try again.'} {errorMessage && `(${errorMessage})`}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (t.contact.form.sending || 'Sending...') : t.contact.form.submit}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
