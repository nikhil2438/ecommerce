
import React, { useState } from "react";
const ProductPage = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="flex items-center justify-between py-4 border-b">
        <h1 className="text-xl font-semibold">Amazon Product Page</h1>
        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-blue-500">Home</a></li>
            <li><a href="#" className="text-blue-500">Deals</a></li>
            <li><a href="#" className="text-blue-500">Cart</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        {/* Left Section: Product Images */}
        <div className="space-y-4">
          <div className="w-full">
            <img
              src="https://via.placeholder.com/300"
              alt="Product Image"
              className="w-full rounded-lg"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <img src="https://via.placeholder.com/50" alt="Image 1" className="w-full rounded-lg" />
            <img src="https://via.placeholder.com/50" alt="Image 2" className="w-full rounded-lg" />
            <img src="https://via.placeholder.com/50" alt="Image 3" className="w-full rounded-lg" />
          </div>
        </div>

        {/* Right Section: Product Info */}
        <div>
          <h2 className="text-2xl font-bold">Noise Pulse 4 Max</h2>
          <p className="text-sm text-gray-500">India's 1st Ever AI Smart Watch</p>

          <div className="flex items-center space-x-2 my-4">
            <span className="text-yellow-500 text-lg">4.1 ★</span>
            <span className="text-sm text-gray-500">40,711 ratings</span>
          </div>

          <div className="text-lg font-semibold text-red-500">
            -69% ₹2,199
          </div>
          <p className="text-gray-500 line-through">M.R.P: ₹6,999</p>

          <div className="my-4">
            <span className="text-green-500">In Stock</span>
            <p>Ships from: <span className="font-bold">Amazon</span></p>
            <p>Sold by: <span className="font-bold">Clicktech Retail Pvt Ltd</span></p>
          </div>

          {/* Buttons */}
          <div className="space-y-2">
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-md">
              Add to Cart
            </button>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md">
              Buy Now
            </button>
          </div>

          {/* Offers */}
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold">Offers</h3>
            <ul className="list-disc ml-6">
              <li>No Cost EMI available</li>
              <li>Partner offers: Buy 2 get 12% off</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 border-t py-4">
        <p className="text-sm text-gray-500 text-center">
          © 2024 Amazon Clone. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ProductPage;
