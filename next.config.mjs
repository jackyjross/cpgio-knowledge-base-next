/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static site generation (GitHub Pages compatible)
  images: {
    unoptimized: true, // Required for static export
  },
  // Uncomment below if deploying to a subdirectory
  // basePath: '/cpgio-knowledge-base',
  // assetPrefix: '/cpgio-knowledge-base/',
};

export default nextConfig;
