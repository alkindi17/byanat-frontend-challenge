import Image from "next/image";
import { Marker } from "react-map-gl";

export default function StayMarker({
  text,
  latitude,
  longitude,
}: {
  text: string;
  latitude: number;
  longitude: number;
}) {
  return (
    <Marker latitude={latitude} longitude={longitude} anchor="bottom">
      <div className="group">
        <div className="relative flex items-center justify-center rounded-md bg-white px-2 py-1 font-bold drop-shadow-lg transition-transform hover:scale-110 hover:drop-shadow-xl group-hover:bottom-3 group-hover:h-[250px] group-hover:rounded-xl group-hover:px-3 group-hover:py-3">
          <div className="hidden h-full flex-col rounded-md bg-white drop-shadow-xl group-hover:flex">
            <div className="h-[150px] w-[150px] object-cover">
              <Image
                src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={100}
                height={100}
                alt="A stay image"
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-1">
              <span className="mx-auto text-lg font-extrabold">$155,000</span>
              <span className="mx-auto text-xs font-light">
                4 Beds | 4 Baths
              </span>
            </div>
          </div>
          <span className="group-hover:hidden">{text}</span>
          <div className="absolute -bottom-[12px] left-1/2 z-[-1] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 transform bg-white"></div>
        </div>
      </div>
    </Marker>
  );
}
