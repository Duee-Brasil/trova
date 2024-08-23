/** @type {import('next').NextConfig} */

const nextConfig = {
  // output: 'export'
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60,
  },
}

export default nextConfig;
