export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ border: '2px solid white' }}>
            <p style={{ color: 'gray' }}>(movies) 경로 그룹의 레이아웃</p>
            {children}
        </div>
    );
}
