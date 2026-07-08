import { useState } from 'react';
import SectionTag from '../components/SectionTag';
import Lightbox from '../components/Lightbox';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../hooks/useLang';
import { headings, galleryPhotos } from '../data/content';
import { t } from '../styles/typography';
import { s } from '../styles/spacing';

const BASE = import.meta.env.BASE_URL;

const sizeClasses: Record<string, string> = {
  featured: 'col-span-2 row-span-2',
  landscape: 'col-span-2 row-span-1',
  portrait: 'col-span-1 row-span-2',
  small: 'col-span-1 row-span-1',
};

export default function PhotoGallery() {
  const revealRef = useScrollReveal<HTMLElement>();
  const { lang } = useLang();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const mosaicPhotos = galleryPhotos.filter((photo) => photo.size !== 'wide');
  const closingPhoto = galleryPhotos.find((photo) => photo.size === 'wide');
  const closingIndex = closingPhoto ? galleryPhotos.indexOf(closingPhoto) : -1;
  const h = headings.gallery;

  return (
    <section ref={revealRef} id="gallery" className={`${s.section} bg-bg-primary reveal`}>
      <div className={`max-w-5xl mx-auto ${s.container}`}>
        <div className={s.mbSm}>
          <SectionTag number="01">{h.tag[lang]}</SectionTag>
        </div>

        <h2 className={`${t.h2} ${s.mbSm}`}>
          <span className="text-text-primary">{h.titleA[lang]}</span>{' '}
          <span className="text-peach">{h.titleB[lang]}</span>
        </h2>

        <p className={`${t.bodySecondary} text-text-muted ${s.mbLg} max-w-xl`}>{h.intro?.[lang]}</p>

        <div className={`flex flex-col ${s.gapSm} ${s.mbLg}`}>
          <div
            className={`grid grid-cols-2 md:grid-cols-4 grid-flow-dense ${s.gapSm} auto-rows-[180px] md:auto-rows-[200px]`}
          >
            {mosaicPhotos.map((photo) => {
              const i = galleryPhotos.indexOf(photo);
              return (
                <button
                  key={photo.src}
                  onClick={() => setLightboxIndex(i)}
                  aria-label={photo.alt[lang]}
                  className={`relative group overflow-hidden cursor-zoom-in text-left ${sizeClasses[photo.size] ?? 'col-span-1 row-span-1'}`}
                >
                  <img
                    src={`${BASE}${photo.src.slice(1)}`}
                    alt={photo.alt[lang]}
                    loading={i < 4 ? 'eager' : 'lazy'}
                    draggable={false}
                    className="w-full h-full object-cover saturate-[0.85] group-hover:saturate-100 group-hover:scale-[1.02] transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className={`${t.caption} text-text-muted`}>{photo.alt[lang]}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Closing shot — full width, uncropped (native aspect ratio) */}
          {closingPhoto && (
            <button
              onClick={() => setLightboxIndex(closingIndex)}
              aria-label={closingPhoto.alt[lang]}
              className={`relative group overflow-hidden cursor-zoom-in text-left w-full`}
            >
              <img
                src={`${BASE}${closingPhoto.src.slice(1)}`}
                alt={closingPhoto.alt[lang]}
                loading="lazy"
                draggable={false}
                className="w-full h-auto object-contain saturate-[0.85] group-hover:saturate-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className={`${t.caption} text-text-muted`}>{closingPhoto.alt[lang]}</span>
              </div>
            </button>
          )}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={galleryPhotos}
          index={lightboxIndex}
          lang={lang}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
