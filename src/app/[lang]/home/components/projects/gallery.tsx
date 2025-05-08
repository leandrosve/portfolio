import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import Button from '@/app/components/common/button';
import IconButton from '@/app/components/common/icon-button';
import ChevronLeftIcon from '@/app/assets/icons/chevron-left-icon.svg';
import CloseIcon from '@/app/assets/icons/close-icon.svg';
import { joinClasses, printIf } from '@/app/components/utils/ClassUtils';
import useGallery from '@/hooks/useGallery';
import Modal from '@/app/components/common/modal';

const sizes = 'xl:h-[800px] xl:w-[1100px] lg:h-[570px] lg:w-[900px] md:h-[500px] md:w-[700px] max-md:w-[95vw] max-md:h-[90vh]';

const Gallery = ({ images, open, onChange }: { images: string[]; open: boolean; onChange: (value: boolean) => void }) => {
  const { ref, scrollTo, onNext, onPrev, scrollSnaps, selectedIndex, prevDisabled, nextDisabled } = useGallery();

  return (
    <Modal open={open} onChange={onChange} >
      <div>
        <div className={`relative flex flex-col items-center overflow-hidden ${sizes}`}>
          <div className='embla__viewport overflow-hidden h-full w-full' ref={ref}>
            <div className='embla__container  h-full w-full  flex '>
              {images.map((image, index) => (
                <div className='relative embla__slide h-full flex-[0_0_100%] ' key={index}>
                  <Image src={image} alt='queuety' layout='fill' objectFit='contain' className='rounded-sm animate-fadeIn' />
                  <div>
                    <Image
                      src={image}
                      width={10}
                      height={10}
                      alt=''
                      className={`box-shadow-[0_0_4px_black] -z-20 absolute max-sm:rotate-90 blur-xl rounded-md h-full w-full left-0 top-0 opacity-0 ${printIf(
                        'gallery-image-fade-in',
                        images[selectedIndex] == image
                      )}`}
                    />
                    <div className='-z-10 absolute h-full w-full left-0 top-0'></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='absolute bottom-2'>
            <div className='flex flex-col items-center'>
              <div className='flex gap-2 mt-5'>
                {scrollSnaps.map((_, index) => (
                  <Button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={joinClasses(
                      'rounded-full h-3 w-3 shadow-sm min-h-2 p-0 bg-primary-200',
                      printIf('bg-primary-400', index === selectedIndex)
                    )}
                  >
                    {' '}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='absolute md:-left-10 top-3  max-sm:right-2 max-md:top-0'>
          <Dialog.Close asChild>
            <IconButton variant='ghost' className='hover:bg-transparent dark:hover:bg-transparent text-white'>
              <CloseIcon className='h-7 w-7 drop-shadow-[0_0_4px_black]' />
            </IconButton>
          </Dialog.Close>
        </div>
        <IconButton
          variant='ghost'
          className='hover:bg-transparent dark:hover:bg-transparent absolute -left-10 top-[50%] max-md:left-2  -translate-y-1/2 text-white drop-shadow-[0_0_4px_black]'
          size='sm'
          onClick={onPrev}
          isDisabled={prevDisabled}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          variant='ghost'
          size='sm'
          className='hover:bg-transparent dark:hover:bg-transparent absolute -right-10 top-[50%] max-md:right-2 -translate-y-1/2 text-white drop-shadow-[0_0_4px_black]'
          onClick={onNext}
          isDisabled={nextDisabled}
        >
          <ChevronLeftIcon className='-scale-100' />
        </IconButton>
      </div>
    </Modal>
  );
};

export default Gallery;
