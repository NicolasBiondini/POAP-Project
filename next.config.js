/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.poap.xyz",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
