/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cover.komiku.id"
            },
            {
                hostname: "cdn.komiku.id"
            }
        ]
    }
};

export default nextConfig;
