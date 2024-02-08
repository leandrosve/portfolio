import Image from 'next/image';
import React from 'react';
import LocationIcon from '@/app/assets/icons/location-icon.svg';
import NextJSIcon from '@/app/assets/icons/nextjs-icon.svg';
import IconButton from '../common/icon-button';
import GithubIcon from '@/app/assets/icons/github-icon.svg';
import LinkedinIcon from '@/app/assets/icons/linkedin-icon.svg';
import CopyrightIcon from '@/app/assets/icons/copyright-icon.svg';

const Footer = () => {
  return (
    <footer className='text-content-300 flex justify-between  min-h-80 mt-20 p-4 text-xl items-center xl:px-80 px-10 z-10 border-t border-content-300/20 gap-y-10'>
      <div className='flex justify-between w-full flex-wrap max-md:flex-col justify-center items-center  gap-y-5'>
        <div className='flex flex-col gap-5 justify-start gap-y-5'>
          <div className=' text-sm flex gap-1 items-center flex-wrap justify-center'>
            <span className='flex gap-1 items-center'>
              <LocationIcon className='h-7 w-7 -ml-1' /> La Plata
            </span>
            <Image alt='ar' className='rounded-full h-7 w-7 ml-5' src='/images/flags/ar.png' height={20} width={20} />
            <span className='flex gap-1 items-center'>Argentina</span>
          </div>
          <div className='text-sm flex gap-1 items-center'>
            <CopyrightIcon className='h-4 w-4 stroke-content-300' /> Leandro Svetlich - 2024
          </div>
        </div>
        <div className='flex flex-col gap-5 justify-start gap-y-5'>
          <div className='flex gap-2 items-center'>
            <a  href='https://github.com/leandrosve' target='_blank' aria-label='github profile'>
              <IconButton asSpan variant='ghost' size='sm'>
                <GithubIcon className='w-5 h-5 fill-content-300' />
              </IconButton>
            </a>
            <a href='https://www.linkedin.com/in/leandro-svetlich' target='_blank' aria-label='linkedin profile'>
              <IconButton asSpan variant='ghost' size='sm'>
                <LinkedinIcon className='w-5 h-5 fill-content-300' />
              </IconButton>
            </a>
          </div>
          <div className='flex gap-2 items-center text-sm'>
            <NextJSIcon className='h-6 w-6 stroke-content-300' /> Developed with NextJS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
