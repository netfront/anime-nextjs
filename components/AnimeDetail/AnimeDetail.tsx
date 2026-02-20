import { cn } from '@/utils';
import { ScoreBadge } from '@/components/ScoreBadge';

import { IAnimeDetailProps } from './AnimeDetail.interfaces';

function formatStatus(status: string): string {
  return status.replace(/_/g, ' ').toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
}

export function AnimeDetail({ anime }: IAnimeDetailProps) {
  const title = anime.title.english || anime.title.romaji;
  const studio = anime.studios.nodes[0]?.name;

  return (
    <div>
      {anime.bannerImage && (
        <div className="w-full h-48 md:h-64 overflow-hidden">
          <img
            src={anime.bannerImage}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0">
            <img
              src={anime.coverImage.extraLarge || anime.coverImage.large}
              alt=""
              className={cn(
                'w-48 rounded-lg shadow-lg',
                anime.bannerImage && '-mt-20 relative z-10',
              )}
            />
          </div>

          <div className="flex-1">
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {title}
            </div>

            {anime.title.native && (
              <div className="text-lg text-gray-500 mb-4">
                {anime.title.native}
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-4">
              {anime.genres.map((genre) => (
                <span
                  key={genre}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <span className="text-gray-400 text-sm">Score</span>
                <div className="mt-1">
                  <ScoreBadge score={anime.averageScore} />
                </div>
              </div>

              <div>
                <span className="text-gray-400 text-sm">Format</span>
                <div className="text-gray-900 mt-1">{anime.format || 'N/A'}</div>
              </div>

              <div>
                <span className="text-gray-400 text-sm">Episodes</span>
                <div className="text-gray-900 mt-1">{anime.episodes || 'N/A'}</div>
              </div>

              <div>
                <span className="text-gray-400 text-sm">Duration</span>
                <div className="text-gray-900 mt-1">
                  {anime.duration ? `${anime.duration} min` : 'N/A'}
                </div>
              </div>

              <div>
                <span className="text-gray-400 text-sm">Status</span>
                <div className="text-gray-900 mt-1">{formatStatus(anime.status)}</div>
              </div>

              <div>
                <span className="text-gray-400 text-sm">Season</span>
                <div className="text-gray-900 mt-1">
                  {anime.season && anime.seasonYear
                    ? `${anime.season} ${anime.seasonYear}`
                    : 'N/A'}
                </div>
              </div>

              {studio && (
                <div>
                  <span className="text-gray-400 text-sm">Studio</span>
                  <div className="text-gray-900 mt-1">{studio}</div>
                </div>
              )}

              <div>
                <span className="text-gray-400 text-sm">Popularity</span>
                <div className="text-gray-900 mt-1">
                  {anime.popularity?.toLocaleString() || 'N/A'}
                </div>
              </div>
            </div>

            {anime.description && (
              <div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Synopsis</div>
                <div className="text-gray-700 leading-relaxed">
                  {anime.description}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
