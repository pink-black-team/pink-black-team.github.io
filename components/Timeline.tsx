'use client';

import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import styles from './Timeline.module.css';

export interface TimelineItem {
  quarter: {
    en: string;
    ru: string;
    be: string;
    pl: string;
    uk: string;
  };
  title: {
    en: string;
    ru: string;
    be: string;
    pl: string;
    uk: string;
  };
  description: {
    en: string;
    ru: string;
    be: string;
    pl: string;
    uk: string;
  };
  status: 'completed' | 'in-progress' | 'planned';
}

interface TimelineProps {
  items: TimelineItem[];
  locale: string;
}

export default function Timeline({ items, locale }: TimelineProps) {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <Reveal key={index} delay={index * 0.1} animation="fadeLeft">
          <div className={`${styles.timelineItem} ${styles[item.status]}`}>
            <div className={styles.timelineMarker}>
              <div className={styles.markerDot} />
            </div>
            <div className={styles.timelineContent}>
              <div className={styles.quarter}>{item.quarter[locale as keyof typeof item.quarter]}</div>
              <h3 className={styles.title}>{item.title[locale as keyof typeof item.title]}</h3>
              <p className={styles.description}>{item.description[locale as keyof typeof item.description]}</p>
              <div className={styles.statusBadge}>
                {item.status === 'completed' && '✓ '}
                {item.status === 'in-progress' && '→ '}
                {item.status === 'planned' && '○ '}
                {item.status === 'completed' && (locale === 'en' ? 'Completed' : locale === 'ru' ? 'Завершено' : locale === 'be' ? 'Завершана' : locale === 'pl' ? 'Ukończono' : 'Завершено')}
                {item.status === 'in-progress' && (locale === 'en' ? 'In Progress' : locale === 'ru' ? 'В работе' : locale === 'be' ? 'У працы' : locale === 'pl' ? 'W trakcie' : 'В роботі')}
                {item.status === 'planned' && (locale === 'en' ? 'Planned' : locale === 'ru' ? 'Запланировано' : locale === 'be' ? 'Запланавана' : locale === 'pl' ? 'Planowane' : 'Заплановано')}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
