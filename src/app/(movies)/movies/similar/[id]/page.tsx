import { API_URL } from '@/api';
import { getMovie, IMovieInfo } from '@/components/movie-info';

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
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}

export default async function SimilarMovies({ params: { id } }: IParams) {
  const movie: IMovieInfo = await getMovie(id);
  const similarMovies: ISimilarMovie[] = await getMovieSimilar(id);
  return (
    <div>
      <h1>{movie.title} : similar movies???</h1>
      <div>
        {similarMovies.slice(0, 3).map((similar) => (
          <div key={similar.id}>
            <h2>{similar.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
