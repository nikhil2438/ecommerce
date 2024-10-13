import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";

const Newpassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Handle form submission here (e.g., sending new password to backend)
    console.log("Password submitted: ", password);
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
                htmlFor="password"
                className="block text-sm font-medium text-gray-800"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border-2 border-black rounded-sm shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-black sm:text-sm"
                placeholder="Enter your new password"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-800"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border-2 border-black rounded-sm shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-black sm:text-sm"
                placeholder="Re-enter your new password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-slate-700 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-200"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Newpassword;
