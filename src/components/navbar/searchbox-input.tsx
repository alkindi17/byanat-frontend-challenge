export default function SearchBoxInput({
  query,
  handleQueryChange,
}: {
  query: string;
  handleQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type="text"
      id="search-box"
      value={query}
      onChange={(e) => handleQueryChange(e)}
      className="block w-full min-w-0 flex-1 border border-gray-300 p-2.5 text-sm text-gray-900"
      placeholder="Search for a city"
    />
  );
}
