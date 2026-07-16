import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { t } from '../styles/typography';
import { s } from '../styles/spacing';
import {
  TRAILER_LOCAL_SRC,
  TRAILER_YOUTUBE_URL,
  TRAILER_VK_URL,
  trailerLabels,
} from '../data/content';
import type { Lang } from '../context/LangContext';

const BASE = import.meta.env.BASE_URL;

interface TrailerModalProps {
  lang: Lang;
  onClose: () => void;
}

export default function TrailerModal({ lang, onClose }: TrailerModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-bg-primary/95 backdrop-blur-md flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={trailerLabels.title[lang]}
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 md:px-8 h-14 shrink-0">
        <span className={`${t.label} text-text-muted`}>{trailerLabels.title[lang]}</span>
        <button
          onClick={onClose}
          className={`${t.label} text-text-muted hover:text-accent-primary transition-colors px-2 py-2`}
          aria-label={trailerLabels.close[lang]}
        >
          {trailerLabels.close[lang]} ✕
        </button>
      </div>

      {/* Player */}
      <div
        className="flex-1 flex items-center justify-center min-h-0 px-4 md:px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          key={lang}
          data-analytics-video="trailer"
          src={`${BASE}${TRAILER_LOCAL_SRC.slice(1)}`}
          controls
          autoPlay
          playsInline
          crossOrigin="anonymous"
          className="max-w-full max-h-full border border-border bg-black"
        >
          {/* Subtitles default to the site's current language; the viewer can
              still switch tracks from the player's own CC menu. */}
          <track
            kind="subtitles"
            src={`${BASE}video/trailer-ru.vtt`}
            srcLang="ru"
            label="Русский"
            default={lang === 'ru'}
          />
          <track
            kind="subtitles"
            src={`${BASE}video/trailer-en.vtt`}
            srcLang="en"
            label="English"
            default={lang === 'en'}
          />
        </video>
      </div>

      {/* External platform links (appear once the URLs are filled in) */}
      <div
        className={`shrink-0 px-4 md:px-8 py-4 flex items-center justify-center ${s.gapMd}`}
        onClick={(e) => e.stopPropagation()}
      >
        {TRAILER_YOUTUBE_URL && (
          <a
            href={TRAILER_YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${t.button} text-text-muted hover:text-accent-primary transition-colors`}
          >
            {trailerLabels.youtube[lang]} ↗
          </a>
        )}
        {TRAILER_VK_URL && (
          <a
            href={TRAILER_VK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${t.button} text-text-muted hover:text-accent-primary transition-colors`}
          >
            {trailerLabels.vk[lang]} ↗
          </a>
        )}
      </div>
    </div>,
    document.body
  );
}
