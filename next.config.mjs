/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_IMAGE_PREFIX: isProd ? "/portfolio" : "",
    NEXT_PUBLIC_CSS_PREFIX: isProd ? "/portfolio" : "",
  },
};

export default nextConfig;
