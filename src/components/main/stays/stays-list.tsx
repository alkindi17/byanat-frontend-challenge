import StayCard from "./stay-card";
import { Stay } from "./stay-card";

/**
 * Represents a list of stays.
 */
export type StaysListType = Stay[];

/**
 * Renders a list of stays.
 * @param stayList - The list of stays to render.
 * @returns The rendered Stays list component.
 */
export default function StaysList({ stayList }: { stayList: StaysListType }) {
  return (
    <div className="grid grid-flow-row auto-rows-fr gap-6 pb-10">
      {stayList.map((stay) => (
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
