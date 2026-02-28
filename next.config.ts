import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
  images: {
    domains: ["ik.imagekit.io","i.pinimg.com", "mir-s3-cdn-cf.behance.net"],
  },
};

export default nextConfig;
