/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"]
  },
  env: {
    API_KEY: process.env.API_KEY
  }
}

module.exports = nextConfig
