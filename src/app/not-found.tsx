import { Metadata } from 'next';
import styles from '@/styles/not-found.module.css';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <div className={styles.main}>
      <h1>Not Found</h1>
    </div>
  );
}
