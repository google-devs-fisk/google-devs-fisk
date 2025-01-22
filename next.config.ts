import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['storage.googleapis.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.builder.io",
      },
    ],
    dangerouslyAllowSVG: true, // Allow SVG images
  },
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during builds
  },
  /* other config options here */
};

export default nextConfig;
