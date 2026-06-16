import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Empty turbopack config to suppress warning
  turbopack: {},
  // Experimental features
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000"],
    },
  },
};

export default nextConfig;
