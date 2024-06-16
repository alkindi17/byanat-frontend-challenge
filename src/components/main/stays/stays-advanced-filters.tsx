import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

import {
  DropDownMenu,
  DropDownMenuButton,
  DropDownMenuContent,
  DropDownMenuContentSection,
} from "@/components/ui/dropdown-menu";

import RatingsAdvancedFilter from "./stays-advanced-filters-rating";
import TypesAdvancedFilters from "./stays-advanced-filters-types";

/**
 * Represents the advanced filters for stays, which includes the types and ratings.
 * @returns The rendered advanced filters component.
 */
export default function StaysAdvancedFilters() {
  return (
    <DropDownMenu>
      {/* Filter Button */}
      <DropDownMenuButton arrowIcon={false}>
        <AdjustmentsHorizontalIcon className="h-6 w-6 hover:text-primary-600" />
      </DropDownMenuButton>

      <DropDownMenuContent>
        {/* Types */}
        <DropDownMenuContentSection>
          <div className="mx-4 py-2">
            <TypesAdvancedFilters />
          </div>
        </DropDownMenuContentSection>

        {/* Ratings */}
        <DropDownMenuContentSection>
          <div className="px-4 py-2">
            <RatingsAdvancedFilter />
          </div>
        </DropDownMenuContentSection>
      </DropDownMenuContent>
    </DropDownMenu>
  );
}
