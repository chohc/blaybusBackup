const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: `${process.env.NEXT_PUBLIC_BACKEND}/api/v1/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
