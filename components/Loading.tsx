import styles from './Loading.module.css';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export default function Loading({ size = 'md', text }: LoadingProps) {
  return (
    <div className={styles.loading} role="status" aria-live="polite">
      <div className={`${styles.spinner} ${styles[size]}`}>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
      </div>
      {text && <p className={styles.text}>{text}</p>}
      <span className="sr-only">Loading...</span>
    </div>
  );
}
