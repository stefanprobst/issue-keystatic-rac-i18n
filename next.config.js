const localesPlugin = require("@react-aria/optimize-locales-plugin");

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: false,
  webpack(config, { isServer }) {
    /**
     * @see https://react-spectrum.adobe.com/react-aria/ssr.html#nextjs-app-router
     */
    if (!isServer) {
      config.plugins.push(localesPlugin.webpack({ locales: [] }));
    }

    return config;
  },
};

module.exports = config;
