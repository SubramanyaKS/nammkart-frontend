import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Wildcard to allow all hosts
      },
      {
        protocol: 'http',
        hostname: '**', // Wildcard to allow all hosts over HTTP (if needed)
      },
    ],
  }
  
};

export default nextConfig;
