// Next.js는 지원하는 모든 글꼴 파일에 대한 자체 호스팅(automatic self-hosting)이 내장되어 있습니다.
// 기본적으로 모든 Google Fonts를 자체 호스팅으로 지원하며, 구글 API로 별도 요청을 전송하지 않습니다.

import { Roboto, Oswald } from 'next/font/google';

export const roboto = Roboto({
    subsets: ['latin'], // 사용할 폰트 집합
    weight: ['400', '700'], // 사용할 폰트 두께
    display: 'swap', // 폰트 다운로드 전까지 기본 폰트 표시(성능 최적화)
    variable: '--font-roboto' // 사용할 CSS 변수 이름
});
export const oswald = Oswald({
    subsets: ['latin'],
    weight: ['500'],
    display: 'swap',
    variable: '--font-oswald'
});
