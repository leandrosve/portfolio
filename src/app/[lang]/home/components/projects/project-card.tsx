import { Locale, getDictionary } from "../../../../../i18n/dictionary";
import ExternalLinkIcon from "@/app/assets/icons/external-link-icon.svg";
import Image from "next/image";
import BoldTextParser from "@/app/components/common/bold-text-parser";
import IconButton from "@/app/components/common/icon-button";
import GithubIcon from "@/app/assets/icons/github-icon.svg";
import Screenshots from "./screenshots";
import SkillsV2 from "../skills-v2";
import { ProjectData } from "./projects-data";
import BiuxIcon from "@/app/assets/icons/biux-icon.svg";
import QueuetyIcon from "@/app/assets/icons/queuety-icon.svg";

function getByPath(obj: any, path: string): any {
  return path.split(".").reduce((acc, part) => acc?.[part], obj);
}

const getSvgIcon = (project: string) => {
  return {
    biux: <BiuxIcon className="h-24 w-24" />,
    queuety: <QueuetyIcon className="h-24 w-24" />,
  }[project];
};

export default async function ProjectCard({
  lang = "en",
  project,
}: {
  lang: Locale;
  project: ProjectData;
}) {
  const dict = await getDictionary(lang);

  return (
    <div
      style={{ maxWidth: 1200 }}
      className="relative flex items-center  mt-16 flex-col  bg-white dark:bg-transparent shadow-lg dark:bg-gradient-to-tr from-base-100 to-base-200 p-10 border border-content-300/20 "
    >
      <div className="relative flex  max-lg:flex-col  items-center flex-row-reverse gap-10">
        <div className="flex flex-col items-start">
          <div className="flex items-center relative">
            {!!project.brand.svg ? (
              getSvgIcon(project.brand.svg)
            ) : (
              <Image
                className="h-24 w-24"
                src={project.brand.imageSrc}
                height={120}
                width={120}
                alt={project.title}
              />
            )}
            <div className=" flex flex-col items-start p-4 ">
              <h2 className={`text-5xl  mb-0 lg:text-4xl ${project.titleStyle}`}>{project.title}</h2>
              <a
                className="inline-flex text-lg font-light text-content-300 items-center gap-2 underline justify-start"
                href={project.site.href}
                target="_blank"
              >
                <ExternalLinkIcon className="h-4 w-4 shrink-0" />
                <span className="line-clamp-1 text-start">
                  {project.site.text}
                </span>
              </a>
            </div>
          </div>
          <p className="lg:max-w-md text-start">
            <BoldTextParser
              text={getByPath(dict, project.dictKeys.description)}
            />
          </p>
          <ul className="text-sm flex flex-col text-start mt-4">
            {project.dictKeys.items.map((i, index) => (
              <li key={index}>
                <div
                  className={`h-1 w-1 mb-1 inline-block rounded-full mr-2 shadow-[0_0_5px_#d2a5f3] ${project.dotBgColor}`}
                />
                {getByPath(dict, i)}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative shrink-0">
          <div
            className={`rounded-3xl  w-[600px] w[400px] max-w-[90vw] overflow-hidden relative`}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={900}
              height={600}
              className="w-full h-full drop-shadow-md"
            />
          </div>
          <Screenshots images={project.images} />
        </div>
      </div>
      <div className="flex flex-1 self-stretch justify-between">
        <div  className="flex flex-1 self-stretch items-start mt-5 justify-center max-lg:flex-col max-lg:items-center gap-3">
        <h3 className='text-lg text font-bold text-content-300 '>STACK<span className="max-lg:hidden">:</span></h3>
        <SkillsV2 skillList={project.skills} className="items-center justify-center" />
        </div>
        <a
          href={project.github.href}
          target="_blank"
          className="bottom-2 absolute right-2"
          aria-label="github repository"
        >
          <IconButton asSpan variant="ghost">
            <GithubIcon className="w-7 h-7 fill-content-300/20" />
          </IconButton>
        </a>
      </div>
    </div>
  );
}