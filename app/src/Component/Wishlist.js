import React, { useState } from 'react';
import Nik from '../image/Nik.jpg';
import P from '../image/P.jpg';
import P2 from '../image/P2.jpg';

const   Wishlist = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Helix by Timex Analog Silver Dial Men\'s Watch',
      image: Nik,
      price: 1995,
      quantity: 1,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'TIMEX Unisex Stainless Steel Analog Watch',
      image: P,
      price: 2995,
      quantity: 1,
      rating: 4.8,
    },
    {
      id: 3,
      name: 'TIMEX Men Beige Round Analog Watch',
      image: P2,
      price: 5250,
      quantity: 1,
      rating: 4.7,
    },
  ]);

  
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto ">
      {/* Flexbox layout to align image and checkout section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
        {/* Image section */}
        <div className="w-full lg:w-2/3 mb-6 lg:mb-0">
          <img src={Nik} alt="nik" className="w-full  mb-10" /> {/* Adjusted for mobile */}
        </div>

        {/* Checkout section */}
        <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-md shadow-md">
          <h3 className="text-xl font-bold">
            Subtotal ({cartItems.length} items): ₹{subtotal.toFixed(2)}
          </h3>

          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 mt-4 rounded-md w-full"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Your Cart Items</h2>

      {/* Display cart items */}
      <ul>
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex flex-col lg:flex-row items-center mb-4 border-b border-gray-300 pb-2"
          >
            {/* Item image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 lg:mr-4 mb-4 lg:mb-0"
            />

            {/* Item details */}
            <div className="flex-grow text-center lg:text-left">
              <h3 className="font-bold">{item.name}</h3>
              <div>Quantity: {item.quantity}</div>
              <div>Price: ₹{item.price.toFixed(2)}</div>
              <div>Rating: {item.rating} ⭐</div>
              <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md mt-4 lg:mt-0"
              onClick={() => {
                setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
              }}
            >
              Remove from Cart
            </button>
            </div>

            {/* Remove from cart button */}
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
