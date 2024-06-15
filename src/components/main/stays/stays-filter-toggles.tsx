import { useDispatch, useSelector } from "react-redux";

import {
  toggleFreeCancellation,
  toggleDiscount,
  toggleInstantBook,
} from "@/lib/state/stays/staysSlice";
import { RootState } from "@/lib/state/store";

/**
 * Represents the stays filter toggles component.
 * @returns The rendered StaysFilterToggles component.
 */
export default function StaysFilterToggles() {
  // Get the current state of the filters.
  const freeCancellation = useSelector(
    (state: RootState) => state.stays.filters.toggles.freeCancellation,
  );
  const discount = useSelector(
    (state: RootState) => state.stays.filters.toggles.discount,
  );
  const instantBook = useSelector(
    (state: RootState) => state.stays.filters.toggles.instantBook,
  );

  // Get the dispatch function.
  const dispatch = useDispatch();

  // Define the filter data.
  const staysFilterData = [
    {
      name: "Free Cancellation",
      active: freeCancellation,
      toggle: toggleFreeCancellation,
    },
    { name: "Discount", active: discount, toggle: toggleDiscount },
    { name: "Instant Book", active: instantBook, toggle: toggleInstantBook },
  ];

  return (
    <div className="grid grid-flow-col gap-4 max-xl:gap-1">
      {
        // Render the filter buttons.
        staysFilterData.map((filter) => (
          <button
            key={filter.name}
            onClick={() => {
              dispatch(filter.toggle());
            }}
            className={`flex items-center justify-center rounded-full border px-8 py-3 text-center max-2xl:px-5 max-2xl:text-sm max-xl:text-xs max-lg:px-3 ${
              filter.active
                ? "border-primary-100 bg-primary-200 font-extrabold hover:border-primary-100 hover:bg-primary-200"
                : "font-light hover:bg-gray-50"
            }`}
          >
            {filter.name}
          </button>
        ))
      }
    </div>
  );
}
