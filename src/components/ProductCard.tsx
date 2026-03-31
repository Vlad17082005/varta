'use client';

import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/data/products';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      tagline: product.tagline,
      price: product.price,
      image: product.image,
      color: product.color,
    });
  };

  return (
    <div className={`glass-card ${styles.card}`} id={product.id}>
      <div className={styles.cardGlow} style={{ background: product.color }} />

      <div className={styles.imageWrap}>
        <Image
          src={`/products/${product.id}.png`}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 240px"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <span className={styles.tagline} style={{ color: product.color }}>
        {product.tagline}
      </span>
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.ingredients}>{product.ingredients.join(' · ')}</p>

      <div className={styles.bottom}>
        <span className={styles.price}>${product.price.toFixed(2)}</span>
        <button className={styles.addBtn} onClick={handleAdd}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
