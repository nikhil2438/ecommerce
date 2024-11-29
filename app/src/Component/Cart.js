import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState({});
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          `https://ever-deal.onrender.com/users/cartitems`
        );
        const items = response.data?.data || [];
        setCartItems(items);
      } catch (error) {
        console.error("Error fetching cart items:", error.response || error);
        setError("Error fetching cart items");
      }
    };

    fetchCartItems();
  }, [refresh]);

  const subtotal = cartItems.reduce((total, item) => {
    const itemTotal = (item.productId.price ?? 0) * (item.quantity ?? 1);
    return total + itemTotal;
  }, 0);

  const handleRemoveItem = async (itemId) => {
    setDeleting((prev) => ({ ...prev, [itemId]: true }));
    try {
      const response = await axios.delete(
        `https://ever-deal.onrender.com/users/deletecartItem/${itemId}`
      );
      if (response && response.status === 200) {
        console.log("Item successfully removed from cart:", response.data);
        alert("Item removed from cart!");

        setRefresh(!refresh);
      } else {
        alert("Failed to remove item from cart.");
      }
    } catch (error) {
      console.error("Error removing item from cart:", error.response || error);
      setError("Failed to remove item from cart. Please try again.");
    } finally {
      setDeleting((prev) => ({ ...prev, [itemId]: false }));
    }
  };
  const handleProceedToCheckout = () => {
    navigate("/checkout", { state: { cartItems, subtotal } });
  };

  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 mt-20">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
        <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-md shadow-md">
          <h3 className="text-xl font-bold">
            Subtotal ({cartItems.length} items): ₹{subtotal.toFixed(2)}
          </h3>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 mt-4 rounded-md w-full  "
            onClick={handleProceedToCheckout}
          >
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
              className="w-28 h-24 lg:mr-4 mb-4 lg:mb-0 lg:w-28 bg-contain"
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
