/** These are component's data state props */
export interface TextContent {
  imgUrl?: string;
  content: string;
}

export interface VideoContent {
  title: string;
  imgUrl: string;
  videoUrl: string;
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
  metricSubHeading?: string;
  subHeadingStat?: NumericalStat;
  goals?: Goal[];
}

/** These are component's element state props */

export interface HeadingProps {
  heading: string;
  className?: string;
}

export interface FooterProps {
  hideUpperFooter?: boolean;
}

export interface BtnProps {
  text: string;
  link: string;
  variant?: string;
  extra?: string;
  newTab?: boolean;
}

export interface ImageComponentProps {
  src: string;
  alt?: string;
  minHeight?: number; // Minimum height in pixels
  maxWidth?: number; // Maximum width in pixels
  rounded?: boolean; // Toggle rounded borders
  opacity?: number; // Image opacity (0 to 1)
  className?: string; // Additional class names
}

export interface LeftHalfRectangleProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  ariaLabel?: string;
}

export interface TextSectionProps {
  heading?: string;
  paragraph?: string;
  imgURL?: string;
  btnLink?: BtnProps;
  flipLayout?: boolean;
  loadOverlayContent?: boolean;
}

export interface KeySpanProps {
  genre: string;
  variant?: number;
  truncateGenreSmall?: boolean;
}
export interface VideoComponentProps {
  videoContent: VideoContent;
  buttonInfo: BtnProps;
  spanVariant?: number;
}
