import React, { useState } from "react";
import axios from "axios";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://ever-deal.onrender.com/users/request-password-change",
        email
      );
      console.log(response.data);

      if (response.status === 200) {
        localStorage.setItem("Token", response.data.data);
        setMessage("Check your email for a password reset link.");
      } else {
        setMessage(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Failed to send reset email:", error);
      setMessage("Failed to send reset email. Please try again.");
    }
  };

  return (
    <>
      <Link to="/">
        <div className="flex justify-center mb-4 mt-4">
          <img
            src={logo}
            alt="Logo"
            className="h-10 border-gray-800 shadow-lg bg-black"
          />
        </div>
      </Link>

      <div className="flex items-center justify-center mt-10 bg-gray-50">
        <div className="bg-white p-5 rounded-lg shadow-lg border-2 border-slate-500 w-90 flex flex-col h-fit">
          <h2 className="text-3xl font-semibold mb-6">Change Password</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border-2 border-black rounded-sm shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-black sm:text-sm"
                placeholder="Enter your email"
                required
              />
              <p className="text-xs font-medium text-black mt-2">
                Please check your email for instructions on resetting your
                password.
              </p>
            </div>
            {message && (
              <p className="text-sm font-medium text-green-600 mt-2">
                {message}
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-slate-700 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-200"
            >
              Send Mail
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
