'use client';

export function Footer() {
  return (
    <div className="bg-gray-800 text-gray-400 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm">
        Data provided by{' '}
        <span
          className="text-blue-400 cursor-pointer"
          onClick={() => window.open('https://anilist.co', '_blank')}
        >
          AniList
        </span>
      </div>
    </div>
  );
}
