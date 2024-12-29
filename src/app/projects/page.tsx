"use client";

import projects from "../../server-actions/data";
import { motion, AnimatePresence } from "framer-motion";

import { Nav, Footer } from "@/components";
import BackgroundGrid from "@/components/projects/Grid";
import { useProjectNavigation } from "@/hooks/useProjectNavigation";
import { carouselTransition } from "@/animations/projectsPageAnimations";
import CarouselWithGrid from "@/components/projects/Carousel";
import {
  ProjectBackground,
  ProjectContent,
  ProjectCard,
  NavigationButton,
} from "@/components/projects/ProjectComponents";

/**
 * Projects Page Component
 *
 * Features:
 * - Animated project background transitions
 * - Interactive project cards carousel
 * - Sliding content animations
 * - Navigation controls
 *
 * Layout Structure:
 * - Full-screen background with overlay
 * - Navigation bar at top
 * - Split layout with project content and carousel
 * - Navigation buttons at bottom
 */
export default function Projects() {
  const {
    activeProject,
    direction,
    getRemainingProjects,
    handleLeftClick,
    handleRightClick,
    setActiveProject,
  } = useProjectNavigation(projects);

  return (
    <div className="projectspage overflow-hidden">
      {/* BACKGROUND OVERLAY OF THE CAROUSEL */}
      <div className="relative ">
        <AnimatePresence mode="sync">
          <ProjectBackground key={activeProject.id} project={activeProject} />
        </AnimatePresence>

        {/* PROJECT CAROUSEL CONTENTS */}
        <div className="relative z-10">
          <Nav />
          <div className="carousel-container h-[80vh] flex flex-col md:flex-row items-center py-16 px-16 overflow-hidden">
            <AnimatePresence mode="sync">
              <ProjectContent key={activeProject.id} project={activeProject} />
            </AnimatePresence>

            {/* PROJECT CAROUSEL VIEW */}
            <div className="hidden sm:block right w-full md:w-[50%] md:px-8 py-8">
              <BackgroundGrid />
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeProject.id}
                  className="flex gap-6 min-w-min"
                  initial={carouselTransition.initial(direction)}
                  animate={carouselTransition.animate}
                  transition={carouselTransition.transition}
                >
                  {getRemainingProjects().map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onClick={() => setActiveProject(project)}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="navigation-btns w-full flex flex-row items-center justify-center py-14 gap-8">
            <NavigationButton direction="left" onClick={handleLeftClick} />
            <NavigationButton direction="right" onClick={handleRightClick} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
