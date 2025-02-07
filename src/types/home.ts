import { Testimonial } from "./common";
import FirebaseFirestore from "@google-cloud/firestore";

export interface HomePageResponse {
    homeVideoUrl: string;
    testimonials: Testimonial[];
    lastUpdated: FirebaseFirestore.Timestamp;
}