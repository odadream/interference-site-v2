import { t } from '../styles/typography';
import { s } from '../styles/spacing';
import { menuAria } from '../data/content';
import { useLang } from '../hooks/useLang';
import type { Lang } from '../context/LangContext';

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  onNavigate: (id: string) => void;
}

const NAV_LINKS = [
  { id: 'gallery', label: { ru: 'Фото', en: 'Photos' }, hideBelow: 'none' as const },
  { id: 'about', label: { ru: 'О спектакле', en: 'About' }, hideBelow: 'none' as const },
  { id: 'program', label: { ru: 'Пять фаз', en: 'Five phases' }, hideBelow: 'lg' as const },
  { id: 'context', label: { ru: 'Теория', en: 'Theory' }, hideBelow: 'xl' as const },
  { id: 'interference', label: { ru: 'Лаборатория', en: 'Lab' }, hideBelow: 'xl' as const },
  { id: 'backstage', label: { ru: 'Кухня', en: 'Backstage' }, hideBelow: 'xl' as const },
  { id: 'faq', label: { ru: 'FAQ', en: 'FAQ' }, hideBelow: 'xl' as const },
  { id: 'authors', label: { ru: 'Титры', en: 'Credits' }, hideBelow: 'lg' as const },
  {
    id: 'institutions',
    label: { ru: 'Институциям', en: 'Institutions' },
    hideBelow: 'none' as const,
  },
  { id: 'chronicle', label: { ru: 'Хроника', en: 'Chronicle' }, hideBelow: 'lg' as const },
];

function LangToggle() {
  const { lang, setLang } = useLang();

  const btn = (l: Lang, label: string) => (
    <button
      key={l}
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      className={`${t.button} px-2.5 py-1 transition-all duration-300 ${
        lang === l
          ? 'bg-accent-primary/15 text-accent-primary shadow-[0_0_10px_rgba(194,101,157,0.35)] border border-accent-primary/50'
          : 'text-text-muted hover:text-text-primary border border-transparent'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="hidden md:flex items-center gap-1 border border-border p-0.5">
      {btn('ru', 'RU')}
      {btn('en', 'EN')}
    </div>
  );
}

export default function Header({ menuOpen, setMenuOpen, onNavigate }: HeaderProps) {
  const { lang, setLang } = useLang();

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border">
        <div
          className={`max-w-6xl mx-auto ${s.containerWide} h-14 flex items-center justify-between`}
        >
          <button
            onClick={() => onNavigate('hero')}
            className={`${t.navLinkLarge} text-text-primary hover:text-accent-primary transition-colors whitespace-nowrap`}
          >
            {lang === 'ru' ? 'ИР' : 'IR'}
          </button>

          <nav className={`hidden md:flex items-center ${s.gapLg}`}>
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`${t.navLink} text-text-muted hover:text-accent-primary transition-colors whitespace-nowrap ${
                  link.hideBelow === 'lg'
                    ? 'hidden lg:inline'
                    : link.hideBelow === 'xl'
                      ? 'hidden xl:inline'
                      : ''
                }`}
              >
                {link.label[lang]}
              </button>
            ))}
          </nav>

          <div className={`flex items-center ${s.gapSm}`}>
            <LangToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label={menuOpen ? menuAria.close[lang] : menuAria.open[lang]}
            >
              <span
                className={`block w-6 h-[2px] bg-text-primary transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}
              />
              <span
                className={`block w-6 h-[2px] bg-text-primary transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-6 h-[2px] bg-text-primary transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl transition-all duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <nav className={`flex flex-col items-center justify-center h-full ${s.gapLg}`}>
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`${t.navLinkLarge} text-text-primary hover:text-accent-primary transition-colors`}
              style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
            >
              {link.label[lang]}
            </button>
          ))}
          <div className={`flex items-center ${s.gapSm} ${s.mbSm}`}>
            <button
              onClick={() => setLang('ru')}
              aria-pressed={lang === 'ru'}
              className={`${t.navLink} px-3 py-1.5 border transition-all ${lang === 'ru' ? 'border-accent-primary/60 bg-accent-primary/15 text-accent-primary shadow-[0_0_12px_rgba(194,101,157,0.35)]' : 'border-border text-text-subtle'}`}
            >
              RU
            </button>
            <button
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className={`${t.navLink} px-3 py-1.5 border transition-all ${lang === 'en' ? 'border-accent-primary/60 bg-accent-primary/15 text-accent-primary shadow-[0_0_12px_rgba(194,101,157,0.35)]' : 'border-border text-text-subtle'}`}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
