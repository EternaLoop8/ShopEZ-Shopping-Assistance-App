// src/pages/Home.jsx
import React from 'react'
import Categories from '../header/Categories.jsx'
import Banner from '../home/Banner.jsx'
import CategoryCard from '../home/CategoryCards'
import FAQs from '../home/FAQs'
import Features from '../home/Features'
import Testimonials from '../home/Testimonial'

const Home = () => {
  return (
    <>
      <Categories />
      <Banner />
      <CategoryCard />
      <Features />
      <Testimonials />
      <FAQs />
    </>
  );
};

export default Home;
