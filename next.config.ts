import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "safri.co.ao" },
    ],
    formats: ["image/avif", "image/webp"],
  },
}

export default nextConfig
