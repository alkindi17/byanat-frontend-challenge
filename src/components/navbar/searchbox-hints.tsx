import { useDispatch, useSelector } from "react-redux";

import { GeoName, GeoNames } from "@/lib/geo-search/geo-search";
import { setCoordinates } from "@/lib/state/map/mapSlice";
import { setCityQuery } from "@/lib/state/stays/staysSlice";
import { RootState } from "@/lib/state/store";

/**
 * Represents the search box hints component.
 * @param loading The loading state of the search box hints.
 * @param results The results of the search box hints.
 * @param query The current query value.
 * @returns The rendered SearchBoxHints component.
 */
export default function SearchBoxHints({
  loading,
  results,
  query,
  clearQuery,
}: {
  loading: boolean;
  results: GeoNames;
  query: string;
  clearQuery: () => void;
}) {
  // Get the current city query from the state.
  const cityQuery = useSelector(
    (state: RootState) => state.stays.filters.cityQuery,
  );

  // Get the dispatch function.
  const dispatch = useDispatch();

  const handleCityClick = (city: GeoName) => {
    dispatch(setCityQuery(city.name + ", " + city.countryName));
    dispatch(setCoordinates({ latitude: city.lat, longitude: city.lng }));
    clearQuery();
  };

  if (!query || cityQuery) {
    return null;
  }

  return (
    <div className="rounded-md border border-gray-300 bg-white py-4 font-semibold shadow-lg">
      {loading ? (
        <p className="px-4 py-2">Loading...</p>
      ) : results.length ? (
        <ul className="divide-y divide-gray-100">
          {results.map((result, index) => (
            <li
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              key={index}
              onClick={() => handleCityClick(result)}
            >
              {result.name + ", " + result.countryName}
            </li>
          ))}
        </ul>
      ) : (
        <p className="px-4 py-2">
          No results found for{" "}
          <span className="font-extrabold underline">{query}</span>.
        </p>
      )}
    </div>
  );
}
