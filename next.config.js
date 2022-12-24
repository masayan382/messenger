/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost:3000', 'facebook.com.MetaJapan.photos', 'platform-lookaside.fbsbx.com'],
  },
  experimental: {
    appDir: true
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
    }
    return config
  },
}
