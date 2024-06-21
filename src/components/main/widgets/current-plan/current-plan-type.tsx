import { UsersIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

/**
 * Shows the current plan type
 * @returns The current plan type component
 */
export default function CurrentPlanType() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2">
        <div className="rounded-xl bg-[#F1FBFF] p-3">
          <UsersIcon className="h-6 w-6 text-[#00B7FE]" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-xs font-normal">Teams Plan</span>
          <span className="text-sm font-semibold">$99/mo</span>
        </div>
      </div>
      <ChevronRightIcon className="h-5 w-5" />
    </div>
  );
}
