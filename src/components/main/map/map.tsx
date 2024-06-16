"use client";

import { useRef } from "react";

import ReactMapGL, { NavigationControl } from "react-map-gl";
import type { MapRef } from "react-map-gl";
import { useSelector, useDispatch } from "react-redux";

import { setViewport } from "@/lib/state/map/mapSlice";
import { RootState } from "@/lib/state/store";

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

  const mapRef = useRef<MapRef>(null);

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
        minZoom={5}
        maxZoom={15}
      >
        <NavigationControl showCompass={false} />
        <StaysMarkersList />
      </ReactMapGL>
    </div>
  );
}
