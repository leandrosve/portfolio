import Image from 'next/image';
import { Locale, getDictionary } from '../../../i18n/dictionary';
import Welcome from './components/welcome';
import Experience from './components/experience';
import Projects from './components/projects/projects';

export default async function Home({ params: { lang = 'en' } }: { params: { lang: Locale } }) {
  return (
    <div className='relative h-full w-full  grow'>
      <Welcome lang={lang} />
      <Experience lang={lang} />
      <Projects lang={lang}/>
    </div>
  );
}
