"use client";

/**
 * Project Components Module
 * A collection of animated components for the projects showcase section
 * using Framer Motion for animations and TypeScript for type safety.
 */

import { motion } from "framer-motion";
import Btn from "@/components/shared/btn";
import {
  scaleUpFadeIn,
  slideUpFadeIn,
  staggeredFadeIn,
} from "@/animations/projectsPageAnimations";
import {
  ProjectCardProps,
  ProjectContentProps,
  NavigationButtonProps,
  ProjectBackgroundProps,
} from "@/types/projects";

const truncateDescription = (description: string, level: 1 | 2 | 3): string => {
  const wordLimits = { 1: 25, 2: 40, 3: 50 };
  const limit = wordLimits[level] || 25; // Default to 25 if invalid level
  const words = description.split(" ");

  if (words.length > limit) {
    return `${words.slice(0, limit - 1).join(" ")} ... ${words[words.length - 1]}`;
  }
  return description;
};

/**
 * ProjectBackground Component
 * Renders an animated full-screen background image with overlay for projects
 *
 * @component
 * @param {ProjectBackgroundProps} props - Component props
 * @param {Project} props.project - Project data containing hero image
 *
 * @example
 * <ProjectBackground project={projectData} />
 */
export const ProjectBackground = ({ project }: ProjectBackgroundProps) => (
  <motion.div
    key={project.id}
    initial={scaleUpFadeIn.initial}
    animate={scaleUpFadeIn.animate}
    transition={scaleUpFadeIn.transition}
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${project.projectHeroImg})` }}
  >
    <div className="absolute inset-0 bg-purple-950/35 backdrop-blur-sm" />
  </motion.div>
);

/**
 * ProjectContent Component
 * Displays animated project details including title, description and CTA button
 *
 * @component
 * @param {ProjectContentProps} props - Component props
 * @param {Project} props.project - Project data containing title and description
 */
export const ProjectContent = ({ project }: ProjectContentProps) => {
  const rawDescription = project.overview?.textContents?.[0]?.content ?? "No description available";
  const description = truncateDescription(rawDescription, 1); // Change to 2 or 3 as needed

  return (
    <motion.div
      key={project.id}
      className="left w-full md:w-[50%] min-h-[450px] md:h-auto text-white sm:pr-8 backdrop-blur-md xl:backdrop-blur-none p-4 rounded-2xl"
      initial={slideUpFadeIn.initial}
      animate={slideUpFadeIn.animate}
      transition={slideUpFadeIn.transition}
    >
      <h2 className="project-title text-3xl md:text-7xl font-bold py-8 px-2">
        {project.projectTitle}
      </h2>
      <p className="project-description text-xl md:text-2xl pb-8 leading-relaxed">
        <span className="sm:inline md:hidden xl:hidden">{truncateDescription(description, 1)}</span>
        <span className="hidden md:inline xl:hidden">{truncateDescription(description, 2)}</span>
        <span className="hidden xl:inline">{truncateDescription(description, 3)}</span>
      </p>
      <Btn text="See Details" link={`/projects/${project.id}`} />
    </motion.div>
  );
};

/**
 * ProjectCard Component
 * Renders an interactive project card with hover animations
 *
 * @component
 * @param {ProjectCardProps} props - Component props
 * @param {Project} props.project - Project data for the card
 * @param {() => void} props.onClick - Click handler for card selection
 */
export const ProjectCard = ({ project, onClick }: ProjectCardProps) => (
  <motion.div
    key={project.id}
    onClick={onClick}
    className="project-card flex-shrink-0 w-48 md:w-72 h-72 md:h-96 bg-cover bg-center bg-no-repeat rounded-3xl border-4 border-borderPrimary cursor-pointer 
    transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg"
    style={{ backgroundImage: `url(${project.projectHeroImg})` }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  />
);

/**
 * NavigationButton Component
 * Animated navigation button for carousel/slider controls
 *
 * @component
 * @param {NavigationButtonProps} props - Component props
 * @param {'left' | 'right'} props.direction - Button direction
 * @param {() => void} props.onClick - Click handler for navigation
 */
export const NavigationButton = ({
  direction,
  onClick,
}: NavigationButtonProps) => (
  <motion.button
    onClick={onClick}
    aria-label={`Navigate ${direction}`}
    className="border-4 border-solid rounded-full h-16 w-16 text-4xl bg-gray-400/40 hover:bg-gray-400/20 transition-colors"
    variants={staggeredFadeIn}
    initial="hidden"
    animate="visible"
  >
    {direction === "left" ? "<" : ">"}
  </motion.button>
);

/**
 * Default export for the module
 */
const ProjectComponents = {
  ProjectBackground,
  ProjectContent,
  ProjectCard,
  NavigationButton,
};

export default ProjectComponents;
