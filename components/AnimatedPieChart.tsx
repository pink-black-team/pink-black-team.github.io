'use client';

import { useEffect, useState } from 'react';
import styles from './AnimatedPieChart.module.css';

interface PieDataPoint {
  label: string;
  value: number;
  color: string;
}

interface AnimatedPieChartProps {
  data: PieDataPoint[];
  size?: number;
}

export default function AnimatedPieChart({ data, size = 300 }: AnimatedPieChartProps) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cumulativePercent = 0;

  const slices = data.map((item) => {
    const percent = (item.value / total) * 100;
    const startPercent = cumulativePercent;
    cumulativePercent += percent;

    // SVG circle: circumference = 2πr, here r=16 so circumference ≈ 100.53
    const circumference = 100.53;
    const offset = circumference - (percent / 100) * circumference;

    return {
      ...item,
      percent,
      startPercent,
      offset,
      circumference,
    };
  });

  return (
    <div className={styles.container}>
      <svg
        className={styles.pieChart}
        viewBox="0 0 36 36"
        width={size}
        height={size}
      >
        {slices.map((slice, index) => (
          <circle
            key={index}
            className={`${styles.slice} ${animated ? styles.animated : ''}`}
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke={slice.color}
            strokeWidth="4"
            strokeDasharray={`${animated ? (slice.percent / 100) * slice.circumference : 0} ${slice.circumference}`}
            strokeDashoffset={-((slice.startPercent / 100) * slice.circumference)}
            style={{ transitionDelay: `${index * 200}ms` }}
          />
        ))}
      </svg>

      <div className={styles.legend}>
        {data.map((item, index) => (
          <div key={index} className={styles.legendItem}>
            <div
              className={styles.legendColor}
              style={{ backgroundColor: item.color }}
            />
            <span className={styles.legendLabel}>{item.label}</span>
            <span className={styles.legendValue}>
              {((item.value / total) * 100).toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
