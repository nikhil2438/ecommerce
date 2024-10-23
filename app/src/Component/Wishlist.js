// 

import React, { useState } from 'react';
import Nik from '../image/Nik.jpg';
import P from '../image/P.jpg';
import P2 from '../image/P2.jpg';

const Wishlist = () => {
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

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Add to Wishlist API call
  const addToWishlist = async (item) => {
    try {
      const response = await fetch('https://e-commerce-backend-lc8o.onrender.com/users/addtowishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer <your-auth-token>', 
        },
        body: JSON.stringify({
          itemId: item.id, // Adjust the payload structure based on your API docs
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Item added to wishlist:', data);
        alert('Item added to wishlist!');
      } else {
        console.error('Error adding item to wishlist:', data.message);
        alert('Failed to add item to wishlist.');
      }
    } catch (error) {
      console.error('Error occurred while adding to wishlist:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  // Remove item from the cart
  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <div className="container mx-auto">
      {/* Flexbox layout to align image and checkout section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
        {/* Image section */}
        <div className="w-full lg:w-2/3 mb-6 lg:mb-0">
          <img src={Nik} alt="nik" className="w-full mb-10" /> 
        </div>

        {/* Checkout section */}
        <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-md shadow-md">
          <h3 className="text-xl font-bold">
            Subtotal ({cartItems.length} items): ₹{subtotal.toFixed(2)}
          </h3>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 mt-4 rounded-md w-full">
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
            <img src={item.image} alt={item.name} className="w-20 h-20 lg:mr-4 mb-4 lg:mb-0" />

            {/* Item details */}
            <div className="flex-grow text-center lg:text-left">
              <h3 className="font-bold">{item.name}</h3>
              <div>Quantity: {item.quantity}</div>
              <div>Price: ₹{item.price.toFixed(2)}</div>
              <div>Rating: {item.rating} ⭐</div>

              {/* Add to Wishlist button */}
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mt-4 lg:mt-0"
                onClick={() => addToWishlist(item)}
              >
                Add to Wishlist
              </button>

              {/* Remove from Cart button */}
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md mt-4 lg:mt-0"
                onClick={() => removeFromCart(item)}
              >
                Remove from Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
