const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    // config.experiments = { topLevelAwait: true, layers: true };

    config.plugins.push(
      new NextFederationPlugin({
        name: "mainApp",
        filename: "static/chunks/mainRemoteEntry.js",
        exposes: {
          "./nav": "./components/nav.tsx",
          "./footer": "./components/footer.tsx",
        },
        shared: {},
      })
    );

    config.optimization = {
      ...config.optimization,
      runtimeChunk: false,
    };

    return config;
  },
};

module.exports = nextConfig;
