import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: "./tsconfig.json"
  },
  images: {
    domains: [],
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
