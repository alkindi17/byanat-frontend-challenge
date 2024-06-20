"use server";

/**
 * Fetches geolocation search results from the GeoNames API.
 * @param query - The search query string.
 * @returns A Promise that resolves to the fetched data.
 */
export default async function fetchGeoSearch(query: string) {
  const url = new URL("http://api.geonames.org/searchJSON");
  url.searchParams.append("q", query);
  url.searchParams.append("maxRows", "10");
  url.searchParams.append("username", "kindi1703");
  url.searchParams.append("featureClass", "A");
  url.searchParams.append("featureCode", "ADM1");
  url.searchParams.append("featureCode", "ADM2");
  url.searchParams.append("style", "full");

  const res = await fetch(url.toString());
  const data = await res.json();

  return data;
}

/**
 * Fetches the geolocation name from the coordinates.
 * @param lat The latitude.
 * @param lng The longitude.
 * @returns A Promise that resolves to the fetched data.
 */
export async function fetchGeoNameFromCoordinates(lat: Number, lng: Number) {
  const url = new URL("http://api.geonames.org/findNearbyPlaceNameJSON");
  url.searchParams.append("lat", lat.toString());
  url.searchParams.append("lng", lng.toString());
  url.searchParams.append("username", "kindi1703");
  url.searchParams.append("style", "full");
  url.searchParams.append("featureClass", "A");
  url.searchParams.append("featureCode", "ADM2");

  const res = await fetch(url.toString());
  const data = res.json();

  return data;
}
