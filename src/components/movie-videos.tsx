import { API_URL } from '@/api';
import styles from '@/styles/movie-video.module.css';

async function getVideo(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 500000000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

interface IVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos: IVideo[] = await getVideo(id);
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {videos.slice(0, 12).map((video) => (
          <iframe
            key={video.id}
            src={`https://youtube.com/embed/${video.key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.name}
          />
        ))}
      </div>
    </div>
  );
}
