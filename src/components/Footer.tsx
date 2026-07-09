import Divider from './Divider';
import { t } from '../styles/typography';
import { s } from '../styles/spacing';
import { useLang } from '../hooks/useLang';
import { footerNav, footerLabels, footerTagline } from '../data/content';
import type { I18nString } from '../data/content';

interface ExternalGroup {
  title: I18nString;
  links: { label: I18nString; href: string }[];
}

const ODA_LINKS: { label: I18nString; href: string }[] = [
  { label: { ru: 'Сайт', en: 'Website' }, href: 'https://odadream.art/' },
  { label: { ru: 'Telegram', en: 'Telegram' }, href: 'https://t.me/odadream' },
  { label: { ru: 'Dzen', en: 'Dzen' }, href: 'https://dzen.ru/odadream' },
];

const OTHER_GROUPS: ExternalGroup[] = [
  {
    title: { ru: 'Фестиваль', en: 'Festival' },
    links: [
      { label: { ru: 'Сайт', en: 'Website' }, href: 'https://t-fest.online/' },
      { label: { ru: 'ВКонтакте', en: 'VKontakte' }, href: 'https://vk.com/tsiolkovsky_fest' },
    ],
  },
  {
    title: { ru: 'Площадка', en: 'Venue' },
    links: [{ label: { ru: 'ИКЦ', en: 'ICC' }, href: 'https://www.icc40.ru/' }],
  },
];

function InterferenceTitleSmall({ lang }: { lang: 'ru' | 'en' }) {
  // Mirrors the Hero lockup (incl. its displaced-syllable move) at footer scale.
  if (lang === 'en') {
    return (
      <div className="select-none">
        <div className={`flex gap-1 ${t.displaySm}`}>
          {'INTERFERENCE'.split('').map((c, i) => (
            <span key={i} className="text-accent-primary">
              {c}
            </span>
          ))}
        </div>
        <div className={`flex gap-1 ${t.displaySm}`}>
          {'OF '.split('').map((c, i) => (
            <span key={'a' + i} className="text-accent-primary">
              {c}
            </span>
          ))}
          {'REALITIES'.split('').map((c, i) => (
            <span key={'b' + i} className="text-text-primary">
              {c}
            </span>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="select-none">
      <div className={`flex gap-1 ${t.displaySm}`}>
        {'ИНТЕРФЕРЕНЦИ'.split('').map((c, i) => (
          <span key={i} className="text-accent-primary">
            {c}
          </span>
        ))}
      </div>
      <div className={`flex gap-1 ${t.displaySm}`}>
        {'РЕАЛЬНОСТЕЙ'.split('').map((c, i) => (
          <span key={i} className="text-text-primary">
            {c}
          </span>
        ))}
        <span className="text-accent-primary">Я</span>
      </div>
    </div>
  );
}

interface FooterProps {
  onNavigate: (id: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { lang } = useLang();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-border">
      <div className={`max-w-5xl mx-auto ${s.container} ${s.footerPadding}`}>
        {/* Main grid */}
        <div className={`grid grid-cols-3 lg:flex lg:justify-between ${s.gapLg} ${s.mbLg}`}>
          {/* Brand */}
          <div className="col-span-3 lg:col-span-1">
            <button onClick={() => onNavigate('hero')} className={`block ${s.mbSm}`}>
              <InterferenceTitleSmall lang={lang} />
            </button>
            <p className={`${t.caption} text-text-muted max-w-xs`}>{footerTagline[lang]}</p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-1">
            <span className={`${t.highlight} text-text-primary ${s.mbSm} block`}>
              {footerLabels.navigation[lang]}
            </span>
            <nav className={`flex flex-col ${s.stack}`}>
              {footerNav.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`${t.navLink} text-text-muted hover:text-accent-primary transition-colors text-left`}
                >
                  {link.label[lang]}
                </button>
              ))}
            </nav>
          </div>

          {/* ODA.dream + Contacts */}
          <div className={`lg:col-span-1 flex flex-col ${s.gapMdLg}`}>
            <div>
              <span className={`${t.highlight} text-text-primary ${s.mbSm} block`}>ODA.dream</span>
              <div className={`flex flex-col ${s.stack}`}>
                {ODA_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${t.caption} text-text-muted hover:text-accent-primary transition-colors`}
                  >
                    {link.label[lang]}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <span className={`${t.highlight} text-text-primary ${s.mbSm} block`}>
                {footerLabels.contacts[lang]}
              </span>
              <div className={`flex flex-col ${s.stack}`}>
                <a
                  href="mailto:hi@odadream.art?subject=Show inquiry / Запрос на показ"
                  className={`${t.navLink} text-accent-primary hover:text-accent-secondary transition-colors break-all`}
                >
                  {footerLabels.bookShow[lang]}
                </a>
                <a
                  href="https://t.me/odadream_info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${t.caption} text-text-muted hover:text-accent-primary transition-colors break-all`}
                >
                  Telegram: @odadream_info
                </a>
                <a
                  href="mailto:hi@odadream.art"
                  className={`${t.caption} text-text-muted hover:text-accent-primary transition-colors break-all`}
                >
                  hi@odadream.art
                </a>
              </div>
            </div>
          </div>

          {/* Festival, Venue */}
          <div className={`lg:col-span-1 flex flex-col ${s.gapMdLg}`}>
            {OTHER_GROUPS.map((group) => (
              <div key={group.title.ru}>
                <span className={`${t.highlight} text-text-primary ${s.mbSm} block`}>
                  {group.title[lang]}
                </span>
                <div className={`flex flex-col ${s.stack}`}>
                  {group.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${t.caption} text-text-muted hover:text-accent-primary transition-colors`}
                    >
                      {link.label[lang]}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* Bottom bar */}
        <div
          className={`${s.footerBar} flex flex-col sm:flex-row items-center justify-center ${s.footerBarGap}`}
        >
          <span className={`${t.label} text-text-subtle`}>
            © {currentYear} ODA.dream. {footerLabels.rights[lang]}
          </span>
          <a
            href="https://github.com/odadream/interference-site-v2"
            target="_blank"
            rel="noopener noreferrer"
            className={`${t.label} text-text-subtle hover:text-accent-primary transition-colors flex items-center ${s.gapInline}`}
          >
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            {footerLabels.sourceCode[lang]}
          </a>
          <span className={`${t.label} text-text-subtle`}>{footerLabels.premiereLine[lang]}</span>
        </div>
      </div>
    </footer>
  );
}
