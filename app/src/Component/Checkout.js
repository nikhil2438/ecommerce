import React, { useEffect, useState } from "react";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems: passedCartItems, subtotal: passedSubtotal } =
    location.state || {};

  const [cartItems, setCartItems] = useState(passedCartItems || []);
  const [subtotal, setSubtotal] = useState(passedSubtotal || 0);
  const [discount, setDiscount] = useState(0);
  const [additionalFees, setAdditionalFees] = useState(56);
  const [shippingAddress, setShippingAddress] = useState(
    "248A, Block A, New Ashok Nagar, Gali Number 28, Mayur Vihar, Delhi"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("Payment method");

  useEffect(() => {
    if (!passedCartItems) {
      const fetchCartItems = async () => {
        setLoading(true);
        setError(null);
        try {
          const localCartItems =
            JSON.parse(localStorage.getItem("cartItems")) || [];
          setCartItems(localCartItems);

          const total = localCartItems.reduce(
            (sum, item) => sum + item.productId.price * item.quantity,
            0
          );
          setSubtotal(total);

          const response = await axios.get(
            "https://ever-deal.onrender.com/users/cartitems"
          );
          const items = response.data?.data || [];
          setCartItems(items);
        } catch (err) {
          console.error("Error fetching cart items:", err);
          setError("Failed to load cart items. Please try again.");
        } finally {
          setLoading(false);
        }
      };

      fetchCartItems();
    }
  }, [passedCartItems]);

  const handlePlaceOrder = async () => {
    if (paymentMethod === "Payment method") {
      alert("Please select a valid payment method.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("User ID not found. Please log in again.");
        return;
      }

      const requestBody = {
        id: userId,
        address: shippingAddress,
      };

      const response = await axios.post(
        "https://ever-deal.onrender.com/orders/cartorder",

        requestBody,

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        alert("Order placed successfully!");
      }

      const orderId = uuidv4();
      navigate("/order-placed", {
        state: {
          paymentMethod: paymentMethod,
          cartItems: cartItems,
          orderId: orderId,
        },
      });
    } catch (err) {
      console.error("Error placing the order:", err);
      setError("Failed to place the order. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const incrementQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.productId._id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updatedCartItems);
    recalculateSubtotal(updatedCartItems);
  };

  const decrementQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.productId._id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
    recalculateSubtotal(updatedCartItems);
  };

  const recalculateSubtotal = (updatedCartItems) => {
    const newSubtotal = updatedCartItems.reduce(
      (sum, item) => sum + item.productId.price * item.quantity,
      0
    );
    setSubtotal(newSubtotal);
  };

  if (loading) return <div>Loading checkout data...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  if (!cartItems.length) {
    return (
      <div className="container mx-auto mt-20">
        Your cart is empty. Please add items to proceed to checkout.
      </div>
    );
  }

  const total = subtotal - discount + additionalFees;

  return (
    <div className="container mx-auto px-4 mt-10 pt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Review Your Order</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <ul className="border border-gray-300 rounded-md p-4">
          {cartItems.map((item) => (
            <li
              key={item.productId._id}
              className="flex justify-between items-center mb-4 border-b pb-4"
            >
              <div className="flex items-center w-9">
                <img
                  src={item?.productId?.imageUrl}
                  alt={item?.productId?.name}
                  className="w-28 h-24 object-contain rounded-md mr-8"
                />
                <div>
                  <h3 className="font-bold">{item.productId.name}</h3>
                  <p>Price: ₹{item.productId.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="px-3 py-1 bg-gray-200 rounded-l-md border border-gray-300"
                      onClick={() => decrementQuantity(item.productId._id)}
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-t border-b border-gray-300">
                      {item.quantity}
                    </span>
                    <button
                      className="px-3 py-1 bg-gray-200 rounded-r-md border border-gray-300"
                      onClick={() => incrementQuantity(item.productId._id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <p>₹{(item.productId.price * item.quantity).toFixed(2)}</p>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <p className="flex justify-between">
            <span>Subtotal:</span> <span>₹{subtotal.toFixed(2)}</span>
          </p>
          <p className="flex justify-between">
            <span>Discount:</span> <span>-₹{discount.toFixed(2)}</span>
          </p>
          <p className="flex justify-between">
            <span>Additional Fees:</span>{" "}
            <span>₹{additionalFees.toFixed(2)}</span>
          </p>
          <p className="flex justify-between text-xl font-bold mt-2">
            <span>Total:</span> <span>₹{total.toFixed(2)}</span>
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
        <textarea
          className="w-full border border-gray-300 p-2 rounded-md"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
          rows="3"
        ></textarea>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
        <select
          className="w-full border border-gray-300 p-2 rounded-md"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="credit_card">Credit Card</option>
          <option value="debit_card">Debit Card</option>
          <option value="upi">UPI</option>
          <option value="net_banking">Net Banking</option>
          <option value="cod">Cash on Delivery</option>
        </select>
      </div>

      <button
        className="w-1/3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-md"
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
