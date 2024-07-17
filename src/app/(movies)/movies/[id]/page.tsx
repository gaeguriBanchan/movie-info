import { API_URL } from '@/api';
import MovieInfo from '@/components/movie-info';
import MovieVideos from '@/components/movie-videos';
import { Suspense } from 'react';

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // console.log('start fetch');
  // const [movie, video] = await Promise.all([getMovie(id), getVideo(id)]);
  // console.log('end fetch');
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
