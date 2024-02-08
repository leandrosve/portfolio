import Image from 'next/image';
import Button from '../../../components/common/button';
import ContactIcon from '../../../assets/icons/contact-icon.svg';
import DownloadFileIcon from '../../../assets/icons/download-file-icon.svg';
import LocationIcon from '../../../assets/icons/location-icon.svg';
import { Locale, getDictionary } from '@/i18n/dictionary';
import BoldTextParser from '@/app/components/common/bold-text-parser';
import Link from 'next/link';
import Contact from './contact';

export default async function Welcome({ lang = 'en' }: { lang: Locale }) {
  const dict = await getDictionary(lang);
  return (
    <div className='flex flex-col items-center justify-center self-center animate-fadeIn relative relative overflow-x-hidden py-20 max-md:py-1 lg:py-24  text-white'>
      <div className='smooth-gradient'></div>
      <div className='flex items-center gap-10 relative pt-14 px-2 0 max-md:flex-col'>
        <div className='h-72 w-72 max-md:h-52 max-md:w-52 rounded-full shadow-lg overflow-hidden flex items-center justify-center relative z-1'>
          <Image className='rounded-full  h-64 w-64 z-10 max-md:h-48 max-md:w-48' src='/images/me.jpg' alt='selfie' width={250} height={250} />
          <Image
            className='absolute rounded-full shadow-md h-full w-full  blur-xl  contrast-150 brightness-130 opacity-50 animate-spin-slow'
            src='/images/me.jpg'
            alt='selfie'
            aria-hidden
            width={250}
            height={250}
          />
        </div>

        <div className='flex flex-col items-start justify-center max-w-md  max-md:items-center max-md:text-center'>
          <h2 className='text-xl font-light uppercase md:-mb-2 tracking-wider text-yellow-300'>{dict.welcome.title}</h2>
          <h1 className='text-4xl font-bold uppercase tracking-wider'>Leandro Svetlich</h1>

          <p className=' mt-4 text-lg leading-5'>
            <BoldTextParser text={dict.welcome.introduction} />
          </p>
          <div className='flex items-center gap-4 mt-10 flex-wrap justify-center'>
            <Contact />
            <Link href={`/documents/CV-2024.${lang}.pdf`} download target='_blank' rel='noopener noreferrer' locale={false}>
              <Button asSpan variant='accent' className='shadow-lg'>
                <DownloadFileIcon className='w-6 h-6' />
                {dict.welcome.downloadCV}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-5  text-lg mt-20 pb-20 '>
        <div className='flex gap-1 items-center flex-wrap justify-center column-gap-5'>
          <span className='flex gap-1 items-center'>
            <LocationIcon className='h-7 w-7' /> La Plata
          </span>
          <span className='flex gap-1 items-center'>
            <Image alt='ar' className='rounded-full h-7 w-7 ml-5' src='/images/flags/ar.png' height={20} width={20} />
            Argentina
          </span>
        </div>
      </div>
    </div>
  );
}
