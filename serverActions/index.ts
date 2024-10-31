'use server';
export async function wait(duration = 1000): Promise<{ message: string }> {
    console.log(`Run 'wait' function`); // 서버 콘솔에만 출력됩니다.
    return new Promise(resolve =>
        setTimeout(
            () => resolve({ message: `Waited for ${duration}ms` }),
            duration
        )
    );
}
