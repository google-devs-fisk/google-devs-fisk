import { Section, VideoContent} from './common';

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

export interface ProjectsPageResponse {
    projects: Project[]
}