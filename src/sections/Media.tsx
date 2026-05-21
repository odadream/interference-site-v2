import SectionTag from '../components/SectionTag';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../hooks/useLang';
import { mediaTitle, mediaSubtitle, mediaDescription } from '../data/content';
import { t } from '../styles/typography';
import { s } from '../styles/spacing';

export default function Media() {
  const revealRef = useScrollReveal<HTMLElement>();
  const { lang } = useLang();

  return (
    <section ref={revealRef} id="materials" className={`${s.section} bg-bg-secondary reveal`}>
      <div className={`max-w-5xl mx-auto ${s.container}`}>
        <SectionTag number="10">{mediaTitle[lang]}</SectionTag>

        <h2 className={`${t.h2} ${s.mbSm}`}>
          <span className="text-text-primary">{lang === 'ru' ? 'Архив' : 'Archive:'}</span>{' '}
          <span className="text-peach">{mediaSubtitle[lang]}</span>
        </h2>

        <p className={`${t.bodySecondary} text-text-muted ${s.mbLg} max-w-xl`}>
          {mediaDescription[lang]}
        </p>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${s.gapMd}`}>
          {/* Teaser video */}
          <div className="sm:col-span-2 relative aspect-video border border-border bg-bg-primary/50 flex flex-col items-center justify-center gap-3 p-6">
            {/* TODO: replace src with actual YouTube/Vimeo embed URL */}
            <div className="w-full h-full flex flex-col items-center justify-center gap-3">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent-primary/60"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
              </svg>
              <span className={`${t.highlight} text-text-primary uppercase tracking-wide`}>
                {lang === 'ru' ? 'Тизер' : 'Teaser'}
              </span>
              <span className={`${t.caption} text-text-muted text-center`}>
                {lang === 'ru' ? 'Видео появится здесь' : 'Video coming soon'}
              </span>
            </div>
          </div>

          {/* Full recording — collector/museum */}
          <div
            className={`relative border border-border bg-bg-primary/50 flex flex-col justify-between ${s.cardLg}`}
          >
            <div>
              <span className={`${t.label} text-accent-secondary block ${s.mbSm}`}>
                {lang === 'ru' ? 'Полная запись' : 'Full Recording'}
              </span>
              <h3 className={`${t.h3} text-text-primary ${s.mbSm}`}>
                {lang === 'ru' ? 'Архив перформанса' : 'Performance Archive'}
              </h3>
              <p className={`${t.caption} text-text-muted`}>
                {lang === 'ru'
                  ? 'Многокамерная съёмка полного показа. Доступна для коллекционеров и музеев.'
                  : 'Multi-camera full performance recording. Available for collectors and museums.'}
              </p>
            </div>
            <a
              href="mailto:daler.ai@gmail.com?subject=Full recording inquiry"
              className={`${t.label} text-accent-primary hover:underline mt-4 inline-block`}
            >
              {lang === 'ru' ? 'Запросить →' : 'Inquire →'}
            </a>
          </div>

          {/* Photo gallery link */}
          <div
            className={`relative border border-border bg-bg-primary/50 flex flex-col justify-between ${s.cardLg}`}
          >
            <div>
              <span className={`${t.label} text-accent-secondary block ${s.mbSm}`}>
                {lang === 'ru' ? 'Фотографии' : 'Photography'}
              </span>
              <p className={`${t.caption} text-text-muted`}>
                {lang === 'ru'
                  ? 'Профессиональные фотографии с премьерного показа.'
                  : 'Professional photography from the premiere performance.'}
              </p>
            </div>
            <a
              href="#gallery"
              className={`${t.label} text-accent-primary hover:underline mt-4 inline-block`}
            >
              {lang === 'ru' ? 'Смотреть галерею →' : 'View gallery →'}
            </a>
          </div>

          {/* Educational infographics */}
          <div
            className={`relative border border-border bg-bg-primary/50 flex flex-col justify-between ${s.cardLg}`}
          >
            <div>
              <span className={`${t.label} text-accent-secondary block ${s.mbSm}`}>
                {lang === 'ru' ? 'Образовательные материалы' : 'Educational Materials'}
              </span>
              <p className={`${t.caption} text-text-muted`}>
                {lang === 'ru'
                  ? 'Инфографика о ЭЭГ и MoCap, демонстрировавшаяся во время показа.'
                  : 'EEG and MoCap infographics displayed during the performance.'}
              </p>
            </div>
            <span className={`${t.label} text-text-subtle mt-4 inline-block`}>
              {lang === 'ru' ? 'Скоро' : 'Coming soon'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
