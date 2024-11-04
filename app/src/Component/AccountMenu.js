import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AccountMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on component mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div
      className="relative"
      onMouseEnter={!isMobile ? () => setIsOpen(true) : null}
      onMouseLeave={!isMobile ? () => setIsOpen(false) : null}
    >
      <Link to="/Helloguest" onClick={isMobile ? toggleMenu : null}>
        <span className="text-white cursor-pointer">Hello Guest</span>
      </Link>
      <p
        className="text-white cursor-pointer"
        onClick={isMobile ? toggleMenu : null}
      >
        Sign In
      </p>

      {isOpen && (
        <div className="absolute top-full right-0 bg-slate-800 text-white p-5 shadow-lg w-80 z-20 md:h-96 mt-4">
          <ul>
            <li className="hover:bg-gray-700 p-2 cursor-pointer text-xl">
              Your Account
            </li>
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
