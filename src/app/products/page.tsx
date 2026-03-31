import type { Metadata } from 'next';
import { products } from '@/data/products';
import ProductsClient from './ProductsClient';
import Icon from '@/components/Icon';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Products — DailyBoost',
  description:
    'Browse our five handcrafted honey & superfood stick-pack blends. Natural, effective, convenient.',
};

const BASE_INGREDIENTS = [
  { icon: 'honey' as const, name: 'Acacia Honey', type: 'Base' },
  { icon: 'honey' as const, name: 'Rapeseed Honey', type: 'Base' },
  { icon: 'leaf' as const, name: 'Apple Pectin', type: 'Binder' },
  { icon: 'jar' as const, name: 'Lemon Jam', type: 'Base' },
];

const FRUITS = [
  { icon: 'berry' as const, name: 'Sea Buckthorn', type: 'Berry' },
  { icon: 'berry' as const, name: 'Orange', type: 'Citrus' },
  { icon: 'berry' as const, name: 'Raspberry', type: 'Berry' },
  { icon: 'berry' as const, name: 'Rosehip', type: 'Berry' },
  { icon: 'berry' as const, name: 'Black Currant', type: 'Berry' },
  { icon: 'berry' as const, name: 'Cranberry', type: 'Berry' },
];

const SPICES = [
  { icon: 'plant' as const, name: 'Ginger Root', type: 'Spice' },
  { icon: 'leaf' as const, name: 'Cinnamon', type: 'Spice' },
  { icon: 'plant' as const, name: 'Clove', type: 'Spice' },
  { icon: 'leaf' as const, name: 'Mint', type: 'Herb' },
];

export default function ProductsPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className="section-title">Our Products</h1>
          <p className={styles.headerSub}>
            Five unique blends — each crafted around real honey, superfoods, and
            natural spices. No chemicals. No shortcuts.
          </p>
        </div>

        {/* Ingredient showcase */}
        <div className={styles.ingredientSection}>
          <h2 className={styles.ingredientTitle}>
            <Icon name="lab" size={20} color="var(--color-gold)" /> Our Ingredients
          </h2>

          <h3 className={styles.ingredientTitle} style={{ fontSize: '1rem', color: 'var(--color-gold)' }}>
            Base
          </h3>
          <div className={styles.ingredientGrid}>
            {BASE_INGREDIENTS.map((ing) => (
              <div className={`glass-card ${styles.ingredientCard}`} key={ing.name}>
                <div className={styles.ingredientEmoji}>
                  <Icon name={ing.icon} size={28} color="var(--color-gold)" />
                </div>
                <div className={styles.ingredientName}>{ing.name}</div>
                <div className={styles.ingredientType}>{ing.type}</div>
              </div>
            ))}
          </div>

          <h3
            className={styles.ingredientTitle}
            style={{ fontSize: '1rem', color: 'var(--color-accent-pink)', marginTop: 'var(--space-xl)' }}
          >
            Fruits &amp; Berries
          </h3>
          <div className={styles.ingredientGrid}>
            {FRUITS.map((ing) => (
              <div className={`glass-card ${styles.ingredientCard}`} key={ing.name}>
                <div className={styles.ingredientEmoji}>
                  <Icon name={ing.icon} size={28} color="var(--color-accent-pink)" />
                </div>
                <div className={styles.ingredientName}>{ing.name}</div>
                <div className={styles.ingredientType}>{ing.type}</div>
              </div>
            ))}
          </div>

          <h3
            className={styles.ingredientTitle}
            style={{ fontSize: '1rem', color: 'var(--color-accent-orange)', marginTop: 'var(--space-xl)' }}
          >
            Spices &amp; Herbs
          </h3>
          <div className={styles.ingredientGrid}>
            {SPICES.map((ing) => (
              <div className={`glass-card ${styles.ingredientCard}`} key={ing.name}>
                <div className={styles.ingredientEmoji}>
                  <Icon name={ing.icon} size={28} color="var(--color-accent-orange)" />
                </div>
                <div className={styles.ingredientName}>{ing.name}</div>
                <div className={styles.ingredientType}>{ing.type}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Product cards */}
        <h2 className="section-title" style={{ marginTop: 'var(--space-3xl)' }}>
          Choose Your Blend
        </h2>
        <p className="section-subtitle">
          Every stick is $3.49 — real nutrition at an honest price.
        </p>

        <ProductsClient products={products} />
      </div>
    </div>
  );
}
