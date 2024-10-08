
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
    // Perform sign-out logic here (e.g., clear tokens or session)
    localStorage.clear(); // Example: Clearing local storage or tokens

    // Redirect to homepage after sign-out
    navigate('/');
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link to="/Helloguest">
        <span className="text-white cursor-pointer">Hello Guest</span>
      </Link>
      <p>Sign In</p>

      {isOpen && (
        <div className="absolute top-full right-0 bg-slate-800 text-white p-5 shadow-lg w-80 z-20 md:h-96 mt-4">
          <ul>
            <li className="hover:bg-gray-700 p-2 cursor-pointer text-xl">Your Account</li>
            <li className="hover:bg-gray-700 p-2 cursor-pointer">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="hover:bg-gray-700 p-2 cursor-pointer">
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li className="hover:bg-gray-700 p-2 cursor-pointer">
              <Link to="/orders">Your Product</Link>
            </li>
            <li className="hover:bg-gray-700 p-2 cursor-pointer">
              <Link to="/changepassword">Change Password</Link>
            </li>
            <li className="hover:bg-gray-700 p-2 cursor-pointer">
              <Link to="/deleteaccount">Delete Your Account</Link>
            </li>
            {/* Sign Out button */}
            <li className="hover:bg-gray-700 p-2 cursor-pointer" onClick={handleSignOut}>
              Sign Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountMenu;
