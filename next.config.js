/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  ignoreBuildErrors: true,
  serverComponentsExternalPackages: ["bcrypt"],
};

module.exports = nextConfig;
