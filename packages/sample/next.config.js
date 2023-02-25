/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    esmExternals: false,
  },
  /** @param {import('webpack').Configuration} [config] */
  webpack(config) {
    return config
  },
}

module.exports = nextConfig
