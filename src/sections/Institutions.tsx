import SectionTag from '../components/SectionTag';
import QuantumButton from '../components/QuantumButton';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../hooks/useLang';
import {
  institutionsHeadline,
  institutionsPitch,
  institutionFormats,
  institutionsTechSpecs,
  institutionsCTA,
} from '../data/content';
import { t } from '../styles/typography';
import { s } from '../styles/spacing';

interface InstitutionsProps {
  onNavigate: (id: string) => void;
}

export default function Institutions({ onNavigate: _onNavigate }: InstitutionsProps) {
  const revealRef = useScrollReveal<HTMLElement>();
  const { lang } = useLang();

  return (
    <section ref={revealRef} id="institutions" className={`${s.section} bg-bg-secondary reveal`}>
      <div className={`max-w-5xl mx-auto ${s.container}`}>
        <SectionTag number="08">{institutionsHeadline[lang]}</SectionTag>

        <h2 className={`${t.h2} ${s.mbSm}`}>
          <span className="text-text-primary">{lang === 'ru' ? 'Заказать' : 'Book'}</span>{' '}
          <span className="text-peach">{lang === 'ru' ? 'показ' : 'a show'}</span>
        </h2>

        <p className={`${t.bodySecondary} text-text-muted ${s.mbLg} max-w-2xl`}>
          {institutionsPitch[lang]}
        </p>

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
        <div className={`border border-border bg-bg-primary/30 ${s.card} ${s.mbLg}`}>
          <p className={`${t.caption} text-text-subtle`}>
            <span className={`${t.label} text-text-muted uppercase tracking-widest mr-2`}>
              {lang === 'ru' ? 'Технические требования:' : 'Technical requirements:'}
            </span>
            {institutionsTechSpecs[lang]}
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <QuantumButton href="mailto:daler.ai@gmail.com?subject=Show inquiry / Запрос на показ">
            {institutionsCTA[lang]}
          </QuantumButton>
          <span className={`${t.caption} text-text-subtle`}>daler.ai@gmail.com</span>
        </div>
      </div>
    </section>
  );
}
