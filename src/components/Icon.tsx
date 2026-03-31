interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

const icons: Record<string, (size: number, color: string) => React.ReactNode> = {
  honey: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C12 2 8 6 8 10a4 4 0 0 0 8 0c0-4-4-8-4-8z" fill={c} fillOpacity="0.15" />
      <path d="M12 14v4M10 18h4M9 22h6" />
    </svg>
  ),
  scissors: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  ),
  pour: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2h8l-1 6H9L8 2z" />
      <path d="M12 8v3" />
      <path d="M9 14c0 0 0.5-1 3-1s3 1 3 1" />
      <path d="M7 14l-1 8h12l-1-8" />
      <path d="M12 11c0 0 1 1 1 2" fill={c} fillOpacity="0.15" />
    </svg>
  ),
  cup: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" fill={c} fillOpacity="0.08" />
      <line x1="6" y1="2" x2="6" y2="4" />
      <line x1="10" y1="2" x2="10" y2="4" />
      <line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  ),
  leaf: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.5 10-10 10z" fill={c} fillOpacity="0.1" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
  strength: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 6.5L17.5 17.5" />
      <path d="M3 10l3.5-3.5L10 3" />
      <path d="M14 21l3.5-3.5L21 14" />
      <path d="M14 3l3.5 3.5" /><path d="M3 14l3.5 3.5" />
      <circle cx="12" cy="12" r="2" fill={c} fillOpacity="0.2" />
    </svg>
  ),
  lightning: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill={c} fillOpacity="0.1" />
    </svg>
  ),
  backpack: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10H4V10z" fill={c} fillOpacity="0.08" />
      <path d="M9 6V4a3 3 0 0 1 6 0v2" />
      <path d="M8 20v-6h8v6" />
      <line x1="12" y1="14" x2="12" y2="16" />
    </svg>
  ),
  building: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" fill={c} fillOpacity="0.05" />
      <line x1="9" y1="6" x2="9" y2="6.01" /><line x1="15" y1="6" x2="15" y2="6.01" />
      <line x1="9" y1="10" x2="9" y2="10.01" /><line x1="15" y1="10" x2="15" y2="10.01" />
      <line x1="9" y1="14" x2="9" y2="14.01" /><line x1="15" y1="14" x2="15" y2="14.01" />
      <path d="M10 22v-4h4v4" />
    </svg>
  ),
  shield: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill={c} fillOpacity="0.08" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  pill: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.5 1.5l-8 8a5.66 5.66 0 0 0 8 8l8-8a5.66 5.66 0 0 0-8-8z" fill={c} fillOpacity="0.08" />
      <line x1="6" y1="14" x2="14" y2="6" />
    </svg>
  ),
  fuel: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="12" height="18" rx="1" fill={c} fillOpacity="0.05" />
      <rect x="6" y="8" width="6" height="5" rx="0.5" />
      <path d="M15 10h2a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0 2-2V8l-3-3" />
    </svg>
  ),
  coffee: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" fill={c} fillOpacity="0.08" />
      <line x1="6" y1="2" x2="6" y2="4" />
      <line x1="10" y1="2" x2="10" y2="4" />
    </svg>
  ),
  cart: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
  vending: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" fill={c} fillOpacity="0.05" />
      <rect x="7" y="5" width="10" height="8" rx="1" />
      <circle cx="15" cy="17" r="1" />
      <line x1="8" y1="17" x2="12" y2="17" />
    </svg>
  ),
  bee: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="14" rx="5" ry="6" fill={c} fillOpacity="0.08" />
      <path d="M7 14h10M7 11h10M7 17h10" />
      <circle cx="12" cy="6" r="3" />
      <path d="M7 3l-2-1M17 3l2-1" />
      <path d="M6 12c-2-1-3 0-4 1M18 12c2-1 3 0 4 1" />
    </svg>
  ),
  berry: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="14" r="7" fill={c} fillOpacity="0.08" />
      <circle cx="10" cy="12" r="1.5" fill={c} fillOpacity="0.15" />
      <circle cx="14" cy="12" r="1.5" fill={c} fillOpacity="0.15" />
      <circle cx="12" cy="16" r="1.5" fill={c} fillOpacity="0.15" />
      <path d="M12 7V4M10 5l2-3 2 3" />
    </svg>
  ),
  microscope: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18h8" /><path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0-7-7" />
      <path d="M9 14h1" /><path d="M9 6v8" />
      <circle cx="11" cy="4" r="2" />
    </svg>
  ),
  jar: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2h8v3H8V2z" />
      <path d="M6 5h12v2a2 2 0 0 1-1 1.73V20a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8.73A2 2 0 0 1 6 7V5z" fill={c} fillOpacity="0.08" />
      <path d="M10 12h4M10 16h4" />
    </svg>
  ),
  package: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.5 9.4l-9-5.19" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" fill={c} fillOpacity="0.05" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  lab: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6M10 3v7.5L6 18a2 2 0 0 0 1.7 3h8.6a2 2 0 0 0 1.7-3L14 10.5V3" fill={c} fillOpacity="0.08" />
      <path d="M8.5 14h7" />
    </svg>
  ),
  ban: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    </svg>
  ),
  plant: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 20h10" /><path d="M12 20v-8" />
      <path d="M12 12c-3 0-6-2-6-6 3 0 6 2 6 6z" fill={c} fillOpacity="0.1" />
      <path d="M12 8c3 0 6-2 6-6-3 0-6 2-6 6z" fill={c} fillOpacity="0.1" />
    </svg>
  ),
  eye: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" fill={c} fillOpacity="0.15" />
    </svg>
  ),
  handshake: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 8l-4-4-6 6-4-4-4 4 8 8 2-2 4 4 4-4-4-4 4-4z" fill={c} fillOpacity="0.08" />
    </svg>
  ),
  target: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" fill={c} fillOpacity="0.2" />
    </svg>
  ),
  phone: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" fill={c} fillOpacity="0.05" />
      <line x1="12" y1="18" x2="12" y2="18.01" />
    </svg>
  ),
  video: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="15" height="16" rx="2" fill={c} fillOpacity="0.05" />
      <polygon points="17 8 22 5 22 19 17 16 17 8" fill={c} fillOpacity="0.1" />
    </svg>
  ),
  'cart-empty': (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      <line x1="10" y1="9" x2="16" y2="9" />
    </svg>
  ),
};

export default function Icon({ name, size = 24, color = 'currentColor', className }: IconProps) {
  const renderIcon = icons[name];
  if (!renderIcon) return null;

  return (
    <span className={className} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', lineHeight: 0 }}>
      {renderIcon(size, color)}
    </span>
  );
}
