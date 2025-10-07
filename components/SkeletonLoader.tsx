import styles from './SkeletonLoader.module.css';

interface SkeletonLoaderProps {
  type?: 'text' | 'card' | 'avatar' | 'image';
  count?: number;
  className?: string;
}

export default function SkeletonLoader({
  type = 'text',
  count = 1,
  className = '',
}: SkeletonLoaderProps) {
  const renderSkeleton = () => {
    switch (type) {
      case 'avatar':
        return <div className={`${styles.skeleton} ${styles.avatar}`} />;
      case 'image':
        return <div className={`${styles.skeleton} ${styles.image}`} />;
      case 'card':
        return (
          <div className={`${styles.skeletonCard}`}>
            <div className={`${styles.skeleton} ${styles.image}`} />
            <div className={`${styles.skeleton} ${styles.title}`} />
            <div className={`${styles.skeleton} ${styles.text}`} />
            <div className={`${styles.skeleton} ${styles.text}`} style={{ width: '80%' }} />
          </div>
        );
      case 'text':
      default:
        return <div className={`${styles.skeleton} ${styles.text}`} />;
    }
  };

  return (
    <div className={className} role="status" aria-live="polite" aria-label="Loading content">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>{renderSkeleton()}</div>
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
}
