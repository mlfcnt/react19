import React, { useState, useTransition } from "react";

// Define the type for items array
type ItemArray = string[];

function App() {
  // Sample data
  const items: ItemArray = Array.from(
    { length: 10000 },
    (_, index) => `Item ${index + 1}`
  );

  // State for the search term
  const [query, setQuery] = useState<string>("");

  // State for the filtered items
  const [filteredItems, setFilteredItems] = useState<ItemArray>(items);

  const [isPending, startTransition] = useTransition();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);

    // Update filtered items based on the query
    startTransition(() => {
      setFilteredItems(items.filter((item) => item.includes(value)));
    });
  };

  return (
    <div className="p-5">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Filter items..."
        className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      {isPending ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : null}

      <ul className="max-h-96 overflow-y-scroll mt-4">
        {filteredItems.map((item, index) => (
          <li key={index} className="py-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
