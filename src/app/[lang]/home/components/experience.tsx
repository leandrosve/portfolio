import Image from 'next/image';
import { Locale, getDictionary } from '../../../../i18n/dictionary';
import Skills from './skills';
import BoldTextParser from '@/app/components/common/bold-text-parser';

export default async function Experience({ lang = 'en' }: { lang: Locale }) {
  const dict = await getDictionary(lang);
  return (
    <section  id='experience' className='h-full text-center flex flex-col items-center justify-center '>
      <h1 className='text-6xl text-content-300 font-light tracking-widest'>{dict.experience.title}</h1>
      <div className='mt-16 flex flex-col items-center p-4'>
        <div className='flex items-end justify-between w-full flex-wrap max-sm:justify-center max-sm:gap-5 gap-y-2'>
          <div className='flex items-center '>
            <Image className='h-20 w-20 object-fill' src='/images/experience/ensolvers.png' height={80} width={80} alt='ensolvers company logo' />
            <h2 className='text-5xl font-light mb-0'>
              <b className='font-bold'>en</b>solvers
            </h2>
          </div>
          <span className='mb-6 text-content-300/20 flex-grow border-b mx-3 border-content-300/20 max-sm:hidden' />
          <span className='text-xl font-bold mb-4'>2021 - 2023</span>
        </div>
        <ul className='mt-4 text-start text-content-300 max-sm:text-center'>
          {dict.experience.ensolvers.map((text, index) => (
            <li key={index}>
              <div className='h-1 w-1 mb-1 bg-amber-600 dark:bg-amber-500 inline-block rounded-full mr-2 shadow-[0_0_5px_#fea12d]' />
              <BoldTextParser text={text} />
            </li>
          ))}
        </ul>
        <Skills skillList={['spring', 'react', 'kafka', 'redis', 'sql', 'elastic']} />
      </div>
    </section>
  );
}
