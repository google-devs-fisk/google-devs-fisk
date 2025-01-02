"use server";

import { z } from "zod";
import { getFirestoreCloudClient } from "@/db";
import { SubscriberFormState } from "@/types/contact";

// Initialize Firestore
const fsClient = getFirestoreCloudClient();

// Validation schema for the form
const subscribeSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function subscriberFormSubmit(
  formState: SubscriberFormState,
  formData: FormData
): Promise<SubscriberFormState> {
  // Validate the form data
  const result = subscribeSchema.safeParse({
    email: formData.get("email"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { email } = result.data;

  try {
    // Access Firestore collection and document
    const collectionRef = fsClient.collection("gdg-fisk-content");
    const docRef = collectionRef.doc("Subscribers");

    // Get the "newsletter" document
    const docSnapshot = await docRef.get();

    if (!docSnapshot.exists) {
      // Initialize the document if it doesn't exist
      await docRef.set({ emails: [] });
    }

    const data = docSnapshot.data();
    const emails = data?.emails || [];

    // Check if the email is already subscribed
    if (emails.includes(email)) {
      return {
        errors: {
          _form: ["Email is already subscribed."],
        },
      };
    }

    // Add email to the list and update Firestore
    emails.push(email);
    await docRef.update({ emails });

    return {
      errors: {}, // Clear errors
      message: "Thank you for subscribing!", // Success message
    };
  } catch (error) {
    console.error("Error subscribing email:", error);
    return {
      errors: {
        _form: [error.message || "An error occurred while subscribing."],
      },
    };
  }
}
