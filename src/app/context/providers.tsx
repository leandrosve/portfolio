'use client';
import { Locale } from '@/i18n/dictionary';
import { ThemeProvider } from 'next-themes';

import { createContext } from 'react';
import DictionaryProvider, { Dictionary } from './dictionary-provider';
import LocaleProvider from './locale-provider';

export const LangContext = createContext('es');

const Providers = ({
  children,
  lang,
  dictionary,
}: Readonly<{
  children: React.ReactNode;
  lang: Locale;
  dictionary: Dictionary;
}>) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <LocaleProvider locale={lang}>
        <DictionaryProvider dictionary={dictionary}>{children}</DictionaryProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
};

export default Providers;
