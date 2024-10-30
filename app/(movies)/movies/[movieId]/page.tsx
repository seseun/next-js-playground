// 💛 client component
// 'use client';
// import { use, useState, useEffect } from 'react';

// interface Movie {
//     Title: string;
//     Plot: string;
// }

// export default function MovieDetails({
//     params, // 동적 세그먼트
//     searchParams // 쿼리스트링
// }: {
//     params: Promise<{ movieId: string }>;
//     searchParams: Promise<{ plot?: 'short' | 'full' }>;
// }) {
//     const { movieId } = use(params);
//     const { plot } = use(searchParams);
//     const [movie, setMovie] = useState<Movie | null>(null);

//     useEffect(() => {
//         const fetchMovie = async () => {
//             const res = await fetch(
//                 `https://omdbapi.com/?apikey=7035c60c&i=${movieId}&plot=${plot || 'short'}`
//             );
//             const movie: Movie = await res.json();
//             setMovie(movie);
//         };
//         fetchMovie();
//     }, [movieId, plot]);

//     return (
//         <>
//             <h1>{movie?.Title}</h1>
//             <p>{movie?.Plot}</p>
//         </>
//     );
// }

// 💙 server component
import wait from '@/utils/wait';
interface Movie {
    Title: string;
    Plot: string;
}

export default async function MovieDetails({
    params, // 동적 세그먼트
    searchParams // 쿼리스트링
}: {
    params: Promise<{ movieId: string }>;
    searchParams: Promise<{ plot?: 'short' | 'full' }>;
}) {
    const { movieId } = await params;
    const { plot } = await searchParams;
    await wait(2000);
    throw new Error('뭔가 문제가 있어요..');
    const res = await fetch(
        `https://omdbapi.com/?apikey=7035c60c&i=${movieId}&plot=${plot || 'short'}`
    );
    const movie: Movie = await res.json();
    return (
        <>
            <h1>{movie.Title}</h1>
            <p>{movie.Plot}</p>
        </>
    );
}
