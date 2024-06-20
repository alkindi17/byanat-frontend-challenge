import { FileInput, Label, Select, TextInput } from "flowbite-react";

import { Stay } from "@/components/main/stays/stay-card";
import { StayFieldUpdate } from "@/lib/state/add-stay-modal/addStayModalSlice";

/**
 * Renders the Stay Details Form Fields
 * @param stayDetails the stay details
 * @param handleUpdateStayField the function to update the stay field in the state
 * @returns the Stay Details Form component
 */
export default function StayDetailsFields({
  stayDetails,
  handleUpdateStayField,
}: {
  stayDetails: Stay;
  handleUpdateStayField: <T extends keyof Stay>({
    field,
    value,
  }: StayFieldUpdate<T>) => void;
}) {
  return (
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
          <option value="Share With Super Host">Share With Super Host</option>
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
  );
}
