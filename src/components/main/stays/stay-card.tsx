import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import StayTypeIcon, { StayType } from "./stay-type";

/**
 * Represents a stay.
 */
export interface Stay {
  id: number;
  title: string;
  rating: number;
  host: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  type: StayType;
  image: string;
}

/**
 * A card component that displays information about a stay.
 * @param id - The ID of the stay.
 * @param title - The title of the stay.
 * @param rating - The rating of the stay.
 * @param host - The host of the stay.
 * @param guests - The number of guests the stay can accommodate.
 * @param bedrooms - The number of bedrooms in the stay.
 * @param bathrooms - The number of bathrooms in the stay.
 * @param type - The type of stay; one of "Entire Home", "Entire Studio Apartment", or "Share With Super Host".
 * @param image - The image url of the stay.
 * @returns The rendered StayCard component.
 */
export default function StayCard({
  id,
  title,
  rating,
  host,
  guests,
  bedrooms,
  bathrooms,
  type,
  image,
}: Stay) {
  return (
    <div className="flex gap-3 rounded-2xl border bg-white p-4 font-light shadow-lg max-xl:flex-col xl:max-h-[400px] xl:min-h-[200px]">
      {/* Stay Image */}
      <div className="h-full w-full basis-1/2 rounded-2xl bg-red-200 object-cover max-xl:h-[150px]">
        <Image
          src={image}
          alt={title}
          width={480}
          height={320}
          className="h-full w-full rounded-xl object-cover"
        />
      </div>

      {/* Stay Information */}
      <div className="my-auto flex basis-1/2 flex-col gap-3">
        {/* Stay Title */}
        <h3 className="text-lg font-extrabold">{title}</h3>

        {/* Stay Rating and Host */}
        <div className="flex flex-wrap items-center">
          <span className="me-6 flex items-center gap-1 text-sm text-gray-500">
            <StarIcon className="mb-1 h-5 w-5 text-yellow-300" />

            {/* Show rating with one decimal place */}
            <span>{rating.toFixed(1)}</span>
          </span>

          {/* Host name */}
          <span className="text-sm text-gray-500">{host}</span>
        </div>

        {/* Stay number of guests, bedrooms, and bathrooms */}
        <div className="flex flex-wrap gap-1 text-sm text-gray-500">
          <span>{guests} guests | </span>
          <span>{bedrooms} bedroom | </span>
          <span>{bathrooms} bathroom</span>
        </div>

        {/* Stay Type */}
        <div className="flex items-center gap-2">
          <StayTypeIcon type={type} />
          <span className="text-sm text-gray-500">{type}</span>
        </div>
      </div>
    </div>
  );
}
