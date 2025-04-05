import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WishlistProvider } from "./context/WishlistContext";

// Pages
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Footer from "./Components/Footer";
import UserProfile from "./Pages/UserProfile";
import Wishlist from "./Pages/Wishlist";

function App() {
  const location = useLocation();
  const hideNavbarFooterRoutes = ["/login", "/signup", "/Signup", "/Login"];
  const showNavbarFooter = !hideNavbarFooterRoutes.includes(location.pathname);

  return (
    <WishlistProvider>
      <div className="App">
        {showNavbarFooter && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        {showNavbarFooter && <Footer />}
        <ToastContainer />
      </div>
    </WishlistProvider>
  );
}

export default App;
