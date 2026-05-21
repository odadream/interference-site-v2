import { t } from '../styles/typography';
import { s } from '../styles/spacing';
import { SHOW_MEDIA } from '../data/features';
import { useLang } from '../hooks/useLang';
import type { Lang } from '../context/LangContext';

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  onNavigate: (id: string) => void;
}

const NAV_LINKS = [
  { id: 'about', label: { ru: 'О проекте', en: 'About' }, hideBelow: 'none' as const },
  { id: 'program', label: { ru: 'Программа', en: 'Programme' }, hideBelow: 'lg' as const },
  { id: 'context', label: { ru: 'Контекст', en: 'Context' }, hideBelow: 'xl' as const },
  { id: 'interference', label: { ru: 'Лаборатория', en: 'Lab' }, hideBelow: 'xl' as const },
  { id: 'faq', label: { ru: 'FAQ', en: 'FAQ' }, hideBelow: 'xl' as const },
  { id: 'authors', label: { ru: 'Авторы', en: 'Team' }, hideBelow: 'lg' as const },
  {
    id: 'institutions',
    label: { ru: 'Институциям', en: 'Institutions' },
    hideBelow: 'none' as const,
  },
  { id: 'chronicle', label: { ru: 'Хроника', en: 'Chronicle' }, hideBelow: 'lg' as const },
  ...(SHOW_MEDIA
    ? [{ id: 'materials', label: { ru: 'Медиа', en: 'Media' }, hideBelow: 'lg' as const }]
    : []),
];

function LangToggle() {
  const { lang, setLang } = useLang();
  const toggle = (l: Lang) => setLang(l);

  return (
    <div className={`hidden md:flex items-center ${s.gapSm}`}>
      <button
        onClick={() => toggle('ru')}
        className={`${t.label} transition-colors ${lang === 'ru' ? 'text-accent-primary' : 'text-text-subtle hover:text-text-muted'}`}
      >
        RU
      </button>
      <span className={`${t.label} text-text-subtle`}>/</span>
      <button
        onClick={() => toggle('en')}
        className={`${t.label} transition-colors ${lang === 'en' ? 'text-accent-primary' : 'text-text-subtle hover:text-text-muted'}`}
      >
        EN
      </button>
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
              aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
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
          <div className={`flex items-center ${s.gapSm} mt-4`}>
            <button
              onClick={() => setLang('ru')}
              className={`${t.navLink} transition-colors ${lang === 'ru' ? 'text-accent-primary' : 'text-text-subtle'}`}
            >
              RU
            </button>
            <span className={`${t.navLink} text-text-subtle`}>/</span>
            <button
              onClick={() => setLang('en')}
              className={`${t.navLink} transition-colors ${lang === 'en' ? 'text-accent-primary' : 'text-text-subtle'}`}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
