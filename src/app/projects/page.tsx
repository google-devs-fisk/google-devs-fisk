import { getCachedProjectsData } from "@/actions/projects/getCachedProjectsData";
import Projects from "@/app/projects/Projects";

/**
 * Fetches cached project data and passes it to the Projects component.
 */
export default async function ProjectsInfoData() {
  const projectsData = await getCachedProjectsData();
  return <Projects projectsData={projectsData} />;
}
