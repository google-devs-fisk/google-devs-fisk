import { Firestore } from "@google-cloud/firestore";
import { GOOGLE_CLOUD_PROJECT } from "@/db/settings";

/**
 * Returns a Firestore client authenticated with the service account.
 */
export function getFirestoreCloudClient(): Firestore {
  // Get Base64 encoded JSON string from environment variables
  const encodedServiceAccount = process.env.GOOGLE_SERVICE_ACCOUNT_BASE64 || "";

  // Decode Base64 string to JSON
  const decodedServiceAccount = JSON.parse(Buffer.from(encodedServiceAccount, "base64").toString("utf-8"));

  // Initialize Firestore client
  const firestoreClient = new Firestore({
    projectId: GOOGLE_CLOUD_PROJECT,
    credentials: {
      client_email: decodedServiceAccount.client_email,
      private_key: decodedServiceAccount.private_key.replace(/\\n/g, "\n"), // Fixes newline issues
    },
  });

  return firestoreClient;
}
