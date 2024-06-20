"use client";

import ReactMapGL, { NavigationControl } from "react-map-gl";
import { useSelector, useDispatch } from "react-redux";

import { showModal } from "@/lib/state/add-stay-modal/addStayModalSlice";
import { setViewport } from "@/lib/state/map/mapSlice";
import { RootState } from "@/lib/state/store";

import AddStayModal from "./add-stay-form/add-stay-modal";
import "mapbox-gl/dist/mapbox-gl.css";
import StaysMarkersList from "./stays-markers-list";

/**
 * Renders a map
 * @returns a map component
 */
export default function Map() {
  // Get the viewport state
  const viewport = useSelector((state: RootState) => state.map.viewport);

  // Get the dispatch function
  const dispatch = useDispatch();

  return (
    <div className="h-full px-2 pb-7 pt-9">
      <ReactMapGL
        {...viewport}
        style={{ width: "100%", height: "100%", borderRadius: "1rem" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        onMove={(evt) => {
          dispatch(setViewport(evt.viewState));
        }}
        minZoom={2}
        maxZoom={15}
        onClick={(e) => {
          // Show the Add Stay Modal when the map is clicked
          dispatch(
            showModal({ latitude: e.lngLat.lat, longitude: e.lngLat.lng }),
          );
        }}
      >
        <NavigationControl showCompass={false} />

        {/* Render the stays markers if zoom is 5 or more */}
        {viewport.zoom >= 5 && <StaysMarkersList />}
      </ReactMapGL>

      {/* Show the Add Stay Modal if the modal is open */}
      <AddStayModal />
    </div>
  );
}
