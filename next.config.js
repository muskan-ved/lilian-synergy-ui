const i18n = require("./next-i18next.config.js");
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.NEXT_PUBLIC_ANALYZE === "true",
});


module.exports = withPlugins([[withBundleAnalyzer]], {
  i18n: i18n.i18n,
  reactStrictMode: true,
  optimizeFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.synergyxyz.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
});
