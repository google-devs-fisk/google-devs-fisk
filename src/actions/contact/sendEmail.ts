"use server"

import { google } from "googleapis";
import { OAuth2Client } from "google-auth-library";
import { Buffer } from "buffer";

/**
 * Retrieves Gmail API credentials from environment variables.
 * If the access token is expired, it refreshes it using the refresh token.
 */
async function getCredentialsFromEnv() {
  try {
    const credentials = {
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      token: process.env.GOOGLE_ACCESS_TOKEN!,
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN!,
      token_uri: process.env.GOOGLE_TOKEN_URI!,
      expiry: process.env.GOOGLE_TOKEN_EXPIRY!,
    };

    const auth = new OAuth2Client(
      credentials.client_id,
      credentials.client_secret,
      "http://localhost"
    );
    auth.setCredentials({
      access_token: credentials.token,
      refresh_token: credentials.refresh_token,
      token_type: "Bearer",
      expiry_date: new Date(credentials.expiry).getTime(),
    });

    // Check if the access token is expired and refresh it if needed
    if (new Date().getTime() >= new Date(credentials.expiry).getTime()) {
      console.log("Access token expired, refreshing...");
      const { credentials: newTokens } = await auth.refreshAccessToken();
      credentials.token = newTokens.access_token!;
      credentials.expiry = new Date(newTokens.expiry_date!).toISOString();
      console.log("Token successfully refreshed.");
    }

    return credentials;
  } catch (error) {
    console.error("Error retrieving credentials from environment variables:", error);
    throw new Error("Failed to retrieve credentials");
  }
}

/**
 * Sends an email using the Gmail API.
 * @param to - Recipient email address
 * @param subject - Email subject line
 * @param body - Email message body
 */
export async function sendEmailUsingGmailAPI(to: string, subject: string, body: string) {
  try {
    const credentials = await getCredentialsFromEnv();
    const auth = new OAuth2Client(
      credentials.client_id,
      credentials.client_secret,
      "http://localhost"
    );
    auth.setCredentials({
      access_token: credentials.token,
      refresh_token: credentials.refresh_token,
      token_type: "Bearer",
      expiry_date: new Date(credentials.expiry).getTime(),
    });
    const gmail = google.gmail({ version: "v1", auth });

    // Construct the email message
    const messageParts = [
      `To: ${to}`,
      `Subject: ${subject}`,
      "",
      body,
    ];
    const message = messageParts.join("\n");
    const encodedMessage = Buffer.from(message).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

    // Send the email using Gmail API
    await gmail.users.messages.send({
      userId: "me",
      requestBody: { raw: encodedMessage },
    });

    console.log("Email sent successfully via Gmail API!");
    return { success: true };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error: error instanceof Error ? error.message : String(error) };
  }
}
