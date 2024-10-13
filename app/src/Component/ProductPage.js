import React, { useState } from "react";
import Time1 from "../image/Watch4.jpg";
import Time2 from "../image/Watch2.jpg";
import Time3 from "../image/Time2.png";
import Time4 from "../image/Watch1.jpg";

import Puma from "../image/Puma.jpg"; 
import shirt from "../image/shirt.jpg";
import shoes from "../image/shoes.jpg";
import Footer from "./Footer";
const ProductPage = () => {
  
  const [currentImage, setCurrentImage] = useState(Time1);

  
  const productImages = [
    { id: 1, src: Time1, alt: "Front View" },
    { id: 2, src: Time2, alt: "Side View" },
    { id: 3, src: Time3, alt: "Back View" },
    { id: 4, src: Time4, alt: "On Hand View" },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const stylingIdeasImages = [
    { id: 1, src: Puma, alt: "Puma Shorts", price: "₹809", brand: "Puma" },
    { id: 2, src: shirt, alt: "ONN Polo T-Shirt", price: "₹529", brand: "ONN" },
    {
      id: 3,
      src: shoes,
      alt: "U.S. POLO Loafers",
      price: "₹6,999",
      brand: "U.S. POLO ASSN.",
    },
    {
      id: 4,
      src: Time1,
      alt: "Watch Image 1",
      price: "₹46,396",
      brand: "Casio",
    },
    {
      id: 5,
      src: Time2,
      alt: "Watch Image 2",
      price: "₹57,995",
      brand: "Casio",
    },
    {
      id: 6,
      src: Time3,
      alt: "Watch Image 3",
      price: "₹52,396",
      brand: "Casio",
    },
  ];

  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % stylingIdeasImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? stylingIdeasImages.length - 3 : prevIndex - 3
    );
  };

  return (
    <div className="  p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 grid grid-cols-3">
  
        <div class="  flex">
      
          <div className="flex flex-col mt-4 space-x-2">
            {productImages.map((image) => (
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${
                  currentImage === image.src
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                onClick={() => setCurrentImage(image.src)}
              />
            ))}
          </div>
          <div className="">
            <img
              src={currentImage}
              alt="Casio G-Shock GWG-B1000-3ADR"
              className="w-{200px} object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Product Description */}
        <div className=" col-span-2 md:pl-6 mt-6 md:mt-0">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 max-w-3xl  ">
            Casio G-Shock GWG-B1000-3ADR Gray IP Analog-Digital Dial Military
            Green Resin Strap Men's Watch Mud Resistant Tough Solar G1472
          </h2>

          {/* Ratings */}
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.26 3.896a1 1 0 00.95.691h4.104c.97 0 1.372 1.24.588 1.81l-3.322 2.415a1 1 0 00-.364 1.118l1.26 3.896c.3.921-.755 1.688-1.54 1.118l-3.322-2.415a1 1 0 00-1.175 0l-3.322 2.415c-.784.57-1.838-.197-1.54-1.118l1.26-3.896a1 1 0 00-.364-1.118L2.148 9.324c-.784-.57-.382-1.81.588-1.81h4.104a1 1 0 00.95-.691l1.26-3.896z" />
              </svg>
            </div>
            <span className="text-gray-600 text-sm ml-2">(5 ratings)</span>
          </div>

          {/* Price Section */}
          <div className="mt-4 flex items-center space-x-2">
            <span className="text-xl font-bold text-red-500">₹46,396</span>
            <span className="text-gray-400 line-through">₹57,995</span>
            <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
              -20%
            </span>
          </div>

          {/* Festival Offer */}
          <div className="mt-2 bg-yellow-400 text-yellow-800 text-xs font-semibold px-2 py-1 rounded inline-block">
            Great Indian Festival
          </div>

          {/* EMI Information */}
          <div className="mt-2 text-sm text-gray-600">
            EMI starts at ₹2,249. No Cost EMI available
          </div>

          {/* Offer Section */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Offers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {/* Bank Offer */}
              <div className="border rounded-lg p-4 shadow-md">
                <h4 className="text-gray-800 font-semibold">Bank Offer</h4>
                <p className="text-sm text-gray-600">
                  Upto ₹4,000.00 discount on SBI Credit Cards, SBI Debit Cards
                </p>
                <a href="#" className="text-blue-600 text-sm mt-2 inline-block">
                  10 offers &gt;
                </a>
              </div>

              {/* No Cost EMI */}
              {/* <div className="border rounded-lg p-4 shadow-md">
                  <h4 className="text-gray-800 font-semibold">No Cost EMI</h4>
                  <p className="text-sm text-gray-600">Upto ₹2,947.70 EMI interest savings on select Credit Cards</p>
                  <a href="#" className="text-blue-600 text-sm mt-2 inline-block">1 offer &gt;</a>
                </div> */}

              {/* Partner Offers */}
              <div className="border rounded-lg p-4 shadow-md">
                <h4 className="text-gray-800 font-semibold">Partner Offers</h4>
                <p className="text-sm text-gray-600">
                  Buy 2 get 5%, Buy 3 get 10% on Fossil, Casio & More
                </p>
                <a href="#" className="text-blue-600 text-sm mt-2 inline-block">
                  2 offers &gt;
                </a>
              </div>
            </div>
          </div>

          {/* SVG Section Below Offers */}
          <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl">
            <div className="flex flex-col items-center">
              <img src={Time2} alt="10 Days Returnable" className="h-8 w-8" />
              <p className="text-gray-600 text-sm mt-2">10 days Returnable</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={Time2} alt="Amazon Delivered" className="h-8 w-8" />
              <p className="text-gray-600 text-sm mt-2">Amazon Delivered</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={Time2} alt="Free Delivery" className="h-8 w-8" />
              <p className="text-gray-600 text-sm mt-2">Free Delivery</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={Time2} alt="Top Brand" className="h-8 w-8" />
              <p className="text-gray-600 text-sm mt-2">Top Brand</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={Time2} alt="Secure transaction" className="h-8 w-8" />
              <p className="text-gray-600 text-sm mt-2">Secure transaction</p>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="mt-6 bg-gray-100 p-4 rounded-lg max-w-3xl">
            <h3 className="text-2xl font-semibold text-gray-800">
              Product details
            </h3>
            <div className="mt-2 text-sm text-gray-700">
              <p class="text-lg font-medium">
                <strong>Case diameter:</strong> 52.1 Millimetres
              </p>
              <p class="text-lg font-medium">
                <strong>Band colour:</strong> Green
              </p>
              <p class="text-lg font-medium">
                <strong>Band material type:</strong> Resin
              </p>
              <p class="text-lg font-medium">
                <strong>Warranty type:</strong> Limited
              </p>
              <p class="text-lg font-medium">
                <strong>Watch movement type:</strong> Quartz
              </p>
              <p class="text-lg font-medium">
                <strong>Item weight:</strong> 114 Grams
              </p>
              <p class="text-lg font-medium">
                <strong>Country of Origin: </strong> Japan
              </p>
            </div>

            <hr className="my-8 border-t border-gray-300" />

            <div className="mt-10">
              
              {/* ... existing content ... */}

              {/* About This Item */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  About this item
                </h3>
                <div className="mt-2 text-sm text-gray-700">
                  <ul className="list-disc list-inside">
                    <li>Dial Color: Black, Strap Color: Green</li>
                    <li>
                      Strap Material: Resin, Clasp Type: Soft urethane band
                      (biomass plastics)
                    </li>
                    <li>Case Material: Resin, Water Resistant</li>
                    <li>Bluetooth Connectivity</li>
                  </ul>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Additional Information
                </h3>
                <div className="mt-2 text-sm text-gray-700">
                  <p>
                    <strong>Manufacturer:</strong> Imported by Casio India Co
                    Pvt Ltd
                  </p>
                  <p>
                    <strong>Importer:</strong> Casio India Co Pvt Ltd, MCIE,
                    Mathura Road, New Delhi
                  </p>
                  <p>
                    <strong>Item Dimensions LxWxH:</strong> 21.5 x 1.6 x 5.2
                    Centimeters
                  </p>
                  <p>
                    <strong>Generic Name:</strong> Casual Watch
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h5 className="text-4xl font-bold mb-4">Styling Ideas</h5>
              <div className="flex items-center">
                {/* Puma Image on the left */}
                <div className="mr-4">
                  <img
                    src={Puma}
                    alt="Puma Shorts"
                    className="w-32 h-32 object-cover rounded-lg shadow-md transition-transform duration-200 transform hover:scale-105"
                  />
                  <span className="text-sm text-center block mt-2">
                    Puma Shorts
                  </span>
                  <span className="text-sm text-gray-600 text-center block">
                    ₹809
                  </span>
                </div>

                <div className="relative flex justify-center">
                  <div
                    className="flex space-x-4 overflow-x-auto py-4"
                    style={{
                      maxWidth: "100%",
                      scrollbarWidth: "none",
                      "-ms-overflow-style": "none",
                    }}
                  >
                    {stylingIdeasImages
                      .slice(currentIndex, currentIndex + 3)
                      .map((image) => (
                        <div
                          key={image.id}
                          className="flex flex-col items-center"
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-32 h-32 object-cover rounded-lg   transition-transform duration-200 transform hover:scale-105"
                          />
                          <span className="text-sm mt-2">{image.brand}</span>
                          <span className="text-sm text-gray-600">
                            {image.price}
                          </span>
                          <span className="text-sm text-gray-600">
                            {image.price}
                          </span>
                        </div>
                      ))}
                  </div>

                  {/* Slider controls */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full mr-5 "
                  >
                    &lt;
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full ml-9"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="absolute  right-0 mt-5 top-24 mr-4 bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-lg w-64 h-30">
              <span className="text-2xl font-bold">₹46,396</span>
              <p className="text-sm text-green-600 mt-2">
                FREE delivery Thursday, 17 October
              </p>
              <p className="text-sm text-green-600">
                Or fastest delivery Tomorrow, 10 October
              </p>
              <p className="text-xs text-gray-600">Only 1 left in stock.</p>

              
              <div className="mt-10 h-96 bg-gray-50 p-4 rounded-lg shadow-lg">
                <label className="text-gray-600 text-sm font-semibold block mb-2">
                  Add a Protection Plan:
                </label>
                <div className="space-y-2">
                  <span className="text-gray-600 text-sm">
                    1 Year Extended Warranty for ₹3,734.98
                  </span>
                </div>
              </div>

              {/* Delivery Information */}
              <div className="mt-4 text-sm text-gray-600">
                <span>FREE delivery by 10 October</span>
                <span className="block mt-1">Delivering to Delhi 110008</span>

                <div className="mt-4 ">
                  <button className="w-full bg-yellow-500 text-white font-semibold py-2 rounded shadow hover:bg-yellow-600">
                    Add to Cart
                  </button>
                  <button className="w-full mt-2 bg-orange-500 text-white font-semibold py-2 rounded shadow hover:bg-orange-600">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductPage;
