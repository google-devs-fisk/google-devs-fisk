/** These are component's data state props */
export interface TextContent {
    imgUrl?: string;
    content: string;
}

export interface VideoContent {
    title: string;
    imgUrl: string;
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

/** These are component's element state props */
export interface BtnProps {
    text: string;
    link: string;
    variant?: string;
}

export interface ImageComponentProps {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
}

export interface LeftHalfRectangleProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  ariaLabel?: string;
}

export interface TextSectionProps {
    heading: string;
    paragraph?: string;
    imgURL?: string;
    btnLink?: BtnProps; 
    flipLayout?: boolean;
}