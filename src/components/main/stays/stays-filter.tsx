import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

import StaysFilterToggles from "./stays-filter-toggles";

/**
 * Represents the stays filter component.
 * @returns The rendered StaysFilter component.
 */
export default function StaysFilter() {
  return (
    <div className="flex items-center justify-between gap-4">
      <StaysFilterToggles />
      <button>
        <AdjustmentsHorizontalIcon className="h-6 w-6 hover:text-primary-600" />
      </button>
    </div>
  );
}
