/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // increase from 1MB to 10MB
    },
  },
};

module.exports = nextConfig
