import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { StayType } from "@/components/main/stays/stay-type";
import { StaysListType } from "@/components/main/stays/stays-list";

import staysJson from "../../../../public/data/stays.json";

/**
 * Represents the state of the "stays" slice.
 */
interface StaysState {
  allStays: StaysListType;
  filteredStays: StaysListType;
  filters: {
    toggles: {
      freeCancellation: boolean;
      discount: boolean;
      instantBook: boolean;
    };
    types: {
      [key in StayType]: boolean;
    };
    minimumRating: number;
  };
}

/**
 * Represents the initial state of the "stays" slice.
 */
const initialState: StaysState = {
  allStays: staysJson as StaysListType,
  filteredStays: staysJson as StaysListType, // Initially, the filtered stays are the same as the all stays.
  filters: {
    toggles: {
      // The filter toggles.
      freeCancellation: false,
      discount: false,
      instantBook: false,
    },
    types: {
      // The filter types.
      "Entire Studio Apartment": false,
      "Entire Home": false,
      "Share With Super Host": false,
    },
    minimumRating: 0,
  },
};

/**
 * Filters the stays based on the current filters.
 * @param state - The current state.
 */
/**
 * Filters the stays based on the provided state filters.
 * @param state - The current state of stays.
 */
const filterStays = (state: StaysState) => {
  state.filteredStays = state.allStays.filter((stay) => {
    return (
      // Check if free cancellation filter is enabled and stay has free cancellation
      (state.filters.toggles.freeCancellation ? stay.freeCancellation : true) &&
      // Check if discount filter is enabled and stay has discount
      (state.filters.toggles.discount ? stay.discount : true) &&
      // Check if instant book filter is enabled and stay has instant book option
      (state.filters.toggles.instantBook ? stay.instantBook : true) &&
      // Check if entire studio apartment filter is enabled and stay is of type "Entire Studio Apartment"
      (Object.entries(state.filters.types).filter(([type, enabled]) => enabled)
        .length >= 1
        ? Object.entries(state.filters.types).some(
            ([type, enabled]) => enabled && stay.type === type,
          )
        : true) &&
      // Check if stay rating is greater than or equal to the minimum rating filter
      stay.rating >= state.filters.minimumRating
    );
  });
};

/**
 * Represents the slice configuration for the "stays" state.
 */
const staysSlice = createSlice({
  name: "stays",
  initialState,
  reducers: {
    toggleFreeCancellation: (state) => {
      state.filters.toggles.freeCancellation =
        !state.filters.toggles.freeCancellation;
      filterStays(state);
    },
    toggleDiscount: (state) => {
      state.filters.toggles.discount = !state.filters.toggles.discount;
      filterStays(state);
    },
    toggleInstantBook: (state) => {
      state.filters.toggles.instantBook = !state.filters.toggles.instantBook;
      filterStays(state);
    },
    toggleType: (state, action: PayloadAction<StayType>) => {
      state.filters.types[action.payload] =
        !state.filters.types[action.payload];
      filterStays(state);
    },
    setMinimumRating: (state, action: PayloadAction<number>) => {
      state.filters.minimumRating = action.payload;
      filterStays(state);
    },
  },
});

export const {
  toggleFreeCancellation,
  toggleDiscount,
  toggleInstantBook,
  toggleType,
  setMinimumRating,
} = staysSlice.actions;

export default staysSlice.reducer;
