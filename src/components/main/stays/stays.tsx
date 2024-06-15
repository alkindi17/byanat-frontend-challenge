/**
 * Renders the Stays component, displaying a list of stays.
 * @returns The rendered Stays component.
 */
import StaysList from "./stays-list";

export default function Stays() {
  return (
    <div className="flex h-full flex-col gap-8 overflow-scroll pe-6 pt-10">
      <h1 className="text-4xl font-extrabold">Stays in Los Angeles</h1>
      <StaysList />
    </div>
  );
}
