import { Locale, getDictionary } from '../../../../../i18n/dictionary';
import ExternalLinkIcon from '@/app/assets/icons/external-link-icon.svg';
import QueuetyIcon from '@/app/assets/icons/queuety-icon.svg';
import Skills from '../skills';
import QueuetyDesktopImage from './queuety-adaptative-images';
import BoldTextParser from '@/app/components/common/bold-text-parser';
import IconButton from '@/app/components/common/icon-button';
import GithubIcon from '@/app/assets/icons/github-icon.svg';
export default async function Queuety({ lang = 'en' }: { lang: Locale }) {
  const dict = await getDictionary(lang);
  
  return (
    <div
      style={{ maxWidth: 1200 }}
      className='relative flex gap-10 items-center  mt-16 max-lg:flex-col flex-row-reverse  bg-white dark:bg-transparent shadow dark:bg-gradient-to-tr from-base-200 to-base-100 p-10 border border-content-300/20 '
    >
      <div className='flex flex-col items-start'>
        <div className='flex items-center'>
          <QueuetyIcon className='h-24 w-24' />
          <div className=' flex flex-col items-start p-4'>
            <h2 className='text-5xl font-bold mb-0'>Queuety</h2>
            <a className='text-xl font-light mb-0 text-content-300 flex items-center gap-2' href='https://queuety.vercel.app' target='_blank'>
              <ExternalLinkIcon className='h-4 w-4' />
              queuety.vercel.app
            </a>
          </div>
        </div>
        <p className='lg:max-w-md text-start'>
          <BoldTextParser text={dict.projects.queuety.description} />
        </p>
        <ul className='text-sm flex flex-col text-start mt-4'>
          <li>
            <ListDot />
            {dict.projects.queuety.l1}
          </li>
          <li>
            <ListDot />
            {dict.projects.queuety.l2}
          </li>
          <li>
            <ListDot />
            {dict.projects.queuety.l3}
          </li>
          <li>
            <ListDot />
            {dict.projects.queuety.l4}
          </li>
        </ul>
        <Skills skillList={['react', 'node', 'nestjs', 'socket', 'chakra', 'youtube']} />
      </div>
      <QueuetyDesktopImage />
      <a href='https://github.com/leandrosve/queuety' target='_blank' className='absolute bottom-2 right-2' aria-label='github repository'>
        <IconButton asSpan variant='ghost'>
          <GithubIcon className='w-7 h-7 fill-content-300/20' />
        </IconButton>
      </a>
    </div>
  );
}

const ListDot = () => <div className='h-1 w-1 mb-1 bg-amber-600 dark:bg-purple-500 inline-block rounded-full mr-2 shadow-[0_0_5px_#bc4598]' />;
