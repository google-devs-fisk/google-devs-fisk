import { getCachedProjectsData } from "@/actions/projects/getCachedProjectsData";
import { ProjectInfoWrapper } from "@/components";

/*
  Retrieves project data from the cache and passes the corresponding 
  project to the ProjectInfo component. If no project matches the given ID, 
  it renders a fallback UI indicating that the project was not found.
*/

export const revalidate = 3600; // Revalidate every 1 hour

interface ProjectInfoPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectsInfoData({ params }: ProjectInfoPageProps)  {
  const { id } = await params;
  const projectsPageResponse = await getCachedProjectsData();
  const project = projectsPageResponse.projects.find((p) => p.id === id);

  if (!project) {
    return <ProjectInfoWrapper />;
  }

  return <ProjectInfoWrapper project={project} />;
}
