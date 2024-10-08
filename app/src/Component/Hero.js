import React from 'react';
import Time2 from '../image/Time2.png';
import banner1 from '../image/banner1.png.jpg'
import Black from  '../image/Black.jpg'
import P from '../image/P.jpg'
import P2 from '../image/P2.jpg'
import Oven from '../image/Oven.jpg'
import Smart from '../image/Smart.png'
import ImageSlider from './ImageSlider';
const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <span key={index}>
          {index < rating ? '⭐' : '☆'}
        </span>  
      ))}
    </div>
  );
};
const Hero = () => {
  return (
    <div className='bg-slate-100 px-2'>
      <div className='md:flex gap-10 justify-between p-5 '>
      <div className='bg-white p-5'>
            <h4 className='text-slate-800 text-lg font-medium'>
             Helix Smart Metal fit 3.0 Smartwatch, Continuous Heart Rate Monitor, SPO2 Monitor, Activity tracking and sleep tracking, Bluetooth Calling, Temperature sensor (Pink)
            </h4>
            <StarRating rating={5}/>
            <p className="text-blue-800 text-lg font-medium">₹3386</p>
            <img src={Time2} alt="Banner" className="w-56 object-cover mx-auto mt-6" />
            <div class = "flex justify-center mt-5">
            <button class ="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg  ">Add To Cart</button>

            </div>
        </div>
        <div className='bg-white p-5'>
            <h4 className='text-slate-800 text-xl font-medium'>
              Helix Smart Metal fit 3.0 Smartwatch, Continuous Heart Rate Monitor, SPO2 Monitor, Activity tracking and sleep tracking, Bluetooth Calling, Temperature sensor (Pink)
            </h4>
            <StarRating rating={4}/>
            <p className="text-blue-800 text-xl font-medium  ">₹3386</p>
            <img src={Black} alt="Banner" className="w-48 object-cover mx-auto" />
            <div class = "flex justify-center mt-5">
            <button class ="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg">Add To Cart</button>

            </div>
        </div>
      </div>

      <div className='md:flex gap-10 justify-between p-5 '>
        <div className='bg-white p-5'>
            <h4 className='text-slate-800 text-base font-medium'>
              Helix Smart Metal fit 3.0 Smartwatch, Continuous Heart Rate Monitor, SPO2 Monitor, Activity tracking and sleep tracking, Bluetooth Calling, Temperature sensor (Pink)
            </h4>
            <StarRating rating={4}/>
            <p className="text-blue-800 text-lg font-medium">₹3386</p>
            <img src={P} alt="Banner" className="  h-52 object-cover mx-auto" />
            <div class = "flex justify-center mt-5">
            <button class ="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg">Add To Cart</button>

            </div>
        </div>
        <div className='bg-white p-5'>
            <h4 className='text-slate-800 text-base font-medium'>
            Helix METALFIT 2.0 Smart Watch, Bluetooth Calling, 1.5HD IPS Full-Touch Display, SPO2, Body Temperature & BP Measurement, 20 Sports Modes and Unlimited Watch Faces.
            </h4>
            <StarRating rating={4}/>
            <p className="text-blue-800 text-lg font-medium">₹5999</p>
            <img src={P2} alt="Banner" className=" h-52 object-cover mx-auto" />
            <div class = "flex justify-center mt-5">
            <button class ="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg ">Add To Cart</button>

            </div>
        </div>

        <div className='bg-white p-5'>
            <h4 className='text-slate-800 text-base font-medium'>
            Philips SpeedPro Cordless Stick vacuum cleaner - FC6723/01 FC6723/01 Cordless Vacuum Cleaner (Star White)
            </h4>
            <StarRating rating={3}/>
            <p className="text-blue-800 text-xl font-medium">₹3386</p>
            <img src={Oven} alt="Banner" className=" h-52 object-cover mx-auto" />
            <div class = "flex justify-center mt-5">
            <button class ="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg">Add To Cart</button>

            </div>
        </div>
      </div>
      <div>
      <div className='bg-white p-5'>
            <h4 className='text-slate-800 text-base font-medium'>
            ASUS Vivobook Go 14, AMD Ryzen 3 7320U, 14 (35.56 cm) FHD, Thin and Light Laptop (8 GB RAM/512GB SSD/Win11/Office 2021/42WHr /Black/1.38 kg), E1404FA-NK325WS Operating System: Windows 11 Home | Special Feature: Anti Glare Coating | Connectivity: Bluetooth; Ethernet; HDMI; USB; Wi-Fi
            </h4>
            <StarRating rating={5}/>
            <p className="text-blue-800 text-xl font-medium">₹3386</p>
            <img src={Smart} alt="Banner" className="w-[800px] h-40 object-cover mx-auto" />
            <div class = "flex justify-center mt-5">
            <button class ="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg ">Add To Cart</button>

            </div>
        </div>
        <div>
          <ImageSlider/>
      <div className='bg-white p-5'>
            <h4 className='text-slate-800 text-base font-medium'>
            ASUS Vivobook Go 14, AMD Ryzen 3 7320U, 14 (35.56 cm) FHD, Thin and Light Laptop (8 GB RAM/512GB SSD/Win11/Office 2021/42WHr /Black/1.38 kg), E1404FA-NK325WS Operating System: Windows 11 Home | Special Feature: Anti Glare Coating | Connectivity: Bluetooth; Ethernet; HDMI; USB; Wi-Fi
            </h4>
            <StarRating rating={5}/>
            <p className="text-blue-800 text-xl font-medium">₹3386</p>
            <img src={Smart} alt="Banner" className="w-[800px] h-40 object-cover mx-auto" />
            <div class = "flex justify-center mt-5">
            <button class ="bg-yellow-500 hover:bg-yellow-600  text-white py-2 px-4 rounded-lg">Add To Cart</button>

      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Hero;