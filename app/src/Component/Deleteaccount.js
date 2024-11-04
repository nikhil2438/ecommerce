import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../image/logo.png";

const Deleteaccount = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(
        "https://ever-deal.onrender.com/users/delete",
        email
      );

      if (response.status === 200) {
        setSuccess(true);
        console.log("Account deleted successfully");
        navigate("/");
      } else {
        setError(
          response.data.message || "Failed to delete account. Please try again."
        );
      }
    } catch (error) {
      console.log(error);
      setError(
        error.response?.data?.message ||
          "An error occurred while deleting your account. Please try again later."
      );
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
          />{" "}
        </div>
      </Link>

      <div className="flex justify-center bg-white mt-10">
        <div className="bg-white p-5 rounded-lg shadow-lg border-2 border-slate-500 w-90 flex flex-col h-fit">
          <h2 className="text-2xl font-semibold mb-6">Delete Your Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <p>You will be deleting your account as well as account data.</p>

            <button
              type="submit"
              className="w-full bg-slate-700 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-200"
            >
              Delete Your Account
            </button>
          </form>

          {success && (
            <p className="text-green-500 mt-4">Account deleted successfully!</p>
          )}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default Deleteaccount;
