"use client";

import { useState, useEffect } from "react";

import fetchGeoSearch from "./geo-search-api";

/**
 * Represents a GeoName object.
 */
export interface GeoName {
  name: string;
  countryName: string;
  countryCode: string;
  lat: `${number}`;
  lng: `${number}`;
}

/**
 * Represents a list of GeoNames.
 */
export type GeoNames = GeoName[];

/**
 * Represents a GeoNames response.
 */
export interface GeoNamesResponse {
  geonames: GeoNames;
}

/**
 * Custom hook for performing a geo search.
 * @returns An object containing the loading state, query value, query setter, and search results.
 */
export const useGeoSearch = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<GeoNames>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Perform a search using the GeoNames API.
  const search = async (query: string) => {
    const res = (await fetchGeoSearch(query)) as GeoNamesResponse;

    // Map the response data to a more concise format.
    setResults(
      res.geonames.map((result) => ({
        name: result.name,
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
    if (query.length > 0) {
      setLoading(true);
      search(query);
    } else {
      setResults([]);
    }
  }, [query]);

  return {
    loading,
    query,
    setQuery,
    results,
  };
};
