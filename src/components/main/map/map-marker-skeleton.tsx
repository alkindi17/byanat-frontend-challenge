/**
 * MapMarkerSkeleton component to display the map marker skeleton to show loading state
 * @returns the map marker skeleton component
 */
export default function MapMarkerSkeleton() {
  return (
    <>
      <div className="m-2 h-[150px] w-[150px] animate-pulse rounded-lg bg-gray-200"></div>
      <div className="mx-4 mb-2 flex flex-1 animate-pulse flex-col justify-center gap-2">
        <div className="mx-5 h-4 rounded-lg bg-gray-200 dark:bg-gray-600"></div>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-3 rounded-lg bg-gray-200 dark:bg-gray-600"></div>
          <div className="h-3 rounded-lg bg-gray-200 dark:bg-gray-600"></div>
        </div>
      </div>
    </>
  );
}
