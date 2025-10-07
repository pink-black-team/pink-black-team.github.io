/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Static export for GitHub Pages
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Compression
  compress: true,

  // Power optimizations
  poweredByHeader: false,

  // Experimental features for better performance
  // experimental: {
  //   optimizeCss: true, // Requires critters package
  // },

  // Note: headers, redirects, and rewrites are not supported with static export
  // Security headers should be configured in your hosting provider (e.g., GitHub Pages)

  // i18n is handled by custom I18nProvider in App Router
};

export default nextConfig;
