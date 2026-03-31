'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import Icon from '@/components/Icon';
import styles from './page.module.css';

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } =
    useCart();

  if (items.length === 0) {
    return (
      <div className={styles.page}>
        <div className="container">
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>
              <Icon name="cart-empty" size={56} color="var(--color-text-muted)" />
            </div>
            <h1 className={styles.emptyTitle}>Your cart is empty</h1>
            <p className={styles.emptySub}>
              Looks like you haven&apos;t added any DailyBoost sticks yet.
            </p>
            <Link href="/products" className="btn btn-primary">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1>Your Cart</h1>
          <span className={styles.itemCount}>
            {totalItems} {totalItems === 1 ? 'item' : 'items'}
          </span>
        </div>

        <div className={styles.layout}>
          {/* Items */}
          <div className={styles.items}>
            {items.map((item) => {
              return (
                <div className={`glass-card ${styles.item}`} key={item.id}>
                  <div className={styles.itemEmoji}>
                    <Image
                      src={`/products/${item.id}.png`}
                      alt={item.name}
                      width={48}
                      height={48}
                      style={{ objectFit: 'cover', borderRadius: '4px' }}
                    />
                  </div>

                  <div className={styles.itemInfo}>
                    <div className={styles.itemName}>{item.name}</div>
                    <div className={styles.itemTagline}>{item.tagline}</div>
                  </div>

                  <div className={styles.itemControls}>
                    <div className={styles.qtyGroup}>
                      <button
                        className={styles.qtyBtn}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className={styles.qtyVal}>{item.quantity}</span>
                      <button
                        className={styles.qtyBtn}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <span className={styles.itemPrice}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>

                    <button
                      className={styles.removeBtn}
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.name}`}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div className={`glass-card ${styles.summary}`}>
            <h2 className={styles.summaryTitle}>Order Summary</h2>

            <div className={styles.summaryRow}>
              <span>Subtotal ({totalItems} items)</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span style={{ color: 'var(--color-accent-green)' }}>Free</span>
            </div>

            <div className={styles.summaryTotal}>
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button className={styles.checkoutBtn}>
              Proceed to Checkout
            </button>

            <button className={styles.clearBtn} onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
