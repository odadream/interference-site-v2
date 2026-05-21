# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page for the neuro-performance "Интерференция реальностей" (Interference of Realities), deployed at [interference.odadream.art](https://interference.odadream.art/). Stack: React 19, TypeScript 6, Vite 8, Tailwind CSS 3.4, KaTeX.

## Commands

```bash
npm run dev          # Vite dev server with HMR
npm run build        # tsc -b && vite build (must pass before committing)
npm run preview      # Preview production build locally
npm run lint         # ESLint
npm run lint:fix     # ESLint with auto-fix
npm run format       # Prettier (writes)
npm run format:check # Prettier (check only)
```

Before committing, all three must pass: `npm run lint && npm run format:check && npm run build`

## Architecture

`App.tsx` composes the full single-page layout in order:

```
ScrollProgress → Header → main:
  [DEV only] StyleGuide
  Hero → PartnersStrip → PhotoArchive → About → Program →
  Context → InterferenceLab → FAQ → Authors →
  [SHOW_MEDIA] Media (lazy)
→ Footer
```

- **`src/sections/`** — full-page sections (one per content block)
- **`src/components/`** — reusable primitives (Accordion, Timeline, LayerCard, TeamCard, WaveInterference, InlineMath, QuantumButton, etc.)
- **`src/data/content.tsx`** — all user-facing text content and data interfaces; edit here for copy changes
- **`src/data/features.ts`** — feature flags (currently `SHOW_MEDIA`, date-gated to 2026-05-16)
- **`src/hooks/`** — `useParticles.ts`, `useScrollReveal.ts`
- **`src/styles/spacing.ts`** — spacing token object `s` (use instead of ad-hoc Tailwind spacing)
- **`src/styles/typography.ts`** — typography token object `t` (use instead of ad-hoc Tailwind text sizing)

## Critical Rules

### Tailwind: always use complete class strings

Tailwind JIT scans statically — dynamic concatenation breaks it:

```tsx
// ❌ JIT won't find this
<div className={`bg-${color}`} />

// ✅ Full string required
<div className="bg-accent-primary" />

// ✅ For dynamic values use style prop
<div style={{ backgroundColor: color.hex }} />
```

### Colors — use design tokens only

All colors come from the poster via k-means clustering. Never use raw hex in `className`:

```tsx
// ❌
<div className="text-[#c2659d]" />
// ✅
<div className="text-accent-primary" />
```

Color tokens defined in `tailwind.config.js`:
- Backgrounds: `bg-primary` (#0e0f15), `bg-secondary` (#1b1a2b)
- Accents: `accent-primary` (#c2659d), `accent-secondary` (#8d4e79), `accent-tertiary` (#673968)
- Text: `text-primary` (#e9d0c5), `text-muted` (#888092), `text-subtle` (#575c71)
- Functional: `border`, `border-hover`, `surface`

To add a new color: update `tailwind.config.js` → `src/index.css` (CSS var in `:root`) → `src/tokens.json` (regenerate via `python scripts/color-analysis.py`).

### Typography and spacing — use token objects

Import `t` from `src/styles/typography.ts` and `s` from `src/styles/spacing.ts` for consistent sizing:

```tsx
import { t } from '../styles/typography';
import { s } from '../styles/spacing';

<h2 className={`${t.h2} text-text-primary ${s.mbMd}`}>...</h2>
```

### Font

**JetBrains Mono only** — do not add other fonts. All text uses `font-mono`.

### Component conventions

- One component per file, default export: `export default function ComponentName()`
- Type props with `interface`, never use `React.FC`
- Styling: Tailwind only; no CSS modules, no styled-components
- Global styles only in `src/index.css` (scanlines, vignette, scrollbar, selection)

### KaTeX

Math rendering is lazy-loaded via `InlineMath` component to keep the main bundle small (~260 KB). Use `<InlineMath>` for any LaTeX in sections.

## Deployment

Push to `master` → GitHub Actions builds and deploys to GitHub Pages automatically (`CNAME: interference.odadream.art`). The `dist/` folder is committed separately and also serves as the build artifact.
