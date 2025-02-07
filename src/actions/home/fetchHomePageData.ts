"use server";

import { getFirestoreCloudClient } from "@/db";
import { Timestamp } from "@google-cloud/firestore";
import { HomePageResponse } from "@/types/home";
import { Testimonial } from "@/types/common";

/**
 * Fetches home page data from Firestore.
 *
 * This function retrieves home page details from the "gdg-fisk-content" collection,
 * specifically from the "HomePageResponse" document.
 *
 * @returns {Promise<HomePageResponse>} - An object containing the home video URL, list of testimonials, and last updated timestamp.
 * @throws {Error} - Throws an error if the Firestore document is not found or fetching fails.
 */
export const fetchHomePageData = async (): Promise<HomePageResponse> => {
  const fsClient = getFirestoreCloudClient();
  const collectionRef = fsClient.collection("gdg-fisk-content");
  const docRef = collectionRef.doc("HomePageResponse");

  try {
    // Fetch document snapshot from Firestore
    const docSnapshot = await docRef.get();

    // Handle case where document does not exist
    if (!docSnapshot.exists) {
      throw new Error("Home page data not found in the database");
    }

    // Extract data from Firestore document
    const data = docSnapshot.data();

    console.log("Fetched data:", data); // Debugging log for fetched data

    // Parse testimonials list (ensure it's an array)
    const testimonials: Testimonial[] = Array.isArray(data?.testimonials)
      ? data.testimonials
      : [];

    // Extract home video URL (ensure it's a string)
    const homeVideoUrl: string = data?.homeVideoUrl || "";

    // Extract last updated timestamp (default to 0 if missing)
    const lastUpdated: Timestamp =
      data?.lastUpdated instanceof Timestamp ? data.lastUpdated : new Timestamp(0, 0);

    // Return structured home page data
    return {
      homeVideoUrl,
      testimonials,
      lastUpdated,
    };
  } catch (error: unknown) {
    // Handle Firestore fetch errors with proper logging
    console.error("Error fetching home page data:", error);
    throw new Error("Failed to fetch home page data from the database");
  }
};
