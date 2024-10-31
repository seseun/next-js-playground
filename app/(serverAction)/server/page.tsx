import { wait } from '@/serverActions';

// 다음과 같이, 서버 컴포넌트에서 서버 액션(함수)를 가져와 사용할 수 있습니다.
// Run 'wait' function 메시지는 서버 콘솔에만 출력됩니다.
export default async function ServerPage() {
    const { message } = await wait(3000);
    return <h1>{message}</h1>;
}
