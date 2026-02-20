'use client';

import { useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_ANIME_LIST } from '@/hooks/useGetAnimeList';
import type { IAnimeMedia, IGetAnimeListQueryResponse } from '@/hooks/useGetAnimeList';

export default function FetchPage() {
  const [animeList, setAnimeList] = useState<IAnimeMedia[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useQuery<IGetAnimeListQueryResponse>(GET_ANIME_LIST, {
    variables: { page: 1, perPage: 10 },
    onCompleted: (data) => {
      setAnimeList(data.Page.media);
      setIsLoading(false);
    },
    onError: (err) => {
      setError(err.message);
      setIsLoading(false);
    },
  });

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Anime List</h1>
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Anime List</h1>
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Anime List</h1>
      <div className="space-y-4">
        {animeList.map((anime) => (
          <div
            key={anime.id}
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
          >
            <img
              src={anime.coverImage.medium}
              alt={anime.title.english || anime.title.romaji}
              className="w-16 h-20 object-cover rounded"
            />
            <div>
              <div className="font-medium text-gray-900">
                {anime.title.english || anime.title.romaji}
              </div>
              <div className="text-sm text-gray-500">
                {anime.episodes ? `${anime.episodes} episodes` : 'Episodes TBA'}
              </div>
              <div className="text-sm text-gray-400">
                {anime.genres.slice(0, 3).join(', ')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
