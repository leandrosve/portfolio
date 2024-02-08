export type Locale = 'en' | 'es';

export const locales: Locale[] = ['en', 'es'];

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  es: () => import('./es.json').then((module) => module.default),
};

export const getDictionary = async (lang: Locale) => dictionaries[lang]();
