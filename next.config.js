await import("./src/env.js");

const imageHostNames = [
  "cdn.iconscout.com",
  "encrypted-tbn0.gstatic.com",
  "pbs.twimg.com",
  "replicate.delivery",
];

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: imageHostNames.map((hostname) => ({
      protocol: "https",
      hostname,
      pathname: "/**",
    })),
  },
};

export default config;
