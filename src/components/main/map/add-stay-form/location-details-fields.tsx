import { useEffect } from "react";

import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Badge, Label, TextInput } from "flowbite-react";

import { Stay } from "@/components/main/stays/stay-card";
import { useGeoFindNearby } from "@/lib/geo-search/geo-find-nearby";
import { StayFieldUpdate } from "@/lib/state/add-stay-modal/addStayModalSlice";

/**
 * Renders the Location Details Form Fields
 * @param stayDetails the stay details
 * @param handleUpdateStayField the function to update the stay field in the state
 * @returns the Location Details Form component
 */
export default function LocationDetailsFields({
  stayDetails,
  handleUpdateStayField,
}: {
  stayDetails: Stay;
  handleUpdateStayField: <T extends keyof Stay>({
    field,
    value,
  }: StayFieldUpdate<T>) => void;
}) {
  const { setCoordinates, results, loading } = useGeoFindNearby();

  // set the coordinates of the use GeoFindNearby hook to allow it to fetch the city details
  useEffect(() => {
    if (stayDetails.latitude !== 0 && stayDetails.longitude !== 0) {
      setCoordinates({
        latitude: stayDetails.latitude!,
        longitude: stayDetails.longitude!,
      });
    }
  }, [setCoordinates, stayDetails.latitude, stayDetails.longitude]);

  // As soon as the results of the GeoFindNearby hook are fetched, update the city details of the stay object
  useEffect(() => {
    if (results.length !== 0) {
      const result = results[0];
      handleUpdateStayField({
        field: "city",
        value: {
          adminName1: result.adminName1,
          adminName2: result.name,
          countryName: result.countryName,
        },
      });
    } else {
      handleUpdateStayField({
        field: "city",
        value: {
          adminName1: "",
          adminName2: "",
          countryName: "",
        },
      });
    }
  }, [results, handleUpdateStayField]);

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <h4 className="text-lg font-semibold">Location Details</h4>
        <Badge color="success" className="text-sm" icon={CheckCircleIcon}>
          Auto Filled
        </Badge>
      </div>

      {/* Latitude and Longitude */}
      <div className="flex w-full gap-2">
        <div className="w-full flex-1">
          <Label htmlFor="latitue">Latitude</Label>
          <TextInput
            id="latitude"
            type="text"
            value={stayDetails.latitude!}
            className="w-full"
            disabled
            readOnly
          />
        </div>

        <div className="w-full flex-1">
          <Label htmlFor="longitude">Longitude</Label>
          <TextInput
            id="longitude"
            type="text"
            value={stayDetails.longitude!}
            className="w-full"
            disabled
            readOnly
          />
        </div>
      </div>

      {/* City */}
      <div className="w-full flex-1">
        <Label htmlFor="city">City</Label>
        <TextInput
          id="city"
          type="text"
          value={
            !loading
              ? results.length > 0
                ? stayDetails.city.adminName2 +
                  ", " +
                  stayDetails.city.adminName1 +
                  ", " +
                  stayDetails.city.countryName
                : "City not found"
              : "Loading..."
          }
          className="w-full"
          disabled
          readOnly
        />
      </div>
    </div>
  );
}
