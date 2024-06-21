/**
 * A skeleton component that represents a stay card, used to show a loading state.
 * @returns The rendered StayCardSkeleton component.
 */
export default function StayCardSkeleton() {
  return (
    <div
      role="status"
      className="flex h-full animate-pulse gap-3 rounded-2xl border bg-white p-4 shadow-lg max-sm:flex-col sm:h-[215px]"
    >
      <div className="w-full rounded-2xl bg-gray-200 max-sm:h-[150px] sm:h-full sm:max-w-[250px]"></div>

      <div className="grid w-full grid-cols-3 items-center gap-2 max-sm:gap-3">
        <div className="col-span-3 h-6 rounded-lg bg-gray-200 dark:bg-gray-700"></div>

        <div className="h-6 rounded-lg bg-gray-200 dark:bg-gray-600"></div>
        <div className="h-6 rounded-lg bg-gray-200 dark:bg-gray-600"></div>
        <div className="h-6 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-6 rounded-lg bg-gray-200 dark:bg-gray-600"></div>
        <div className="h-6 rounded-lg bg-gray-200 dark:bg-gray-600"></div>
        <div className="h-6 rounded-lg bg-gray-200 dark:bg-gray-600"></div>

        <div className="col-span-3 h-6 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </div>
  );
}
