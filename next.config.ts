import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true, // Optional: Adds trailing slashes to exported URLs
  images: {
    domains: ['via.placeholder.com'], // Allow images from via.placeholder.com
  },
};

export default nextConfig;
module.exports = {
  experimental: {
    outputStandalone: true
  },
  reactStrictMode: true,
}
