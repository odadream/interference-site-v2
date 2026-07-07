import SectionTag from '../components/SectionTag';
import StatusDot from '../components/StatusDot';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../hooks/useLang';
import { chronicleEvents } from '../data/content';
import { t } from '../styles/typography';
import { s } from '../styles/spacing';

export default function Chronicle() {
  const revealRef = useScrollReveal<HTMLElement>();
  const { lang } = useLang();

  return (
    <section ref={revealRef} id="chronicle" className={`${s.section} bg-bg-primary reveal`}>
      <div className={`max-w-5xl mx-auto ${s.container}`}>
        <SectionTag number="10">{lang === 'ru' ? 'Хроника' : 'Chronicle'}</SectionTag>

        <h2 className={`${t.h2} ${s.mbSm}`}>
          <span className="text-text-primary">{lang === 'ru' ? 'История' : 'History of'}</span>{' '}
          <span className="text-peach">{lang === 'ru' ? 'произведения' : 'the work'}</span>
        </h2>

        <p className={`${t.bodySecondary} text-text-muted ${s.mbLg} max-w-xl`}>
          {lang === 'ru'
            ? 'От зарождения идеи до публичных показов. Каждый этап — архивная версия сайта.'
            : 'From the birth of the idea to public performances. Each stage links to an archived site version.'}
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className={`flex flex-col ${s.gapLg}`}>
            {chronicleEvents.map((event, i) => {
              const isPre = event.isPrehistory;
              return (
                <div
                  key={i}
                  className={`relative pl-8 transition-opacity ${isPre ? 'opacity-40' : 'opacity-100'}`}
                >
                  {/* Dot on timeline */}
                  <div
                    className={`absolute left-0 top-1 w-[15px] h-[15px] rounded-full border flex items-center justify-center ${
                      isPre
                        ? 'border-text-subtle bg-bg-primary'
                        : 'border-accent-primary bg-bg-primary'
                    }`}
                  >
                    <div
                      className={`w-[5px] h-[5px] rounded-full ${
                        isPre ? 'bg-text-subtle' : 'bg-accent-primary'
                      }`}
                    />
                  </div>

                  {/* Year */}
                  <span
                    className={`${t.label} block mb-1 ${
                      isPre ? 'text-text-subtle' : 'text-accent-primary'
                    }`}
                  >
                    {event.year}
                  </span>

                  {/* Label */}
                  <div className="flex items-start gap-3 flex-wrap">
                    <h3
                      className={`${t.highlight} uppercase tracking-wide ${isPre ? 'text-text-muted' : 'text-text-primary'}`}
                    >
                      {event.label[lang]}
                    </h3>
                    {event.link && !isPre && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${t.label} text-accent-secondary hover:text-accent-primary transition-colors whitespace-nowrap`}
                      >
                        {lang === 'ru' ? 'Архив →' : 'Archive →'}
                      </a>
                    )}
                    {event.link && isPre && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${t.label} text-text-subtle hover:text-text-muted transition-colors whitespace-nowrap`}
                      >
                        odadream.art →
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <p
                    className={`${t.caption} mt-1 ${isPre ? 'text-text-subtle' : 'text-text-muted'}`}
                  >
                    {event.description[lang]}
                  </p>
                </div>
              );
            })}

            {/* "History continues" indicator */}
            <div className="relative pl-8 opacity-60">
              <div className="absolute left-0 top-1 w-[15px] h-[15px] rounded-full border border-border bg-bg-primary flex items-center justify-center">
                <div className="w-[5px] h-[5px] rounded-full bg-border" />
              </div>
              <div className="flex items-center gap-2">
                <StatusDot color="mauve" />
                <span className={`${t.caption} text-text-subtle italic`}>
                  {lang === 'ru' ? 'История продолжается...' : 'History continues...'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className={`${t.caption} text-text-subtle mt-10`}>
          {lang === 'ru'
            ? 'Каждая версия сайта сохраняется на отдельном поддомене как архивный документ.'
            : 'Each version of the site is preserved on a separate subdomain as an archival document.'}
        </p>
      </div>
    </section>
  );
}
