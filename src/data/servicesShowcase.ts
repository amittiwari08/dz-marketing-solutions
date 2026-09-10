import { images } from "./images";
import type { CuratedImage } from "./images";

export type ShowcaseService = {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
  image: CuratedImage;
};

export const servicesShowcase: ShowcaseService[] = [
  {
    id: "it-technical-management",
    number: "01",
    title: "IT Technical Management",
    description:
      "Proactive infrastructure monitoring, troubleshooting, and technical support to keep your systems running reliably.",
    href: "/it-technical-management",
    image: images.itManagement,
  },
  {
    id: "it-consulting",
    number: "02",
    title: "IT Consulting",
    description:
      "Strategic technology guidance that aligns your IT infrastructure and software stack with your business goals.",
    href: "/it-consulting",
    image: images.aboutTeam,
  },
  {
    id: "cloud-applications",
    number: "03",
    title: "Cloud Applications",
    description:
      "Build, modernize, and migrate scalable cloud applications using modern cloud infrastructure.",
    href: "/cloud-applications",
    image: images.cloudMesh,
  },
  {
    id: "application-development",
    number: "04",
    title: "IT Application Development",
    description:
      "Custom web applications and APIs engineered for maintainability, speed, and long-term scale.",
    href: "/application-development",
    image: images.uiuxDesign,
  },
];
