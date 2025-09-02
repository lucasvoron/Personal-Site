/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  turbopack: {
    // force Turbopack to treat this folder as the workspace root
    root: './'
  }
};

export default nextConfig;