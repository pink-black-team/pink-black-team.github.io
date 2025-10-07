'use client';

import { useEffect, useState } from 'react';
import styles from './AnimatedChart.module.css';

interface DataPoint {
  label: string;
  value: number;
}

interface AnimatedChartProps {
  data: DataPoint[];
  type?: 'bar' | 'line';
  color?: string;
  height?: number;
}

export default function AnimatedChart({
  data,
  type = 'bar',
  color = 'var(--color-pink)',
  height = 300
}: AnimatedChartProps) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className={styles.chartContainer} style={{ height: `${height}px` }}>
      <div className={styles.chart}>
        {data.map((point, index) => {
          const heightPercent = (point.value / maxValue) * 100;

          return (
            <div key={index} className={styles.barContainer}>
              <div
                className={`${styles.bar} ${animated ? styles.animated : ''}`}
                style={{
                  height: animated ? `${heightPercent}%` : '0%',
                  backgroundColor: color,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <span className={styles.value}>{point.value.toLocaleString()}</span>
              </div>
              <span className={styles.label}>{point.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}