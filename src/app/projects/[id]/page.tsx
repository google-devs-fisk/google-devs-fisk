import { getCachedProjectsData } from "@/actions/projects/getCachedProjectsData";
import ProjectInfo from "./ProjectInfo";

/*
  Retrieves project data from the cache and passes the corresponding 
  project to the ProjectInfo component. If no project matches the given ID, 
  it renders a fallback UI indicating that the project was not found.
*/
export default async function ProjectsInfoData({ id }: { id: string }) {
  const projectsPageResponse = await getCachedProjectsData();
  const project = projectsPageResponse.projects.find((p) => p.id === id);

  if (!project) {
    return <ProjectInfo />;
  }

  return <ProjectInfo project={project} />;
}
