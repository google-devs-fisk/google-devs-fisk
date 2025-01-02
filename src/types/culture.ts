import { Testimonial, Metric, VideoContent} from './common';

export interface CulturePageResponse {
    culturePageVideo: VideoContent;
    testimonials: Testimonial[];
    metrics: Metric[];
}