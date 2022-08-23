import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../styles/components/header.module.css';

import Logo from './Logo';

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <Logo />

      <ul className={styles.menu}>
        <li>
          <Link href="/">
            <a className={router.pathname === '/' ? styles.inverted : ''}>About me</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a className={router.pathname === '/projects' ? styles.inverted : ''}>
              Projects
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
