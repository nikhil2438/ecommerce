


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const EditProfile = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleCancel = () => {
    navigate('/profile'); 
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
              name="lastName"
              value={formData.lastName}
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
        
      </div>
  
    </div>
  );
};

export default EditProfile;
