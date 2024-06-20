import { useSelector } from "react-redux";

import { RootState } from "@/lib/state/store";

/**
 * Represents the header for the stays page, which shows the city query if it exists.
 * @returns The rendered StaysHeader component.
 */
export default function StaysHeader() {
  // Get the current city query from the state.
  const cityQuery = useSelector(
    (state: RootState) => state.stays.filters.cityQuery,
  );

  if (cityQuery.adminName && cityQuery.countryName) {
    return (
      <h1 className="text-4xl font-extrabold">
        Stays in {cityQuery.adminName + ", " + cityQuery.countryName}
      </h1>
    );
  }

  return <h1 className="text-4xl font-extrabold">All Stays</h1>;
}
