import wait from '@/utils/wait';

export default async function Xyz() {
    await wait(3000);
    return <h2>Xyz 컴포넌트!</h2>;
}
