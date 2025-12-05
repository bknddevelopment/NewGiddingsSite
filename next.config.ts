import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: isProd ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/NewGiddingsSite" : "",
  assetPrefix: isProd ? "/NewGiddingsSite/" : "",
};

export default nextConfig;
