import { Section, VideoContent } from "./common";
import FirebaseFirestore from "@google-cloud/firestore";

/** These are component's data state props */
export interface RelevantLink {
  docsLink: string;
  docsTitle: string;
}

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
  relevantLinks: RelevantLink[];
}

export interface ProjectsPageResponse {
  projects: Project[];
  lastUpdated: FirebaseFirestore.Timestamp;
}

/** These are component's element state props */
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
