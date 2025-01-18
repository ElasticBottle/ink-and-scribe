/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "localhost" },
      { hostname: "randomuser.me" },
      { hostname: "upload.wikimedia.org" },
      { hostname: "i0.wp.com" },
      { hostname: "encrypted-tbn0.gstatic.com" },
    ],
  },
};

export default nextConfig;
