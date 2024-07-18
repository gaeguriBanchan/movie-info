import { API_URL } from '@/api';
import styles from '@/styles/movie-info.module.css';
import Link from 'next/link';

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}
export async function getMovieCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export interface IMovieInfo {
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

interface IMovieCredits {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie: IMovieInfo = await getMovie(id);
  const credits: IMovieCredits[] = await getMovieCredits(id);
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <img className={styles.poster} src={movie.poster_path} />
        <div className={styles.info}>
          <div className={styles.infoTop}>
            <h1 className={styles.title}>{movie.title}</h1>
            <h3>⭐ {movie.vote_average.toFixed(1)}</h3>
          </div>
          <p>{movie.overview}</p>
          <div className={styles.links}>
            <a href={movie.homepage} target={'_blank'}>
              Homepage
            </a>
            <Link href={`/movies/similar/${id}`}>Similar Films</Link>
          </div>
          <div className={styles.credits}>
            {credits.slice(0, 8).map((actor) => (
              <div key={actor.id} className={styles.actor}>
                <img className={styles.actorImg} src={actor.profile_path} />
                <h5>{actor.character}</h5>
                <h6>({actor.name})</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
