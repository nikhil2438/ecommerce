// import React, { useState } from "react";

// const SearchBar = () => {
//   const [query, setQuery] = useState("");

//   const handleSearch = () => {
//     if (query) {
//       alert(`Searching for: ${query}`);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center">
//       <div className="relative w-[350px]">
//         <input
//           type="text"
//           className="border border-white rounded p-3 pl-3 pr-10 w-full h-12 focus:outline-none focus:ring-2 focus:ring-yellow-700"
//           placeholder="Search for anything"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button
//           className="absolute right-0 top-0 h-full w-12 rounded-r bg-yellow-500 text-black hover:bg-yellow-600 flex items-center justify-center"
//           onClick={handleSearch}
//           aria-label="Search"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="1.5em"
//             height="1.5em"
//             viewBox="0 0 24 24"
//           >
//             <path
//               fill="none"
//               stroke="white"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="1.5"
//               d="M19 11.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-2.107 5.42l3.08 3.08"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;
