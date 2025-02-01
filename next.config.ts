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
  /* other config options here */
};

export default nextConfig;
