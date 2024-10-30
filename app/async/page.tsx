import wait from '@/utils/wait';

export default async function Page() {
    await wait(1000);
    return <h1>비동기 페이지!</h1>;
}
