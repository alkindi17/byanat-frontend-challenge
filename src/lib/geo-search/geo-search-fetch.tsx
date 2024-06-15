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
  url.searchParams.append("featureClass", "P");

  const res = await fetch(url.toString());
  const data = await res.json();

  return data;
}
