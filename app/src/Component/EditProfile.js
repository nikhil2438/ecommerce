//
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

// Function to get the auth token from cookies
const getAuthTokenFromCookie = () => {
  const name = "auth_token=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return null; // Token not found
};

const EditProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    _id: "",
    name: "",
    lastname: "",
    phone: "",
    address: "",
    email: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = getAuthTokenFromCookie(); // Get the token from cookies
    console.log("Token from cookie:", token); // Log the token to check its value

    if (!token) {
      setError("Authentication token not found. Please log in.");
      return;
    }

    try {
      const response = await axios.patch(
        "https://e-commerce-backend-lc8o.onrender.com/users/updateprofile",
        {
          _id: formData._id,
          name: formData.name,
          lastname: formData.lastname,
          phone: formData.phone,
          address: formData.address,
          email: formData.email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response data:", response.data); // Log the response data
      if (response.status === 200) {
        setSuccess(true);
        navigate("/profile");
      } else {
        setError(
          response.data.message || "Update failed. Please check your inputs."
        );
      }
    } catch (error) {
      console.error("Error response:", error.response); // Log the error response
      setError(
        error.response?.data?.message ||
          "An error occurred while updating the profile. Please try again later."
      );
    }
  };

  const handleCancel = () => {
    navigate("/profile");
  };

  return (
    <div className="justify-center items-center bg-gray-100 py-30 flex flex-col">
      <div className="bg-white p-8 rounded-lg shadow-lg mt-12 w-[80%]">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Edit Profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="font-semibold text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="font-semibold text-gray-700">Last Name:</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="font-semibold text-gray-700">Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="p-2 border rounded-lg w-full"
            />
          </div>
          <div className="mb-4">
            <label className="font-semibold text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="font-semibold text-gray-700">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg focus:outline-none"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-400 focus:outline-none"
            >
              Cancel
            </button>
          </div>
        </form>

        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && (
          <p className="text-green-500 mt-4">Profile updated successfully!</p>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
