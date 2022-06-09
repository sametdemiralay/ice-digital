/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ["hakkimizda.js", "iletisim.js", "sizin-icin.js"],
};

module.exports = nextConfig;
