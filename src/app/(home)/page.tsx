import Image from 'next/image';
import styles from '@/styles/home.module.css';
import { title } from 'process';
import { Metadata } from 'next';
import { API_URL } from '@/api';
import Link from 'next/link';
import Movie from '@/components/movie';
import myImg from '@/img/profile.jpg';

export const metadata: Metadata = {
  title: 'Home',
};

async function getMovies() {
  // await new Promise((reslove) => setTimeout(reslove, 50000000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default async function Home() {
  const movies = await getMovies();
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {movies.map((movie: IMovie) => (
          <Movie
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            key={movie.id}
          />
        ))}
      </div>
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
    </main>
  );
}
