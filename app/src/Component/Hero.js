import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <span key={index}>{index < rating ? "⭐" : "☆"}</span>
      ))}
    </div>
  );
};

const Hero = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://ever-deal.onrender.com/products/listproducts`
        );
        setProducts(response.data.data);
      } catch (error) {
        setError("Error fetching products");
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = async (productId, event) => {
    event.stopPropagation();
    try {
      await axios.post(`https://ever-deal.onrender.com/users/addtocart`, {
        productId,
      });
      navigate("/cart");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      setError("Could not add product to cart. Please try again.");
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/productpage/${productId}`);
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="bg-slate-100 px-2 py-6">
      <div className="flex flex-wrap gap-6 justify-center md:justify-between">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white p-6 cursor-pointer rounded-lg shadow-md w-full sm:w-60 md:w-80"
            onClick={() => handleProductClick(product._id)}
          >
            <h4 className="text-slate-800 text-lg font-medium truncate">
              {product.description}
            </h4>
            <StarRating rating={4} />
            <p className="text-blue-800 text-lg font-medium">
              ₹{product.price}
            </p>
            <img
              src={product.imageUrl || "placeholder.jpg"}
              alt={product.name}
              className="w-full h-40 object-cover mt-4 rounded-lg"
            />
            <p className="text-slate-600 mt-2 truncate">{product.name}</p>
            <div className="flex justify-center mt-4">
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg"
                onClick={(event) => handleAddToCart(product._id, event)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
