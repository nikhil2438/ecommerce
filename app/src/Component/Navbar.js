import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import React, { useState, useEffect, useRef } from "react";
import AccountMenu from "./AccountMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-20 flex justify-between bg-gray-900 items-center py-3 px-4 sm:px-6">
      <div className="logo cursor-pointer">
        <img className="h-10" src={logo} alt="logo" />
      </div>

      <div className="hidden md:flex w-1/4 h-12 bg-white items-center rounded border border-gray-300 focus:outline-none">
        <input
          type="text"
          className="flex-grow px-4 py-2 rounded-l-md text-gray-700 focus:outline-none"
          placeholder="Search..."
        />
        <div className="h-full p-2 bg-yellow-500 rounded-r-md text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>

      {/* Hamburger Button (for mobile) */}
      <div className="md:hidden">
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4 items-center">
        <ul className="flex gap-7 text-white items-center">
          <li className="hover:text-yellow-600 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-yellow-600 cursor-pointer">
            <Link to="/About">About Us</Link>
          </li>
          <li className="hover:text-yellow-600 cursor-pointer">
            <AccountMenu />
          </li>
          <li className="hover:text-yellow-600 cursor-pointer">
            <Link to="/Corporate">Corporate Gifting</Link>
          </li>
          <li className="hover:text-yellow-600 cursor-pointer">
            <Link to="/ReturnsOrders">Return & Order</Link>
          </li>
          <li className="hover:text-yellow-600 cursor-pointer">
            <Link to="/YourProduct">Your Product</Link>
          </li>
          <li className="hover:text-yellow-600 cursor-pointer">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="hover:text-yellow-600 cursor-pointer">
            <Link to="/Cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 right-0 bg-gray-900 text-white w-full p-4 md:hidden z-10"
        >
          <ul className="flex flex-col items-center gap-4">
            <li className="hover:text-yellow-600 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-yellow-600 cursor-pointer">
              <Link to="/About">About</Link>
            </li>
            <li className="hover:text-yellow-600 cursor-pointer">
              <AccountMenu />
            </li>
            <li className="hover:text-yellow-600 cursor-pointer">
              <Link to="/Corporate">Corporate Gifting</Link>
            </li>
            <li className="hover:text-yellow-600 cursor-pointer">
              <Link to="/ReturnsOrders">Return & Order</Link>
            </li>
            <li className="hover:text-yellow-600 cursor-pointer">
              <Link to="/Contact">Contact Us</Link>
            </li>
            <li className="hover:text-yellow-600 cursor-pointer">
              <Link to="/Cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
