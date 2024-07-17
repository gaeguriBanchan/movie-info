import { API_URL } from '@/api';
import styles from '@/styles/movie-info.module.css';

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
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

export default async function MovieInfo({ id }: { id: string }) {
  const movie: IMovieInfo = await getMovie(id);
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <img src={movie.poster_path} />
        <div className={styles.info}>
          <h1 className={styles.title}>{movie.title}</h1>
          <h3>⭐ {movie.vote_average.toFixed(1)}</h3>
          <p>{movie.overview}</p>
          <a href={movie.homepage} target={'_blank'}>
            Homepage -&gt;
          </a>
        </div>
      </div>
    </div>
  );
}
