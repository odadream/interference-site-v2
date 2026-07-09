import { useEffect, useRef, useState } from 'react';
import { useParticles } from '../hooks/useParticles';
import QuantumButton from '../components/QuantumButton';
import TrailerModal from '../components/TrailerModal';
import { useLang } from '../hooks/useLang';
import {
  heroFestivalLine,
  heroFestivalName,
  heroFormat,
  heroPremiereBadge,
  heroPremiereDate,
  heroQuote,
  heroCTAPrimary,
  heroScroll,
  trailerLabels,
  HERO_LOOPS,
} from '../data/content';
import { t } from '../styles/typography';
import { s } from '../styles/spacing';

// A different ambient scene on every page load (picked once at module load,
// outside render — Math.random() is impure inside a component body)
const loopSrc = HERO_LOOPS[Math.floor(Math.random() * HERO_LOOPS.length)];

interface HeroProps {
  onNavigate: (id: string) => void;
}

function InterferenceTitle({ lang }: { lang: 'ru' | 'en' }) {
  // Both lockups share the signature displaced-syllable move:
  // RU drops the «Я» of ИНТЕРФЕРЕНЦИЯ down; EN pulls the "OF" up into
  // the second line, keeping both lines 12/12 monospaced characters.
  if (lang === 'en') {
    return (
      <div className="select-none">
        <div className={`${t.display} text-accent-primary`}>INTERFERENCE</div>
        <div className={t.display}>
          <span className="text-accent-primary">OF </span>
          <span className="text-text-primary">REALITIES</span>
        </div>
      </div>
    );
  }
  return (
    <div className="select-none">
      <div className={`${t.display} text-accent-primary`}>ИНТЕРФЕРЕНЦИ</div>
      <div className={t.display}>
        <span className="text-text-primary">РЕАЛЬНОСТЕЙ</span>
        <span className="text-accent-primary">Я</span>
      </div>
    </div>
  );
}

export default function Hero({ onNavigate }: HeroProps) {
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);
  const fgCanvasRef = useRef<HTMLCanvasElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const [trailerOpen, setTrailerOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {
      /* autoplay blocked — the poster image stays as the cover */
    });
  }, []);

  // Background particles — flow around card
  useParticles(bgCanvasRef, {
    obstacleRef: cardRef,
    count: 140,
    speed: 1.6,
    colors: [
      'rgba(194, 101, 157, 0.75)',
      'rgba(141, 78, 121, 0.65)',
      'rgba(210, 170, 152, 0.65)',
      'rgba(233, 208, 197, 0.5)',
    ],
  });

  // Foreground particles — drift upward like poplar fluff, pass through card area
  useParticles(fgCanvasRef, {
    count: 60,
    speed: 1.2,
    behavior: 'updraft',
    colors: ['rgba(194, 101, 157, 0.45)', 'rgba(210, 170, 152, 0.4)', 'rgba(233, 208, 197, 0.35)'],
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}poster-bg.webp')` }}
      />
      {/* Ambient video cover (Kinopoisk-style): silent 11s loop from the finale
          laser scene, ~2 MB. The poster image above stays as the instant
          fallback while the video streams in. Playback is started imperatively:
          React does not render `muted` as a DOM attribute, which breaks the
          declarative autoplay path in Chrome. */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={`${import.meta.env.BASE_URL}${loopSrc.slice(1)}`}
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        poster={`${import.meta.env.BASE_URL}poster-bg.webp`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-bg-primary/40" />

      {/* Background particles — behind card */}
      <canvas
        ref={bgCanvasRef}
        className="absolute inset-0 w-full h-full z-[1] opacity-90 pointer-events-none"
        style={{ willChange: 'transform' }}
      />

      <div
        className={`relative z-10 w-full max-w-xl mx-auto text-center flex flex-col items-center ${s.heroInner}`}
      >
        <div
          ref={cardRef}
          className={`bg-bg-primary/60 backdrop-blur-md ${s.cardLg} border border-border w-full`}
        >
          {/* 1. Festival name */}
          <div className={`flex flex-col ${s.gapTight} ${s.mbMd}`}>
            <span className={`${t.label} text-peach/80`}>{heroFestivalLine[lang]}</span>
            <a
              href="https://t-fest.online/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${t.navLinkLarge} text-peach hover:text-accent-primary transition-colors`}
            >
              {heroFestivalName[lang]}
            </a>
          </div>

          {/* 2. Format */}
          <p className={`${t.label} text-text-muted ${s.mbMd}`}>{heroFormat[lang]}</p>

          {/* 3. Title */}
          <InterferenceTitle lang={lang} />

          {/* 4. Premiere badge */}
          <div className={`${s.mbMd} flex items-center justify-center ${s.gapInline}`}>
            <span className="relative flex h-[5px] w-[5px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-accent-primary" />
              <span className="relative inline-flex rounded-full h-[5px] w-[5px] bg-accent-primary" />
            </span>
            <p className={`${t.eventDate} text-peach`}>{heroPremiereBadge[lang]}</p>
          </div>
          <div className={`${s.mbMd} -mt-3`}>
            <p className={`${t.eventDate} text-text-muted`}>{heroPremiereDate[lang]}</p>
          </div>

          {/* 5. Flavour quote */}
          <p className={`${t.quote} text-text-primary/70 ${s.mbMd} max-w-md mx-auto`}>
            {heroQuote[lang]}
          </p>

          {/* 6. Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center ${s.gapSm}`}>
            <QuantumButton onClick={() => setTrailerOpen(true)}>
              ▶ {trailerLabels.watch[lang]}
            </QuantumButton>
            <QuantumButton variant="ghost" onClick={() => onNavigate('institutions')}>
              {heroCTAPrimary[lang]}
            </QuantumButton>
          </div>
        </div>
      </div>

      {/* Foreground particles — above card */}
      <canvas
        ref={fgCanvasRef}
        className="absolute inset-0 w-full h-full z-[11] opacity-70 pointer-events-none"
        style={{ willChange: 'transform' }}
      />

      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center ${s.gapSm} z-10`}
      >
        <span className={`${t.label} text-text-muted`}>{heroScroll[lang]}</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-accent-primary to-transparent animate-pulse" />
      </div>

      {trailerOpen && <TrailerModal lang={lang} onClose={() => setTrailerOpen(false)} />}
    </section>
  );
}
