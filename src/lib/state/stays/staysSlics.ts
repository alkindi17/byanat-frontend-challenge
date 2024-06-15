import { createSlice } from "@reduxjs/toolkit";

import { StaysListType } from "@/components/main/stays/stays-list";

import staysJson from "../../../../public/data/stays.json";

// Convert the JSON data to types of list of stays.
const staysListData = staysJson as StaysListType;

/**
 * Represents the state of the "stays" slice.
 */
interface StaysState {
  allStays: StaysListType;
  filteredStays: StaysListType;
  filters: {
    freeCancellation: boolean;
    discount: boolean;
    instantBook: boolean;
  };
}

/**
 * Represents the initial state of the "stays" slice.
 */
const initialState: StaysState = {
  allStays: staysJson as StaysListType,
  filteredStays: staysJson as StaysListType, // Initially, the filtered stays are the same as the all stays.
  filters: {
    freeCancellation: false,
    discount: false,
    instantBook: false,
  },
};

/**
 * Filters the stays based on the current filters.
 * @param state - The current state.
 */
const filterStays = (state: StaysState) => {
  state.filteredStays = state.allStays.filter((stay) => {
    return (
      (state.filters.freeCancellation ? stay.freeCancellation : true) &&
      (state.filters.discount ? stay.discount : true) &&
      (state.filters.instantBook ? stay.instantBook : true)
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
      state.filters.freeCancellation = !state.filters.freeCancellation;
      filterStays(state);
    },
    toggleDiscount: (state) => {
      state.filters.discount = !state.filters.discount;
      filterStays(state);
    },
    toggleInstantBook: (state) => {
      state.filters.instantBook = !state.filters.instantBook;
      filterStays(state);
    },
  },
});

export const { toggleFreeCancellation, toggleDiscount, toggleInstantBook } =
  staysSlice.actions;

export default staysSlice.reducer;
