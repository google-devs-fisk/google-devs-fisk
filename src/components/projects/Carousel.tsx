/**
 * Project Components Module
 * A collection of animated components for the projects showcase section
 * using Framer Motion for animations and TypeScript for type safety.
 */
import projects from "../../server-actions/data";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundGrid from "@/components/projects/Grid";
import { useProjectNavigation } from "@/hooks/useProjectNavigation";
import { carouselTransition } from "@/animations/projectsPageAnimations";
import { ProjectCard } from "@/components/projects/ProjectComponents";

const CarouselWithGrid = () => {
  const { activeProject, direction, getRemainingProjects, setActiveProject } =
    useProjectNavigation(projects);
  return (
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
  );
};

export default CarouselWithGrid;
