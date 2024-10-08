import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import logo from "../image/logo.png";
const Deleteaccount = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., sending email for password reset)
    console.log('Email submitted: ', email);
  };

  return(
    <>
    <Link to="/">
        <div className="flex justify-center mb-4 mt-4 ">
          <img
            src={logo}
            alt="Logo"
            className="h-10 border-gray-800 shadow-lg bg-black "
          />{" "}
          {/* Replace with your logo */}
        </div>
      </Link>
    
                
    <div className="flex  justify-center  bg-white mt-10">
      <div className="bg-white p-5 rounded-lg shadow-lg border-2 border-slate-500 w-90  flex flex-col h-fit ">
      
        <h2 className=" text-2xl font-semibold mb-6">Delete Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border-2 border-black rounded-sm shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-black sm:text-sm"
              placeholder="Enter your email"
              required
            />
            <p>You will be deleting your account as well as account data..</p>
          </div>
          <button
            type="submit"
            className="w-full bg-slate-700 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-200"
            >
          
        Delete Your Account
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Deleteaccount;
