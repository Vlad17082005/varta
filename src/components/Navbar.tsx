'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/formula', label: 'Formula' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🍯</span>
          Daily<span className={styles.logoAccent}>Boost</span>
        </Link>

        <div className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${
                pathname === link.href ? styles.linkActive : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link href="/cart" className={styles.cartBtn} aria-label="Cart">
            🛒
            {totalItems > 0 && (
              <span className={styles.cartBadge}>{totalItems}</span>
            )}
          </Link>

          <button
            className={`${styles.menuToggle} ${
              menuOpen ? styles.menuToggleOpen : ''
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
