"use server";

import { getFirestoreCloudClient } from "@/db";
import { Timestamp } from "@google-cloud/firestore";
import { CulturePageResponse } from "@/types/culture";
import { VideoContent, Metric, Testimonial } from "@/types/common";

/**
 * Fetches culture data from Firestore.
 *
 * This function retrieves culture details from the "gdg-fisk-content" collection
 * in Firestore, specifically from the "CulturePageResponse" document.
 *
 * @returns {Promise<CulturePageResponse>} - An object containing the list of metric, list of testimonial, culturePageVideo and last updated timestamp.
 * @throws {Error} - Throws an error if the Firestore document is not found or fetching fails.
 */
export const fetchWorkCulturePageData =
  async (): Promise<CulturePageResponse> => {
    const fsClient = getFirestoreCloudClient();
    const collectionRef = fsClient.collection("gdg-fisk-content");
    const docRef = collectionRef.doc("CulturePageResponse");

    try {
      // Fetch document snapshot from Firestore
      const docSnapshot = await docRef.get();

      // Handle case where document does not exist
      if (!docSnapshot.exists) {
        const errorMessage = "Work Culture data not found in the database";
        throw new Error(errorMessage);
      }

      // Extract data from Firestore document
      const data = docSnapshot.data();

      // Parse testimonial list (ensure it's an array)
      const testimonials: Testimonial[] = Array.isArray(data?.testimonials)
        ? data.testimonials
        : [];

      // Parse metric list (ensure it's an array)
      const metrics: Metric[] = Array.isArray(data?.metrics)
        ? data.metrics
        : [];

      // Extract culturePageVideo (ensure it's an object)
      const culturePageVideo: VideoContent = data?.culturePageVideo || {
        title: "",
        imgUrl: "",
        videoUrl: "",
        genres: [],
      };

      // Extract last updated timestamp (default to 0 if missing)
      const lastUpdated: Timestamp =
        data?.lastUpdated instanceof Timestamp
          ? data.lastUpdated
          : new Timestamp(0, 0);

      // Return structured work culture data
      return {
        testimonials,
        metrics,
        culturePageVideo,
        lastUpdated,
      };
    } catch (error: unknown) {
      // Handle Firestore fetch errors with proper logging
      const typedError = error as Error;
      console.error("Error fetching work culture data:", typedError);
      throw new Error("Failed to fetch work culture data from the database");
    }
  };
