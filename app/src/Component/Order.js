import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Orders = () => {
  const [order, setOrder] = useState(null);
  const [showAllUpdates, setShowAllUpdates] = useState(false);
  const navigate = useNavigate();
  const staticOrderData = {
    orderId: "OD332387972736547100",
    productName: "ADIDAS Clinch-X M Running Shoes For Men",
    size: "10, Blue",
    seller: "HSAtlastradeFashion",
    price: "₹795",
    offers: "2 offers",
    productImage: "https://via.placeholder.com/150",
    deliveryNote: "Delivery was made with OTP verification",
    returnPolicy: "Return policy ended on Oct 11",
    recentIssues: [
      {
        issue: "I have an issue with the delivery of my order",
        status: "Resolved",
        date: "Sep 28",
      },
    ],
    status: [
      { step: "Order Confirmed", date: "Sep 26", completed: true },
      { step: "Delivered", date: "Oct 01", completed: true },
    ],
  };

  const handleChatClick = () => {
    navigate("/chatbot");
  };

  useEffect(() => {
    setOrder(staticOrderData);
  }, []);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold mb-4">Order Details</h1>

      <div className="text-gray-600 mb-4">Order ID - {order.orderId}</div>

      <div className="bg-white p-4 rounded shadow-md mb-4">
        <div className="flex items-start">
          <img
            src={order.productImage}
            alt={order.productName}
            className="w-20 h-20 object-cover mr-4"
          />
          <div>
            <h2 className="text-lg font-semibold">{order.productName}</h2>
            <p className="text-gray-600 text-sm">{order.size}</p>
            <p className="text-gray-600 text-sm">Seller: {order.seller}</p>
            <p className="text-black font-semibold">{order.price}</p>
            <p className="text-green-500 text-sm">{order.offers}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow-md mb-4">
        <div className="text-green-600 font-semibold">{order.deliveryNote}</div>
      </div>

      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h4 className="text-lg font-semibold mb-4">Order Updates</h4>
        <div className="space-y-4">
          {order.status.map((step, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-4 h-4 rounded-full ${
                  step.completed ? "bg-green-500" : "bg-gray-300"
                }`}
              ></div>
              <p className="ml-4 text-sm text-gray-800 font-medium">
                {step.step}, {step.date}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow-md mb-4">
        <p className="text-gray-600">{order.returnPolicy}</p>
      </div>

      <div className="bg-white p-4 rounded shadow-md">
        <h4 className="text-lg font-semibold mb-4">Recent Issues</h4>
        {order.recentIssues.map((issue, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 p-3 rounded mb-2"
          >
            <div>
              <p className="text-sm text-gray-800">{issue.issue}</p>
              <p className="text-xs text-gray-500">Resolved on {issue.date}</p>
            </div>
            <span
              className={`text-xs font-semibold ${
                issue.status === "Resolved" ? "text-green-600" : "text-red-600"
              }`}
            >
              {issue.status}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded"
          onClick={handleChatClick}
        >
          Chat with us
        </button>
      </div>
    </div>
  );
};

export default Orders;
