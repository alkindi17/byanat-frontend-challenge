import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Stay } from "@/components/main/stays/stay-card";

/**
 * The map state
 */
interface addStayModalState {
  showModal: boolean;
  stayDetails: Stay;
}

/**
 * The initial map state
 */
const initialState: addStayModalState = {
  showModal: false,
  stayDetails: {
    id: 0,
    title: "",
    city: {
      adminName1: "",
      adminName2: "",
      countryName: "",
    },
    latitude: null,
    longitude: null,
    rating: 0,
    host: "",
    guests: 1,
    bedrooms: 1,
    bathrooms: 1,
    type: "Entire Studio Apartment",
    image: "",
    freeCancellation: false,
    discount: false,
    instantBook: false,
    price: 0,
  },
};

/**
 * The field update type
 */
export type StayFieldUpdate<T extends keyof Stay> = {
  field: T;
  value: Stay[T];
};

/**
 * The map slice
 */
const addStayModalSlice = createSlice({
  name: "addStayModal",
  initialState,
  reducers: {
    /**
     * Show the modal with the coordinates of the clicked location
     * @param state the current state.
     * @param action the longitude and latitude of the location.
     */
    showModal(
      state,
      action: PayloadAction<{
        latitude: number;
        longitude: number;
      }>,
    ) {
      state.showModal = true;
      state.stayDetails.latitude = action.payload.latitude;
      state.stayDetails.longitude = action.payload.longitude;
    },

    /**
     * Hide the modal and reset the state
     * @param state the current state.
     */
    hideModal(state) {
      state.showModal = false;
      state.stayDetails = initialState.stayDetails;
    },

    /**
     * Update a specific field in the stay details
     * @param state the current state.
     * @param action the field to update and its new value.
     */
    updateStayField<T extends keyof Stay>(
      state: addStayModalState,
      action: PayloadAction<StayFieldUpdate<T>>,
    ) {
      const { field, value } = action.payload;

      state.stayDetails = {
        ...state.stayDetails,
        [field]: value,
      };
    },
  },
});

export const { showModal, hideModal, updateStayField } =
  addStayModalSlice.actions;
export default addStayModalSlice.reducer;
