import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  const fetchData = async (userId) => {
    try {
      console.log(userId);
      let response = await axios.get(
        `https://ever-deal.onrender.com/users/profile/${userId}`
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
    const userId = localStorage.getItem("userId"); // Get userId from localStorage
    if (!userId) {
      navigate("/Helloguest"); // Redirect to login if userId is not found
    } else {
      fetchData(userId); // Fetch user profile data
    }
  }, []);

  const handleEditClick = () => {
    navigate("/edit-profile");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between mt-20 bg-gray-100">
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
                  {profileData.name || "FirtName"}
                </p>
              </div>
              <div className="mb-4">
                <label className="font-semibold text-gray-700">
                  Last Name:
                </label>
                <p className="text-gray-600">
                  {profileData.lastName || "LastName"}
                </p>
              </div>
              <div className="mb-4">
                <label className="font-semibold text-gray-700">Phone:</label>
                <p className="text-gray-600">{profileData.phone || "Phone"}</p>
              </div>
              <div className="mb-4">
                <label className="font-semibold text-gray-700">Email:</label>
                <p className="text-gray-600">{profileData.email || "Email"}</p>
              </div>
              <div className="mb-4">
                <label className="font-semibold text-gray-700">Address:</label>
                <p className="text-gray-600">
                  {profileData.address || "Address"}
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
    </div>
  );
};

export default Profile;

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Footer from "./Footer";
// import axios from "axios";

// function UserProfile() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     lastName: "",
//     phone: "",
//     address: "",
//     email: "",
//   });

//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         "https://e-commerce-backend-lc8o.onrender.com/users/profile/6718adbb077cfeae2579ae30"
//       );
//       const userProfile = response.data.data;
//       setFormData({
//         name: userProfile.name,
//         lastName: userProfile.lastname,
//         phone: userProfile.phone,
//         address: userProfile.address,
//         email: userProfile.email,
//       });
//     } catch (error) {
//       console.error("There was an error fetching the data!", error);
//       setError("Error fetching data");
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleProfileClick = () => {
//     navigate("/Profile");
//   };

//   return (
//     <div className="mx-4 my-10">
//       <div className="user-profile p-6 ring-offset-gray-600 bg-white ring-inset rounded w-full shadow-md">
//         <h1 className="text-2xl font-bold mb-6">User Profile</h1>

//         <div className="space-y-4 text-left">
//           <p className="flex space-x-4">
//             <span className="font-bold w-1/3">First Name:</span>
//             <span>{formData.name}</span>
//           </p>
//           <p className="flex space-x-4">
//             <span className="font-bold w-1/3">Last Name:</span>
//             <span>{formData.lastName}</span>
//           </p>
//           <p className="flex space-x-4">
//             <span className="font-bold w-1/3">Phone:</span>
//             <span>{formData.phone}</span>
//           </p>
//           <p className="flex space-x-4">
//             <span className="font-bold w-1/3">Address:</span>
//             <span>{formData.address}</span>
//           </p>
//           <p className="flex space-x-4">
//             <span className="font-bold w-1/3">Email:</span>
//             <span>{formData.email}</span>
//           </p>

//           <button
//             className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
//             onClick={UserProfile}
//           >
//             Edit
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default UserProfile;
