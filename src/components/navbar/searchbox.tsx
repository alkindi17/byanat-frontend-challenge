import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

/**
 * Renders a search box component with a dropdown select, input field, and search button.
 */
export default function Searchbox() {
  return (
    <div className="flex w-full md:max-w-[550px]">
      <select className="cursor-pointer items-center rounded-s-md border-e-0 border-gray-300 px-3 text-sm text-gray-900 focus:border-e-2">
        <option selected value="rent">
          Rent
        </option>
        <option value="buy">Buy</option>
      </select>

      <input
        type="text"
        id="search-box"
        className="block w-full min-w-0 flex-1 border border-gray-300 p-2.5 text-sm text-gray-900"
        placeholder="Search"
      />

      <button
        type="button"
        className="bg-primary-400 hover:bg-primary-500 items-center rounded-e-md p-3 text-white"
      >
        <MagnifyingGlassIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
