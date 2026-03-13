import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/products/alaska-cruise', destination: '/products/alaska-emerald-princess', permanent: true },
      { source: '/products/north-europe-cruise', destination: '/products/north-europe-diadema', permanent: true },
      { source: '/products/western-mediterranean-cruise', destination: '/products/western-med-seaview', permanent: true },
      { source: '/products/southern-mediterranean-cruise', destination: '/products/southern-med-fortuna', permanent: true },
      { source: '/products/okinawa-taiwan-cruise', destination: '/products/okinawa-taiwan-bellissima', permanent: true },
      { source: '/products/hawaii-cruise', destination: '/products/hawaii-pride-of-america', permanent: true },
      { source: '/products/eastern-mediterranean-cruise', destination: '/products/eastern-med-scarlet-lady', permanent: true },
      { source: '/products/western-europe-cruise', destination: '/products/western-europe-preziosa', permanent: true },
      { source: '/products/arabia-cruise', destination: '/products/arabia-toscana', permanent: true },
    ];
  },
};

export default nextConfig;
