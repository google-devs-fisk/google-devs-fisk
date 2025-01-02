import { ProjectSummary, Testimonial } from "./common";

export interface HomePageResponse {
    homeVideoUrl: string;
    projectSummaries: ProjectSummary[];
    testimonials: Testimonial[];
}