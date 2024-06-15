import { StarIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";

import { setMinimumRating } from "@/lib/state/stays/staysSlice";
import { RootState } from "@/lib/state/store";

/**
 * Represents the ratings advanced filters component.
 * @returns The rendered RatingsAdvancedFilter component.
 */
export default function RatingsAdvancedFilter() {
  // Get the current state of the filters.
  const minRating = useSelector(
    (state: RootState) => state.stays.filters.minimumRating,
  );

  // Get the dispatch function.
  const dispatch = useDispatch();

  return (
    <>
      <h3 className="mb-2 text-lg font-semibold">Minimum Rating</h3>

      {/* Display the radio buttons for the ratings */}
      <div className="flex flex-col gap-2">
        {/* The "Show All" radio button */}
        <label className="flex items-center gap-1">
          <input
            type="radio"
            value={0}
            name={"rating"}
            checked={minRating === 0}
            onChange={() => {
              dispatch(setMinimumRating(0));
            }}
          />
          <div className="ms-1 mt-0.5 flex items-center">Show All</div>
        </label>

        {/* Loop through the ratings and display the radio buttons with the stars */}
        {[1, 2, 3, 4, 5].map((rating) => (
          <label key={rating} className="flex items-center gap-1">
            <input
              type="radio"
              value={rating}
              name={"rating"}
              checked={minRating === rating}
              onChange={() => {
                dispatch(setMinimumRating(rating));
              }}
            />
            <div className="flex items-center">
              {[...Array(rating)].map((_, index) => (
                <StarIcon key={index} className="h-5 w-5 text-yellow-300" />
              ))}
            </div>
          </label>
        ))}
      </div>
    </>
  );
}
