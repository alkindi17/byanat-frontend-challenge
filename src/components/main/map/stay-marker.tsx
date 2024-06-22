import { Suspense } from "react";

import { Marker } from "react-map-gl";

import MapMarkerDetails from "./map-marker-details";
import MapMarkerSkeleton from "./map-marker-skeleton";
import { Stay } from "../stays/stay-card";

/**
 * StayMarker component to display the stay marker on the map
 * @param stay the stay object
 * @returns the stay marker component
 */
export default function StayMarker({ stay }: { stay: Stay }) {
  // Format the price to display in the marker, e.g. $1K, $1M, $1B
  const formatPrice = (price: number) => {
    if (price >= 1000 && price < 1000000) {
      return `$${(price / 1000).toFixed(0)}K`;
    } else if (price >= 1000000 && price < 1000000000) {
      return `$${(price / 1000000).toFixed(0)}M`;
    } else if (price >= 1000000000) {
      return `$${(price / 1000000000).toFixed(0)}B`;
    } else {
      return `$${price}`;
    }
  };

  return (
    <Marker
      latitude={stay.latitude!}
      longitude={stay.longitude!}
      anchor="bottom"
    >
      <div className="group">
        <div className="relative flex items-center justify-center rounded-md bg-white px-2 py-1 font-bold drop-shadow-lg transition-transform hover:scale-110 hover:drop-shadow-xl group-hover:bottom-3 group-hover:h-[250px] group-hover:rounded-xl group-hover:px-3 group-hover:py-3">
          <div className="hidden h-full flex-col rounded-md bg-white drop-shadow-xl group-hover:flex">
            {/* No need for a skeleton loader here, but is added to follow challenge requirements */}
            <Suspense fallback={<MapMarkerSkeleton />}>
              <MapMarkerDetails stay={stay} />
            </Suspense>
          </div>
          <span className="group-hover:hidden">{formatPrice(stay.price)}</span>
          <div className="absolute -bottom-[12px] left-1/2 z-[-1] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 transform bg-white"></div>
        </div>
      </div>
    </Marker>
  );
}
