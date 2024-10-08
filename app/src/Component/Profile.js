 import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Profile = () => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/edit-profile'); // Redirect to the form page
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <div className="flex justify-center items-center py-30">
        <div className="bg-white p-8 rounded-lg shadow-lg w-[70%] mt-12">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">User Profile</h1>
          <div className="mb-4">
            <label className="font-semibold text-gray-700">Name:</label>
            <p className="text-gray-600">John</p>
          </div>
          <div className="mb-4">
            <label className="font-semibold text-gray-700">Last Name:</label>
            <p className="text-gray-600">Doe</p>
          </div>
          <div className="mb-4">
            <label className="font-semibold text-gray-700">Phone:</label>
            <p className="text-gray-600">123-456-7890</p>
          </div>
          <div className="mb-4">
            <label className="font-semibold text-gray-700">Email:</label>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
          <div className="mb-4">
            <label className="font-semibold text-gray-700">Address:</label>
            <p className="text-gray-600">1234 Street Name, City, Country</p>
          </div>
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
