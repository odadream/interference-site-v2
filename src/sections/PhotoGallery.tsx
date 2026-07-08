import { useState } from 'react';
import SectionTag from '../components/SectionTag';
import Lightbox from '../components/Lightbox';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../hooks/useLang';
import { galleryPhotos } from '../data/content';
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

  return (
    <section ref={revealRef} id="gallery" className={`${s.section} bg-bg-primary reveal`}>
      <div className={`max-w-5xl mx-auto ${s.container}`}>
        <div className={s.mbSm}>
          <SectionTag number="01">{lang === 'ru' ? 'Фотографии' : 'Photography'}</SectionTag>
        </div>

        <h2 className={`${t.h2} ${s.mbSm}`}>
          <span className="text-text-primary">{lang === 'ru' ? 'Как это' : 'How it'}</span>{' '}
          <span className="text-peach">{lang === 'ru' ? 'было' : 'was'}</span>
        </h2>

        <p className={`${t.bodySecondary} text-text-muted ${s.mbLg} max-w-xl`}>
          {lang === 'ru'
            ? 'Премьера 16 мая 2026, ИКЦ, Калуга. Фотографии — Юлия Дударева. Нажмите на кадр, чтобы рассмотреть его на весь экран.'
            : 'Premiere on May 16, 2026, ICC, Kaluga. Photography by Yulia Dudareva. Click any frame to view it fullscreen.'}
        </p>

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
            className={`relative group overflow-hidden cursor-zoom-in text-left w-full mt-3 ${s.mbLg}`}
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
