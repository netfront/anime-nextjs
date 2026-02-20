import { getClient } from '@/lib/apollo-client';
import { GET_ANIME_DETAIL, IGetAnimeDetailQueryResponse } from '@/hooks/useGetAnimeDetail';
import { AnimeDetail } from '@/components/AnimeDetail';

interface IAnimePageProps {
  params: {
    id: string;
  };
}

export default async function AnimePage({ params }: IAnimePageProps) {
  const { data } = await getClient().query<IGetAnimeDetailQueryResponse>({
    query: GET_ANIME_DETAIL,
    variables: { id: parseInt(params.id, 10) },
  });

  if (!data?.Media) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <div className="text-2xl text-gray-600">Anime not found</div>
      </div>
    );
  }

  return (
    <div>
      <AnimeDetail anime={data.Media} />
    </div>
  );
}
