import React from "react";
import logo from "../image/logo.png";

const CorporateGifting = () => {
  return (
    <div className="pt-2 px-4 sm:px-8">
      <div
        className="bg-cover bg-center py-12 text-white"
        style={{
          backgroundImage: 'url("https://example.com/gift-banner.jpg")',
        }}
      >
        <h1 className="text-4xl font-bold mb-4 text-center">
          Elevate Your Business Relationships
        </h1>
        <p className="text-lg text-center mb-6">
          Explore our curated corporate gift collection for employees, clients,
          and partners.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white">
            View Offers
          </button>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Exclusive Offers for Corporate Gifting
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Flat 20% Off</h3>
            <p>On orders above ₹50,000. Don’t miss out!</p>
          </div>
          <div className="border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Get a Free Gift</h3>
            <p>For every order above ₹10,000.</p>
          </div>
          <div className="border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Festive Discounts</h3>
            <p>Enjoy up to 25% off this New Year.</p>
          </div>
          <div className="border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Custom Branding</h3>
            <p>Get your logo on gifts at no extra cost.</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Our Gift Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Tech Gadgets</h3>
            <p>Power banks, Bluetooth speakers, and more.</p>
          </div>
          <div className="border p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Office Essentials</h3>
            <p>Notebooks, planners, pens, and desk accessories.</p>
          </div>
          <div className="border p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Personalized Gifts</h3>
            <p>Customized mugs, hampers, and gifts.</p>
          </div>
          <div className="border p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Festive Hampers</h3>
            <p>Chocolates, dry fruits, and premium gifts.</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-center mb-6">
          How It Works
        </h2>
        <div className="flex flex-col sm:flex-row justify-around text-center">
          <div className="p-6">
            <h3 className="font-semibold">Browse Our Collection</h3>
            <p>
              Explore a wide range of corporate gifts tailored to your needs.
            </p>
          </div>
          <div className="p-6">
            <h3 className="font-semibold">Customize Your Gifts</h3>
            <p>Add logos, messages, and make your gifts personal.</p>
          </div>
          <div className="p-6">
            <h3 className="font-semibold">Place Your Order</h3>
            <p>Simple and hassle-free bulk ordering process.</p>
          </div>
          <div className="p-6">
            <h3 className="font-semibold">Fast Delivery</h3>
            <p>Get your gifts delivered on time, every time.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gray-100 py-8">
        <h2 className="text-3xl font-semibold text-center mb-6">
          What Our Clients Say
        </h2>
        <div className="flex justify-center">
          <div className="w-2/3 text-center">
            <p className="italic">
              "The best gifting service we’ve used! Our employees loved the
              personalized hampers." - XYZ Corp.
            </p>
            <p className="italic mt-4">
              "Excellent quality and timely delivery. Highly recommended!" - ABC
              Pvt. Ltd.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-blue-50 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Order?</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
          Request a Quote
        </button>
      </div>
    </div>
  );
};

export default CorporateGifting;
