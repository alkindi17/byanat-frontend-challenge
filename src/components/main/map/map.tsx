"use client";

import { useState } from "react";

import { MapIcon } from "@heroicons/react/24/outline";
import ReactMapGL, { NavigationControl } from "react-map-gl";
import { useSelector, useDispatch } from "react-redux";

import { showModal } from "@/lib/state/add-stay-modal/addStayModalSlice";
import { setViewport } from "@/lib/state/map/mapSlice";
import { RootState } from "@/lib/state/store";

import AddStayModal from "./add-stay-form/add-stay-modal";
import "mapbox-gl/dist/mapbox-gl.css";
import StaysMarkersList from "./stays-markers-list";

const MAPBOX_API_PUBLIC_TOKEN =
  "pk.eyJ1Ijoia2luZGkxNzAzIiwiYSI6ImNseGhhY29neDE1cjEybnIybDF6dTZ2M2EifQ.dnHHVmi-Hx_0tYqGx1Lofw";

/**
 * Renders a map
 * @returns a map component
 */
export default function Map() {
  // Get the viewport state
  const viewport = useSelector((state: RootState) => state.map.viewport);

  // State to check if the map is loaded
  const [mapLoaded, setMapLoaded] = useState(false);

  // Get the dispatch function
  const dispatch = useDispatch();

  return (
    <div className="h-full px-2 pb-7 pt-9" data-testid="map-component">
      {!mapLoaded && (
        <div className="flex h-full w-full animate-pulse items-center justify-center rounded-2xl bg-gray-200">
          <MapIcon className="h-12 w-12 text-gray-400" />
        </div>
      )}
      <ReactMapGL
        {...viewport}
        onLoad={() => {
          setMapLoaded(true); // Set the map as loaded
        }}
        reuseMaps
        style={{
          width: "100%",
          height: "100%",
          opacity: mapLoaded ? 1 : 0, // Hide the map until it is loaded
          borderRadius: "1rem",
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={MAPBOX_API_PUBLIC_TOKEN}
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
