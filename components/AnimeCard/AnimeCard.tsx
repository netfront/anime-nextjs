'use client';

import { useRouter } from 'next/navigation';

import { cn } from '@/utils';
import { ScoreBadge } from '@/components/ScoreBadge';

import { IAnimeCardProps } from './AnimeCard.interfaces';

export function AnimeCard({ anime }: IAnimeCardProps) {
  const router = useRouter();
  const title = anime.title.english || anime.title.romaji;

  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md overflow-hidden cursor-pointer',
        'hover:shadow-lg transition-shadow duration-200',
      )}
      onClick={() => router.push(`/anime/${anime.id}`)}
    >
      <div className="relative aspect-[3/4]">
        <img
          src={anime.coverImage.large}
          alt=""
          className="w-full h-full object-cover"
        />
        <button
          className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md"
          onClick={(e) => e.stopPropagation()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
      </div>

      <div className="p-3">
        <div className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
          {title}
        </div>

        <div className="flex items-center justify-between">
          <ScoreBadge score={anime.averageScore} />
          {anime.episodes && (
            <span className="text-xs text-gray-400">
              {anime.episodes} eps
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
