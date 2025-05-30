import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/work",
      destination: "/work/skills-and-tools",
      permanent: false,
    },
    {
      source: "/docs",
      destination: "/docs/tailwindcss-accent",
      permanent: false,
    },
  ],
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(withMDX(nextConfig));
