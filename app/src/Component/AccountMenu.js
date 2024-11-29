import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AccountMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/");
    closeMenu();
  };

  const handleSignIn = () => {
    navigate("/signin");
    closeMenu();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <span
        ref={buttonRef}
        className="text-white cursor-pointer"
        onClick={toggleMenu}
      >
        Hello Guest
      </span>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-full right-0 bg-slate-800 text-white p-5 shadow-lg w-80 z-20 md:h-96 mt-4 left-1/2 -translate-x-1/2"
        >
          <ul>
            <li className="hover:bg-gray-700 p-2 cursor-pointer text-xl">
              Your Account
            </li>
            <li className="hover:bg-gray-700 p-2 cursor-pointer">
              <Link to="/profile" onclick={closeMenu} reloadDocument>
                <div>Profile</div>
              </Link>
            </li>
            <li className="hover:bg-gray-700 p-2 cursor-pointer">
              <Link to="/wishlist" onClick={closeMenu}>
                <div>Wishlist</div>
              </Link>
            </li>
            <li className="hover:bg-gray-700 p-2 cursor-pointer">
              <Link to="/orders" onClick={closeMenu}>
                <div>Order Details</div>
              </Link>
            </li>
            <li className="hover:bg-gray-700 p-2 cursor-pointer">
              <Link to="/changepassword" onClick={closeMenu}>
                <div>Change Password</div>
              </Link>
            </li>
            <li className="hover:bg-gray-700 p-2 cursor-pointer">
              <Link to="/deleteaccount" onClick={closeMenu}>
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
