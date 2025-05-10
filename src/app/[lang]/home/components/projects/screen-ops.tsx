import { Locale, getDictionary } from "../../../../../i18n/dictionary";
import ExternalLinkIcon from "@/app/assets/icons/external-link-icon.svg";
import Image from "next/image";
import BoldTextParser from "@/app/components/common/bold-text-parser";
import IconButton from "@/app/components/common/icon-button";
import GithubIcon from "@/app/assets/icons/github-icon.svg";
import Screenshots from "./screenshots";
import SkillsV2 from "../skills-v2";

const getScreenshots = () => {
  const files = [
    "screen-ops-1.png",
    "screen-ops-2.png",
    "screen-ops-3.png",
    "screen-ops-4.png",
    "screen-ops-5.png",
  ];
  return files.map((file) => "/images/projects/screen-ops/gallery/" + file);
};

export default async function ScreenOps({ lang = "en" }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  return (
    <div
      style={{ maxWidth: 1200 }}
      className="relative flex items-center  mt-16 flex-col  bg-white dark:bg-transparent shadow-lg dark:bg-gradient-to-tr from-base-100 to-base-200 p-10 border border-content-300/20 "
    >
      <div className="relative flex  max-lg:flex-col  items-center flex-row-reverse gap-10">
        <div className="flex flex-col items-start">
          <div className="flex items-center relative">
            <Image
              className="h-24 w-24"
              src="/images/projects/screen-ops/screen-ops-w.png"
              height={120}
              width={120}
              alt="screen ops logo"
            />
            <div className=" flex flex-col items-start p-4 ">
              <h2 className="text-5xl  mb-0 lg:text-4xl">Screen Ops</h2>
              <a
                className="text-lg font-light mb-0 text-content-300 flex items-center gap-2 underline line-clamp-1 lg:text-sm"
                href="https://github.com/leandrosve/screen-ops/"
                target="_blank"
              >
                <ExternalLinkIcon className="h-4 w-4" />
                github.com/leandrosve/screen-ops
              </a>
            </div>
          </div>
          <p className="lg:max-w-md text-start">
            <BoldTextParser text={dict.projects.screenOps.description} />
          </p>
          <ul className="text-sm flex flex-col text-start mt-4">
            <li>
              <ListDot />
              {dict.projects.screenOps.l1}
            </li>
            <li>
              <ListDot />
              {dict.projects.screenOps.l2}
            </li>
            <li>
              <ListDot />
              {dict.projects.screenOps.l3}
            </li>
            <li>
              <ListDot />
              {dict.projects.screenOps.l4}
            </li>
          </ul>
        </div>
        <div className="relative shrink-0">
          <div
            className={`rounded-3xl  max-w-[600px] max-w[400px] overflow-hidden bg-base-300/20 shadow-xl`}
          >
            <Image
              src={`/images/projects/screen-ops/gallery/screen-ops-1.png`}
              alt="screen-ops"
              width={900}
              height={600}
              className="w-full h-full"
            />
          </div>
          <Screenshots images={getScreenshots()} />
        </div>
      </div>
      <div className="flex flex-1 self-stretch justify-between">
        <SkillsV2
          skillList={["dotnet", "rabbitmq", "react", "typescript", "chakra"]}
        />
        <a
          href="https://github.com/leandrosve/screen-ops"
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

const ListDot = () => (
  <div className="h-1 w-1 mb-1 bg-amber-500 inline-block rounded-full mr-2 shadow-[0_0_5px_#d2a5f3]" />
);
