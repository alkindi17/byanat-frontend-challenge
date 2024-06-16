"use client";

import { useEffect, useState } from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useDebounce } from "use-debounce";

import { useGeoSearch } from "@/lib/geo-search/geo-search";

import SearchBoxHints from "./searchbox-hints";
import SearchBoxInput from "./searchbox-input";

/**
 * Renders a search box component with a dropdown select, input field, and search button.
 * @returns The rendered Searchbox component.
 */
export default function Searchbox() {
  const { loading, query, setQuery, results } = useGeoSearch();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedQuery] = useDebounce(searchQuery, 500);
  const [selectedSearchOption, setSelectedSearchOption] = useState("rent");

  // Update the query value when the debounced query changes.
  useEffect(() => {
    if (debouncedQuery) {
      setQuery(debouncedQuery);
    }
  }, [debouncedQuery, setQuery]);

  // Handle the search query change event.
  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // clear the query
  const clearQuery = () => {
    setSearchQuery("");
    setQuery("");
  };

  return (
    <div className="relative flex w-full md:max-w-[550px]">
      <select
        value={selectedSearchOption}
        onChange={(e) => setSelectedSearchOption(e.target.value)}
        className="cursor-pointer items-center rounded-s-md border-e-0 border-gray-300 px-3 text-sm text-gray-900 focus:border-e-2"
      >
        {/* The select dropdown options */}
        <option value="rent">Rent</option>
        <option value="buy">Buy</option>
      </select>

      {/* The search input field */}
      <SearchBoxInput
        query={searchQuery}
        handleQueryChange={handleQueryChange}
      />

      {/* The search button */}
      <button
        type="button"
        className="items-center rounded-e-md bg-primary-400 p-3 text-white hover:bg-primary-500"
        onClick={() => setQuery(searchQuery)}
      >
        <MagnifyingGlassIcon className="h-5 w-5" />
      </button>

      {/* The search box hints */}
      {debouncedQuery && (
        <div className="absolute mt-12 w-full">
          <SearchBoxHints
            loading={loading}
            query={debouncedQuery}
            results={results}
            clearQuery={clearQuery}
          />
        </div>
      )}
    </div>
  );
}
