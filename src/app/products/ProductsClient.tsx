'use client';

import { useCart } from '@/context/CartContext';
import type { Product } from '@/data/products';
import styles from './page.module.css';

export default function ProductsClient({ products }: { products: Product[] }) {
  const { addItem } = useCart();

  const handleAdd = (product: Product) => {
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
    <div className={styles.grid}>
      {products.map((product) => (
        <div className={`glass-card ${styles.productDetail}`} key={product.id} id={product.id}>
          <div className={styles.productGlow} style={{ background: product.color }} />
          <div className={styles.productEmoji}>{product.emoji}</div>
          <h3 className={styles.productName}>{product.name}</h3>
          <div className={styles.productTagline} style={{ color: product.color }}>
            {product.tagline}
          </div>
          <p className={styles.productDesc}>{product.description}</p>

          <div className={styles.productIngredients}>
            {product.ingredients.map((ing) => (
              <span key={ing}>{ing}</span>
            ))}
          </div>

          <div className={styles.productBenefit}>✦ {product.benefit}</div>

          <div className={styles.productFooter}>
            <div className={styles.productPrice}>
              ${product.price.toFixed(2)}
              <span className={styles.productPricePer}> / stick</span>
            </div>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handleAdd(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
