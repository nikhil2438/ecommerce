// import React from 'react';
import Slider from './Slider';
import Hero from './Hero';
import Footer from './Footer';
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const handleLanguageChange = (language) => {
    console.log(`Language selected: ${language}`);
  };

  const scrollTOTOP = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Slider />
      <Hero />
      
      {/* Back to top button */}
      <div
        className="bg-slate-500 p-4 text-center mt-5 cursor-pointer mb-0" // added mb-0
        onClick={scrollTOTOP} 
      >
        Back to top
      </div>

      {/* Footer without margin to ensure no gap */}
      <Footer />
    </div>
  );
};

export default Home;
