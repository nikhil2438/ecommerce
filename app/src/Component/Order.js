import React from 'react';
import Footer from './Footer';
const Orders = () => {
  return (
    <>   
    {/* FLIGMRNT  */}
  
    <div className=" bg-gray-100 flex flex-col justify-center items-center mt-3">
      <h1 className="text-3xl font-semibold ">Your Orders</h1>
      <p className="text-xl text-gray-600">No orders found</p>
     
    </div>
    <Footer/>
    </>
  );
};

export default Orders;
