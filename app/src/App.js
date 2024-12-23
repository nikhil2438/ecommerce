import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import CorporateGifting from "./Component/CorporateGift";
import About from "./Component/About";
import YourProduct from "./Component/YourProduct";
import Helloguest from "./Component/Helloguest";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Returnorder from "./Component/Returnorder";
import Cart from "./Component/Cart";
import AccountMenu from "./Component/AccountMenu";
import Profile from "./Component/Profile";
import SignInPage from "./Component/Sign";
import EditProfile from "./Component/EditProfile";
import Wishlist from "./Component/Wishlist";
import Orders from "./Component/Order";
import ChangePassword from "./Component/ChangePassword";
import Deleteaccount from "./Component/Deleteaccount";
import Hero from "./Component/Hero";
import ProductPage from "./Component/ProductPage";
import CreateAccountPage from "./Component/CreateAccountPage";
import Page from "./Component/Page";
import UpdatePassword from "./Component/UpdatePassword";
import Checkout from "./Component/Checkout";
import OrderPlaced from "./Component/Orderplaced";
import SearchBox from "./Component/Searchbox";
import Chatbot from "./Component/Chatbot";
const App = () => {
  return (
    <div className="w-screen flex flex-col min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Helloguest" element={<Helloguest />} />
        <Route path="/CorporateGifting" element={<CorporateGifting />} />
        <Route path="/YourProduct" element={<YourProduct />} />
        <Route path="/Returnorder" element={<Returnorder />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:orderId" element={<Orders />} />
        <Route path="/accountmenu" element={<AccountMenu />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/deleteaccount" element={<Deleteaccount />} />
        <Route path="/reset-password" element={<UpdatePassword />} />
        <Route path="/" element={<Hero />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/new-user" element={<CreateAccountPage />} />
        <Route path="/page" element={<Page />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-placed" element={<OrderPlaced />} />
        <Route path="/search-box" element={<SearchBox />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
