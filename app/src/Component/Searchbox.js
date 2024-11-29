import React, { useState } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    console.log("Searching for:", query);
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="relative w-25 sm:40 mt-2 pl-1"
    >
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search..."
        className="w-full p-1 pl-5  sm:pl-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14zM16 16l5 5"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchBox;
