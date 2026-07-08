import SectionTag from '../components/SectionTag';
import Timeline from '../components/Timeline';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../hooks/useLang';
import { headings, programTimeline } from '../data/content';
import { t } from '../styles/typography';
import { s } from '../styles/spacing';

export default function Program() {
  const revealRef = useScrollReveal<HTMLElement>();
  const { lang } = useLang();
  const h = headings.program;

  const items = programTimeline.map((p) => ({
    time: p.time[lang],
    title: p.title[lang],
    description: p.description[lang],
  }));

  return (
    <section ref={revealRef} id="program" className={`${s.section} bg-bg-secondary reveal`}>
      <div className={`max-w-5xl mx-auto ${s.container}`}>
        <SectionTag number="03">{h.tag[lang]}</SectionTag>

        <h2 className={`${t.h2} ${s.mbSm}`}>
          <span className="text-text-primary">{h.titleA[lang]}</span>{' '}
          <span className="text-peach">{h.titleB[lang]}</span>
        </h2>

        <p className={`${t.bodySecondary} text-text-muted ${s.mbLg} max-w-xl`}>{h.intro?.[lang]}</p>

        <Timeline items={items} />
      </div>
    </section>
  );
}
