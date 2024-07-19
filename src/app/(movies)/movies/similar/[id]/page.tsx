import { API_URL } from '@/api';
import { getMovie, IMovieInfo } from '@/components/movie-info';
import styles from '@/styles/similar.module.css';
import Image from 'next/image';
import myImg from '@/img/profile.jpg';

interface IParams {
  params: { id: string };
}

interface ISimilarMovie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

async function getMovieSimilar(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 50000000));
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie: IMovieInfo = await getMovie(id);
  return {
    title: `${movie.title} | SimilarMovies`,
    description: `The similar movies to ${movie.title}`,
  };
}

export default async function SimilarMovies({ params: { id } }: IParams) {
  const movie: IMovieInfo = await getMovie(id);
  const similarMovies: ISimilarMovie[] = await getMovieSimilar(id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>Movies similar to &quot;{movie.title}&quot;</h1>
      </div>
      <div className={styles.movies}>
        {similarMovies.map((similar) => (
          <div className={styles.movie} key={similar.id}>
            <img
              className={styles.movieImg}
              src={similar.poster_path}
              alt={similar.title}
            />
            <div className={styles.movieInfo}>
              <div className={styles.movieTitle}>
                <h2>{similar.title}</h2>
                <h3>⭐{similar.vote_average.toFixed(1)}</h3>
              </div>
              <h4>release: {similar.release_date}</h4>
              <h4>original language : {similar.original_language}</h4>
              <p>{similar.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.description}>
        <div>
          <a href="https://github.com/gaeguriBanchan" target="_blank">
            By <Image src={myImg} alt="myImg" width={50} height={50} priority />
            KIMJAEJIN
          </a>
        </div>
      </div>
    </div>
  );
}
