import { createContext, useState } from 'react';
import type { ReactNode } from 'react';

export type Lang = 'ru' | 'en';

export interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const LangContext = createContext<LangContextValue>({ lang: 'ru', setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ru');
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}
