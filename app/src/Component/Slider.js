
import React, { useState , useEffect } from 'react';


const Slider = () => {
    const [currentItem, setCurrentItem] = useState(0);
    
    const images = [
        "https://sndeal.netlify.app/static/media/banner_6.41fa274a21bd6c19f1ec.jpg",
        "https://sndeal.netlify.app/static/media/Banner_30.7da1721fe5c37d0cb10a.png" ,
        "https://sndeal.netlify.app/static/media/banner_5.c6b1f5d22ac30a7ce887.jpg",
        "https://sndeal.netlify.app/static/media/image.3d9309307871726d8ed6.png",
        "https://sndeal.netlify.app/static/media/image.ffb30fae7abe9abeb837.png"
        
        
    ];
    useEffect(() => {
      const intervalId = setInterval(nextItem, 1000); 

      return () => clearInterval(intervalId); 
  }, []);

    const nextItem = () => {
        setCurrentItem((prevItem) => (prevItem + 1) % images.length);
    };

    const prevItem = () => {
        setCurrentItem((prevItem) => (prevItem - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full p-5 z-10">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {images.map((image, index) => (
                    <div
                       key={index}
                        className={`carousel-item ${index === currentItem ? '' : 'hidden'}`}
                    >
                        <img src={image} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Slider;
