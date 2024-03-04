/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
