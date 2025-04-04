/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_IMAGE_PREFIX: "/portfolio",
    NEXT_PUBLIC_CSS_PREFIX: "/portfolio",
  },
};

export default nextConfig;
