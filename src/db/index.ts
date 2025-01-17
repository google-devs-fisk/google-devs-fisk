import { Firestore } from "@google-cloud/firestore";
import { GOOGLE_CLOUD_PROJECT, DB_SERVICE_ACCOUNT_PATH } from "@/db/settings";

/**
 * Returns a Firestore client authenticated with the service account.
 */
export function getFirestoreCloudClient(): Firestore {
  // Initialize Firestore client
  const firestoreClient = new Firestore({
    projectId: GOOGLE_CLOUD_PROJECT,
    keyFilename: DB_SERVICE_ACCOUNT_PATH,
  });

  return firestoreClient;
}
