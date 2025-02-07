import { Firestore } from "@google-cloud/firestore";

export function getFirestoreCloudClient(): Firestore {
  const projectId = process.env.GOOGLE_CLOUD_PROJECT;
  const clientEmail = process.env.GOOGLE_CLOUD_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_CLOUD_PRIVATE_KEY?.replace(/\\n/g, '\n'); // Handle potential escaped newlines
  if (!projectId || !clientEmail || !privateKey) {
    // Provide more specific error messages
    if (!projectId) throw new Error("Missing GOOGLE_CLOUD_PROJECT");
    if (!clientEmail) throw new Error("Missing GOOGLE_CLOUD_CLIENT_EMAIL");
    if (!privateKey) throw new Error("Missing GOOGLE_CLOUD_PRIVATE_KEY");
  }
  try {
    const credentials = {
      client_email: clientEmail,
      private_key: privateKey,
    };

    const firestoreClient = new Firestore({
      projectId,
      credentials,
    });
    return firestoreClient;
  } catch (error) {
    console.error("Error initializing Firestore client:", error);
    throw new Error("Failed to initialize Firestore client. Check credentials.");
  }
}