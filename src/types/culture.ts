import { Testimonial, Metric, VideoContent } from './common';

export interface CulturePageResponse {
    culturePageVideo: VideoContent;
    testimonials: Testimonial[];
    metrics: Metric[];
}

export interface CultureValue {
    content: string;
    icon?: string;
}

export interface WorkCulture {
    id: string;
    imageUrl: string;
    title: string;
    values: CultureValue[];
    description: string;
    date?: string;
    team?: string;
}

export interface WorkCulturePageResponse {
    cultures: WorkCulture[];
}
