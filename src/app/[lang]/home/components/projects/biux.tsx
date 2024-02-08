import Image from 'next/image';
import { Locale, getDictionary } from '../../../../../i18n/dictionary';
import ExternalLinkIcon from '@/app/assets/icons/external-link-icon.svg';
import BiuxIcon from '@/app/assets/icons/biux-icon.svg';
import Skills from '../skills';
import QueuetyDesktopImage from './queuety-adaptative-images';
import BoldTextParser from '@/app/components/common/bold-text-parser';
import Screenshots from './screenshots';
import IconButton from '@/app/components/common/icon-button';
import GithubIcon from '@/app/assets/icons/github-icon.svg';

const getScreenshots = () => {
  const files = ['welcome.png', 'home.png', 'login.png', 'register.png', 'configuration.png', 'configuration-2.png'];
  return files.map((file) => '/images/projects/biux/gallery/' + file);
};

export default async function Biux({ lang = 'en' }: { lang: Locale }) {
  const dict = await getDictionary(lang);
  return (
    <div
      style={{ maxWidth: 1200 }}
      className='relative flex gap-10 items-center  mt-16 max-lg:flex-col flex-row-reverse  bg-white dark:bg-transparent shadow dark:bg-gradient-to-tr from-base-200 to-base-100 p-10 border border-content-300/20 '
    >
      <div className='flex flex-col items-start'>
        <div className='flex items-center'>
          <BiuxIcon className='h-24 w-24' />
          <div className=' flex flex-col items-start p-4'>
            <h2 className='text-5xl font-light mb-0 tracking-widest'>BIUX</h2>
            <a className='text-xl font-light mb-0 text-content-300 flex items-center gap-2' href='https://biux.vercel.app/' target='_blank'>
              <ExternalLinkIcon className='h-4 w-4' />
              biux.vercel.app
            </a>
          </div>
        </div>
        <p className=' text-start'>
          <BoldTextParser text={dict.projects.biux.description} />
        </p>
        <ul className='text-sm flex flex-col text-start mt-4'>
          <li>
            <ListDot />
            {dict.projects.biux.l1}
          </li>
          <li>
            <ListDot />
            {dict.projects.biux.l2}
          </li>
          <li>
            <ListDot />
            {dict.projects.biux.l3}
          </li>
        </ul>
        <Skills skillList={['react', 'node', 'nestjs', 'chakra']} />
      </div>
      <div className='relative shrink-0'>
        <div className={`rounded-3xl  max-w-[600px] max-w[400px] overflow-hidden bg-base-300/20 shadow-xl`}>
          <Image src={`/images/projects/biux/desktop-${'light'}.png`} alt='biux' width={900} height={600} className='w-full h-full' />
        </div>
        <Screenshots images={getScreenshots()} />
      </div>
      <a href='https://github.com/aniicossio1997/BIUX'  target='_blank' className='absolute bottom-2 right-2' aria-label='github repository'>
        <IconButton asSpan variant='ghost'>
          <GithubIcon className='w-7 h-7 fill-content-300/20 ' />
        </IconButton>
      </a>
    </div>
  );
}

const ListDot = () => <div className='h-1 w-1 mb-1 bg-indigo-500 inline-block rounded-full mr-2 shadow-[0_0_5px_#d2a5f3]' />;
