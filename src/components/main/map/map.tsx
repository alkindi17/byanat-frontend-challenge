"use client";

import { useRef, useState } from "react";

import ReactMapGL, { ViewState, NavigationControl } from "react-map-gl";
import type { MapRef } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

/**
 * Renders a map
 * @returns a map component
 */
export default function Map() {
  const mapRef = useRef<MapRef>(null);
  const [viewport, setViewport] = useState<ViewState>({
    latitude: 23.5992,
    longitude: 58.22736,
    zoom: 11,
    bearing: 0,
    pitch: 0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  return (
    <div className="h-full px-2 pb-7">
      <ReactMapGL
        {...viewport}
        style={{ width: "100%", height: "100%", borderRadius: "1rem" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        onMove={(evt) => setViewport(evt.viewState)}
        ref={mapRef}
        minZoom={5}
        maxZoom={15}
      >
        <NavigationControl showCompass={false} />
      </ReactMapGL>
    </div>
  );
}
