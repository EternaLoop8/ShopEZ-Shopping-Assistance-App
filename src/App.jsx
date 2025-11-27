import React from 'react';
import Navbar from './components/header/Navbar';
import Categories from './components/header/Categories';
import Banner from './components/home/Banner';
import CategoryCard from './components/home/CategoryCards';
import FAQs from './components/home/FAQs';
import Features from './components/home/Features';
import Testimonials from './components/home/Testimonial';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Categories/>
        <Banner />
        <CategoryCard />
        <Features />
        <Testimonials />
       <FAQs />
       <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App