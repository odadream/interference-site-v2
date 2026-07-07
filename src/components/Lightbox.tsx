import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { t } from '../styles/typography';
import type { GalleryPhoto } from '../data/content';
import type { Lang } from '../context/LangContext';

const BASE = import.meta.env.BASE_URL;

interface LightboxProps {
  photos: GalleryPhoto[];
  index: number;
  lang: Lang;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ photos, index, lang, onClose, onNavigate }: LightboxProps) {
  const photo = photos[index];

  const prev = useCallback(
    () => onNavigate((index - 1 + photos.length) % photos.length),
    [index, photos.length, onNavigate]
  );
  const next = useCallback(
    () => onNavigate((index + 1) % photos.length),
    [index, photos.length, onNavigate]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  if (!photo) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-bg-primary/95 backdrop-blur-md flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt[lang]}
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 md:px-8 h-14 shrink-0">
        <span className={`${t.label} text-text-muted`}>
          {String(index + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
        </span>
        <button
          onClick={onClose}
          className={`${t.label} text-text-muted hover:text-accent-primary transition-colors px-2 py-2`}
          aria-label={lang === 'ru' ? 'Закрыть' : 'Close'}
        >
          {lang === 'ru' ? 'Закрыть ✕' : 'Close ✕'}
        </button>
      </div>

      {/* Image */}
      <div className="flex-1 flex items-center justify-center min-h-0 px-4 md:px-16">
        <img
          src={`${BASE}${photo.src.slice(1)}`}
          alt={photo.alt[lang]}
          draggable={false}
          onClick={(e) => e.stopPropagation()}
          className="max-w-full max-h-full object-contain select-none border border-border"
        />
      </div>

      {/* Caption + nav */}
      <div
        className="shrink-0 px-4 md:px-8 py-4 flex items-center justify-between gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={prev}
          className={`${t.button} text-text-muted hover:text-accent-primary transition-colors px-2 py-2 shrink-0`}
          aria-label={lang === 'ru' ? 'Предыдущее фото' : 'Previous photo'}
        >
          ←
        </button>
        <p className={`${t.caption} text-text-muted text-center`}>{photo.alt[lang]}</p>
        <button
          onClick={next}
          className={`${t.button} text-text-muted hover:text-accent-primary transition-colors px-2 py-2 shrink-0`}
          aria-label={lang === 'ru' ? 'Следующее фото' : 'Next photo'}
        >
          →
        </button>
      </div>

      {/* Invisible click zones for prev/next on image sides (desktop) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="hidden md:block absolute left-0 top-14 bottom-16 w-1/5 cursor-w-resize"
        aria-hidden="true"
        tabIndex={-1}
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="hidden md:block absolute right-0 top-14 bottom-16 w-1/5 cursor-e-resize"
        aria-hidden="true"
        tabIndex={-1}
      />
    </div>,
    document.body
  );
}
