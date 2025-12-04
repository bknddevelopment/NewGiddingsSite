import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/GiddingsConsultant",
  assetPrefix: "/GiddingsConsultant/",
};

export default nextConfig;
