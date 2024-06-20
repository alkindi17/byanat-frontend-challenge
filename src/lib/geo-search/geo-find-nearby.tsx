"use client";

import { useState, useEffect } from "react";

import { fetchGeoNameFromCoordinates } from "./geo-search-api";

/**
 * Represents a GeoName object.
 */
export interface GeoNearbyName {
  name: string;
  adminName1: string;
  countryName: string;
  countryCode: string;
  lat: `${number}`;
  lng: `${number}`;
}

/**
 * Represents a list of GeoNames.
 */
export type GeoNearbyNames = GeoNearbyName[];

/**
 * Represents a GeoNames response.
 */
export interface GeoNearbyNamesResponse {
  geonames: GeoNearbyNames;
}

/**
 * Custom hook for performing a geo search using coordinates.
 * @returns An object containing the loading state, coordinates value, coordinates setter, and search results.
 */
export const useGeoFindNearby = () => {
  const [coordinates, setCoordinates] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [results, setResults] = useState<GeoNearbyNames>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Perform a search using the GeoNames API.
  const search = async (lat: number, lng: number) => {
    const res = (await fetchGeoNameFromCoordinates(
      lat,
      lng,
    )) as GeoNearbyNamesResponse;

    // Map the response data to a more concise format.
    setResults(
      res.geonames.map((result) => ({
        name: result.name,
        adminName1: result.adminName1,
        countryName: result.countryName,
        countryCode: result.countryCode,
        lat: result.lat,
        lng: result.lng,
      })),
    );

    // Set loading to false once the search is complete.
    setLoading(false);
  };

  // Perform a search when the query value changes.
  useEffect(() => {
    if (coordinates) {
      setLoading(true);
      setResults([]);
      search(coordinates.latitude, coordinates.longitude);
    } else {
      setResults([]);
    }
  }, [coordinates]);

  return {
    loading,
    coordinates,
    setCoordinates,
    results,
  };
};
