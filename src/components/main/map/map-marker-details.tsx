import Image from "next/image";

import { Stay } from "../stays/stay-card";

/**
 * A component that displays the details of a stay in a map marker.
 * @param stay The stay object to display.
 * @returns The rendered MapMarkerDetails component.
 */
export default function MapMarkerDetails({ stay }: { stay: Stay }) {
  return (
    <>
      <div className="h-[150px] w-[150px] object-cover">
        <Image
          src={stay.image}
          width={150}
          height={150}
          alt="A stay image"
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-1">
        <span className="mx-auto text-lg font-extrabold">
          {"$" + stay.price.toLocaleString()}
        </span>
        <span className="mx-auto text-xs font-light">
          {stay.bedrooms} Beds | {stay.bathrooms} Baths
        </span>
      </div>
    </>
  );
}
