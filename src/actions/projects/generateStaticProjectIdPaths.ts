"use server";

import { Project } from "@/types/projects";
import {
  revalidateCacheUsingTag,
  isCacheOlderThanOneDay,
  getCachedProjectsData,
} from "@/actions";

/**
 * Generates static paths for projects using cached data.
 *
 * Fetches project data from the cache, checks if the cache is older than one day,
 * and triggers revalidation if necessary. Returns an array of project IDs for static generation.
 *
 * @returns {Promise<{ id: string }[]>} An array of objects containing project IDs.
 * @throws {Error} If data retrieval or revalidation fails.
 */
export async function generateStaticProjectIdPaths(): Promise<
  { id: string }[]
> {
  try {
    // Fetch projects data from the cache
    const projectsPageResponse = await getCachedProjectsData();

    // Extract the last updated timestamp (assumes `lastUpdated` is in seconds)
    const lastUpdatedTimestamp = projectsPageResponse.lastUpdated.seconds;

    // Check if the cache is outdated (older than one day)
    if (isCacheOlderThanOneDay(lastUpdatedTimestamp)) {
      console.log("Revalidating projects data cache...");
      revalidateCacheUsingTag("projects");

      // Fetch updated project data after revalidation
      return await getCachedProjectsData().then((response) =>
        response.projects.map((project: Project) => ({
          id: project.id,
        }))
      );
    }

    // Return project IDs from the cached data
    return projectsPageResponse.projects.map((project: Project) => ({
      id: project.id,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    throw new Error("Failed to generate static params");
  }
}
