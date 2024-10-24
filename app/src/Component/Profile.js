import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
  });
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      console.log(process.env);
      let response = await axios.get(
        process.env.REACT_APP_HOST + "/users/profile/6718d237dad58ff32149db93"
      );

      const userProfile = response.data.data;
      setProfileData({
        name: userProfile.name,
        lastName: userProfile.lastname,
        phone: userProfile.phone,
        email: userProfile.email,
        address: userProfile.address,
      });
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError("Failed to fetch profile data");
    }
  };

  useEffect(() => {
    fetchData();
    console.log(process.env.REACT_APP_HOST);
  }, []);

  const handleEditClick = () => {
    navigate("/edit-profile");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <div className="flex justify-center items-center py-30">
        <div className="bg-white p-8 rounded-lg shadow-lg w-[70%] mt-12">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            User Profile
          </h1>
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <>
              <div className="mb-4">
                <label className="font-semibold text-gray-700">Name:</label>
                <p className="text-gray-600">
                  {profileData.name || "Loading..."}
                </p>
              </div>
              <div className="mb-4">
                <label className="font-semibold text-gray-700">
                  Last Name:
                </label>
                <p className="text-gray-600">
                  {profileData.lastName || "Loading..."}
                </p>
              </div>
              <div className="mb-4">
                <label className="font-semibold text-gray-700">Phone:</label>
                <p className="text-gray-600">
                  {profileData.phone || "Loading..."}
                </p>
              </div>
              <div className="mb-4">
                <label className="font-semibold text-gray-700">Email:</label>
                <p className="text-gray-600">
                  {profileData.email || "Loading..."}
                </p>
              </div>
              <div className="mb-4">
                <label className="font-semibold text-gray-700">Address:</label>
                <p className="text-gray-600">
                  {profileData.address || "Loading..."}
                </p>
              </div>
            </>
          )}
          <button
            onClick={handleEditClick}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 focus:outline-none"
          >
            Edit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
