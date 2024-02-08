'use client';
import { useEffect, useState } from 'react';
import GalleryIcon from '@/app/assets/icons/gallery-icon.svg';
import Gallery from './gallery';

export default function Screenshots({ images }: { images: string[] }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <div
        tabIndex={0}
        onClick={() => setIsGalleryOpen(true)}
        className='rounded-3xl  text-content-100 opacity-0 hover:opacity-100 focus:opacity-100 absolute h-full w-full top-0 left-0 flex flex-col items-center justify-center z-2 bg-base-300/30 transition-opacity ease-in  cursor-pointer'
      >
        <GalleryIcon className='h-8 w-8 fill-content-100 font-bold' /> Screenshots
      </div>
      <Gallery open={isGalleryOpen} onChange={(v) => setIsGalleryOpen(v)} images={images} />
    </>
  );
}
