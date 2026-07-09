import { t } from '../styles/typography';
import { s } from '../styles/spacing';

import type { ReactNode } from 'react';

interface LayerCardProps {
  number: string;
  title: string;
  description: ReactNode;
}

/**
 * Animated geometric backdrop per layer — a nod to the physics of the piece:
 *   01 physical  — a slowly rotating wireframe cube (matter / space)
 *   02 inner     — a travelling sine wave (rhythms of the body and brain)
 *   03 imaginary — expanding interference ripples (the co-created field)
 * Pure SVG + CSS keyframes (see index.css), very low opacity.
 */
function LayerBackdrop({ number }: { number: string }) {
  const stroke = 'rgba(194, 101, 157, 0.35)';

  if (number === '01') {
    return (
      <svg className="layer-backdrop animate-layer-rotate" viewBox="0 0 100 100" aria-hidden="true">
        <g fill="none" stroke={stroke} strokeWidth="0.8">
          <rect x="28" y="28" width="36" height="36" />
          <rect x="38" y="20" width="36" height="36" />
          <line x1="28" y1="28" x2="38" y2="20" />
          <line x1="64" y1="28" x2="74" y2="20" />
          <line x1="28" y1="64" x2="38" y2="56" />
          <line x1="64" y1="64" x2="74" y2="56" />
        </g>
      </svg>
    );
  }

  if (number === '02') {
    return (
      <svg className="layer-backdrop" viewBox="0 0 100 100" aria-hidden="true">
        <g fill="none" stroke={stroke} strokeWidth="0.8">
          <path
            className="animate-layer-wave"
            d="M -20 50 Q -10 35 0 50 T 20 50 T 40 50 T 60 50 T 80 50 T 100 50 T 120 50"
          />
          <path
            className="animate-layer-wave-slow"
            d="M -20 62 Q -10 50 0 62 T 20 62 T 40 62 T 60 62 T 80 62 T 100 62 T 120 62"
            opacity="0.6"
          />
        </g>
      </svg>
    );
  }

  return (
    <svg className="layer-backdrop" viewBox="0 0 100 100" aria-hidden="true">
      <g fill="none" stroke={stroke} strokeWidth="0.8">
        <circle className="animate-layer-ripple" cx="50" cy="50" r="12" />
        <circle className="animate-layer-ripple [animation-delay:1.6s]" cx="50" cy="50" r="12" />
        <circle className="animate-layer-ripple [animation-delay:3.2s]" cx="50" cy="50" r="12" />
      </g>
    </svg>
  );
}

export default function LayerCard({ number, title, description }: LayerCardProps) {
  return (
    <div
      className={`relative overflow-hidden ${s.cardLg} border border-border bg-surface hover:border-accent-primary/40 transition-colors duration-300`}
    >
      <LayerBackdrop number={number} />
      <div className="relative">
        <span className={`${t.number} text-accent-primary/40 ${s.mbSm} block`}>{number}</span>
        <h3 className={`${t.highlight} uppercase tracking-wide text-text-primary ${s.mbSm}`}>
          {title}
        </h3>
        <p className={`${t.caption} text-text-muted`}>{description}</p>
      </div>
    </div>
  );
}
