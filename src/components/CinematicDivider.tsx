import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../hooks/useLang';
import { t } from '../styles/typography';
import type { CinematicDividerData } from '../data/content';

const BASE = import.meta.env.BASE_URL;

interface CinematicDividerProps {
  data: CinematicDividerData;
}

/**
 * Full-bleed film still with a quote from the performance — a cinematic
 * "breather" between text-heavy sections.
 */
export default function CinematicDivider({ data }: CinematicDividerProps) {
  const revealRef = useScrollReveal<HTMLElement>();
  const { lang } = useLang();

  return (
    <section
      ref={revealRef}
      className="relative overflow-hidden reveal"
      aria-label={data.quote[lang]}
    >
      <div
        className="absolute inset-0 bg-cover bg-center saturate-[0.9]"
        style={{ backgroundImage: `url('${BASE}${data.image.slice(1)}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/90 via-bg-primary/40 to-bg-primary/70" />
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-bg-primary to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg-primary to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-36">
        <blockquote className="max-w-2xl">
          <p className={`${t.quote} text-peach text-lg md:text-2xl leading-relaxed mb-4`}>
            «{data.quote[lang]}»
          </p>
          <cite className={`${t.label} text-text-muted not-italic`}>{data.attribution[lang]}</cite>
        </blockquote>
      </div>
    </section>
  );
}
