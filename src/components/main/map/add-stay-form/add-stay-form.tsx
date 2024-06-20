import { useEffect, useCallback } from "react";

import { CheckCircleIcon } from "@heroicons/react/24/solid";
import {
  TextInput,
  Label,
  Select,
  Checkbox,
  Badge,
  FileInput,
} from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";

import { useGeoFindNearby } from "@/lib/geo-search/geo-find-nearby";
import addStay from "@/lib/repository/stays/add-stay";
import { updateStayField } from "@/lib/state/add-stay-modal/addStayModalSlice";
import { StayFieldUpdate } from "@/lib/state/add-stay-modal/addStayModalSlice";
import { hideModal } from "@/lib/state/add-stay-modal/addStayModalSlice";
import { setDataIsUpdated } from "@/lib/state/stays/staysSlice";
import { RootState } from "@/lib/state/store";

import { Stay } from "../../stays/stay-card";

/**
 * Renders the Add Stay Form
 * @returns the Add Stay Form component
 */
export default function AddStayForm() {
  const { setCoordinates, results } = useGeoFindNearby();

  // Get the stay details
  const stayDetails = useSelector(
    (state: RootState) => state.addStayModal.stayDetails,
  );

  // Get the dispatch function
  const dispatch = useDispatch();

  // handle the update of stay fields
  const handleUpdateStayField = useCallback(
    <T extends keyof Stay>({ field, value }: StayFieldUpdate<T>) => {
      dispatch(updateStayField({ field, value }));
    },
    [dispatch],
  );

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
    }
  }, [results, handleUpdateStayField]);

  // Handle the form submit
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addStay(stayDetails);
    dispatch(setDataIsUpdated());
    dispatch(hideModal());
  };

  return (
    <form id="addStayForm" onSubmit={handleFormSubmit}>
      <div className="space-y-6 divide-y-2">
        {/* Location Details */}
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
                stayDetails.city.adminName1.length !== 0
                  ? stayDetails.city.adminName2 +
                    ", " +
                    stayDetails.city.adminName1 +
                    ", " +
                    stayDetails.city.countryName
                  : "Loading..."
              }
              className="w-full"
              disabled
              readOnly
            />
          </div>
        </div>

        {/* Stay Details */}
        <div className="space-y-2 pt-4">
          <h4 className="text-lg font-semibold">Stay Details</h4>

          {/* Stay Name */}
          <div className="w-full flex-1">
            <Label htmlFor="stayName">Stay Name</Label>
            <TextInput
              id="stayName"
              type="text"
              value={stayDetails.title}
              onChange={(e) => {
                handleUpdateStayField({
                  field: "title",
                  value: e.target.value,
                });
              }}
              className="w-full"
              required
            />
          </div>

          {/* Host Name */}
          <div className="w-full flex-1">
            <Label htmlFor="hostName">Host Name</Label>
            <TextInput
              id="hostName"
              type="text"
              value={stayDetails.host}
              onChange={(e) => {
                handleUpdateStayField({
                  field: "host",
                  value: e.target.value,
                });
              }}
              className="w-full"
              required
            />
          </div>

          {/* Price and Rating */}
          <div className="flex gap-2">
            <div className="w-full flex-1">
              <Label htmlFor="price">Price</Label>
              <TextInput
                id="price"
                type="number"
                step={0.01}
                addon="$"
                min={0}
                className="w-full"
                value={stayDetails.price}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  const roundedValue = Math.round(value * 100) / 100; // Round to 2 decimal places
                  handleUpdateStayField({
                    field: "price",
                    value: roundedValue,
                  });
                }}
                required
              />
            </div>

            <div className="w-full flex-1">
              <Label htmlFor="rating">Rating</Label>
              <TextInput
                id="rating"
                type="number"
                step={0.1}
                max={5}
                min={0}
                value={stayDetails.rating}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  const roundedValue = Math.round(value * 10) / 10; // Round to 1 decimal places
                  handleUpdateStayField({
                    field: "rating",
                    value: roundedValue,
                  });
                }}
                className="w-full"
                required
              />
            </div>
          </div>

          {/* Number of Guests, Bedrooms, and Bathrooms */}
          <div className="flex gap-2">
            <div className="w-full flex-1">
              <Label htmlFor="guests">Guests</Label>
              <TextInput
                id="guests"
                type="number"
                max={100}
                min={1}
                value={stayDetails.guests}
                onChange={(e) => {
                  handleUpdateStayField({
                    field: "guests",
                    value: parseInt(e.target.value),
                  });
                }}
                className="w-full"
                required
              />
            </div>

            <div className="w-full flex-1">
              <Label htmlFor="bedrooms">Bedrooms</Label>
              <TextInput
                id="bedrooms"
                type="number"
                max={100}
                min={1}
                value={stayDetails.bedrooms}
                onChange={(e) => {
                  handleUpdateStayField({
                    field: "bedrooms",
                    value: parseInt(e.target.value),
                  });
                }}
                className="w-full"
                required
              />
            </div>

            <div className="w-full flex-1">
              <Label htmlFor="bathrooms">Bathrooms</Label>
              <TextInput
                id="bathrooms"
                type="number"
                max={100}
                min={1}
                value={stayDetails.bathrooms}
                onChange={(e) => {
                  handleUpdateStayField({
                    field: "bathrooms",
                    value: parseInt(e.target.value),
                  });
                }}
                className="w-full"
                required
              />
            </div>
          </div>

          {/* Stay Type */}
          <div className="w-full flex-1">
            <Label htmlFor="stayType">Stay Type</Label>
            <Select
              id="stayType"
              required
              value={stayDetails.type}
              onChange={(e) => {
                handleUpdateStayField({
                  field: "type",
                  value: e.target.value as Stay["type"],
                });
              }}
            >
              <option value="Entire Studio Apartment">
                Entire Studio Apartment
              </option>
              <option value="Entire Home">Entire Home</option>
              <option value="Share With Super Host">
                Share With Super Host
              </option>
            </Select>
          </div>

          {/* Image */}
          <div className="w-full flex-1">
            <Label htmlFor="image">Image</Label>
            <FileInput
              id="image"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files![0];
                const reader = new FileReader();
                // Check if the image size is less than 10MB
                if (file.size > 1024 * 1024 * 10) {
                  alert("Image size must be less than 10MB");
                  e.target.value = "";
                  return;
                }
                reader.onload = () => {
                  handleUpdateStayField({
                    field: "image",
                    value: reader.result as string,
                  });
                };
                reader.readAsDataURL(file);
              }}
              required
            />
          </div>
        </div>

        {/* Additional */}
        <div className="space-y-2 pt-4">
          <h4 className="text-lg font-semibold">Additional</h4>

          <div className="flex gap-6">
            {/* Free Cancellation */}
            <div className="flex items-center gap-2">
              <Checkbox
                id="freeCancellation"
                checked={stayDetails.freeCancellation}
                onChange={(e) => {
                  handleUpdateStayField({
                    field: "freeCancellation",
                    value: e.target.checked,
                  });
                }}
              />
              <Label htmlFor="freeCancellation" className="flex">
                Free Cancellation
              </Label>
            </div>

            {/* Discount */}
            <div className="flex items-center gap-2">
              <Checkbox
                id="discount"
                checked={stayDetails.discount}
                onChange={(e) => {
                  handleUpdateStayField({
                    field: "discount",
                    value: e.target.checked,
                  });
                }}
              />
              <Label htmlFor="discount" className="flex">
                Discount
              </Label>
            </div>

            {/* Instant Book */}
            <div className="flex items-center gap-2">
              <Checkbox
                id="instantBook"
                checked={stayDetails.instantBook}
                onChange={(e) => {
                  handleUpdateStayField({
                    field: "instantBook",
                    value: e.target.checked,
                  });
                }}
              />
              <Label htmlFor="instantBook" className="flex">
                Instant Book
              </Label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
