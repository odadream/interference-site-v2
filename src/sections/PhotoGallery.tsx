import SectionTag from '../components/SectionTag';
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

const aspectClasses: Record<string, string> = {
  featured: 'aspect-square',
  landscape: 'aspect-video',
  portrait: 'aspect-[9/16]',
  small: 'aspect-square',
};

export default function PhotoGallery() {
  const revealRef = useScrollReveal<HTMLElement>();
  const { lang } = useLang();

  return (
    <section ref={revealRef} id="gallery" className={`${s.section} bg-bg-primary reveal`}>
      <div className={`max-w-5xl mx-auto ${s.container}`}>
        <div className={s.mbSm}>
          <SectionTag number="01">{lang === 'ru' ? 'Фотографии' : 'Photography'}</SectionTag>
        </div>

        <h2 className={`${t.h2} ${s.mbSm}`}>
          <span className="text-text-primary">{lang === 'ru' ? 'Хроника' : 'Chronicle'}</span>{' '}
          <span className="text-peach">{lang === 'ru' ? 'момента' : 'of the moment'}</span>
        </h2>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 ${s.gapSm} auto-rows-[180px] md:auto-rows-[200px] ${s.mbLg}`}
        >
          {galleryPhotos.map((photo, i) => (
            <div
              key={photo.src}
              className={`relative group overflow-hidden ${sizeClasses[photo.size] ?? 'col-span-1 row-span-1'}`}
            >
              <div
                className={`w-full h-full ${photo.size === 'portrait' ? '' : (aspectClasses[photo.size] ?? '')}`}
              >
                <img
                  src={`${BASE}${photo.src.slice(1)}`}
                  alt={photo.alt[lang]}
                  loading={i < 4 ? 'eager' : 'lazy'}
                  draggable={false}
                  className="w-full h-full object-cover saturate-[0.85] group-hover:saturate-100 transition-all duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className={`${t.caption} text-text-muted`}>{photo.alt[lang]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
