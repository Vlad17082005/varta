export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  ingredients: string[];
  benefit: string;
  price: number;
  color: string;
  gradient: string;
  emoji: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 'c-bomb',
    name: 'C-Bomb',
    tagline: 'Massive Vitamin C Hit',
    description:
      'A powerful blast of sea buckthorn and orange zest melted into golden honey. Your go-to shield when you feel a cold creeping in.',
    ingredients: ['Acacia Honey', 'Sea Buckthorn', 'Orange Zest', 'Apple Pectin'],
    benefit: 'Vitamin C powerhouse for immune defense',
    price: 3.49,
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b, #fb923c)',
    emoji: '🍊',
    image: '/products/c-bomb.webp',
  },
  {
    id: 'pink-power',
    name: 'Pink Power',
    tagline: 'Immunity Classic',
    description:
      'Raspberry and rosehip blended with rich honey — the timeless duo for staying healthy. Beautiful pink hue, delightful taste.',
    ingredients: ['Rapeseed Honey', 'Raspberry', 'Rosehip', 'Lemon Jam'],
    benefit: 'Classic immune support with antioxidants',
    price: 3.49,
    color: '#f472b6',
    gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    emoji: '🌸',
    image: '/products/pink-power.webp',
  },
  {
    id: 'winter-spice',
    name: 'Winter Spice',
    tagline: 'Warming Comfort',
    description:
      'Ginger, cinnamon and apple married with honey for a warming drink that beats any mulled wine. Perfect for cold evenings.',
    ingredients: ['Acacia Honey', 'Ginger Root', 'Cinnamon', 'Apple', 'Apple Pectin'],
    benefit: 'Warming effect, natural cold relief',
    price: 3.49,
    color: '#d97706',
    gradient: 'linear-gradient(135deg, #d97706, #92400e)',
    emoji: '🔥',
    image: '/products/winter-spice.webp',
  },
  {
    id: 'zesty-morning',
    name: 'Zesty Morning',
    tagline: 'Fresh Start Energy',
    description:
      'Lemon, mint and ginger in a honey base — a morning wake-up call that tastes incredible. Replace your coffee ritual.',
    ingredients: ['Acacia Honey', 'Lemon', 'Mint', 'Ginger Root', 'Lemon Jam'],
    benefit: 'Maximum freshness and morning energy',
    price: 3.49,
    color: '#84cc16',
    gradient: 'linear-gradient(135deg, #84cc16, #65a30d)',
    emoji: '🍋',
    image: '/products/zesty-morning.webp',
  },
  {
    id: 'black-currant-kick',
    name: 'Black Currant Kick',
    tagline: 'Deep Antioxidant Power',
    description:
      'Black currant and clove infused in honey — a deep, rich flavour packed with antioxidants. Bold and unapologetically intense.',
    ingredients: ['Rapeseed Honey', 'Black Currant', 'Clove', 'Apple Pectin'],
    benefit: 'Deep flavour with maximum antioxidants',
    price: 3.49,
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, #a855f7, #7c3aed)',
    emoji: '🫐',
    image: '/products/black-currant-kick.webp',
  },
];
