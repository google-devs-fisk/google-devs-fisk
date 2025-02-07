"use server";

import { unstable_cache } from "next/cache";
import { fetchHomePageData } from "./fetchHomePageData";

/**
 * Fetches and caches home page data from Firestore.
 *
 * This function retrieves home page data using `fetchHomePageData()`,
 * caches the response using `unstable_cache`, and revalidates the cache
 * as needed.
 *
 * @returns {Promise<HomePageResponse>} The cached or freshly fetched home page data.
 * @throws {Error} If fetching home page data fails.
 */
export const getCachedHomePageData = unstable_cache(
  async () => {
    try {
      // Fetch the latest home page data from Firestore
      const homePageResponse = await fetchHomePageData();

      // Return cached home page data
      return homePageResponse;
    } catch (error) {
      console.error("Error fetching home page data:", error);
      throw new Error("Failed to fetch home page data");
    }
  },
  ["home"],
  { revalidate: 86400 } // Revalidate cache every 1 day
);
