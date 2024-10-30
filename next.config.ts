import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/main',
                destination: '/',
                permanent: false
            }
        ]
    }
}

export default nextConfig
