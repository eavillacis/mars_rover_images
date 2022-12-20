// next.config.js
module.exports = {
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "mars.jpl.nasa.gov",
      },
    ],
  },
};
