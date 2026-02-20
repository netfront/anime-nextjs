export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="animate-pulse">
        <div className="w-full h-48 bg-gray-200 rounded mb-8" />
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-48 h-72 bg-gray-200 rounded-lg flex-shrink-0" />
          <div className="flex-1 space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="flex gap-2">
              <div className="h-6 bg-gray-200 rounded-full w-20" />
              <div className="h-6 bg-gray-200 rounded-full w-16" />
              <div className="h-6 bg-gray-200 rounded-full w-24" />
            </div>
            <div className="space-y-2 mt-6">
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
