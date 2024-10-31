// 다음과 같이, 클라이언트 컴포넌트에서도 서버 액션를 가져와 사용할 수 있습니다.
// 역시, Run 'wait' function 메시지는 서버 콘솔에만 출력됩니다.
'use client';
import { wait } from '@/serverActions';
import { useState, useEffect } from 'react';

export default function ClientPage() {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        wait(3000).then(({ message }) => {
            setMessage(message);
            setLoading(false);
        });
    }, []);
    return <h1>{loading ? 'Loading...' : message}</h1>;
}
