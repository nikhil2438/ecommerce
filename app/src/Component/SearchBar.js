import React, { useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query) {
            alert(`Searching for: ${query}`);
           
        }
    };

    return (
        <div className="flex justify-center">
            <input
                type="text"
                className="border border-white rounded-l-sm p-[4px] px-3 w-[400px] focus:outline-none focus:ring-2 focus:ring-yellow-700"
                placeholder="search for anything "
                
                
                value={query}
                onFocus={handleSearch}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                className="bg-yellow-500 text-white rounded-r-md py-1  px-3 hover:bg-yellow-600 "
                onClick={handleSearch}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-2.107 5.42l3.08 3.08"/></svg>
            </button>
        </div>
    );
};

export default SearchBar;
