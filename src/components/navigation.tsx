'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/navigation.module.css';

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          {path === '/' ? (
            <Link href="/" className={styles.target}>
              Home
            </Link>
          ) : (
            <Link href="/">Home</Link>
          )}
        </li>
        <li>
          {path === '/about-us' ? (
            <Link href="/about-us" style={{ textDecoration: 'underline' }}>
              About Us
            </Link>
          ) : (
            <Link href="/about-us">About Us</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
