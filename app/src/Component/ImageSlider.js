






import React, { useState } from 'react';

import Watch1 from '../image/Watch1.jpg';      
 import Watch2 from '../image/Watch2.jpg';  

 import Watch3 from '../image/Watch3.jpg';
 import Watch4 from '../image/Watch4.jpg';
 import Watch5 from '../image/Watch5.jpg';
 

 import Watch6 from '../image/Watch6.jpg'; 
 import Watch7 from '../image/Watch7.jpg';
 import Watch8 from '../image/Watch8.jpg';
 
 

 

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { id: 1, title: 'Helix by Timex Analog Silver Dial', price: 2795, image: Watch1, rating: 1 },
    { id: 2, title: 'Helix Analog Silver Dial Men’s Watch', price: 2395, image: Watch2, rating: 2 },
    { id: 3, title: 'Helix TW052HL02 Women’s Watch', price: 2995, image: Watch3, rating: 3 },
    { id: 4, title: 'Timex Digital Watch', price: 1995, image: Watch4, rating: 4 },
    { id: 5, title: 'Helix Analog Gold Dial Watch', price: 3495, image: Watch5, rating: 5 },
    { id: 6, title: 'Timex Sports Watch', price: 1595, image: Watch6, rating: 3 },
    { id: 7, title: 'Helix Smart Analog Watch', price: 3995, image: Watch7, rating: 4 },
    { id: 8, title: 'Timex Silver Dial Women’ Watch', price: 2595, image: Watch8, rating: 2 },
  ];

  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3 >= items.length ? 0 : prevIndex + 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 < 0 ? items.length - 3 : prevIndex - 3));
  };

  const displayedItems = items.slice(currentIndex, currentIndex + 3);

  return (
    <div className="relative w-full p-4 ">
      <div className="grid grid-cols-1 md:grid-cols-3 bg-white gap-4">
        {displayedItems.map((item) => (
          <div key={item.id} className="border border-gray-300 rounded-lg shadow-md p-4 text-center">
            <h3 className="text-lg text-left font-semibold mb-2">{item.title}</h3>
            <p className="text-xl text-left font-bold mb-2">₹{item.price}</p>
            <img src={item.image} alt={item.title} className="h-32 mx-auto mb-4" />
            
            <div className="flex justify-center mb-4">
              {[...Array(item.rating)].map((_, index) => (
                <span key={index} className="text-yellow-500">★</span>
              ))}
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded hover:bg-yellow-500 w-12 h-20 flex items-center justify-center"
        onClick={prevSlide}
      >
        &#8592;
      </button>

      {/* Next Button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded  hover:bg-yellow-500 w-12  h-20 flex items-center justify-center"
        onClick={nextSlide}
      >
        &#8594;
      </button>
    </div>
  );
};

export default ImageSlider;
