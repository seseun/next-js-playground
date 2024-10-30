import Link from 'next/link';

export default function NotFound() {
    return (
        <>
            <h1>404, 찾을 수 없는 페이지입니다.</h1>
            <Link href="/">메인 페이지로 이동~</Link>
        </>
    );
}
