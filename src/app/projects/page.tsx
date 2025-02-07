import { getCachedProjectsData } from "@/actions/projects/getCachedProjectsData";
import { ProjectsWrapper} from "@/components";

/**
 * Fetches cached project data and passes it to the Projects component.
 */
export default async function ProjectsInfoData() {
  const projectsData = await getCachedProjectsData();
  return <ProjectsWrapper projectsData={projectsData.projects} />;
}
