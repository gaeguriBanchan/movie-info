import Link from 'next/link';
import styles from '@/styles/movie.module.css';

interface IMovieProps {
  title: string;
  id: number;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMovieProps) {
  return (
    <div className={styles.movie} key={id}>
      <Link prefetch href={`/movies/${id}`}>
        <img src={poster_path} alt={title} />
        <h3>{title}</h3>
      </Link>
    </div>
  );
}
