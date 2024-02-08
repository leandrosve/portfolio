'use client';
import { useEffect, useState } from 'react';
import IconButton, { IconButtonProps } from '../common/icon-button';
import MoonIcon from '../../assets/icons/moon-icon.svg';
import SunIcon from '../../assets/icons/sun-icon.svg';
import { useTheme } from 'next-themes';

const ThemeSwitchButton = (props: Omit<IconButtonProps, 'children'>) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <IconButton variant='ghost' {...props}>
    <div></div>
  </IconButton>;
  return (
    <IconButton aria-label='theme switcher' onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} variant='ghost' {...props}>
      {resolvedTheme == 'dark' ? <MoonIcon className='stroke-content-300' /> : <SunIcon className='stroke-content-200' />}
    </IconButton>
  );
};

export default ThemeSwitchButton;
