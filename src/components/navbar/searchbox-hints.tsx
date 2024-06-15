export default function SearchBoxHints({
  loading,
  results,
  query,
}: {
  loading: boolean;
  results: { name: string; countryName: string }[];
  query: string;
}) {
  return (
    <div className="rounded-md border border-gray-300 bg-white py-4 font-semibold shadow-lg">
      {loading ? (
        <p className="px-4 py-2">Loading...</p>
      ) : results.length ? (
        <ul className="divide-y divide-gray-100">
          {results.map((result, index) => (
            <li
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              key={index}
            >
              {result.name + ", " + result.countryName}
            </li>
          ))}
        </ul>
      ) : (
        <p className="px-4 py-2">
          No results found for{" "}
          <span className="font-extrabold underline">{query}</span>.
        </p>
      )}
    </div>
  );
}
