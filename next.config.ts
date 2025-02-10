import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.builder.io",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true, // Allow SVG images
  },
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during builds
  },
  env: {
    GOOGLE_CLOUD_PROJECT_ID: process.env.GOOGLE_CLOUD_PROJECT_ID,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_ACCESS_TOKEN: process.env.GOOGLE_ACCESS_TOKEN,
    GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN,
    GOOGLE_TOKEN_URI: process.env.GOOGLE_TOKEN_URI,
    GOOGLE_TOKEN_EXPIRY: process.env.GOOGLE_TOKEN_EXPIRY,
    FIRESTORE_SERVICE_ACCOUNT_BASE64: process.env.FIRESTORE_SERVICE_ACCOUNT_BASE64
  },
  /* other config options here */
};

export default nextConfig;
