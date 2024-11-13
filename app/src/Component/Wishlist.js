import React, { useState, useEffect } from "react";
import axios from "axios";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState({});

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const response = await axios.get(
          "https://ever-deal.onrender.com/users/wishlist",
          {
            headers: {
              Authorization: "Bearer <your-auth-token>",
            },
          }
        );
        if (response.data && response.data.data) {
          setWishlistItems(response.data.data);
        } else {
          setError("No wishlist items found.");
        }
      } catch (error) {
        console.error("Error fetching wishlist items:", error);
        setError("Failed to fetch wishlist items. Please try again later.");
      }
    };

    fetchWishlistItems();
  }, []);

  const subtotal = wishlistItems.reduce(
    (acc, item) => acc + item.productId.price * item.productId.quantity,
    0
  );

  const addToCart = async (item) => {
    try {
      const response = await axios.post(
        "https://ever-deal.onrender.com/users/addtocart",
        {
          productId: item.productId._id,
          quantity: item.productId.quantity,
        },
        {
          headers: {
            Authorization: "Bearer <your-auth-token>",
          },
        }
      );
      if (response.status === 200) {
        alert("Item added to cart!");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      alert("Failed to add item to cart.");
    }
  };

  const removeFromWishlist = async (item) => {
    const itemId = item.productId._id;
    setDeleting((prev) => ({ ...prev, [itemId]: true }));
    try {
      const response = await axios.delete(
        `https://ever-deal.onrender.com/users/removefromwishlist/${itemId}`,
        {
          headers: {
            Authorization: "Bearer <your-auth-token>",
          },
        }
      );
      if (response.status === 200) {
        setWishlistItems(
          wishlistItems.filter((i) => i.productId._id !== itemId)
        );
        alert("Item removed from wishlist!");
      } else {
        alert("Failed to remove item from wishlist.");
      }
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
      setError("Failed to remove item from wishlist. Please try again.");
    } finally {
      setDeleting((prev) => ({ ...prev, [itemId]: false }));
    }
  };

  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
        <div className="w-full lg:w-2/3 mb-6 lg:mb-0">
          <img
            src="https://example.com/your-image.jpg"
            alt="example"
            className="w-full mb-10"
          />
        </div>

        <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-md shadow-md">
          <h3 className="text-xl font-bold">
            Subtotal ({wishlistItems.length} items): ₹{subtotal.toFixed(2)}
          </h3>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 mt-4 rounded-md w-full">
            Proceed to Checkout
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Your Wishlist Items</h2>

      <ul>
        {wishlistItems.map((item) => (
          <li
            key={item.productId._id}
            className="flex flex-col lg:flex-row items-center mb-4 border-b border-gray-300 pb-2"
          >
            <img
              src={item.productId.imageUrl}
              alt={item.productId.name}
              className="w-20 h-20 lg:mr-4 mb-4 lg:mb-0"
            />

            <div className="flex-grow text-center lg:text-left">
              <h3 className="font-bold">{item.productId.name}</h3>
              <div>Quantity: {item.productId.quantity}</div>
              <div>Price: ₹{item.productId.price.toFixed(2)}</div>
              <div>Rating: {item.productId.rating} ⭐</div>

              <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mt-4 lg:mt-0"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>

              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md mt-4 lg:mt-0"
                onClick={() => removeFromWishlist(item)}
                disabled={deleting[item.productId._id]}
              >
                {deleting[item.productId._id]
                  ? "Removing..."
                  : "Remove from Wishlist"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
