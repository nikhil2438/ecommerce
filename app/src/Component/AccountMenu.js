import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AccountMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleSignOut = () => {
    localStorage.clear();

    navigate("/");
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to="/Helloguest">
        <span className="text-white cursor-pointer">Hello Guest Sign In</span>
      </Link>

      {isOpen && (
        <div className="absolute top-full right-0 bg-slate-800 text-white p-5 shadow-lg w-80 z-20 md:h-96 mt-4">
          <ul>
            <li className="hover:bg-gray-700 p-2 cursor-pointer text-xl">
              Your Account
            </li>
            <li className="hover:bg-gray-700 p-2 cursor-pointer">
              <Link to="/profile">
                <div>Profile</div>
              </Link>
            </li>
            <li className="hover:bg-gray-700 p-2 cursor-pointer">
              <Link to="/wishlist">
                <div>Wishlist</div>
              </Link>
            </li>
            <li className="hover:bg-gray-700 p-2 cursor-pointer">
              <Link to="/orders">
                <div>Your Product </div>
              </Link>
            </li>
            <li className="hover:bg-gray-700 p-2 cursor-pointer">
              <Link to="/changepassword">
                <div>Change Password </div>
              </Link>
            </li>
            <li className="hover:bg-gray-700 p-2 cursor-pointer">
              <Link to="/deleteaccount">
                <div>Delete Your Account</div>
              </Link>
            </li>

            <li
              className="hover:bg-gray-700 p-2 cursor-pointer"
              onClick={handleSignOut}
            >
              Sign Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountMenu;

// import React,{ useState } from 'react'
// import {link, useNavigate} from 'react-router-dom'

// const AccountMenu = () => {
//   return (
//     const [isOpen, setIsOpen]=useState(false);
//     const navigate =useNavigate
//     <div>
//       <link to="/Helloguest">
//       <span className="text-white cursor-pointer">Hello Guest Sign In</span>
//       </link>
//       {isOpen && (
//         <div className="absolute top-full right-0 bg-slate-800 text-white p-5 shadow-lg w-80 z-20 md:h-96 mt-4">
//                    <ul>
//             <li
//               className="hover:bg-gray-700 p-2 cursor-pointer text-xl"
//               onClick={() => handleNavigation("/profile")}
//             >
//               Your Account
//             </li>
//             <li
//               className="hover:bg-gray-700 p-2 cursor-pointer"
//               onClick={() => handleNavigation("/profile")}
//             >
//               Profile
//             </li>
//             <li
//               className="hover:bg-gray-700 p-2 cursor-pointer"
//               onClick={() => handleNavigation("/wishlist")}
//             >
//               Wishlist
//             </li>
//             <li
//               className="hover:bg-gray-700 p-2 cursor-pointer"
//               onClick={() => handleNavigation("/orders")}
//             >
//               Your Product
//             </li>
//             <li
//               className="hover:bg-gray-700 p-2 cursor-pointer"
//               onClick={() => handleNavigation("/changepassword")}
//             >
//               Change Password
//             </li>
//             <li
//               className="hover:bg-gray-700 p-2 cursor-pointer"
//               onClick={() => handleNavigation("/deleteaccount")}
//             >
//               Delete Your Account
//             </li>
//             <li
//               className="hover:bg-gray-700 p-2 cursor-pointer"
//               onClick={handleSignOut}
//             >
//               Sign Out
//             </li>
//           </ul>
//           </div>
//       )}

//     </div>
//   )
// }

// export default AccountMenu
