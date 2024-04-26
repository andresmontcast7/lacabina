/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['images.unsplash.com','i.ibb.co','localhost','https://strapi-production-935c.up.railway.app'],
    formats:['image/webp']
  }
}


module.exports = nextConfig
