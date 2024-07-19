import { API_URL } from '@/api';
import MovieInfo, { getMovie } from '@/components/movie-info';
import MovieVideos from '@/components/movie-videos';
import { Suspense } from 'react';
import styles from '@/styles/movie-detail.module.css';
import Image from 'next/image';
import myImg from '@/img/profile.jpg';

interface IParams {
  params: { id: string };
}

interface IMovieInfo {
  adult: boolean;
  backdrop_path: string;
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  homepage: string;
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie: IMovieInfo = await getMovie(id);
  return {
    title: movie.title,
  };
}
export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div className={styles.main}>
      <Suspense
        fallback={<h1 className={styles.loading}>Loading MovieInfo</h1>}
      >
        <MovieInfo id={id} />
      </Suspense>
      <Suspense
        fallback={<h1 className={styles.loading}>Loading MovieVideos</h1>}
      >
        <MovieVideos id={id} />
      </Suspense>
      <div className={styles.description}>
        <div>
          <a href="https://github.com/gaeguriBanchan" target="_blank">
            By{' '}
            <Image
              src={myImg}
              alt="myImg"
              // className={styles.vercelLogo}
              width={50}
              height={50}
              priority
            />
            KIMJAEJIN
          </a>
        </div>
      </div>
    </div>
  );
}
