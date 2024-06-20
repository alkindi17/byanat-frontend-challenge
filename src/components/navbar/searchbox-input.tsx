import { XCircleIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";

import { setCityQuery } from "@/lib/state/stays/staysSlice";
import { RootState } from "@/lib/state/store";

/**
 * Represents the search box input component.
 * @param query The current query value.
 * @returns The rendered SearchBoxInput component.
 */
export default function SearchBoxInput({
  query,
  handleQueryChange,
}: {
  query: string;
  handleQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  // Get the current city query from the state.
  const cityQuery = useSelector(
    (state: RootState) => state.stays.filters.cityQuery,
  );

  // Get the dispatch function.
  const dispatch = useDispatch();

  return (
    <>
      {!cityQuery.adminName && !cityQuery.countryName ? (
        // Display the search box input when no city is selected
        <input
          type="text"
          id="search-box"
          value={query}
          onChange={(e) => handleQueryChange(e)}
          className="block w-full min-w-0 flex-1 border border-gray-300 p-2.5 text-sm text-gray-900"
          placeholder="Search for a city"
        />
      ) : (
        // Display the city query as a pill when a city is selected
        <div className="flex w-full min-w-0 flex-1 items-center border border-gray-300 px-2.5 text-sm text-gray-600">
          <button
            className="flex items-center gap-2 rounded-lg bg-[#F6C002] bg-opacity-[26%] px-3 py-1"
            onClick={() =>
              dispatch(setCityQuery({ adminName: "", countryName: "" }))
            }
          >
            <span>{cityQuery.adminName + ", " + cityQuery.countryName}</span>
            <XCircleIcon className="h-5 w-5" />
          </button>
        </div>
      )}
    </>
  );
}
