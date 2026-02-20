import { getClient } from '@/lib/apollo-client';
import { GET_ANIME_LIST, IGetAnimeListQueryResponse } from '@/hooks/useGetAnimeList';
import { AnimeGrid } from '@/components/AnimeGrid';

export default async function HomePage() {
  const { data } = await getClient().query<IGetAnimeListQueryResponse>({
    query: GET_ANIME_LIST,
    variables: { page: 1, perPage: 20 },
  });

  const anime = data?.Page?.media ?? [];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="text-3xl font-bold text-gray-900 mb-8">
        Trending Anime
      </div>
      <AnimeGrid anime={anime} />
    </div>
  );
}
