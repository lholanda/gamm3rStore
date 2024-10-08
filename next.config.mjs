/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com'
        }]
    }
};

// hostname: '**' para todos os acessos a hostnames

export default nextConfig;