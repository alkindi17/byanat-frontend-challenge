import { useSelector } from "react-redux";

import { RootState } from "@/lib/state/store";

export default function StaysHeader() {
  // Get the current city query from the state.
  const cityQuery = useSelector(
    (state: RootState) => state.stays.filters.cityQuery,
  );

  if (cityQuery) {
    return <h1 className="text-4xl font-extrabold">Stays in {cityQuery}</h1>;
  }

  return <h1 className="text-4xl font-extrabold">All Stays</h1>;
}
