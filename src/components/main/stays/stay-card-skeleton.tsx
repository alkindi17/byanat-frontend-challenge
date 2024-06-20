/**
 * A skeleton component that represents a stay card, used to show a loading state.
 * @returns The rendered StayCardSkeleton component.
 */
export default function StayCardSkeleton() {
  return (
    <div
      role="status"
      className="flex h-full animate-pulse gap-3 rounded-2xl border bg-white p-4 shadow-lg max-xl:flex-col xl:h-[250px]"
    >
      <div className="w-full rounded-2xl bg-gray-200 max-xl:h-[150px] xl:h-full"></div>

      <div className="grid w-full grid-cols-3 items-center gap-2 max-xl:gap-3">
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
