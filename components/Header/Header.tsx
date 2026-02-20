import Link from 'next/link';

import { cn } from '@/utils';

import { IHeaderProps } from './Header.interfaces';

export function Header({ className }: IHeaderProps) {
  return (
    <div className={cn('bg-blue-600 text-white', className)}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white no-underline">
          <h4>AniList Explorer</h4>
        </Link>

        <div className="flex items-center gap-6">
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <Link href="/" className="text-white no-underline hover:text-blue-200">
            Home
          </Link>
          <Link href="/fetch" className="text-white no-underline hover:text-blue-200">
            Fetch
          </Link>
        </div>
      </div>
    </div>
  );
}
