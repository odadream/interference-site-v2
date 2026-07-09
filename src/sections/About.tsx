import SectionTag from '../components/SectionTag';
import LayerCard from '../components/LayerCard';
import QuantumButton from '../components/QuantumButton';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../hooks/useLang';
import {
  headings,
  showDescription,
  showLead,
  showQuestion,
  layers,
  conceptQuote,
  aboutCtaNote,
  aboutCtaLabel,
} from '../data/content';
import { t } from '../styles/typography';
import { s } from '../styles/spacing';

export default function About() {
  const revealRef = useScrollReveal<HTMLElement>();
  const { lang } = useLang();
  const h = headings.about;

  return (
    <section ref={revealRef} id="about" className={`${s.section} bg-bg-primary reveal`}>
      <div className={`max-w-5xl mx-auto ${s.container}`}>
        <SectionTag number="02">{h.tag[lang]}</SectionTag>

        <h2 className={`${t.h2} ${s.mbSm}`}>
          <span className="text-peach">{h.titleA[lang]}</span>{' '}
          <span className="text-text-primary">{h.titleB[lang]}</span>
        </h2>

        <div className={`max-w-2xl ${s.mbLg}`}>
          <p className={`${t.bodyPrimary} text-text-primary ${s.mbSm}`}>{showDescription[lang]}</p>
          <p className={`${t.bodySecondary} text-text-muted ${s.mbSm}`}>{showLead[lang]}</p>
          <p className={`${t.bodySecondary} text-text-muted`}>{showQuestion[lang]}</p>
        </div>

        {/* Three Layers */}
        <div className={`grid grid-cols-1 md:grid-cols-3 ${s.gapMd} ${s.mbLg}`}>
          {layers.map((layer) => (
            <LayerCard
              key={layer.number}
              number={layer.number}
              title={layer.title[lang]}
              description={layer.description[lang]}
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className={`border-l-2 border-accent-primary pl-6 ${s.mbLg}`}>
          <p className={`${t.quote} text-peach ${s.mbSm}`}>«{conceptQuote.text[lang]}»</p>
          <cite className={`${t.caption} text-text-muted not-italic`}>
            {conceptQuote.source[lang]}
          </cite>
        </blockquote>

        {/* CTA */}
        <div className={`flex flex-col sm:flex-row items-start sm:items-center ${s.gapMd}`}>
          <QuantumButton href="mailto:hi@odadream.art?subject=Show inquiry / Запрос на показ">
            {aboutCtaLabel[lang]}
          </QuantumButton>
          <span className={`${t.caption} text-text-muted`}>{aboutCtaNote[lang]}</span>
        </div>
      </div>
    </section>
  );
}
