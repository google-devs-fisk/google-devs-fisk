"use server"

import { getFirestoreCloudClient } from "@/db";
import { Timestamp } from "@google-cloud/firestore";
import { CodelabsPageResponse, Codelab } from "@/types/codelabs";

/**
 * Fetches codelabs data and the last updated timestamp from the Firestore database.
 *
 * This function retrieves the codelabs data from the "CodelabsPageResponse" document within
 * the "gdg-fisk-content" Firestore collection. It extracts the array of codelabs and a
 * timestamp of the last update. If the document does not exist or if the data structure
 * is invalid, an error is thrown.
 *
 * @returns {Promise<CodelabsPageResponse>} - Returns an object containing an array of codelab objects
 * and the last updated timestamp.
 * @throws {Error} - Throws an error if the Firestore document is not found, or if the data is invalid.
 */
export const fetchCodelabsPageData = async (): Promise<CodelabsPageResponse> => {
  // Initialize Firestore client
  const fsClient = getFirestoreCloudClient();
  const collectionRef = fsClient.collection("gdg-fisk-content");
  const docRef = collectionRef.doc("CodelabsPageResponse");
  try {
    // Fetch document snapshot from Firestore
    const docSnapshot = await docRef.get();
    // Check if the document exists
    if (!docSnapshot.exists) {
      const errorMessage = "Codelabs data not found in Firestore";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    // Get data from Firestore
    const data = docSnapshot.data();
    console.log("Fetched data:", data);  // Debugging log for fetched data
    // Ensure the 'codelabs' field is an array of Codelab objects
    const codelabs: Codelab[] = Array.isArray(data?.codelabs) ? data.codelabs : [];
    // Ensure the 'lastUpdated' field is a valid Firebase Timestamp
    const lastUpdated: Timestamp = data?.lastUpdated instanceof Timestamp
      ? data.lastUpdated
      : new Timestamp(0, 0); // Default to Unix epoch if not a valid timestamp
    // Return the codelabs data and last updated timestamp
    return {
      codelabs,
      lastUpdated,
    };
  } catch (error: unknown) {
    // Type assertion to Error
    const typedError = error as Error;
    console.error("Error fetching codelabs data:", typedError);
    throw new Error("Failed to fetch codelabs data from Firestore: " + typedError.message);
  }
};