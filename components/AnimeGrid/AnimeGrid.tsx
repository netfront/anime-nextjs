import { AnimeCard } from '@/components/AnimeCard';

import { IAnimeGridProps } from './AnimeGrid.interfaces';

export function AnimeGrid({ anime }: IAnimeGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {anime.map((item) => (
        <div key={item.id}>
          <AnimeCard anime={item} />
        </div>
      ))}
    </div>
  );
}
