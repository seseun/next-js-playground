// 💛 client component
// 'use client';
// import { use, useState, useEffect } from 'react';

// interface Movie {
//     Title: string;
//     Plot: string;
//     Poster: string;
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
//     const [loaded, setLoaded] = useState(false);

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
//             <Image
//                 src={image.src}
//                 alt={image.name}
//                 width={100}
//                 height={200}
//                 onLoad={() => setLoaded(true)}
//             />
//             <h1>{movie?.Title}</h1>
//             <p>{movie?.Plot}</p>
//         </>
//     );
// }

// 💙 server component
import wait from '@/utils/wait';
import Image from 'next/image';

interface Movie {
    Title: string;
    Plot: string;
    Poster: string;
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
    // throw new Error('뭔가 문제가 있어요..');
    const res = await fetch(
        `https://omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${movieId}&plot=${plot || 'short'}`
    );
    const movie: Movie = await res.json();
    return (
        <>
            <Image
                src={movie.Poster}
                alt={movie.Title}
                width={300}
                height={450}
                // onLoad 속성을 사용해 이미지 로딩이 완료되면 콜백을 호출할 수 있습니다.
                // 단, onLoad 속성은 클라이언트 컴포넌트에서 사용해야 합니다.
                // 중요한 이미지로 판단해 우선 로드하거나 품질을 지정할 수도 있습니다.
                // onLoad={() => setLoaded(true)}
                // quality={100} // 기본값: 75
                // priority // LCP(Largest Contentful Paint) 최적화
            />
            <h1>{movie.Title}</h1>
            <p>{movie.Plot}</p>
        </>
    );
}
