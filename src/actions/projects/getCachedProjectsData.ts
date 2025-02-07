"use server";

import { unstable_cache } from "next/cache";
import { fetchProjectsPageData } from "./fetchProjectsPageData";

/**
 * Fetches and caches project data from Firestore.
 *
 * This function retrieves project data using `fetchProjectsPageData()`,
 * caches the response using `unstable_cache`, and revalidates the cache
 * every 1 hour.
 *
 * @returns {Promise<ProjectsPageResponse>} The cached or freshly fetched project data.
 * @throws {Error} If fetching project data fails.
 */
export const getCachedProjectsData = unstable_cache(
  async () => {
    try {
      // Fetch the latest projects data from Firestore
      const projectsPageResponse = await fetchProjectsPageData();

      // Return cached projects data
      return projectsPageResponse;
    } catch (error) {
      console.error("Error fetching projects data:", error);
      throw new Error("Failed to fetch projects data");
    }
  },
  ["projects"], // Cache tag used for revalidation
  { revalidate: 86400 } // Revalidate cache every 1 day
);
