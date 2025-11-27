/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use static export for GitHub Pages, dynamic for Vercel
  // GitHub Actions sets GITHUB_ACTIONS=true
  output: process.env.GITHUB_ACTIONS ? 'export' : undefined,

  images: {
    unoptimized: true,
  },

  // GitHub Pages specific config (only when exporting)
  ...(process.env.GITHUB_ACTIONS && {
    basePath: '',
  }),
};

export default nextConfig;
