import SectionTag from '../components/SectionTag';
import StatusDot from '../components/StatusDot';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../hooks/useLang';
import { headings, chronicleEvents, chronicleIntro, chronicleContinues } from '../data/content';
import { t } from '../styles/typography';
import { s } from '../styles/spacing';

export default function Chronicle() {
  const revealRef = useScrollReveal<HTMLElement>();
  const { lang } = useLang();
  const h = headings.chronicle;

  return (
    <section ref={revealRef} id="chronicle" className={`${s.section} bg-bg-primary reveal`}>
      <div className={`max-w-5xl mx-auto ${s.container}`}>
        <SectionTag number="10">{h.tag[lang]}</SectionTag>

        <h2 className={`${t.h2} ${s.mbSm}`}>
          <span className="text-text-primary">{h.titleA[lang]}</span>{' '}
          <span className="text-peach">{h.titleB[lang]}</span>
        </h2>

        <p className={`${t.bodySecondary} text-text-muted ${s.mbLg} max-w-xl`}>
          {chronicleIntro[lang]}
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
                  className={`relative pl-8 transition-opacity duration-300 ${isPre ? 'opacity-40 hover:opacity-100 active:opacity-100 focus-within:opacity-100' : 'opacity-100'}`}
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

                  <div className={`flex flex-col ${s.gapTight}`}>
                    <span
                      className={`${t.label} ${isPre ? 'text-text-subtle' : 'text-accent-primary'}`}
                    >
                      {event.year}
                    </span>

                    <div className={`flex items-start flex-wrap ${s.gapSm}`}>
                      <h3
                        className={`${t.highlight} uppercase tracking-wide ${isPre ? 'text-text-muted' : 'text-text-primary'}`}
                      >
                        {event.label[lang]}
                      </h3>
                      {event.link && (
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${t.label} transition-colors whitespace-nowrap ${
                            isPre
                              ? 'text-text-subtle hover:text-text-muted'
                              : 'text-accent-secondary hover:text-accent-primary'
                          }`}
                        >
                          odadream.art →
                        </a>
                      )}
                    </div>

                    <p className={`${t.caption} ${isPre ? 'text-text-subtle' : 'text-text-muted'}`}>
                      {event.description[lang]}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* "History continues" indicator */}
            <div className="relative pl-8 opacity-60">
              <div className="absolute left-0 top-1 w-[15px] h-[15px] rounded-full border border-border bg-bg-primary flex items-center justify-center">
                <div className="w-[5px] h-[5px] rounded-full bg-border" />
              </div>
              <div className={`flex items-center ${s.gapInline}`}>
                <StatusDot color="mauve" />
                <span className={`${t.caption} text-text-subtle italic`}>
                  {chronicleContinues[lang]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
