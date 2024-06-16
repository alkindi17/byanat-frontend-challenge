"use client";

import StaysFilter from "./stays-filter";
import StaysHeader from "./stays-header";
import StaysList from "./stays-list";

/**
 * Renders the Stays component, displaying a list of stays.
 * @returns The rendered Stays component.
 */
export default function Stays() {
  // Get the stays list data.

  return (
    <div className="flex h-full flex-col gap-8 overflow-scroll pe-6 pt-10">
      <StaysHeader />
      <StaysFilter />
      <StaysList />
    </div>
  );
}
