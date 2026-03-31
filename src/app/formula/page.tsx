import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Formula — DailyBoost',
  description:
    'Discover how DailyBoost is made — from raw honey sourcing to cold-blending and stick-pack sealing.',
};

const STEPS = [
  {
    icon: 'bee' as const,
    title: 'Sourcing the Finest Honey',
    desc: 'We partner with local beekeepers to source premium acacia and rapeseed honey. Every batch is lab-tested to ensure it\'s raw, unprocessed, and rich in natural enzymes.',
    details: ['Acacia Honey', 'Rapeseed Honey', 'Lab-Tested Purity', 'No Heating'],
  },
  {
    icon: 'berry' as const,
    title: 'Selecting Superfoods',
    desc: 'Only the best berries, citrus, and spices make it into our blends. We use freeze-dried and cold-pressed extracts to lock in maximum vitamins and antioxidants.',
    details: ['Sea Buckthorn', 'Raspberry', 'Rosehip', 'Ginger', 'Cinnamon', 'Black Currant'],
  },
  {
    icon: 'microscope' as const,
    title: 'Cold-Blending Process',
    desc: 'Unlike traditional manufacturing, we never heat our concentrates above 40°C. This cold-blending technique preserves the delicate vitamins, enzymes, and probiotics that heat would destroy.',
    details: ['Below 40°C', 'Enzyme-Safe', 'Vitamin Preserved', 'No Pasteurization'],
  },
  {
    icon: 'jar' as const,
    title: 'Thick Concentrate Infusion',
    desc: 'Apple pectin is added as a natural thickener, creating that signature dense, jam-like texture. This thick format keeps nutrients stable far longer than dry powders.',
    details: ['Apple Pectin Binder', 'Jam-like Texture', 'Extended Shelf Life', 'Superior Absorption'],
  },
  {
    icon: 'package' as const,
    title: 'Sealed Stick Packing',
    desc: 'Each dose is portioned into individual stick packs, nitrogen-flushed to prevent oxidation, and sealed for maximum freshness. Just tear, pour, and drink.',
    details: ['Single-Dose Portions', 'Nitrogen-Flushed', 'Tear-Open Design', 'Travel-Ready'],
  },
];

const QUALITY = [
  {
    icon: 'lab' as const,
    title: 'Lab-Tested',
    desc: 'Every batch undergoes third-party testing for purity, potency, and contaminants.',
  },
  {
    icon: 'ban' as const,
    title: 'No Additives',
    desc: 'Zero artificial colours, flavours, preservatives, or sweeteners. Just nature.',
  },
  {
    icon: 'plant' as const,
    title: 'Sustainably Sourced',
    desc: 'We support local beekeepers and use sustainable farming partners for all berries and herbs.',
  },
];

export default function FormulaPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className="section-title">Our Formula</h1>
          <p className={styles.headerSub}>
            From raw honey to your cup — see exactly how we craft each
            DailyBoost stick with care, science, and zero shortcuts.
          </p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {STEPS.map((step, i) => (
            <div className={styles.timelineStep} key={i}>
              <div className={styles.timelineDot}>{i + 1}</div>
              <div className={`glass-card ${styles.timelineCard}`}>
                <div className={styles.timelineIcon}>
                  <Icon name={step.icon} size={32} color="var(--color-gold)" />
                </div>
                <h3 className={styles.timelineTitle}>{step.title}</h3>
                <p className={styles.timelineDesc}>{step.desc}</p>
                <div className={styles.timelineDetails}>
                  {step.details.map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality */}
        <div className={styles.qualitySection}>
          <h2 className="section-title">Quality Promise</h2>
          <p className="section-subtitle">
            We hold ourselves to the highest standards at every step.
          </p>
          <div className={styles.qualityGrid}>
            {QUALITY.map((q, i) => (
              <div className={`glass-card ${styles.qualityCard}`} key={i}>
                <div className={styles.qualityIcon}>
                  <Icon name={q.icon} size={32} color="var(--color-gold)" />
                </div>
                <h3 className={styles.qualityTitle}>{q.title}</h3>
                <p className={styles.qualityDesc}>{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison */}
      <div className={styles.comparison}>
        <div className="container">
          <h2 className="section-title">How We Compare</h2>
          <p className="section-subtitle">
            See why a thick honey concentrate beats the alternatives.
          </p>

          <table className={styles.compTable}>
            <thead>
              <tr>
                <th>Feature</th>
                <th>DailyBoost</th>
                <th>Powder Sachets</th>
                <th>Energy Drinks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ingredients</td>
                <td className={styles.compHighlight}>100% Natural</td>
                <td>Synthetic vitamins</td>
                <td>Chemicals + sugar</td>
              </tr>
              <tr>
                <td>Vitamin Retention</td>
                <td className={styles.compHighlight}>95%+ (cold-blend)</td>
                <td>40-60% (heat-dried)</td>
                <td>Minimal</td>
              </tr>
              <tr>
                <td>Energy Source</td>
                <td className={styles.compHighlight}>Natural glucose</td>
                <td>Added sugar</td>
                <td>Caffeine + taurine</td>
              </tr>
              <tr>
                <td>Crash / Side-effects</td>
                <td className={styles.compHighlight}>None</td>
                <td>Possible</td>
                <td>Severe crash</td>
              </tr>
              <tr>
                <td>Taste</td>
                <td className={styles.compHighlight}>Delicious</td>
                <td>Artificial</td>
                <td>Overpowering</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
