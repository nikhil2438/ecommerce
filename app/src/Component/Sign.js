import React, { useState } from 'react';
import logo from '../image/logo.png';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            const response = await fetch('https://e-commerce-backend-lc8o.onrender.com/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json();

            if (response.ok) {
            
                navigate('/'); 
            } else {
                setError(result.message || 'Login failed. Please check your credentials.');
            }
        } catch (error) {
            setError('An error occurred while logging in. Please try again later.');
        }
    };

    return (
        <div>
            <Link to="/">
                <div className="flex justify-center mb-4">
                    <img src={logo} alt="Logo" className="h-10 border-gray-800 shadow-lg" />
                </div>
            </Link>
            <div className="flex items-center justify-center bg-white-500">
                <div className="bg-white p-8 rounded-lg shadow-md w-96">
                    <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSignIn();
                        }}
                    >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Password"
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <div className="flex justify-between mb-6">
                            <a href="#" className="text-black-600 text-sm hover:underline">
                                Forgot Password?
                            </a>
                        </div>
                        <div className="text-center mt-4">
                            <button
                                type="submit"
                                className="bg-red-600 text-white py-2 px-6 rounded w-full hover:bg-yellow-700 focus:outline-none focus:shadow-outline"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div className="text-center mt-4">
                        <span className="text-sm text-black-600">
                            By continuing, you agree to SN Market Conditions of Use and Privacy Notice.
                        </span>
                    </div>
                    <div className="text-center mt-4">
                        <button
                            type="button"
                            className="bg-yellow-500 text-black py-2 px-4 rounded w-full hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                            onClick={() => navigate('/new-user')}
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
