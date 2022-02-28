/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"]
  },
  env: {
    API_KEY: process.env.API_KEY,
    BASE_POSTER_URL: "https://image.tmdb.org/t/p/original",
  }
}

module.exports = nextConfig
