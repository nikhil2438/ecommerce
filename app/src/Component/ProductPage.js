import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchProductDetails = async (productId) => {
    try {
      const response = await axios.get(
        `https://ever-deal.onrender.com/products/product/${productId}`
      );
      console.log(response.data);
      setProductData(response.data.data);
    } catch (error) {
      setError("Error fetching product details");
      console.error("Error fetching product details:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const productId = localStorage.getItem("productId");
    fetchProductDetails(productId);
  }, [productId]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!productData) return <div className="text-center">Product not found</div>;

  const { name, price, description, ratings, imageUrl } = productData;

  return (
    <div className="p-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={imageUrl} alt={name} className="w-full rounded-lg" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="text-xl text-gray-600 mt-2">₹{price}</p>
            <p className="mt-4 text-gray-800">{description}</p>
            <div className="mt-4">
              <h3 className="font-semibold">Rating:</h3>
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <span key={index}>{index < ratings ? "⭐" : "☆"}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
