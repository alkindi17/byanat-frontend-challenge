import { useCallback } from "react";

import { Label, Checkbox } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";

import addStay from "@/lib/repository/stays/add-stay";
import { updateStayField } from "@/lib/state/add-stay-modal/addStayModalSlice";
import { StayFieldUpdate } from "@/lib/state/add-stay-modal/addStayModalSlice";
import { hideModal } from "@/lib/state/add-stay-modal/addStayModalSlice";
import { setDataIsUpdated } from "@/lib/state/stays/staysSlice";
import { RootState } from "@/lib/state/store";

import AdditionalDetailsFields from "./additional-details-fields";
import LocationDetailsFields from "./location-details-fields";
import StayDetailsFields from "./stay-details-fields";
import { Stay } from "../../stays/stay-card";

/**
 * Renders the Add Stay Form
 * @returns the Add Stay Form component
 */
export default function AddStayForm() {
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
        <LocationDetailsFields
          stayDetails={stayDetails}
          handleUpdateStayField={handleUpdateStayField}
        />

        <StayDetailsFields
          stayDetails={stayDetails}
          handleUpdateStayField={handleUpdateStayField}
        />

        <AdditionalDetailsFields
          stayDetails={stayDetails}
          handleUpdateStayField={handleUpdateStayField}
        />
      </div>
    </form>
  );
}
