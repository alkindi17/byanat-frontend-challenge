import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { fetchStays } from "@/lib/state/stays/staysSlice";
import { RootState, AppDispatch } from "@/lib/state/store";

import StayCard from "./stay-card";
import { Stay } from "./stay-card";
import StayCardSkeleton from "./stay-card-skeleton";

/**
 * Represents a list of stays.
 */
export type Stays = Stay[];

/**
 * Renders a list of stays.
 * @param staysListData - The list of stays to render.
 * @returns The rendered Stays list component.
 */
export default function StaysList() {
  // Get the stays list data.
  const staysListData = useSelector(
    (state: RootState) => state.stays.filteredStays,
  );

  // Get the loading state.
  const isStaysLoading = useSelector(
    (state: RootState) => state.stays.isLoading,
  );

  // Get the data fetching state.
  const isDataFetched = useSelector(
    (state: RootState) => state.stays.isDataFetched,
  );

  // Get the data updated state.
  const isDataUpdated = useSelector(
    (state: RootState) => state.stays.isDataUpdated,
  );

  const dispatch = useDispatch<AppDispatch>();

  // Fetch the stays list data if it is not fetched or if it is updated.
  useEffect(() => {
    if (!isDataFetched || isDataUpdated) {
      dispatch(fetchStays());
    }
  }, [dispatch, isDataFetched, isDataUpdated]);

  // Show a loading skeleton if the stays are loading.
  if (isStaysLoading) {
    return (
      <div className="grid grid-flow-row auto-rows-fr gap-6 pb-7">
        <StayCardSkeleton />
        <StayCardSkeleton />
        <StayCardSkeleton />
        <StayCardSkeleton />
      </div>
    );
  }

  // Show the stays list if the stays finished loading.
  return (
    <div className="grid grid-flow-row auto-rows-fr gap-6 pb-7">
      {staysListData.map((stay) => (
        <StayCard key={stay.id} stay={stay} />
      ))}
    </div>
  );
}
