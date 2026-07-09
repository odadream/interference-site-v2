import { useState } from 'react';
import SectionTag from '../components/SectionTag';
import Accordion from '../components/Accordion';
import Lightbox from '../components/Lightbox';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../hooks/useLang';
import { headings, contextItems, theoryPosters, theoryPostersBlock } from '../data/content';
import { t } from '../styles/typography';
import { s } from '../styles/spacing';
import type { GalleryPhoto } from '../data/content';

const BASE = import.meta.env.BASE_URL;

export default function Context() {
  const revealRef = useScrollReveal<HTMLElement>();
  const { lang } = useLang();
  const h = headings.context;
  const [posterIndex, setPosterIndex] = useState<number | null>(null);

  const items = contextItems.map((item) => ({
    id: item.id,
    title: item.title[lang],
    content: item.content[lang],
  }));

  // Reuse the gallery Lightbox for full-screen poster viewing
  const posterPhotos: GalleryPhoto[] = theoryPosters.map((p) => ({
    src: p.src,
    alt: p.title,
    size: 'landscape',
  }));

  return (
    <section ref={revealRef} id="context" className={`${s.section} bg-bg-primary reveal`}>
      <div className={`max-w-5xl mx-auto ${s.container}`}>
        <SectionTag number="04">{h.tag[lang]}</SectionTag>

        <h2 className={`${t.h2} ${s.mbSm}`}>
          <span className="text-peach">{h.titleA[lang]}</span>{' '}
          <span className="text-text-primary">{h.titleB[lang]}</span>
        </h2>

        <p className={`${t.bodySecondary} text-text-muted ${s.mbLg} max-w-2xl`}>
          {h.intro?.[lang]}
        </p>

        <Accordion items={items} />

        {/* On-stage infographic posters */}
        <div className={s.subsectionGap}>
          <h3 className={`${t.h3} text-text-primary ${s.mbSm}`}>
            {theoryPostersBlock.title[lang]}
          </h3>
          <p className={`${t.bodySecondary} text-text-muted ${s.mbMd} max-w-2xl`}>
            {theoryPostersBlock.intro[lang]}
          </p>

          <div className={`grid grid-cols-2 md:grid-cols-4 ${s.gapSm}`}>
            {theoryPosters.map((poster, i) => (
              <button
                key={poster.src}
                onClick={() => setPosterIndex(i)}
                aria-label={poster.title[lang]}
                className="relative group overflow-hidden cursor-zoom-in text-left border border-border hover:border-accent-primary/40 transition-colors"
              >
                <img
                  src={`${BASE}${poster.src.slice(1)}`}
                  alt={poster.title[lang]}
                  loading="lazy"
                  draggable={false}
                  className="w-full h-auto saturate-[0.9] group-hover:saturate-100 transition-all duration-300"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg-primary/90 to-transparent p-2 pt-6">
                  <span className={`${t.label} text-peach`}>{poster.title[lang]}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {posterIndex !== null && (
        <Lightbox
          photos={posterPhotos}
          index={posterIndex}
          lang={lang}
          onClose={() => setPosterIndex(null)}
          onNavigate={setPosterIndex}
        />
      )}
    </section>
  );
}
