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
