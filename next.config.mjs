/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel handles Next.js natively - no static export needed
  images: {
    unoptimized: true, // Can be removed if using Vercel's image optimization
  },
};

export default nextConfig;
