import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env:{
    TMDB_BASE_URL:process.env.TMDB_BASE_URL || "",
    TMDB_API_TOKEN:process.env.TMDB_API_TOKEN || "",
    TMDB_IMAGE_SERVICE:process.env.TMDB_IMAGE_SERVICE || "",
  }
};

export default nextConfig;
