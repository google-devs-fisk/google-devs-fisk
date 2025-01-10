import { Testimonial, Metric, VideoContent} from './common';
import FirebaseFirestore from "@google-cloud/firestore";

export interface CulturePageResponse {
    culturePageVideo: VideoContent;
    testimonials: Testimonial[];
    metrics: Metric[];
    lastUpdated: FirebaseFirestore.Timestamp;
}