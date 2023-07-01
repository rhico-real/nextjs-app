/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'tecdn.b-cdn.net',
            },
            {
                protocol: 'https',
                hostname: 'wallpaperaccess.com',
                },
        ],
    },
}

module.exports = nextConfig
