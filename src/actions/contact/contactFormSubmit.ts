"use server";

import nodemailer from "nodemailer"; // Nodemailer for sending emails
import { z } from "zod"; // Zod for schema validation
import { ContactFormState } from "@/types/contact";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"), // Name must be a non-empty string
  email: z.string().email("Invalid email address"), // Email must be a valid email format
  subject: z.string().min(1, "Subject is required"), // Subject must be a non-empty string
  message: z.string().min(10, "Message must be at least 10 characters"), // Message must have at least 10 characters
  interest: z.string().min(1, "Interest is required"), // Interest must be a non-empty string
});

// Main function to handle form submission
export async function contactFormSubmit(
  formState: ContactFormState, // Current form state
  formData: FormData // Form data received from the client
): Promise<ContactFormState> {
  // Validate the form data against the schema
  const result = contactFormSchema.safeParse({
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
    interest: formData.get("interest") as string,
  });
  // If validation fails, return the errors
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors, // Flatten errors for easier access
    };
  }

  // Extract validated data
  const { name, email, subject, message, interest } = result.data;
  try {
    // Configure the Nodemailer transporter for sending emails
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use Gmail as the email service
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    // Define the email content and recipient
    const mailOptions = {
      from: `${email}`,
      to: "gdgfisk2k25@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Interest: ${interest}
        Message: ${message}
      `,
    };
    // Send the email
    await transporter.sendMail(mailOptions);
  } catch (err: unknown) {
    // Handle email sending errors
    return {
      errors: {
        _form: [],
      },
    };
  }
  // Return success with no errors
  return { errors: {} };
}
