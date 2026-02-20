import Link from 'next/link';

import { cn } from '@/utils';

import { IHeaderProps } from './Header.interfaces';

export function Header({ className }: IHeaderProps) {
  return (
    <div className={cn('bg-blue-600 text-white', className)}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white no-underline">
          AniList Explorer
        </Link>

        <div className="flex gap-6">
          <Link href="/" className="text-white no-underline hover:text-blue-200">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
