import SectionTag from '../components/SectionTag';
import Timeline from '../components/Timeline';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { programTimeline } from '../data/content';
import { t } from '../styles/typography';
import { s } from '../styles/spacing';

export default function Program() {
  const revealRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={revealRef} id="program" className={`${s.section} bg-bg-secondary reveal`}>
      <div className={`max-w-5xl mx-auto ${s.container}`}>
        <SectionTag number="03">Структура</SectionTag>

        <h2 className={`${t.h2} ${s.mbSm}`}>
          <span className="text-text-primary">Пять</span> <span className="text-peach">фаз</span>
        </h2>

        <p className={`${t.bodySecondary} text-text-muted ${s.mbLg} max-w-xl`}>
          Так спектакль прошёл 16 мая 2026 в{' '}
          <a
            href="https://www.icc40.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-primary hover:underline"
          >
            ИКЦ
          </a>
          , Калуга — и так он устроен: структура фаз фиксирована, а их содержание рождается заново
          на каждом показе вместе с залом.
        </p>

        <Timeline items={programTimeline} />
      </div>
    </section>
  );
}
