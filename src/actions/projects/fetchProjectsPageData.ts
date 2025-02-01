"use server";

import { getFirestoreCloudClient } from "@/db";
import { Timestamp } from "@google-cloud/firestore";
import { ProjectsPageResponse, Project } from "@/types/projects";

/**
 * Fetches project data from Firestore.
 *
 * This function retrieves project details from the "gdg-fisk-content" collection
 * in Firestore, specifically from the "ProjectsPageResponse" document.
 *
 * @returns {Promise<ProjectsPageResponse>} - An object containing the list of projects and last updated timestamp.
 * @throws {Error} - Throws an error if the Firestore document is not found or fetching fails.
 */
export const fetchProjectsPageData =
  async (): Promise<ProjectsPageResponse> => {
    const fsClient = getFirestoreCloudClient();
    const collectionRef = fsClient.collection("gdg-fisk-content");
    const docRef = collectionRef.doc("ProjectsPageResponse");

    try {
      // Fetch document snapshot from Firestore
      const docSnapshot = await docRef.get();

      // Handle case where document does not exist
      if (!docSnapshot.exists) {
        const errorMessage = "Projects data not found in the database";
        throw new Error(errorMessage);
      }

      // Extract data from Firestore document
      const data = docSnapshot.data();

      // Parse project list (ensure it's an array)
      const projects: Project[] = Array.isArray(data?.projects)
        ? data.projects
        : [];

      // Extract last updated timestamp (default to 0 if missing)
      const lastUpdated: Timestamp =
        data?.lastUpdated instanceof Timestamp
          ? data.lastUpdated
          : new Timestamp(0, 0);

      // Return structured project data
      return {
        projects,
        lastUpdated,
      };
    } catch (error: unknown) {
      // Handle Firestore fetch errors with proper logging
      const typedError = error as Error;
      console.error("Error fetching projects data:", typedError);
      throw new Error("Failed to fetch projects data from the database");
    }
  };
