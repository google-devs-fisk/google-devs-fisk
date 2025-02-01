"use server";

import { unstable_cache } from "next/cache";
import { fetchWorkCulturePageData } from "./fetchWorkCulturePageData";

/**
 * Fetches and caches work culture data from Firestore.
 *
 * This function retrieves work culture data using `fetchWorkCulturePageData()`,
 * caches the response using `unstable_cache`, and revalidates the cache
 * every 1 hour.
 *
 * @returns {Promise<CulturePageResponse>} The cached or freshly fetched work culture data.
 * @throws {Error} If fetching work culture data fails.
 */
export const getCachedWorkCultureData = unstable_cache(
  async () => {
    try {
      // Fetch the latest work culture data from Firestore
      const culturePageResponse = await fetchWorkCulturePageData();

      // Return cached work culture data
      return culturePageResponse;
    } catch (error) {
      console.error("Error fetching work culture data:", error);
      throw new Error("Failed to fetch work culture data");
    }
  },
  ["culture"], // Cache tag used for revalidation
  { revalidate: 3600 } // Revalidate cache every 1 hour
);
