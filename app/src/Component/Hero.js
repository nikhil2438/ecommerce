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

const HeartButton = ({ productId }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const navigate = useNavigate();

  const handleClick = async (event) => {
    event.stopPropagation();

    try {
      await axios.post("https://ever-deal.onrender.com/users/addtowishlist", {
        productId,
      });

      setIsFavorited(!isFavorited);

      navigate("/wishlist");
    } catch (error) {
      console.error("Error adding product to wishlist:", error);
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill={isFavorited ? "red" : "none"}
      onClick={handleClick}
      strokeWidth="1.5"
      className="w-6 h-6 cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      />
    </svg>
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
          "https://ever-deal.onrender.com/products/listproducts"
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

  const handleAddToCart = async (productId) => {
    console.log(productId);
    localStorage.setItem("productId", productId);

    try {
      const res = await axios.post(
        "https://ever-deal.onrender.com/users/addtocart",
        {
          productId,
        }
      );

      navigate("/cart");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      setError("Could not add product to cart. Please try again.");
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/productpage`);
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="bg-gray-50 py-8 ">
      <div className=" container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 ">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white p-5 rounded-lg shadow-md w-full h-auto cursor-pointer flex flex-col md:flex-row  transition-transform transform hover:scale-105"
            onClick={() => {
              localStorage.setItem("productId", product._id);
              handleProductClick(product._id);
            }}
          >
            <div className="flex ">
              <div className="w-1/3 relative overflow-hidden">
                <img
                  src={product.imageUrl || "placeholder.jpg"}
                  alt={product.name}
                  className=" w-full h-48 object-contain rounded-md"
                />
              </div>

              <div className="w-2/3 pl-4">
                <div>
                  <h4 className="text-slate-800 text-lg font-semibold line-clamp-2">
                    {product.description}
                  </h4>
                  <StarRating rating={4} />
                  <p className="text-blue-800 text-lg font-medium mt-2">
                    ₹{product.price}
                  </p>
                  <p className="text-slate-600 mt-2 truncate">{product.name}</p>
                </div>
                <div className="flex  flex-col md:flex-row justify-between  mt-4  space-y-2 md:space-y-0">
                  <button
                    className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg "
                    onClick={(e) => {
                      e.stopPropagation();

                      handleAddToCart(product?._id);
                    }}
                  >
                    Add To Cart
                  </button>

                  <HeartButton productId={product._id} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
