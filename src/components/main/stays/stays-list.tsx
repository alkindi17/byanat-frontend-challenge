import StayCard from "./stay-card";
import { Stay } from "./stay-card";

/**
 * Represents a list of stays.
 */
export type StaysListType = Stay[];

/**
 * Renders a list of stays.
 * @param staysListData - The list of stays to render.
 * @returns The rendered Stays list component.
 */
export default function StaysList({
  staysListData,
}: {
  staysListData: StaysListType;
}) {
  return (
    <div className="grid grid-flow-row auto-rows-fr gap-6 pb-10">
      {staysListData.map((stay) => (
        <StayCard
          key={stay.id}
          id={stay.id}
          title={stay.title}
          rating={stay.rating}
          host={stay.host}
          guests={stay.guests}
          bedrooms={stay.bedrooms}
          bathrooms={stay.bathrooms}
          type={stay.type}
          image={stay.image}
        />
      ))}
    </div>
  );
}
