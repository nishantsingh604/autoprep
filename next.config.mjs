import { fileURLToPath } from "url";
import { dirname } from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url); // ✅ ESM-safe require
const swrPath = require.resolve("swr");

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias["swr"] = swrPath;
    return config;
  }
};

export default nextConfig;
