"use server";

import { z } from "zod";
import { sendEmailUsingGmailAPI} from "./sendEmail";
import { ContactFormState } from "@/types/contact";

// Validation schema for the form
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  interest: z.string().min(1, "Interest is required"),
});

// Server action to handle form submission
export async function contactFormSubmit(
  formState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Validate the form data against the schema
  const result = contactFormSchema.safeParse({
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
    interest: formData.get("interest") as string,
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors, // Flatten errors for easier access
    };
  }

  const { name, email, subject, message, interest } = result.data;

  try {
    console.log("EMAIL_ID:", process.env.EMAIL_ID ? "Loaded" : "Missing");
    console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID ? "Loaded" : "Missing");
    console.log("GOOGLE_REFRESH_TOKEN:", process.env.GOOGLE_REFRESH_TOKEN ? "Loaded" : "Missing");

    // Send email using the reusable function
    const emailResult = await sendEmailUsingGmailAPI(
      "gdgfisk2k25@gmail.com",
      `New Contact Form Submission: ${subject}`,
      `Name: ${name}\nEmail: ${email}\nInterest: ${interest}\nMessage: ${message}`
    );

    if (!emailResult.success) {
      throw new Error(emailResult.error);
    }
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      errors: {
        _form: ["Failed to send email. Please try again later."],
      },
    };
  }

  return { errors: {} };
}
