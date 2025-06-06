import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "image.tmdb.org",
      },
    ],
  },
  /* config options here */
  env:{
    TMDB_BASE_URL:process.env.TMDB_BASE_URL || "",
    TMDB_API_TOKEN:process.env.TMDB_API_TOKEN || "",
    TMDB_IMAGE_SERVICE_URL:process.env.TMDB_IMAGE_SERVICE_URL || "",
  }
};

export default nextConfig;
