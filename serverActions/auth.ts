'use server';
import { redirect } from 'next/navigation';

export async function signIn(formData: FormData) {
    const email = formData.get('email');
    const password = formData.get('password');
    console.log(email, password);
    // await 로그인 처리..
    redirect('/'); // 로그인 성공 시, 메인 페이지로 이동!
}
