/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/images/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.adhdproductivitytips.com" }],
        destination: "https://adhdproductivitytips.com/:path*",
        permanent: true,
      },
      {
        source: "/best-adhd-planners-for-adults",
        destination: "/best-adhd-planners-adults",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
