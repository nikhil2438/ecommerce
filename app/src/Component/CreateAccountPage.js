
import React, { useState } from 'react';
import logo from '../image/logo.png';
import { Link, useNavigate } from "react-router-dom";

const CreateAccountPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://e-commerce-backend-lc8o.onrender.com/users/register', {
            
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${formData.firstName}` ,
                   lastname:` ${formData.lastName}`,
                    email: formData.email,
                    password: formData.password,
                    phone: formData.phone,
                    address: formData.address,
                }),
            });

            const data = await response.json();

            if (response.ok) {
            
                alert('Account created successfully!');
                navigate('/signin'); 
            } else {
                
                alert(data.message || 'Failed to create account');
            }
        } catch (error) {
            console.error('Error registering user:', error);
            alert('An error occurred. Please try again later.');
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
                    <h2 className="text-2xl font-semibold text-center mb-6">Create New Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="phone">
                                Phone No
                            </label>
                            <input
                                type="text"
                                id="phone"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Phone No"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="address">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="text-center mt-4">
                            <button
                                type="submit"
                                className="bg-gray-800 text-white py-2 px-6 rounded w-full hover:bg-yellow-700 focus:outline-none focus:shadow-outline"
                            >
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAccountPage;
