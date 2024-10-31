//  만약 환경변수를 자동완성하려면, 다음과 같이 타이핑합니다.

export declare global {
    namespace NodeJS {
        interface ProcessEnv {
            OMDB_API_KEY: string;
            NEXT_PUBLIC_BASE_URL: string;
            NEXT_PUBLIC_SITE_NAME: string;
        }
    }
}
