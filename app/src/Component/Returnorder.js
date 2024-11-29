import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Returnorder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "https://ever-deal.onrender.com/orders/list-orders"
        );
        setOrders(response.data.orders);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to load orders.");
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) {
    return <div className="text-center mt-20">Loading orders...</div>;
  }

  if (error) {
    return <div className="text-center mt-20 text-red-500">{error}</div>;
  }

  return (
    <div className="pt-12 mx-4">
      <h1 className="text-slate-800 text-3xl my-4 text-center">My Orders</h1>
      {orders.length === 0 ? (
        <h5 className="text-slate-800 mt-20 text-center">No orders found</h5>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="flex flex-col border rounded-lg p-4 shadow-sm bg-white"
            >
              <h3 className="text-lg font-semibold mb-2">
                Order ID: {order.generatedId}
              </h3>
              <p className="text-sm text-gray-500 mb-1">
                <strong>Address:</strong> {order.address}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <strong>Amount:</strong> ₹{order.amount}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <strong>Payment Status:</strong>{" "}
                {order.payment ? "Paid" : "Unpaid"}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Order Date:</strong>{" "}
                {new Date(order.createdAt).toLocaleDateString()}
              </p>

              <h4 className="text-md font-medium mt-4">Items:</h4>
              <ul className="list-disc list-inside space-y-2">
                {order.items.map((item) => (
                  <li
                    key={item._id}
                    className="text-sm text-gray-700  cursor-pointer"
                    onClick={() =>
                      navigate(`/orders/${order.generatedId}`, {
                        state: { orderId: order.generatedId },
                      })
                    }
                  >
                    <div className="flex   flex-col sm:flex-row items-center  sm:items-center space-y-2 sm:space-x-4  sm:space-y-0 ">
                      <img
                        src={item.productId.imageUrl}
                        alt={item.productId.name}
                        className="w-24 h-20 object-contain rounded-md"
                      />
                      <div>
                        <p>
                          <strong>{item.productId.name}</strong>
                        </p>
                        <p>Price: ₹{item.productId.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Description: {item.productId.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Returnorder;
