


import React, { useState, useEffect } from 'react';

const HoverMenu = () => {
  // State to track whether the menu is hovered
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      document.body.style.overflow = 'hidden';  
    } else {
      document.body.style.overflow = 'auto';    
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isHovered]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Your Product Button or Label */}
      <div className="cursor-pointer text-white">Your</div>
      <h4>Product</h4>

      {/* Menu that appears on hover */}
      {isHovered && (
        <div className="fixed top-20 left-0 w-full h-[400px] z-50 flex justify-center">
          <div className="bg-slate-900 text-white w-[100%] p-5 rounded-lg shadow-lg md:h-96 fixed top-20">
            {/* Content inside the full screen hover menu */}
            <div className="grid md:grid-cols-4 gap-12">
              <div>
                <h2 className="text-xl font-semibold">Watches</h2>
                <ul className="list-disc list-inside">
                  <li className="font-normal">Digital watch</li>
                  <li className="font-normal">Analog watch</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Home Appliances</h2>
                <ul className="list-disc list-inside">
                  <li className="font-normal">Mixer</li>
                  <li className="font-normal">Microwave</li>
                  <li className="font-normal">Vacuum Cleaner</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Consumer Electronics</h2>
                <ul className="list-disc list-inside">
                  <li className="font-normal">Watches</li>
                  <li className="font-normal">Vacuum Cleaner</li>
                  <li className="font-normal">Television</li>
                  <li className="font-normal">Microwave</li>
                  <li className="font-normal">Mixer</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Bottles & Cookware</h2>
                <ul className="list-disc list-inside">
                  <li className="font-normal">Bottles-single wall</li>
                  <li className="font-normal">Bottles-Double wall</li>
                  <li className="font-normal">Double wall Bottles-GIFT SET</li>
                  <li>Borosilicate Glass Bottles</li>
                  <li className="font-normal">Vacuum Mug Series</li>
                  <li className="font-normal">Vacuum Insulated Lunch Box</li>
                  <li className="font-normal">Flame Guard Loose Cookware</li>
                  <li className="font-normal">Triply Non Stick Cookware</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HoverMenu;
