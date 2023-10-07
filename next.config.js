/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.ibb.co",
      "dummyimage.com",
      "encrypted-tbn0.gstatic.com",
      "www.startech.com.bd",
    ],
  },
};

module.exports = nextConfig;
