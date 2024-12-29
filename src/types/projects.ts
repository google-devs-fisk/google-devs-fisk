import { Section, VideoContent } from "./common";

export interface Project {
  id: string;
  projectHeroImg: string;
  projectTitle: string;
  author?: string;
  readTimeInMins: number;
  overview: Section;
  problemStatement: string;
  features: Section;
  demo: VideoContent;
  relevantLinks: string[];
}

export interface NavigationButtonProps {
  direction: "left" | "right";
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export interface ProjectContentProps {
  project: Project;
}

export interface ProjectBackgroundProps {
  project: Project;
}

export interface ProjectsPageResponse {
  projects: Project[];
}
