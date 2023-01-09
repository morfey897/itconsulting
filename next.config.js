const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        runtime: 'experimental-edge',
    },
    reactStrictMode: true,
    swcMinify: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles/styles.scss')],
    },
};
module.exports = nextConfig;