/** @type {import('next').NextConfig} */
const nextConfig = {
  // For posthog
  rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
      {
        source: "/ingest/decide",
        destination: "https://us.i.posthog.com/decide",
      },
    ];
  },
  // For posthog: This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
  images: {
    remotePatterns: [
      { hostname: "localhost" },
      { hostname: "randomuser.me" },
      // For brand image
      { hostname: "upload.wikimedia.org" },
      { hostname: "i0.wp.com" },
      { hostname: "encrypted-tbn0.gstatic.com" },
      { hostname: "media.licdn.com" },
    ],
  },
};

export default nextConfig;
