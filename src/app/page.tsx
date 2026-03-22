import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={`${styles.heroGlow} ${styles.heroGlow1}`} />
        <div className={`${styles.heroGlow} ${styles.heroGlow2}`} />

        <div className={styles.heroContent}>
          <div className={`${styles.heroBadge} animate-fade-in`}>
            🍯 100% Natural Honey Concentrates
          </div>

          <h1 className={`${styles.heroTitle} animate-fade-in-up delay-1`}>
            Instant Shield.{' '}
            <span className={styles.heroTitleAccent}>Natural Energy.</span>
          </h1>

          <p className={`${styles.heroSub} animate-fade-in-up delay-2`}>
            Tear a stick, pour it into your cup, add hot water — get a powerful
            vitamin drink packed with real honey &amp; superfoods in seconds.
          </p>

          <div className={`${styles.heroBtns} animate-fade-in-up delay-3`}>
            <Link href="/products" className="btn btn-primary">
              Shop Now
            </Link>
            <Link href="/formula" className="btn btn-secondary">
              How It&apos;s Made
            </Link>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className={`section ${styles.howItWorks}`}>
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Three steps to your daily vitamin shield — no mess, no hassle.
          </p>

          <div className={styles.steps}>
            {[
              {
                icon: '✂️',
                title: 'Tear',
                desc: 'Rip open the stick pack along the perforation — no scissors needed.',
              },
              {
                icon: '🫗',
                title: 'Pour',
                desc: 'Squeeze the thick honey concentrate into your favourite cup.',
              },
              {
                icon: '☕',
                title: 'Drink',
                desc: 'Add hot water, stir, and enjoy a powerful vitamin-packed drink.',
              },
            ].map((s, i) => (
              <div className={styles.step} key={i}>
                <div className={styles.stepIcon}>{s.icon}</div>
                <span className={styles.stepNum}>{i + 1}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY DAILY BOOST ===== */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why DailyBoost?</h2>
          <p className="section-subtitle">
            Ditch the chemical powders and sugary energy drinks. Here&apos;s why
            real works better.
          </p>

          <div className={styles.features}>
            {[
              {
                icon: '🌿',
                title: '100% Natural',
                desc: 'Real honey, real fruit, real spices — zero artificial additives, colours, or preservatives.',
              },
              {
                icon: '💪',
                title: 'Truly Effective',
                desc: 'Thick concentrate preserves vitamins far better than dry powders or pills.',
              },
              {
                icon: '⚡',
                title: 'Clean Energy',
                desc: 'Natural glucose from honey plus bee pollen bio-stimulants — no sugar crash.',
              },
              {
                icon: '🎒',
                title: 'Ultra Portable',
                desc: 'Fits in your pocket. No need to carry separate honey, lemon, or ginger.',
              },
            ].map((f, i) => (
              <div className={`glass-card ${styles.feature}`} key={i}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== USE CASES ===== */}
      <section className={`section ${styles.useCases}`}>
        <div className="container">
          <h2 className="section-title">When You Need It</h2>
          <p className="section-subtitle">
            DailyBoost fits every moment life throws at you.
          </p>

          <div className={styles.cases}>
            {[
              {
                emoji: '🏢',
                title: 'Long Shifts at Work',
                desc: 'When your focus drops after hours at the desk, a DailyBoost stick brings you back without the jitters of another espresso.',
              },
              {
                emoji: '🤧',
                title: 'Cold & Flu Season',
                desc: 'Feel a cold creeping in? Grab a C-Bomb or Pink Power for a natural, fast-acting immune response.',
              },
              {
                emoji: '💊',
                title: 'Hate Swallowing Pills?',
                desc: 'Replace your morning vitamin routine with a delicious warm drink that delivers the same nutrients.',
              },
            ].map((c, i) => (
              <div className={`glass-card ${styles.case}`} key={i}>
                <div className={styles.caseEmoji}>{c.emoji}</div>
                <h3 className={styles.caseTitle}>{c.title}</h3>
                <p className={styles.caseDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCT PREVIEW ===== */}
      <section className={`section ${styles.productPreview}`}>
        <div className="container">
          <h2 className="section-title">Our Flavours</h2>
          <p className="section-subtitle">
            Five handcrafted blends — each designed around a specific need.
          </p>

          <div className={styles.productGrid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className={styles.viewAll}>
            <Link href="/products" className="btn btn-secondary">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHERE TO FIND US ===== */}
      <section className={`section ${styles.channels}`}>
        <div className="container">
          <h2 className="section-title">Where to Find Us</h2>
          <p className="section-subtitle">
            Grab a DailyBoost wherever life takes you.
          </p>

          <div className={styles.channelGrid}>
            {[
              { icon: '⛽', name: 'Gas Stations', sub: 'Shell, BP & more' },
              { icon: '☕', name: 'Coffee Shops', sub: 'Perfect add-on to your order' },
              { icon: '🛒', name: 'Supermarkets', sub: 'Checkout zone impulse buy' },
              { icon: '🏢', name: 'Office Vending', sub: 'In your building lobby' },
            ].map((ch, i) => (
              <div className={`glass-card ${styles.channel}`} key={i}>
                <div className={styles.channelIcon}>{ch.icon}</div>
                <div className={styles.channelName}>{ch.name}</div>
                <div className={styles.channelSub}>{ch.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={styles.cta}>
        <div className={styles.ctaGlow} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className={styles.ctaTitle}>
            Ready to <span className="section-title" style={{ display: 'inline' }}>Boost</span> Your Day?
          </h2>
          <p className={styles.ctaSub}>
            Try any of our five flavours — your body will thank you.
          </p>
          <Link href="/products" className="btn btn-primary">
            Shop DailyBoost →
          </Link>
        </div>
      </section>
    </>
  );
}
