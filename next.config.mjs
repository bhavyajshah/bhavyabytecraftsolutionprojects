import withBundleAnalyzer from '@next/bundle-analyzer'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "assets.aceternity.com",
      "preview.uideck.com",
      "img.freepik.com",
      "ui.aceternity.com",
      "ai-tool-tailwind.preview.uideck.com",
      "images.unsplash.com"
    ],
  },
};

export default bundleAnalyzer(nextConfig);