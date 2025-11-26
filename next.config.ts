import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export (replaces the old "next export")
  output: "export",

  // Enable React Compiler
  reactCompiler: true,

  // Required for exported sites that use next/image
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
