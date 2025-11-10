import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FAQs from "./components/FAQs";

// Pages
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

const App = () => {
  return (
    <Router>
      {/* Navbar should always be visible */}
      <Navbar />

      {/* Define routes for pages */}
      <Routes>
        {/* 🏠 Home route */}
        <Route
          path="/"
          element={
            <>
              <Categories />
              <main>
                <Hero />
                <ProductCard />
                <Testimonials />
                <FAQs />
                <Footer />
              </main>
            </>
          }
        />

        {/* 🔐 Login page */}
        <Route path="/login" element={<Login />} />

        {/* 🛒 Cart page */}
        <Route path="/cart" element={<Cart />} />

        {/* ❤️ Wishlist page */}
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  );
};

export default App;
