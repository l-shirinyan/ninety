/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SENDGRID_API_KEY: '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',
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "icon-library.com",
      },
    ],
  },
};

module.exports = nextConfig;
