import { createContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export type Lang = 'ru' | 'en';

export interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const STORAGE_KEY = 'ir-lang';

// Regions where Russian is a primary or common language of interface.
const RU_LOCALE_PREFIXES = ['ru', 'be', 'uk', 'kk', 'ky', 'uz', 'tg', 'hy', 'az', 'mo'];

// Timezones across Russia and the wider post-Soviet space — a coarse fallback
// when the browser reports a neutral locale (e.g. en-US) but the visitor is
// physically in the region.
const RU_TIMEZONE_HINTS = [
  'Europe/Moscow',
  'Europe/Kaliningrad',
  'Europe/Samara',
  'Europe/Volgograd',
  'Europe/Saratov',
  'Europe/Astrakhan',
  'Europe/Ulyanovsk',
  'Europe/Kirov',
  'Europe/Minsk',
  'Europe/Kiev',
  'Europe/Simferopol',
  'Asia/Yekaterinburg',
  'Asia/Omsk',
  'Asia/Novosibirsk',
  'Asia/Novokuznetsk',
  'Asia/Krasnoyarsk',
  'Asia/Irkutsk',
  'Asia/Yakutsk',
  'Asia/Vladivostok',
  'Asia/Magadan',
  'Asia/Kamchatka',
  'Asia/Almaty',
  'Asia/Tashkent',
  'Asia/Tbilisi',
  'Asia/Yerevan',
  'Asia/Baku',
];

function detectLang(): Lang {
  if (typeof window === 'undefined') return 'ru';

  // 0. Explicit URL override wins over everything — this is what makes a
  // shared/campaign link (e.g. ?lang=en on a Featured or outreach link) open
  // in the language it was written for, regardless of the visitor's browser
  // or a previous choice. Content and the consent banner both follow it.
  try {
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang === 'ru' || urlLang === 'en') return urlLang;
  } catch {
    // URL parsing may fail on exotic inputs — fall through to detection.
  }

  // 1. Explicit prior choice.
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'ru' || stored === 'en') return stored;
  } catch {
    // localStorage may be unavailable (privacy mode) — fall through to detection.
  }

  // 2. Browser languages.
  const locales =
    navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
  for (const locale of locales) {
    if (!locale) continue;
    const prefix = locale.toLowerCase().split('-')[0];
    if (RU_LOCALE_PREFIXES.includes(prefix)) return 'ru';
    if (prefix === 'en') return 'en';
  }

  // 3. Timezone hint for neutral locales.
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz && RU_TIMEZONE_HINTS.includes(tz)) return 'ru';
  } catch {
    // Intl may be unavailable — ignore.
  }

  // 4. Default to English for the rest of the world.
  return 'en';
}

// eslint-disable-next-line react-refresh/only-export-components
export const LangContext = createContext<LangContextValue>({ lang: 'ru', setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => detectLang());

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore write failures
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}
