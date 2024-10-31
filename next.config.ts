import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/main',
                destination: '/',
                permanent: false
            }
        ];
    },
    // 원격의 이미지 경로를 사용한다면,
    // 애플리케이션 보호를 위해 remotePatterns 옵션을 프로젝트 구성으로 추가해야 합니다.
    // 포트 번호(port)나 구체적인 하위 경로(pathname)를 명시하는 것도 가능합니다.
    images: {
        minimumCacheTTL: 60, // 최소 캐시 시간(초)
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'heropy.dev'
            },
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com' // `movie.Poster` 경로의 도메인
            },
            {
                protocol: 'https',
                hostname: '**.example.com',
                port: '80',
                pathname: '/account123/**'
            }
        ]
    }
};

export default nextConfig;
