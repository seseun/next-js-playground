export default function XPage() {
    return (
        <>
            <h1>Intercepted X Page!!</h1>
            <p>
                그니까 a/b/c에서 /x 경로로 이동하면 app/x로 가는 게 아니라
                a/b/c/(...)x 로 간다 이말이지.
                <br />
                <br />
                ▼이거 해서 적용됐음
            </p>
            <p style={{ color: 'orange' }}>
                만약 경로 가로채기 작업이 개발 서버에서 적용되지 않는 경우,
                .next 폴더 삭제 후 개발 서버를 재시작하는 것을 추천합니다.
            </p>
        </>
    );
}
