/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    env: {
        GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID
    }
};

export default nextConfig;
