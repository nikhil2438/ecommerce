// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Footer from './Footer';
// import axios from 'axios';
// import { use } from 'react';
// const getAuthTokenFromCookie = () => {

//   const name = "auth_token=";
//   const decodedCookie = decodeURIComponent(document.cookie);
//   const cookies = decodedCookie.split('.');
//   for (let i = 0; i < cookies.length; i++) {
//     let cookie = cookies[i].trim();
//     if (cookie.indexOf(name) === 0) {
//       return cookie.substring(name.length, cookie.length);
//     }
//   }
//   return null; // Token not found
// };

// const Profile = () => {
//   const navigate = useNavigate();
//   const [data,setData]=useState([]);
//   const [profileData, setProfileData] = useState({
//     name: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     address: '',
//   });
//   const [error, setError] = useState(null);
// useEffect(()=>{
//   const fetchData=async()=>{
//     try {
//       let response = await axios.get("https://e-commerce-backend-lc8o.onrender.com/users/profile/67163e027b35330934419e11", {
//         withCredentials: true, // This ensures cookies are sent with the request
//       });

//       setData(response.data); // Update the state with the received data
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching data: ", error);
//     }
//   };

//   fetchData();
// },[])

//   // useEffect(() => {
//   //   const fetchProfileData = async () => {
//   //     try {
//   //       const authToken = getAuthTokenFromCookie(); // Get the token from cookies
//   //       console.log('Auth_Token:', authToken);
//   //       if (!authToken) {
//   //         throw new Error('No authentication token found. Please login.');
//   //       }
//         // const response = await fetch('https://e-commerce-backend-lc8o.onrender.com/users/profile/67163e027b35330934419e11',{
//         //   method: 'GET',
//         //   headers: {
//         //      // Include the token in the Authorization header
//         //     'Content-Type': 'application/json',
//         //   },
//         // });

//         // if (!response.ok) {
//         //   throw new Error('Failed to fetch profile data');
//         // }
//     //     const data = await response.json();
//     //     console.log(data,'hhh ');
//     //     setProfileData({
//     //       name: data.name,
//     //       lastName: data.lastName,
//     //       phone: data.phone,
//     //       email: data.email,
//     //       address: data.address,
//     //     });
//     //   } catch (err) {
//     //     setError(err.message);
//     //   }
//     // };

//     // fetchProfileData();

//   const handleEditClick = () => {
//     navigate('/edit-profile');
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-between bg-gray-100">
//       <div className="flex justify-center items-center py-30">
//         <div className="bg-white p-8 rounded-lg shadow-lg w-[70%] mt-12">
//           <h1 className="text-3xl font-bold mb-6 text-gray-800">User Profile</h1>
//           {error ? (
//             <p className="text-red-500">{error}</p>
//           ) : (
//             <>
//               <div className="mb-4">
//                 <label className="font-semibold text-gray-700">Name: nikhil</label>
//                 <p className="text-gray-600">{profileData.name}</p>
//               </div>
//               <div className="mb-4">
//                 <label className="font-semibold text-gray-700">Last Name: singh</label>
//                 <p className="text-gray-600">{profileData.lastName}</p>
//               </div>
//               <div className="mb-4">
//                 <label className="font-semibold text-gray-700">Phone:123456</label>
//                 <p className="text-gray-600">{profileData.phone}</p>
//               </div>
//               <div className="mb-4">
//                 <label className="font-semibold text-gray-700">Email:  @gmail.com</label>
//                 <p className="text-gray-600">{profileData.email}</p>
//               </div>
//               <div className="mb-4">
//                 <label className="font-semibold text-gray-700">Address: delhi</label>
//                 <p className="text-gray-600">{profileData.address}</p>
//               </div>
//             </>
//           )}
//           <button
//             onClick={handleEditClick}
//             className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 focus:outline-none"
//           >
//             Edit
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";

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
      let response = await axios.get(
        "https://e-commerce-backend-lc8o.onrender.com/users/profile/67163e027b35330934419e11"
      );

      const userProfile = response.data.data;
      setProfileData({
        name: userProfile.name,
        lastName: userProfile.lastname,
        phone: userProfile.phone,
        email: userProfile.email,
        address: userProfile.address,
      }); // Update the profile data state
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError("Failed to fetch profile data");
    }
  };

  useEffect(() => {
    fetchData();
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
