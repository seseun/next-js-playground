'use client';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';

const links = [
    { href: '/', label: 'Home' },
    { href: '/movies', label: 'Movies' },
    { href: '/movies/tt4154796', label: 'Movie(Avengers)' },
    { href: '/async', label: 'Async' },
    { href: '/optimize', label: 'Optimize' }
];

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        router.prefetch('/movies');
    }, [router]);

    return (
        <header
            style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
            <nav style={{ display: 'flex', alignItems: 'center' }}>
                {links.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        style={{
                            padding: '0 1rem',
                            color:
                                pathname === href
                                    ? 'bg-blue-600 text-white'
                                    : ''
                        }}>
                        {label}
                    </Link>
                ))}
            </nav>
            <button
                className=""
                onClick={() => router.push('/movies')}>
                Movies(Push)
            </button>
        </header>
    );
}
