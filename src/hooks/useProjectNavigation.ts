import { useState } from "react";
import { Project } from "@/types/projects";

export const useProjectNavigation = (initialPrjects: Project[]) => {
  const [activeProject, setActiveProject] = useState(initialPrjects[0]);
  const [direction, setDirection] = useState(0);

  const getRemainingProjects = () => {
    const activeIndex = initialPrjects.findIndex(
      (p) => p.id === activeProject.id
    );

    return [
      ...initialPrjects.slice(activeIndex + 1),
      ...initialPrjects.slice(0, activeIndex),
    ];
  };

  const handleNavigation =
    (isNext: boolean) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      const currentActiveIndex = initialPrjects.findIndex(
        (p) => p.id === activeProject.id
      );

      const newIndex = isNext
        ? currentActiveIndex < initialPrjects.length - 1
          ? currentActiveIndex + 1
          : 0
        : currentActiveIndex > 0
        ? currentActiveIndex - 1
        : initialPrjects.length - 1;

      setDirection(isNext ? 1 : -1);
      setActiveProject(initialPrjects[newIndex]);
    };

  return {
    activeProject,
    direction,
    getRemainingProjects,
    handleLeftClick: handleNavigation(false),
    handleRightClick: handleNavigation(true),
    setActiveProject,
  };
};
