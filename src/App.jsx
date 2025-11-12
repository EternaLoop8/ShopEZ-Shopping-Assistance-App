import React from 'react';
import Navbar from './components/header/Navbar';
import Categories from './components/header/Categories';
import Banner from './components/home/Banner';
import CategoryCard from './components/home/CategoryCards';


const App = () => {
  return (
    <div>
      <Navbar />
      <Categories/>
      <Banner />
      <CategoryCard />
    </div>
  )
}

export default App