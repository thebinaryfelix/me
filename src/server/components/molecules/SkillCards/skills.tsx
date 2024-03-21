import { TranslationProps } from "@/types/translation";
import FrontendIcon from "./icons/Frontend.icon";
import DatabaseIcon from "./icons/Database.icon";
import ToolsIcon from "./icons/Tools.icon";
import BackendIcon from "./icons/Backend.icon";
import DevOpsIcon from "./icons/Devops.icon";
import MobileIcon from "./icons/Mobile.icon";
import TestingIcon from "./icons/Test.icon";
import OthersIcon from "./icons/Others.icon";

export const getSkills = (dictionary: TranslationProps["dictionary"]) => [
  {
    title: dictionary.home.skills.frontend.title,
    Icon: <FrontendIcon />,
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: dictionary.home.skills.backend.title,
    Icon: <BackendIcon />,
    tags: ["Node.js", "Express", "NestJS"],
  },
  {
    title: dictionary.home.skills.databases.title,
    Icon: <DatabaseIcon />,
    tags: ["MongoDB", "Firebase"],
  },
  {
    title: dictionary.home.skills.devops.title,
    Icon: <DevOpsIcon />,
    tags: ["Azure", "GitHub Actions", "Docker", "Kubernetes"],
  },
  {
    title: dictionary.home.skills.tools.title,
    Icon: <ToolsIcon />,
    tags: ["Git", "GitHub", "Bitbucket", "Jira", "Kanbanize"],
  },
  {
    title: dictionary.home.skills.mobile.title,
    Icon: <MobileIcon />,
    tags: ["React Native"],
  },
  {
    title: dictionary.home.skills.testing.title,
    Icon: <TestingIcon />,
    tags: ["Jest", "Testing Library", "Cypress"],
  },
  {
    title: dictionary.home.skills.others.title,
    Icon: <OthersIcon />,
    tags: ["CyberSec", "REST", "SEO", "Monorepos", "Microfrontends"],
  },
];
