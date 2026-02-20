import { cn } from '@/utils';

import { IScoreBadgeProps } from './ScoreBadge.interfaces';

export function ScoreBadge({ score }: IScoreBadgeProps) {
  if (score === null) return null;

  const colorClass =
    score >= 75
      ? 'text-score-high'
      : score >= 50
        ? 'text-score-medium'
        : 'text-score-low';

  return (
    <span className={cn('text-sm font-bold', colorClass)}>
      {score}%
    </span>
  );
}
