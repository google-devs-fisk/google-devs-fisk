"use server"

import { unstable_cache } from 'next/cache';
import { fetchCodelabsPageData } from '@/actions';

/**
 * Caches the codelabs data fetched from the server or database.
 * 
 * This function utilizes Next.js's `unstable_cache` API to store the codelabs data 
 * in the server-side cache for efficient reuse. The data is fetched asynchronously 
 * using the `fetchCodelabsPageData` function, and once retrieved, it is cached and 
 * tagged with `['codelabs']` to enable cache invalidation via the associated tag.
 * 
 * The caching mechanism ensures that the data can be served quickly for repeated requests, 
 * reducing the load on the server or database. However, the cache is not automatically 
 * revalidated after a set interval; instead, revalidation must be triggered manually 
 * by invoking appropriate revalidation mechanisms (such as `revalidateTag`) based on 
 * the needs of the application (e.g., when the underlying data changes).
 * 
 * This cache is intended to be used in scenarios where the codelabs data is relatively 
 * stable but still subject to periodic updates, allowing manual control over when the 
 * cache is refreshed.
 * 
 * @returns {Promise<object>} The codelabs data, including all codelab entries, 
 *                             which will be cached for later use.
 * 
 * @throws {Error} If the data fetching fails due to network or other errors, 
 *                 an error will be logged and rethrown.
 */
export const getCachedCodelabsData = unstable_cache(
  async () => {
    try {
      // Fetch the latest codelabs data
      const codelabsPageResponse = await fetchCodelabsPageData();
      // Return the codelabs data so it can be cached
      return codelabsPageResponse;
    } catch (error) {
      console.error("Error fetching codelabs data:", error);
      throw new Error("Failed to fetch codelabs data");
    }
  },
  ['codelabs'], // Cache tag for invalidation purposes
);