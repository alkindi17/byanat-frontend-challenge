import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ViewState } from "react-map-gl";

/**
 * The map state
 */
interface MapState {
  viewport: ViewState;
}

/**
 * The initial map state
 */
const initialState: MapState = {
  viewport: {
    latitude: 23.578946558272524,
    longitude: 58.298974335486875,
    zoom: 11,
    bearing: 0,
    pitch: 0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  },
};

/**
 * The map slice
 */
const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setViewport(state, action: PayloadAction<ViewState>) {
      state.viewport = action.payload;
    },
    setCoordinates(
      state,
      action: PayloadAction<{ latitude: `${number}`; longitude: `${number}` }>,
    ) {
      state.viewport.latitude = Number(action.payload.latitude);
      state.viewport.longitude = Number(action.payload.longitude);
    },
  },
});

export const { setViewport, setCoordinates } = mapSlice.actions;
export default mapSlice.reducer;
