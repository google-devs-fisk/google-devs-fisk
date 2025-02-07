import { Firestore } from "@google-cloud/firestore";

export function getFirestoreCloudClient(): Firestore {
  const projectId = process.env.GOOGLE_CLOUD_PROJECT;
  const clientEmail = process.env.GOOGLE_CLOUD_CLIENT_EMAIL;
  const rawPrivateKey = process.env.GOOGLE_CLOUD_PRIVATE_KEY;

  console.log("GOOGLE_CLOUD_PROJECT:", process.env.GOOGLE_CLOUD_PROJECT);
  console.log("GOOGLE_CLOUD_CLIENT_EMAIL:", process.env.GOOGLE_CLOUD_CLIENT_EMAIL);
  console.log("GOOGLE_CLOUD_PRIVATE_KEY:", process.env.GOOGLE_CLOUD_PRIVATE_KEY ? "Exists" : "MISSING");

  if (!projectId || !clientEmail || !rawPrivateKey) {
    // Provide more specific error messages
    if (!projectId) throw new Error("Missing GOOGLE_CLOUD_PROJECT");
    if (!clientEmail) throw new Error("Missing GOOGLE_CLOUD_CLIENT_EMAIL");
    if (!rawPrivateKey) throw new Error("Missing GOOGLE_CLOUD_PRIVATE_KEY");
  }

  try {
    // Construct the full PEM format inside the code
    const privateKey = `-----BEGIN PRIVATE KEY-----\n${rawPrivateKey}\n-----END PRIVATE KEY-----\n`;
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
