import StaysAdvancedFilters from "./stays-advanced-filters";
import StaysFilterToggles from "./stays-filter-toggles";

/**
 * Represents the stays filter component.
 * @returns The rendered StaysFilter component.
 */
export default function StaysFilter() {
  return (
    <div className="flex items-center justify-between gap-4">
      <StaysFilterToggles />
      <StaysAdvancedFilters />
    </div>
  );
}
