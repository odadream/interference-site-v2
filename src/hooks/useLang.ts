import { useContext } from 'react';
import { LangContext } from '../context/LangContext';
import type { LangContextValue } from '../context/LangContext';

export function useLang(): LangContextValue {
  return useContext(LangContext);
}
