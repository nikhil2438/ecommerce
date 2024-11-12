import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState({});

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          `https://ever-deal.onrender.com/users/cartitems`
        );
        const items = response.data?.data || [];
        setCartItems(items);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setError("Error fetching cart items");
      }
    };

    fetchCartItems();
  }, []);

  const subtotal = cartItems.reduce((total, item) => {
    const itemTotal = (item.productId.price ?? 0) * (item.quantity ?? 1);
    return total + itemTotal;
  }, 0);

  const handleRemoveItem = async (itemId) => {
    setDeleting((prev) => ({ ...prev, [itemId]: true }));
    try {
      await axios.delete(
        `https://ever-deal.onrender.com/users/removefromcart/${itemId}`
      );

      setCartItems((prevItems) =>
        prevItems.filter((item) => item.productId._id !== itemId)
      );
    } catch (error) {
      console.error("Error removing item:", error);
      setError("Could not remove item. Please try again.");
    } finally {
      setDeleting((prev) => ({ ...prev, [itemId]: false }));
    }
  };

  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 mt-20">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
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

      <ul>
        {cartItems.map((item) => (
          <li
            key={item.productId._id}
            className="flex flex-col lg:flex-row items-center mb-4 border-b border-gray-300 pb-2"
          >
            <img
              src={item?.productId?.imageUrl}
              alt={item?.productId?.name}
              className="w-20 h-20 lg:mr-4 mb-4 lg:mb-0 lg:w-28"
            />
            <div className="flex-grow text-center lg:text-left">
              <h3 className="font-bold">{item?.productId?.name}</h3>
              <div className="text-gray-700">
                {item?.productId?.description}
              </div>
              <div>Quantity: {item.quantity}</div>
              <div>Price: ₹{item.productId.price.toFixed(2)}</div>
              <div>Rating: {item.productId.rating ?? ""} ⭐</div>
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md mt-4 lg:mt-0"
                onClick={() => handleRemoveItem(item.productId._id)}
                disabled={deleting[item.productId._id]}
              >
                {deleting[item.productId._id]
                  ? "Removing..."
                  : "Remove from Cart"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

// import React, { useState } from "react";
// import Nik from "../image/Nik.jpg";
// import P from "../image/P.jpg";
// import P2 from "../image/P2.jpg";
// import Watch1 from "../image/Watch1.jpg";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: "Helix by Timex Analog Silver Dial Men's Watch",
//       image: Watch1,
//       price: 1995,
//       quantity: 1,
//       rating: 4.5,
//     },
//     {
//       id: 2,
//       name: "TIMEX Unisex Stainless Steel Analog Watch",
//       image: P,
//       price: 2995,
//       quantity: 1,
//       rating: 4.8,
//     },
//     {
//       id: 3,
//       name: "TIMEX Men Beige Round Analog Watch",
//       image: P2,
//       price: 5250,
//       quantity: 1,
//       rating: 4.7,
//     },
//     {
//       id: 4,
//       name: "TIMEX Men Beige Round Analog Watch",
//       image: P2,
//       price: 5250,
//       quantity: 1,
//       rating: 4.7,
//     },
//   ]);

//   const subtotal = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="container mx-auto px-4 mt-20">
//       <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
//         <div className="w-full lg:w-2/3 mb-6 lg:mb-0">
//           <img src={Nik} alt="Nik" className="w-full object-cover mb-10" />
//         </div>
//         <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-md shadow-md">
//           <h3 className="text-xl font-bold">
//             Subtotal ({cartItems.length} items): ₹{subtotal.toFixed(2)}
//           </h3>
//           <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 mt-4 rounded-md w-full">
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>

//       <h2 className="text-2xl font-bold mb-4">Your Cart Items</h2>

//       <ul>
//         {cartItems.map((item) => (
//           <li
//             key={item.id}
//             className="flex flex-col lg:flex-row items-center mb-4 border-b border-gray-300 pb-2"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-20 h-20 lg:mr-4 mb-4 lg:mb-0 lg:w-28"
//             />
//             <div className="flex-grow text-center lg:text-left">
//               <h3 className="font-bold">{item.name}</h3>
//               <div>Quantity: {item.quantity}</div>
//               <div>Price: ₹{item.price.toFixed(2)}</div>
//               <div>Rating: {item.rating} ⭐</div>
//               <button
//                 className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md mt-4 lg:mt-0"
//                 onClick={() => {
//                   setCartItems(
//                     cartItems.filter((cartItem) => cartItem.id !== item.id)
//                   );
//                 }}
//               >
//                 Remove from Cart
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cart;
