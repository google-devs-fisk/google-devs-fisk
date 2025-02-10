import { Firestore } from "@google-cloud/firestore";

/**
 * Returns a Firestore client authenticated with the service account.
 */
export function getFirestoreCloudClient(): Firestore {
  try {
    // Get Base64 encoded JSON string from environment variables
    const encodedServiceAccount = process.env.FIRESTORE_SERVICE_ACCOUNT_BASE64 || "";
    if (!encodedServiceAccount) {
      throw new Error("FIRESTORE_SERVICE_ACCOUNT_BASE64 environment variable is missing.");
    }
    // Decode Base64 string to JSON
    const decodedServiceAccount = JSON.parse(Buffer.from(encodedServiceAccount, "base64").toString("utf-8"));
    if (!decodedServiceAccount.client_email || !decodedServiceAccount.private_key) {
      throw new Error("Invalid service account credentials.");
    }
    // Initialize Firestore client
    const firestoreClient = new Firestore({
      projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
      credentials: {
        client_email: decodedServiceAccount.client_email,
        private_key: decodedServiceAccount.private_key.replace(/\\n/g, "\n"), // Fixes newline issues
      },
    });
    return firestoreClient;
  } catch (error) {
    console.error("Error initializing Firestore client:", error);
    throw new Error("Failed to initialize Firestore client");
  }
}