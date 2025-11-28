import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/header/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';

import Home from './components/home/Home.jsx';
import Cart from './components/cart/Cart.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />

      {/* ROUTES SECTION */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />

        {/* Optional placeholder pages */}
        <Route path="/products" element={<h2 className="p-6">Products Page</h2>} />
        <Route path="/checkout" element={<h2 className="p-6">Checkout Page</h2>} />
        <Route path="/login" element={<h2 className="p-6">Login Page</h2>} />
        <Route path="/wishlist" element={<h2 className="p-6">Wishlist Page</h2>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App;