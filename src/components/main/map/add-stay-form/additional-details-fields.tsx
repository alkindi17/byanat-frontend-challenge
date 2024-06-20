import { Checkbox, Label } from "flowbite-react";

import { Stay } from "@/components/main/stays/stay-card";
import { StayFieldUpdate } from "@/lib/state/add-stay-modal/addStayModalSlice";

/**
 * Renders the Additional Details Form Fields
 * @param stayDetails the stay details
 * @param handleUpdateStayField the function to update the stay field in the state
 * @returns the Additional Details Form component
 */
export default function AdditionalDetailsFields({
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
  );
}
