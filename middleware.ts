import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // NextRequest : 클라이언트로부터 온 요청 객체야. 이 객체에는 URL, 쿠키, 헤더 등 요청 관련 정보가 포함돼.
    // NextResponse.next(): 요청을 그대로 통과시켜, 특별히 조치하지 않고 다음 미들웨어 또는 페이지로 요청을 넘겨.
    const url = request.nextUrl;

    if (url.pathname.startsWith('/dashboard')) {
        const isAuthenticated = false; // 여기서 실제 인증 여부를 확인하도록 설정해

        if (!isAuthenticated) {
            // 인증되지 않았다면 로그인 페이지로 리다이렉트
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*'] // 이 설정으로 dashboard 경로에만 미들웨어를 적용해
};
