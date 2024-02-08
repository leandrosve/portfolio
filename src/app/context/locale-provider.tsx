'use client';

import { Locale } from '@/i18n/dictionary';
import { createContext, useContext } from 'react';

const LocaleContext = createContext<Locale>('en');

export default function LocaleProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const lang = useContext(LocaleContext);
  if (lang === null) {
    return 'en';
  }

  return lang;
}
