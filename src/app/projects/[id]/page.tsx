import { getCachedProjectsData } from "@/actions/projects/getCachedProjectsData";
import { ProjectInfoWrapper } from "@/components";

/*
  Retrieves project data from the cache and passes the corresponding 
  project to the ProjectInfo component. If no project matches the given ID, 
  it renders a fallback UI indicating that the project was not found.
*/

// Add revalidate to trigger incremental static regeneration (ISR)
export const revalidate = 86400; // Revalidate every 1 day

// Ensure Next.js pre-builds dynamic routes at build time
export async function generateStaticParams() {
  const projectsPageResponse = await getCachedProjectsData();
  return projectsPageResponse.projects.map((project) => ({
    id: project.id,
  }));
}
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
