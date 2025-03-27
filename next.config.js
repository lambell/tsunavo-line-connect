/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SHOPIFY_API_KEY: process.env.SHOPIFY_APP_API_KEY || '',
    SHOPIFY_API_SECRET: process.env.SHOPIFY_APP_API_SECRET || '',
    SCOPES: process.env.SHOPIFY_APP_SCOPES || '',
    HOST: process.env.SHOPIFY_APP_HOST || ''
  }
}

module.exports = nextConfig 