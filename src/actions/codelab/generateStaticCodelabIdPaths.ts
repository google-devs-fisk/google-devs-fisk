"use server"

import { Codelab } from '@/types/codelabs';
import { revalidateCacheUsingTag, isCacheOlderThanOneDay, getCachedCodelabsData } from '@/actions';

/**
 * A server action that fetches codelabs data from the server-side cache
 * and generates static params for each codelab.
 *
 * This function retrieves codelabs data from the cache, checks if the cache is outdated
 * (older than 1 day), and revalidates it if necessary. It then returns the params for each
 * codelab to be used for generating static pages (ISR).
 *
 * @returns {Promise<{id: string}[]>} - Returns an array of params with the `id` of each codelab.
 * @throws {Error} - Throws an error if the codelabs data cannot be fetched or there is an issue with revalidation.
 */
export async function generateStaticCodelabIdPaths(): Promise<{ id: string }[]> {
  try {
    // Fetch codelabs data from the server-side cache
    const codelabsPageResponse = await getCachedCodelabsData();
    // Check the last updated timestamp of the cache and trigger revalidation if necessary
    const lastUpdatedTimestamp = codelabsPageResponse.lastUpdated.seconds; // Assuming `lastUpdated` contains the timestamp
    const isCacheOutdated = isCacheOlderThanOneDay(lastUpdatedTimestamp);
    if (isCacheOutdated) {
      // Trigger revalidation for the codelabs cache if it's outdated
      console.log('Revalidating codelabs cache...');
      revalidateCacheUsingTag('codelabs');
      // After revalidating, fetch the updated codelabs data
      return await getCachedCodelabsData().then(response =>
        response.codelabs.map((codelab: Codelab) => ({
          id: codelab.id,
        }))
      );
    }
    // If the cache is not outdated, generate static params using the current data
    return codelabsPageResponse.codelabs.map((codelab: Codelab) => ({
      id: codelab.id,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    throw new Error('Failed to generate static params');
  }
}