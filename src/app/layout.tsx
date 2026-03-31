import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DailyBoost — Instant Shield. Natural Energy.',
  description:
    'Natural honey & superfood concentrates in a stick pack. Tear, pour, add hot water — get a powerful vitamin drink in seconds.',
  keywords: ['honey', 'superfood', 'vitamin drink', 'natural energy', 'immune boost', 'daily boost'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <CartProvider>
          <Navbar />
          <main style={{ paddingTop: 'var(--nav-height)' }}>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
