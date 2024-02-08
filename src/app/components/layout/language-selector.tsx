'use client';
import React, { MouseEvent, useEffect, useMemo, useRef, useState } from 'react';
import Button from '../common/button';
import { Locale, locales } from '@/i18n/dictionary';
import { joinClasses, printIf } from '../utils/ClassUtils';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';
import LangIcon from '../../assets/icons/lang-icon.svg';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';

interface Props {
  lang: Locale;
}

const LANGUAGE_LABELS: Record<Locale, String> = {
  en: 'English',
  es: 'Español',
};

const LanguageSelector = ({ lang }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const onChange = (locale: Locale) => {
    const days = 30;
    const date = new Date();
    //expire in 30 days
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const cookies = new Cookies(null, { path: '/' });
    cookies.set('NEXT_LOCALE', locale, { expires: date, path: '/' });
    router.replace(pathname.replace(`/${lang}`, `/${locale}`));
  };

  const orderedLocales: Locale[] = useMemo(() => {
    return [lang, ...locales.filter((l) => l !== lang)];
  }, [lang]);

  return (
    <div className='relative' id='lang-selector'>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button
            variant='ghost'
            aria-haspopup='true'
            aria-expanded='true'
            data-headlessui-state='open'
            className='border rounded-lg border-content-300/20'
          >
            <div className='flex gap-2 items-center text-content-300 font-md'>
              <Image className='rounded-full' alt={lang} src={`/images/flags/${lang}.png`} height={20} width={20} />
              <div>
                <svg width='6' height='3' className={`ml-2 overflow-visible`} aria-hidden='true'>
                  <path d='M0 0L3 3L6 0' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round'></path>
                </svg>
              </div>
            </div>
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className='absolute right-0 top-full mt-1 py-3 w-40 rounded-lg shadow text-sm  bg-base-200 z-50' sideOffset={5}>
            {orderedLocales.map((option) => (
              <DropdownMenu.Item
                key={option}
                className={joinClasses(
                  'flex items-center px-3 py-2 text-lg hover:bg-base-300 cursor-pointer gap-2',
                  printIf('text-primary-600 dark:text-primary-300 bg-base-300/50', option == lang)
                )}
                id='headlessui-menu-item-:rb:'
                role='menuitem'
                aria-disabled='true'
                data-headlessui-state='disabled'
                onClick={() => onChange(option as Locale)}
              >
                <Image className='rounded-full' alt={option} src={`/images/flags/${option}.png`} height={20} width={20} />
                {LANGUAGE_LABELS[option]}
                {lang == option && (
                  <svg className='mr-auto' width='24' height='24' fill='none' aria-hidden='true'>
                    <path d='m7.75 12.75 2.25 2.5 6.25-6.5' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'></path>
                  </svg>
                )}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default LanguageSelector;
