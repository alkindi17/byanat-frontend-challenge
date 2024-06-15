"use client";

import { useSelector } from "react-redux";

import { RootState } from "@/lib/state/store";

import StaysFilter from "./stays-filter";
import StaysList, { StaysListType } from "./stays-list";

/**
 * Renders the Stays component, displaying a list of stays.
 * @returns The rendered Stays component.
 */
export default function Stays() {
  // Get the stays list data.
  const staysListData = useSelector(
    (state: RootState) => state.stays.filteredStays,
  ) as StaysListType;

  return (
    <div className="flex h-full flex-col gap-8 overflow-scroll pe-6 pt-10">
      <h1 className="text-4xl font-extrabold">Stays in Los Angeles</h1>
      <StaysFilter />
      <StaysList staysListData={staysListData} />
    </div>
  );
}
