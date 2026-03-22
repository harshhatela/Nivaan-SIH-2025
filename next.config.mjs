/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Allow the build to proceed even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
