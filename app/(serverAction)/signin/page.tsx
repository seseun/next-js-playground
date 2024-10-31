// 특히, 서버 액션은 <form> 요소의 action 속성으로 호출하는 것이 가능해, 양식(Forms) 작업에서 유용합니다.
import { signIn } from '@/serverActions/auth';

export default function Page() {
    return (
        <>
            <form
                action={signIn} // ✅
                className="flex gap-4">
                <input
                    name="email"
                    type="email"
                    placeholder="이메일"
                    className="rounded px-2 py-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="비밀번호"
                    className="rounded px-2 py-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-400">
                    로그인
                </button>
            </form>
        </>
    );
}
