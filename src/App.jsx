import React from 'react'
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <div className="hidden md:block"><Navbar /></div>
    <div><Categories /></div>
    <main className="mt-20">
        <Hero />
        <ProductCard />
        <Testimonials />
        <div>
            <Footer />
        </div>
      

    </main>
    </> 
  );
}

export default App