import { API_URL } from '@/api';

async function getMovie(id: string) {
  console.log(`Fetching movie ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}
async function getVideo(id: string) {
  console.log(`Fetching video ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log('start fetch');
  const [movie, video] = await Promise.all([getMovie(id), getVideo(id)]);
  console.log('end fetch');
  return <h1>{movie.title}</h1>;
}
