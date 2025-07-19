export default function Loading() {
  return (
    <div className="space-y-6 animate-pulse" role="status" aria-busy="true" aria-label="Loading project details">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3" aria-hidden="true"></div>
      <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded" aria-hidden="true"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" aria-hidden="true"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3" aria-hidden="true"></div>
      </div>
    </div>
  )
}
