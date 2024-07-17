import { API_URL } from '@/api';
import MovieInfo, { getMovie } from '@/components/movie-info';
import MovieVideos from '@/components/movie-videos';
import { Suspense } from 'react';

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
    <div>
      <Suspense fallback={<h1>Loading MovieInfo</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading MovieVideos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
