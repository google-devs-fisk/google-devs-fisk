export interface TextContent {
    imgUrl?: string;
    content: string;
}

export interface VideoContent {
    title: string;
    genres: string[];
}

export interface Section {
    textContents: TextContent[];
}

export interface Testimonial {
    id: string;
    authorImgUrl?: string;
    author?: string;
    content: string;
    classification: string;
    teamDomain: string;
}

export interface NumericalStat {
    value: number;
    isPercent: boolean;
}

export interface Goal {
    heading: string;
    stat: NumericalStat;
}

export interface Metric {
    metricHeading: string;
    stat: NumericalStat;
    metricSubHeading: string;
    goals: Goal[];
}