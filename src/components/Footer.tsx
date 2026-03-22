import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.brand}>
          <div className={styles.brandLogo}>
            🍯 Daily<span className={styles.brandLogoAccent}>Boost</span>
          </div>
          <p>
            Instant Shield. Natural Energy. Real honey &amp; superfood
            concentrates in a convenient stick pack — just add hot water.
          </p>
        </div>

        <div className={styles.column}>
          <h4>Shop</h4>
          <Link href="/products">All Products</Link>
          <Link href="/products#c-bomb">C-Bomb</Link>
          <Link href="/products#pink-power">Pink Power</Link>
          <Link href="/products#winter-spice">Winter Spice</Link>
        </div>

        <div className={styles.column}>
          <h4>Company</h4>
          <Link href="/about">About Us</Link>
          <Link href="/formula">Our Formula</Link>
          <Link href="/cart">Cart</Link>
        </div>

        <div className={styles.column}>
          <h4>Find Us</h4>
          <a href="#">Gas Stations</a>
          <a href="#">Coffee Shops</a>
          <a href="#">Supermarkets</a>
          <a href="#">Vending Machines</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>&copy; {new Date().getFullYear()} DailyBoost. All rights reserved.</span>
        <div className={styles.socials}>
          <a href="#" aria-label="TikTok">🎵</a>
          <a href="#" aria-label="Instagram">📸</a>
          <a href="#" aria-label="Twitter">𝕏</a>
        </div>
      </div>
    </footer>
  );
}
