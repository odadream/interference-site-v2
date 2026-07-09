import { useState } from 'react';
import SectionTag from '../components/SectionTag';
import Timeline from '../components/Timeline';
import Lightbox from '../components/Lightbox';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../hooks/useLang';
import { headings, programTimeline } from '../data/content';
import { t } from '../styles/typography';
import { s } from '../styles/spacing';
import type { GalleryPhoto } from '../data/content';

export default function Program() {
  const revealRef = useScrollReveal<HTMLElement>();
  const { lang } = useLang();
  const h = headings.program;
  const [stillIndex, setStillIndex] = useState<number | null>(null);

  const items = programTimeline.map((p) => ({
    time: p.time[lang],
    title: p.title[lang],
    description: p.description[lang],
    still: p.still ? { src: p.still.src, alt: p.still.alt[lang] } : undefined,
  }));

  // Lightbox over the phases' film stills (indices match programTimeline)
  const stillPhotos: GalleryPhoto[] = programTimeline
    .filter((p) => p.still)
    .map((p) => ({ src: p.still!.src, alt: p.still!.alt, size: 'landscape' }));

  const timelineIndexToPhotoIndex = (i: number) =>
    programTimeline.slice(0, i + 1).filter((p) => p.still).length - 1;

  return (
    <section ref={revealRef} id="program" className={`${s.section} bg-bg-secondary reveal`}>
      <div className={`max-w-5xl mx-auto ${s.container}`}>
        <SectionTag number="03">{h.tag[lang]}</SectionTag>

        <h2 className={`${t.h2} ${s.mbSm}`}>
          <span className="text-text-primary">{h.titleA[lang]}</span>{' '}
          <span className="text-peach">{h.titleB[lang]}</span>
        </h2>

        <p className={`${t.bodySecondary} text-text-muted ${s.mbLg} max-w-xl`}>{h.intro?.[lang]}</p>

        <Timeline items={items} onStillClick={(i) => setStillIndex(timelineIndexToPhotoIndex(i))} />
      </div>

      {stillIndex !== null && (
        <Lightbox
          photos={stillPhotos}
          index={stillIndex}
          lang={lang}
          onClose={() => setStillIndex(null)}
          onNavigate={setStillIndex}
        />
      )}
    </section>
  );
}
