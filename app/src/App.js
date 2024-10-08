import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import logo from "./image/logo.png";
import CorporateGifting from "./Component/CorporateGift";
import About from "./Component/About";
import YourProduct from "./Component/YourProduct";
import Helloguest from "./Component/Helloguest";

import SearchBar from "./Component/SearchBar";
import Returnorder from "./Component/Returnorder";
import HoverMenu from './Component/HoverMenu';
import Cart from "./Component/Cart";
import AccountMenu from "./Component/AccountMenu";
import Profile from "./Component/Profile";
import SignInPage from "./Component/Sign";
import EditProfile from "./Component/EditProfile";
import Wishlist from "./Component/Wishlist";
import Orders from './Component/Order';
import ChangePassword from './Component/ChangePassword';
import Deleteaccount from "./Component/Deleteaccount";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

  
  

    
    <Router>
      
      <nav>
        <ul>
          <div className="flex items-center justify-between pr-6 sm:justify-normal sm:pr-0 align-middle bg-slate-800 text-white  px-3 py-6  ">
            {/* Logo */}
            <div className="flex items-center   "> 
              <img
                src={logo}
                alt="Logo"
                className="h-[40px] mr-10  my-auto object-contain"
              />
            </div>

            <div className="block lg:hidden">
              <button
                id="menu-button"
                className="text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
              
            </div>
            <div className="hidden lg:flex  items-center">
              <div className="flex flex-col items-center pr-2 ">
                <h1 className=" text-2xl font-bold "></h1>
                <div className="flex items-center flex-1 ">
                  <SearchBar />
                </div>
              </div>

              <ul className="flex  items-center gap-8 space-x-8 ml-6 text-white font-semibold  gap-y-4 ">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                
                <li>
                  {/* { <Link to="/Helloguest">Hello guest</Link> } */}
               <AccountMenu/>
              </li>

                  
                <li>
                  <Link to="/CorporateGifting">Corporate </Link>
                  <h4>Gifting</h4>
                </li>
                
                <li>
  <Link to="/Returnorder">Return&</Link>
  <h4>Orders</h4>
</li>
                
                  <li>
                    {/* <Link to="/YourProduct">Your Product</Link> */}
                    <HoverMenu/>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/Cart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"
                        />
                      </svg>
                    </Link>
                  </li>
              </ul>
            </div>

            {/* Navbar Links (Mobile) */}
            <div
              id="mobile-menu"
              className={`${isMenuOpen ? "block" : "hidden"
                } lg:hidden absolute top-16 left-0 w-full bg-black text-white p-5 z-30 `}
            >
              <ul className="flex flex-col  items-center space-y-4">
                <h1 className="text-white text-2xl"></h1>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/Helloguest">Hello guest</Link>
                  <h5>Sign</h5>
                </li>
                <li>
                  <Link to="/CorporateGifting">Corporate Gifting</Link>
                </li>
                <li>
                  <Link to="/Returnorder">ReturnOrder</Link>
                </li>
                <li>
                  <Link to="/YourProduct">Your Product</Link>
                  
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/Cart">Cart</Link>
                </li>
              </ul>
              
            </div>
            
          </div>
        </ul>
      </nav>
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Helloguest" element={<Helloguest />} />
        <Route path="/CorporateGifting" element={<CorporateGifting />} />
        <Route path="/YourProduct" element={<YourProduct />} />
        <Route path="/Returnorder" element={<Returnorder/>}/>
        <Route path="/Cart" element={<Cart />} />
        
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/accountmenu" element={<AccountMenu />} />
       <Route path="/changepassword" element={<ChangePassword/>}/>
       <Route path="/deleteaccount" element={<Deleteaccount/>}/>
      </Routes>
    </Router>
    
  );
};

export default App;
  