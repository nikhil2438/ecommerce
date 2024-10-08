import React from 'react';
import logo from '../image/logo.png';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const SignInPage = () => {
    return (
        <div>
            <Link to="/">
            <div className="flex justify-center mb-4">
                    <img src={logo} alt="Logo" className="h-10 border-gray-800 shadow-lg" /> {/* Replace with your logo */}
                </div>
                </Link>
        <div className="flex items-center justify-center  bg-white-500 ">
            
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                
                <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black-700 text-sm font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="flex justify-between mb-6">
                        <a href="#" className="text-black-600 text-sm hover:underline">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="text-center mt-4">
                    <button
                        type="button"
                        className="bg-black -600 text-white py-2 px-6 rounded w-full hover:bg-yellow-700 focus:outline-none focus:shadow-outline"
                    >
                        Sign In
                    </button>
                    </div>
                </form>
                <div className="text-center mt-4">
                    <span className="text-sm text-black-600"> By continuing, you agree to SN Market Conditions of Use and Privacy Notice.</span>
                    
                    </div>


                    <div className="text-center mt-4">
                        <button
                            type="button"
                            className="bg-yellow-500 text-black py-2 px-4 rounded w-full hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                        >
                            Create a New Account
                        </button>
                     
                </div>
            </div>
        </div>
        </div>
    );
};

export default SignInPage;
