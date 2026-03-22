import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us — DailyBoost',
  description:
    'Learn the story behind DailyBoost — why we believe your daily drink should heal, not harm.',
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className="section-title">About DailyBoost</h1>
          <p className={styles.headerSub}>
            We started with a simple question: why is everything on the pharmacy
            shelf full of chemicals when nature already has the answer?
          </p>
        </div>

        {/* Story */}
        <div className={styles.story}>
          <div className={styles.storyContent}>
            <h2>
              Your Drink Should <span>Heal, Not Harm</span>
            </h2>
            <p>
              We were tired of choosing between chemical-laden cold remedies and
              sugar-packed energy drinks that leave you crashing hours later. So
              we set out to create something different.
            </p>
            <p>
              DailyBoost is a thick, natural concentrate made from real honey,
              superfoods, and aromatic spices — all in a portable stick pack.
              Just tear it open, pour it into your cup, add hot water, and in
              seconds you have a powerful vitamin drink.
            </p>
            <p>
              No pills. No powders. No artificial anything. Just nature,
              concentrated.
            </p>
          </div>
          <div className={styles.storyVisual}>
            <div className={styles.storyGraphic}>
              🍯
              <span className={styles.storyGraphicText}>
                Instant Shield.
              </span>
              <span className={styles.storyGraphicSub}>
                Natural Energy.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className={styles.values}>
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">
            Every decision we make is guided by these four principles.
          </p>
          <div className={styles.valuesGrid}>
            {[
              {
                icon: '🌿',
                title: 'Radical Transparency',
                desc: 'Every ingredient on our label is something you can actually pronounce. No "natural flavourings" hiding synthetic junk.',
              },
              {
                icon: '🔬',
                title: 'Science-Backed',
                desc: 'Our blends are designed with nutritionists to maximise bioavailability and immune support.',
              },
              {
                icon: '🤝',
                title: 'Community First',
                desc: 'We partner with local beekeepers and farmers, ensuring fair prices and sustainable practices.',
              },
              {
                icon: '🎯',
                title: 'Accessible Wellness',
                desc: 'Premium nutrition shouldn\'t be a luxury. Our $3.49 sticks make daily wellness affordable for everyone.',
              },
            ].map((v, i) => (
              <div className={`glass-card ${styles.valueCard}`} key={i}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        {/* Mission quote */}
        <div className={styles.mission}>
          <blockquote className={styles.missionQuote}>
            &ldquo;We believe that a simple <span>warm drink</span> — made the
            right way — can be the most powerful daily habit for your health.&rdquo;
          </blockquote>
          <p className={styles.missionAttr}>— The DailyBoost Team</p>
        </div>

        {/* Digital tools */}
        <div className={styles.digital}>
          <h2 className="section-title">Digital Experience</h2>
          <p className="section-subtitle">
            Every stick connects you to a wider wellness ecosystem.
          </p>

          <div className={styles.digitalGrid}>
            <div className={`glass-card ${styles.digitalCard}`}>
              <div className={styles.digitalIcon}>📱</div>
              <h3 className={styles.digitalTitle}>QR Code on Every Stick</h3>
              <p className={styles.digitalDesc}>
                Scan the QR code on any DailyBoost stick to unlock exclusive
                tips, recipes, and upgrade offers. It&apos;s your gateway from a
                single purchase to a wellness routine.
              </p>
            </div>
            <div className={`glass-card ${styles.digitalCard}`}>
              <div className={styles.digitalIcon}>🎬</div>
              <h3 className={styles.digitalTitle}>TikTok &amp; Reels</h3>
              <p className={styles.digitalDesc}>
                Follow us for quick lifehack content — boosting energy during
                night shifts, staying healthy as a student, and turning your tea
                break into a wellness moment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
