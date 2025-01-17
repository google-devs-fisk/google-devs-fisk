import { revalidateTag } from 'next/cache';

/**
 * Triggers cache revalidation for the given tag using the revalidateTag method.
 * This method is used to invalidate the cache for the specified tag and ensure it gets updated.
 * 
 * @param tag - The tag to be used for cache revalidation.
 * @returns {void} - This function does not return any value. It performs the cache invalidation.
 */
export function revalidateCacheUsingTag(tag: string): void {
    revalidateTag(tag);
}

/**
 * Checks if the cache was last updated more than 1 day ago.
 *
 * @param lastUpdatedTimestamp - The last updated timestamp (in seconds) of the cache.
 * @returns {boolean} - Returns `true` if the cache is older than 1 day, `false` otherwise.
 */
export const isCacheOlderThanOneDay = (lastUpdatedTimestamp: number): boolean => {
    const oneDayInSeconds = 24 * 60 * 60; // 1 day in seconds
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    return currentTime - lastUpdatedTimestamp > oneDayInSeconds;
};
  
/**
 * Compares the cached last updated timestamp with the database's last updated timestamp.
 * This helps determine if the cached data is outdated and needs revalidation.
 *
 * @param cachedLastUpdated - The last updated timestamp of the cached data, in seconds.
 * @param dbLastUpdated - The last updated timestamp from the database, in seconds.
 * @returns {boolean} - Returns `true` if the cache is outdated (i.e., the cached timestamp is earlier than the database's timestamp), `false` otherwise.
 */
export const isCacheOutdated = (cachedLastUpdated: number, dbLastUpdated: number): boolean => {
    return cachedLastUpdated < dbLastUpdated;
}