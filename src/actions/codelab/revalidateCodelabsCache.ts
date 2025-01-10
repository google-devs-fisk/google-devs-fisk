"use server"

import { getCachedCodelabsData, isCacheOutdated, revalidateCacheUsingTag } from '@/actions';

/**
 * Revalidates the codelabs cache if the data is outdated.
 * This function compares the timestamp of the cached data with the timestamp from the database.
 * If the cache is outdated, it triggers a revalidation.
 * 
 * @param dbLastUpdated - The timestamp from the database to compare against, in seconds.
 * @returns {Promise<void>} - This function does not return any value. It performs cache revalidation if necessary.
 */
export async function revalidateCodelabsCache(dbLastUpdated: number): Promise<void> {
    try {
        // Fetch cached codelabs data
        const cachedData = await getCachedCodelabsData();
        // Ensure cached data has the expected structure
        if (!cachedData || !cachedData.lastUpdated || !cachedData.lastUpdated.seconds) {
            console.error("Cached data is missing expected 'lastUpdated' field.");
            return;
        } 
        const cachedLastUpdated = cachedData.lastUpdated.seconds;
        // Check if the cache is outdated and needs revalidation
        if (isCacheOutdated(cachedLastUpdated, dbLastUpdated)) {
            console.log('Revalidating codelabs cache...');
            // Trigger cache revalidation for codelabs data
            revalidateCacheUsingTag("codelabs");
        } else {
            console.log('Codelabs cache is up-to-date, no revalidation needed.');
        }
    } catch (error) {
        console.error('Error during cache revalidation:', error);
    }
}