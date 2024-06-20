/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["datasciencefestival.com", "images.unsplash.com"],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
};

export default nextConfig;
