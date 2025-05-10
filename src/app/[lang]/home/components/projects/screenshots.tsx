'use client';
import { useEffect, useState } from 'react';
import GalleryIcon from '@/app/assets/icons/gallery-icon.svg';
import Gallery from './gallery';
import { useDictionary } from '@/app/context/dictionary-provider';
import Button from '@/app/components/common/button';

export default function Screenshots({ images }: { images: string[] }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const [mounted, setMounted] = useState(false);
  const dict = useDictionary();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <div
        tabIndex={0}
        onClick={() => setIsGalleryOpen(true)}
        className='group  rounded-3xl  text-content-100 absolute h-full w-full top-0 left-0 flex flex-col items-center justify-center z-2 bg-base-300/50 transition-[background] ease-in  cursor-pointer'
      >
        <Button className='absolute bottom-4 right-4 p-3 rounded-full bg-primary-500 group-hover:bg-primary-600 z-20 pointer-events-none gap-0'>
          <span className='overflow-hidden text-sm h-0 whitespace-nowrap max-w-0 group-hover:max-w-[200px] group-hover:h-auto transition-[max-width]'>
            {dict.projects.gallery}
          </span>
          <GalleryIcon className='h-5 w-5 fill-white font-bold group-hover:ml-3' />
        </Button>
      </div>
      <Gallery open={isGalleryOpen} onChange={(v) => setIsGalleryOpen(v)} images={images} />
    </>
  );
}
