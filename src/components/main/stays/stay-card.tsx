import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import StayTypeIcon, { StayType } from "./stay-type";

/**
 * Represents a city.
 */
export interface City {
  adminName2: string;
  adminName1: string;
  countryName: string;
}

/**
 * Represents a stay.
 */
export interface Stay {
  id: number;
  title: string;
  city: City;
  latitude: number | null;
  longitude: number | null;
  rating: number;
  host: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  type: StayType;
  image: string;
  freeCancellation: boolean;
  discount: boolean;
  instantBook: boolean;
  price: number;
}

/**
 * A card component that displays information about a stay.
 * @param stay - The stay to display.
 * @returns The rendered StayCard component.
 */
export default function StayCard({ stay }: { stay: Stay }) {
  return (
    <div className="flex gap-3 rounded-2xl border bg-white p-4 font-light shadow-lg max-sm:flex-col sm:h-[215px]">
      {/* Stay Image */}
      <div className="bg-grey-100 h-full w-full basis-1/2 rounded-2xl object-cover max-sm:h-[150px] sm:max-w-[250px]">
        <Image
          src={stay.image}
          alt={stay.title}
          width={480}
          height={320}
          className="h-full w-full rounded-xl object-cover"
        />
      </div>

      {/* Stay Information */}
      <div className="my-auto flex basis-1/2 flex-col gap-3">
        {/* Stay Title */}
        <h3 className="text-lg font-extrabold">{stay.title}</h3>

        {/* Stay Rating and Host */}
        <div className="flex flex-wrap items-center">
          <span className="me-6 flex items-center gap-1 text-sm text-gray-500">
            <StarIcon className="mb-1 h-5 w-5 text-yellow-300" />

            {/* Show rating with one decimal place */}
            <span>{stay.rating.toFixed(1)}</span>
          </span>

          {/* Host name */}
          <span className="text-sm text-gray-500">{stay.host}</span>
        </div>

        {/* Stay number of guests, bedrooms, and bathrooms */}
        <div className="flex flex-wrap gap-1 text-sm text-gray-500">
          <span>{stay.guests} guests | </span>
          <span>{stay.bedrooms} bedroom | </span>
          <span>{stay.bathrooms} bathroom</span>
        </div>

        {/* Stay Type */}
        <div className="flex items-center gap-2">
          <StayTypeIcon type={stay.type} />
          <span className="text-sm text-gray-500">{stay.type}</span>
        </div>
      </div>
    </div>
  );
}
