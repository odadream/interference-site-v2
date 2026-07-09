/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Background cluster (22.9%)
        'bg-primary': '#0e0f15',
        'bg-secondary': '#1b1a2b',
        // Surface cluster (32.4%)
        surface: 'rgba(44, 39, 69, 0.4)',
        // Accent cluster (28.8%)
        'accent-primary': '#c2659d',
        'accent-secondary': '#8d4e79',
        'accent-tertiary': '#673968',
        // Highlight cluster (15.9%)
        'text-primary': '#e9d0c5',
        'text-muted': '#888092',
        'text-subtle': '#575c71',
        // Special
        peach: '#d2aa98',
        'warm-gray': '#b3816f',
        // Functional tokens — baked-in rgba (not plain hex), so Tailwind's
        // opacity modifier (`border-border/40`) CANNOT scale these further —
        // the modifier silently no-ops and the class renders at the alpha
        // baked in below. Never suffix `border`/`border-hover`/`border-faint`
        // with `/NN`; add a new named weight instead if one is needed.
        'border-faint': 'rgba(194, 101, 157, 0.1)', // true hairline (photo mosaics)
        border: 'rgba(194, 101, 157, 0.2)', // standard frame weight (cards, stills)
        'border-hover': 'rgba(194, 101, 157, 0.4)', // emphasis / active weight
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-accent': '0 0 40px rgba(194, 101, 157, 0.3), 0 0 80px rgba(194, 101, 157, 0.1)',
        'glow-secondary': '0 0 40px rgba(141, 78, 121, 0.3), 0 0 80px rgba(141, 78, 121, 0.1)',
      },
    },
  },
  plugins: [],
};
