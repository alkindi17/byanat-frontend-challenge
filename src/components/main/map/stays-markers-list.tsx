import { useSelector } from "react-redux";

import { RootState } from "@/lib/state/store";

import StayMarker from "./stay-marker";

/**
 * StaysMarkersList component to display the list of stay markers
 * @returns the list of stay markers
 */
export default function StaysMarkersList() {
  const stays = useSelector((state: RootState) => state.stays.filteredStays);

  return (
    <>
      {stays.map((stay) => (
        <StayMarker key={stay.id} stay={stay} />
      ))}
    </>
  );
}
