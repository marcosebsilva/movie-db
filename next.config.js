/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"]
  },
  env: {
    API_KEY: process.env.API_KEY,
    BASE_BANNER_URL: "https://image.tmdb.org/t/p/original",
    BASE_POSTER_URL: "https://image.tmdb.org/t/p/w500",
  }
}

module.exports = nextConfig
