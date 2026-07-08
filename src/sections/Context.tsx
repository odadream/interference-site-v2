import SectionTag from '../components/SectionTag';
import Accordion from '../components/Accordion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../hooks/useLang';
import { headings, contextItems } from '../data/content';
import { t } from '../styles/typography';
import { s } from '../styles/spacing';

export default function Context() {
  const revealRef = useScrollReveal<HTMLElement>();
  const { lang } = useLang();
  const h = headings.context;

  const items = contextItems.map((item) => ({
    id: item.id,
    title: item.title[lang],
    content: item.content[lang],
  }));

  return (
    <section ref={revealRef} id="context" className={`${s.section} bg-bg-primary reveal`}>
      <div className={`max-w-5xl mx-auto ${s.container}`}>
        <SectionTag number="04">{h.tag[lang]}</SectionTag>

        <h2 className={`${t.h2} ${s.mbSm}`}>
          <span className="text-peach">{h.titleA[lang]}</span>{' '}
          <span className="text-text-primary">{h.titleB[lang]}</span>
        </h2>

        <p className={`${t.bodySecondary} text-text-muted ${s.mbLg} max-w-2xl`}>
          {h.intro?.[lang]}
        </p>

        <Accordion items={items} />
      </div>
    </section>
  );
}
