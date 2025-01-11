import { ProjectSummary, Testimonial } from "./common";
import FirebaseFirestore from "@google-cloud/firestore";

export interface HomePageResponse {
    homeVideoUrl: string;
    projectSummaries: ProjectSummary[];
    testimonials: Testimonial[];
    lastUpdated: FirebaseFirestore.Timestamp;
}