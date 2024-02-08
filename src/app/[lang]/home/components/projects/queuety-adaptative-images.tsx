'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Screenshots from './screenshots';
import { printIf } from '@/app/components/utils/ClassUtils';
import Button from '@/app/components/common/button';

const GALLERY_IMAGES = [
  'desktop-dark.png',
  'desktop-light.png',
  'settings.png',
  'japanese.png',
  'colors-2.png',
  'mobile.jpg',
  'modal.png',
  'settings.png',
];

const getImagePaths = () => {
  return GALLERY_IMAGES.map((img) => '/images/projects/queuety/' + img);
};
export default function QueuetyDesktopImage() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className='relative'>
      <div
        className={`rounded-3xl shadow-xl dark:shadow-none max-w-[600px] max-w[400px] lg:w-[600px] lg:h-[400px]  overflow-hidden ${printIf(
          'animate-pulse bg-base-300/20',
          !mounted
        )}`}
      >
        {!mounted ? null : (
          <Image
            src={`/images/projects/queuety/desktop${resolvedTheme === 'light' ? '-light' : ''}.png`}
            alt='queuety'
            width={900}
            height={600}
            className=' w-full h-full'
            placeholder='empty'
          />
        )}
      </div>
      <Screenshots images={getImagePaths()} />
    </div>
  );
}
