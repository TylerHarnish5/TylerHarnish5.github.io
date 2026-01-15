import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    unoptimized: true, // Required for Next.js static export
  },
};

export default nextConfig;
