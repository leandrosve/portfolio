import React from 'react';
import ThemeSwitchButton from './theme-switch-button';
import LanguageSelector from './language-selector';
import { Locale } from '@/i18n/dictionary';
import Link from 'next/link';
import IconButton from '../common/icon-button';
import LinkedinIcon from '../../assets/icons/linkedin-icon.svg';
import GithubIcon from '../../assets/icons/github-icon.svg';

interface Props {
  lang: Locale;
}
const Header = ({ lang }: Props) => {
  return (
    <header className='flex justify-between p-4 text-xl items-center xl:px-80 px-10 z-10 border-b border-content-300/20'>
      <div className='text-3xl flex items-center gap-1'>
        <a href='https://github.com/leandrosve' target='_blank' aria-label='linkedin profile'>
          <IconButton asSpan tabIndex={0} variant='ghost'>
            <GithubIcon className='w-7 h-7 fill-content-300' />
          </IconButton>
        </a>
        <a href='https://www.linkedin.com/in/leandro-svetlich' target='_blank' aria-label='github profile'>
          <IconButton asSpan variant='ghost'>
            <LinkedinIcon className='w-7 h-7 fill-content-300' />
          </IconButton>
        </a>
      </div>

      <div className='flex gap-2 items-center'>
        <div className='flex gap-8 items-center uppercase text-sm font-bold mr-5 text-content-300 hidden'>
          <Link href='/projects'>Proyectos</Link>
          <Link href='/contact'>Contacto</Link>
        </div>
        <LanguageSelector lang={lang} />
        <ThemeSwitchButton />
      </div>
    </header>
  );
};

export default Header;
