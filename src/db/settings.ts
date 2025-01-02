import path from "path";
import { fileURLToPath } from "url";

// Create __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base directory (two levels up from the current file's path)
const BASE_DIR = path.resolve(__dirname, "../.."); // Adjust path as needed

// Path to the service account credentials
export const DB_SERVICE_ACCOUNT_PATH = path.join(BASE_DIR, "src", "db", "dbCredentials.json");

// Google Cloud Project ID
export const GOOGLE_CLOUD_PROJECT = "gdg-fisk-content-automation";
