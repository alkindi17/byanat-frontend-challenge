/**
 * Chart skeleton component.
 * @returns The chart skeleton component.
 */
export default function ChartSkeleton() {
  return (
    <div className="flex h-[140px] w-full animate-pulse gap-2">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-1">
          <div className="h-[20px] w-[20px] rounded-full bg-gray-200"></div>
          <div className="h-[10px] w-[50px] bg-gray-200"></div>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-[20px] w-[20px] rounded-full bg-gray-200"></div>
          <div className="h-[10px] w-[50px] bg-gray-200"></div>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-[20px] w-[20px] rounded-full bg-gray-200"></div>
          <div className="h-[10px] w-[50px] bg-gray-200"></div>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-[20px] w-[20px] rounded-full bg-gray-200"></div>
          <div className="h-[10px] w-[50px] bg-gray-200"></div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="h-32 w-32 rounded-full ring-[30px] ring-inset ring-gray-200"></div>
      </div>
    </div>
  );
}
