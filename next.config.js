/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        port: "",
        hostname: "upload.wikimedia.org",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
