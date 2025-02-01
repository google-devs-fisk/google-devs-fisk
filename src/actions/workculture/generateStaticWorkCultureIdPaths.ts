"use server";

import { Testimonial } from "@/types/common";
import {
  revalidateCacheUsingTag,
  isCacheOlderThanOneDay,
  getCachedWorkCultureData,
} from "@/actions";

/**
 * Generates static paths for work culture using cached data.
 *
 * Fetches work culture data from the cache, checks if the cache is older than one day,
 * and triggers revalidation if necessary. Returns an array of work culture-related IDs
 * for static generation.
 *
 * @returns {Promise<{ id: string }[]>} An array of objects containing work culture-related IDs.
 * @throws {Error} If data retrieval or revalidation fails.
 */
export async function generateStaticWorkCultureIdPaths(): Promise<
  { id: string }[]
> {
  try {
    // Fetch work culture data from the cache
    const culturePageResponse = await getCachedWorkCultureData();

    // Extract the last updated timestamp (assumes `lastUpdated` is in seconds)
    const lastUpdatedTimestamp = culturePageResponse.lastUpdated.seconds;

    // Check if the cache is outdated (older than one day)
    if (isCacheOlderThanOneDay(lastUpdatedTimestamp)) {
      console.log("Revalidating work culture data cache...");
      revalidateCacheUsingTag("culture");

      // Fetch updated work culture data after revalidation
      return await getCachedWorkCultureData().then((response) => [
        ...response.testimonials.map((testimonial: Testimonial) => ({
          id: testimonial.id,
        })),
        ...(response.culturePageVideo
          ? [{ id: "culture-video" }] // Assigning a synthetic ID since culturePageVideo has no ID
          : []),
      ]);
    }

    // Return work culture IDs from the cached data
    return [
      ...culturePageResponse.testimonials.map((testimonial: Testimonial) => ({
        id: testimonial.id,
      })),
      ...(culturePageResponse.culturePageVideo
        ? [{ id: "culture-video" }] // Assigning a synthetic ID
        : []),
    ];
  } catch (error) {
    console.error("Error generating static params:", error);
    throw new Error("Failed to generate static params");
  }
}
