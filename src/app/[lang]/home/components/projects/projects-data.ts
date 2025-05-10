import { Skill } from "../skills-v2";

export interface ProjectData {
  title: string;
  titleStyle: string;
  brand: {
    imageSrc: string;
    svg?: string;
  };
  site: {
    href: string;
    text: string;
  };
  github: {
    href: string;
    text: string;
  };
  dictKeys: {
    description: string;
    items: string[];
  };
  dotBgColor: string;
  image: string;
  images: string[];
  skills: Skill[];
}

const buildScreenshotPath = (
  base: string,
  imagesFileNames: string[]
) => {
  return imagesFileNames.map(
    (file) => `/images/projects/${base}/` + file
  );
};

export const screenOps: ProjectData = {
  title: "Screen Ops",
  titleStyle: "",
  brand: {
    imageSrc: "/images/projects/screen-ops/screen-ops-w.png",
  },
  site: {
    href: "github.com/leandrosve/screen-ops",
    text: "github.com/leandrosve/screen-ops",
  },
  github: {
    href: "github.com/leandrosve/screen-ops",
    text: "github.com/leandrosve/screen-ops",
  },
  dictKeys: {
    description: "projects.screenOps.description",
    items: [
      "projects.screenOps.l1",
      "projects.screenOps.l2",
      "projects.screenOps.l3",
      "projects.screenOps.l4",
    ],
  },
  dotBgColor: "bg-amber-500",
  image: "/images/projects/screen-ops/gallery/screen-ops-1.png",
  images: buildScreenshotPath("screen-ops/gallery", [
    "screen-ops-1.png",
    "screen-ops-2.png",
    "screen-ops-3.png",
    "screen-ops-4.png",
    "screen-ops-5.png",
  ]),
  skills: ["dotnet", "rabbitmq", "react", "typescript", "chakra"],
};

export const biux: ProjectData = {
  title: "BIUX",
  titleStyle: "font-light",
  brand: {
    imageSrc: "",
    svg: "biux",
  },
  site: {
    href: "https://biux.vercel.app/",
    text: "biux.vercel.app",
  },
  github: {
    href: "https://github.com/aniicossio1997/BIUX",
    text: "github.com/aniicossio1997/BIUX",
  },
  dictKeys: {
    description: "projects.biux.description",
    items: ["projects.biux.l1", "projects.biux.l2", "projects.biux.l3"],
  },
  dotBgColor: "bg-purple-500",
  image: "/images/projects/biux/desktop-light.png",
  images: buildScreenshotPath("biux/gallery", [
    "welcome.png",
    "home.png",
    "login.png",
    "register.png",
    "configuration.png",
    "configuration-2.png",
  ]),
  skills: ["react", "typescript", "node", "nestjs", "chakra"],
};

export const queuety: ProjectData = {
  title: "Queuety",
  titleStyle: "font-bold",
  brand: {
    imageSrc: "",
    svg: "queuety",
  },
  site: {
    href: "https://queuety.vercel.app",
    text: "queuety.vercel.app",
  },
  github: {
    href: "https://github.com/leandrosve/queuety",
    text: "github.com/leandrosve/queuety",
  },
  dictKeys: {
    description: "projects.queuety.description",
    items: [
      "projects.queuety.l1",
      "projects.queuety.l2",
      "projects.queuety.l3",
      "projects.queuety.l4",
    ],
  },
  dotBgColor: "bg-amber-600 dark:bg-purple-500",
  image: "/images/projects/queuety/desktop.png",
  images: buildScreenshotPath("queuety", [
    "desktop-dark.png",
    "desktop-light.png",
    "settings.png",
    "japanese.png",
    "colors-2.png",
    "mobile.jpg",
    "modal.png",
    "settings.png",
  ]),
  skills: [
    "react",
    "typescript",
    "node",
    "nestjs",
    "socket",
    "chakra",
    "youtube",
  ],
};
