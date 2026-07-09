import SectionTag from '../components/SectionTag';
import QuantumButton from '../components/QuantumButton';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../hooks/useLang';
import {
  headings,
  institutionsPitch,
  institutionFormats,
  institutionsTechSpecs,
  institutionsTechLabel,
  institutionsCTA,
  institutionsArchiveNote,
  institutionsStill,
} from '../data/content';
import { t } from '../styles/typography';
import { s } from '../styles/spacing';

const BASE = import.meta.env.BASE_URL;

interface InstitutionsProps {
  onNavigate: (id: string) => void;
}

export default function Institutions({ onNavigate: _onNavigate }: InstitutionsProps) {
  const revealRef = useScrollReveal<HTMLElement>();
  const { lang } = useLang();
  const h = headings.institutions;

  return (
    <section ref={revealRef} id="institutions" className={`${s.section} bg-bg-secondary reveal`}>
      <div className={`max-w-5xl mx-auto ${s.container}`}>
        <SectionTag number="09">{h.tag[lang]}</SectionTag>

        <h2 className={`${t.h2} ${s.mbSm}`}>
          <span className="text-text-primary">{h.titleA[lang]}</span>{' '}
          <span className="text-peach">{h.titleB[lang]}</span>
        </h2>

        <p className={`${t.bodyPrimary} text-text-primary ${s.mbLg} max-w-2xl`}>
          {institutionsPitch[lang]}
        </p>

        {/* Film still — the system at full power */}
        <figure className={`border border-border overflow-hidden ${s.mbLg}`}>
          <img
            src={`${BASE}${institutionsStill.src.slice(1)}`}
            alt={institutionsStill.alt[lang]}
            loading="lazy"
            className="w-full h-auto saturate-[0.9]"
          />
          <figcaption className={`${t.label} text-text-muted px-4 py-3 bg-bg-primary/40`}>
            {institutionsStill.caption[lang]}
          </figcaption>
        </figure>

        {/* Format cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 ${s.gapMd} ${s.mbLg}`}>
          {institutionFormats.map((format) => (
            <div
              key={format.number}
              className={`${s.cardLg} border border-border bg-surface hover:border-accent-primary/40 transition-colors duration-300`}
            >
              <span className={`${t.number} text-accent-primary/40 ${s.mbSm} block`}>
                {format.number}
              </span>
              <h3 className={`${t.highlight} uppercase tracking-wide text-text-primary ${s.mbSm}`}>
                {format.title[lang]}
              </h3>
              <p className={`${t.caption} text-text-muted`}>{format.description[lang]}</p>
            </div>
          ))}
        </div>

        {/* Technical specs */}
        <div className={`border border-border bg-bg-primary/30 ${s.card} ${s.mbSm}`}>
          <p className={`${t.caption} text-text-subtle`}>
            <span className={`${t.label} text-text-muted uppercase tracking-widest mr-2`}>
              {institutionsTechLabel[lang]}
            </span>
            {institutionsTechSpecs[lang]}
          </p>
        </div>

        {/* Archive / recording available on request */}
        <div className={`border border-border bg-bg-primary/30 ${s.card} ${s.mbLg}`}>
          <p className={`${t.caption} text-text-subtle`}>{institutionsArchiveNote[lang]}</p>
        </div>

        {/* CTA */}
        <div className={`flex flex-col sm:flex-row items-start sm:items-center ${s.gapMd}`}>
          <QuantumButton href="mailto:hi@odadream.art?subject=Show inquiry / Запрос на показ">
            {institutionsCTA[lang]}
          </QuantumButton>
          <div className={`flex flex-col ${s.gapSm}`}>
            <span className={`${t.caption} text-text-subtle`}>hi@odadream.art</span>
            <a
              href="https://t.me/odadream_info"
              target="_blank"
              rel="noopener noreferrer"
              className={`${t.caption} text-text-subtle hover:text-accent-primary transition-colors`}
            >
              Telegram: @odadream_info
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
