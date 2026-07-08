import { useState } from 'react';
import SectionTag from '../components/SectionTag';
import Lightbox from '../components/Lightbox';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../hooks/useLang';
import {
  headings,
  backstageIntro,
  backstagePhotos,
  backstageQuotes,
  backstageLinkLabel,
} from '../data/content';
import type { GalleryPhoto } from '../data/content';
import { t } from '../styles/typography';
import { s } from '../styles/spacing';

const BASE = import.meta.env.BASE_URL;

export default function Backstage() {
  const revealRef = useScrollReveal<HTMLElement>();
  const { lang } = useLang();
  const h = headings.backstage;

  const kitchenPhotos: GalleryPhoto[] = backstagePhotos.map((photo) => ({
    src: photo.src,
    alt: photo.alt,
    size: photo.orientation === 'portrait' ? 'portrait' : 'landscape',
  }));

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section ref={revealRef} id="backstage" className={`${s.section} bg-bg-primary reveal`}>
      <div className={`max-w-5xl mx-auto ${s.container}`}>
        <SectionTag number="06">{h.tag[lang]}</SectionTag>

        <h2 className={`${t.h2} ${s.mbSm}`}>
          <span className="text-text-primary">{h.titleA[lang]}</span>{' '}
          <span className="text-peach">{h.titleB[lang]}</span>
        </h2>

        <p className={`${t.bodySecondary} text-text-muted ${s.mbLg} max-w-2xl`}>
          {backstageIntro[lang]}
        </p>

        {/* Rehearsal photos */}
        <div className={`grid grid-cols-2 md:grid-cols-4 ${s.gapSm} ${s.mbLg} items-start`}>
          {backstagePhotos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setLightboxIndex(i)}
              aria-label={photo.alt[lang]}
              className={`group flex flex-col ${s.gapTight} text-left cursor-zoom-in bg-transparent p-0 border-0 w-full`}
            >
              <div
                className={`overflow-hidden ${photo.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
              >
                <img
                  src={`${BASE}${photo.src.slice(1)}`}
                  alt={photo.alt[lang]}
                  loading="lazy"
                  draggable={false}
                  className="w-full h-full object-cover saturate-[0.85] group-hover:saturate-100 transition-all duration-500"
                />
              </div>
              <span className={`${t.caption} text-text-subtle`}>{photo.alt[lang]}</span>
            </button>
          ))}
        </div>

        {/* Quotes from the rehearsal diary */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${s.gapMd}`}>
          {backstageQuotes.map((quote) => (
            <div
              key={quote.href}
              className={`border border-border bg-surface flex flex-col justify-between ${s.cardLg}`}
            >
              <p className={`${t.quote} text-text-primary/85 ${s.mbMd}`}>{quote.text[lang]}</p>
              <div className={`flex flex-col ${s.gapInline}`}>
                <span className={`${t.caption} text-text-muted`}>{quote.source[lang]}</span>
                <a
                  href={quote.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${t.label} text-accent-primary hover:underline`}
                >
                  {backstageLinkLabel[lang]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={kitchenPhotos}
          index={lightboxIndex}
          lang={lang}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(idx) => setLightboxIndex(idx)}
        />
      )}
    </section>
  );
}
