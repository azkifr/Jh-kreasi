import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const isVercel = process.env.VERCEL || false;

let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, "") || "Jh-kreasi";
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig: NextConfig = {
  // Static export only for GitHub Pages; Vercel uses native Next.js runtime
  ...(isGithubActions && !isVercel ? { output: "export" } : {}),
  basePath: basePath,
  assetPrefix: assetPrefix,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
