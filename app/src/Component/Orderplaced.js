import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const OrderPlaced = () => {
  const location = useLocation();
  const { paymentMethod, cartItems = [], orderId } = location.state || {};
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };

  const formatPrice = (price) => {
    return `₹${price.toFixed(2)}`;
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="bg-green-100 p-6 rounded-lg text-center mb-6">
        <h1 className="text-3xl font-semibold text-green-600">
          Order Placed Successfully!
        </h1>
        <p className="text-xl text-green-600">
          Thank you for shopping with us. Your order is confirmed.
        </p>
        <p className="text-lg text-green-500 mt-2">
          Order ID: <strong>{orderId}</strong>
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
        <p className="text-lg">
          Payment Method:{" "}
          <strong>
            {paymentMethod === "cod"
              ? "Cash on Delivery"
              : paymentMethod === "credit_card"
              ? "Credit Card"
              : paymentMethod === "debit_card"
              ? "Debit Card"
              : paymentMethod === "upi"
              ? paymentMethod == "Net_banking"
              : "Net Banking"}
          </strong>
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
        <p className="text-lg">Shipping to:</p>
        <p className="text-lg text-gray-700">
          248A, Block A, New Ashok Nagar, Gali Number 28, Mayur Vihar, Delhi
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="mb-4">
          <ul>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <li
                  key={item.productId._id}
                  className="flex justify-between mb-4 border-b pb-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.productId.imageUrl}
                      alt={item.productId.name}
                      className="w-28 h-24 object-contain rounded-md mr-4"
                    />
                    <div>
                      <p className="font-semibold">{item.productId.name}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-semibold">
                    {formatPrice(item.productId.price * item.quantity)}
                  </p>
                </li>
              ))
            ) : (
              <p>No items in your order.</p>
            )}
          </ul>
        </div>

        <div className="flex justify-between font-semibold text-xl">
          <p>Total Amount</p>
          <p>
            {formatPrice(
              cartItems.reduce(
                (sum, item) => sum + item.productId.price * item.quantity,
                0
              )
            )}
          </p>
        </div>
      </div>

      <div className="bg-yellow-100 p-4 rounded-lg text-center">
        <p className="text-lg text-yellow-700 font-semibold">
          Your order will be processed and dispatched soon. You will receive an
          order confirmation email shortly.
        </p>
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg font-medium">
          We appreciate your business! If you have any questions, feel free to
          contact us.
        </p>
        <button
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg "
          onClick={handleGoHome}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default OrderPlaced;
