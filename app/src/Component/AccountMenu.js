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

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <div
      className="relative "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="text-white cursor-pointer">Hello Guest </span>

      {isOpen && (
        <div className="absolute top-full right-0 bg-slate-800 text-white p-5 shadow-lg w-80 z-20 md:h-96 mt-4 left-1/2 -translate-x-1/2">
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
                <div>Your Product</div>
              </Link>
            </li>
            <li className="hover:bg-gray-700 p-2 cursor-pointer">
              <Link to="/changepassword">
                <div>Change Password</div>
              </Link>
            </li>
            <li className="hover:bg-gray-700 p-2 cursor-pointer">
              <Link to="/deleteaccount">
                <div>Delete Your Account</div>
              </Link>
            </li>
            <li
              className="hover:bg-gray-700 p-2 cursor-pointer"
              onClick={handleSignIn}
            >
              Sign In
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
