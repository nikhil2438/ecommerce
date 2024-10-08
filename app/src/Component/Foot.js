import React from "react";
import Slider from "./Slider";
import Hero from "./Hero";
import logo from "../image/logo.png";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  const handleLanguageChange = (language) => {
    console.log(`Language selected: ${language}`);
  };
  const scrollTOTOP = () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className=" grid md:grid md:grid-cols-4 md:justify-start justify-center  bg-slate-800 p-8 text-white cursor-pointer hover:underline">
        <div>
          <h1 className="text-xl font-bold mb-4">Get to Know Us</h1>

          <p>About us</p>
          <p>Carrers</p>
          <p>Press Relases</p>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4">Connect with Us</h1>
          <p>Facbook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4">Make Money with Us</h1>
          <p>Sell on SN Market</p>
          <p>Sell under SN Market Accelerator </p>
          <p>Protect and Build Your Brand</p>
          <p>SN Market Global Selling</p>
          <p>Become an Affiliate</p>
          <p>Fulfillment by SN Market</p>
          <p>Advrtise yourProduct </p>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4">Let Us Help You</h1>
          <p>COVID-19 and SN Market </p>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>Recalls and Product Safety Alerts</p>
          <p>100% Purchase Protection</p>
          <p>SN Market App Download</p>
          <p></p>
        </div>
      </div>
      <div class=" bg-slate-800 p-2 text-center border-t border-slate-100 text-white">
        <footer className="bg-gray-800 text-white p-3"></footer>
        <div className="flex items-center justify-center mt-1">
          <img src={logo} alt="logo" className="mb-4 w-24 m  mr-6" />

          <div className="language-buttons">
            <button
              onClick={() => handleLanguageChange("en")}
              className="bg-white text-black py-1 px-4 rounded hover:bg-white mr-3"
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange("In ")}
              className="bg-white text-black py-1 px-4 rounded hover:bg-white mr-3"
            >
              india
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
