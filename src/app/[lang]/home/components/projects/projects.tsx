import Button from '@/app/components/common/button';
import { Locale, getDictionary } from '../../../../../i18n/dictionary';
import GithubIcon from '@/app/assets/icons/github-icon.svg';
import ProjectCard from './project-card';
import { biux, queuety, screenOps } from './projects-data';
export default async function Projects({ lang = 'en' }: { lang: Locale }) {
  const dict = await getDictionary(lang);
  return (
    <section id='projects' className='text-center flex flex-col items-center justify-center mt-20  section-gradient md:p-4'>
      <div className='z-2'>
        <h1 className='text-6xl text-content-300  font-light tracking-widest mb-5'>{dict.projects.title}</h1>
        <ProjectCard project={queuety} lang={lang} />
        <ProjectCard project={screenOps} lang={lang} />
         <ProjectCard project={biux} lang={lang} />
        <a href='https://github.com/leandrosve'  target='_blank' className='flex gap-2 items-center mt-5'>
          <Button variant='ghost' className='text-content-300'>
            <GithubIcon className='h-7 w-7' /> {dict.projects.more}
          </Button>
        </a>
      </div>
    </section>
  );
}
