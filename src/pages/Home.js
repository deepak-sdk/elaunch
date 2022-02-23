
import React from 'react';
import NavBar from '../components/NavBar'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories';
import Products from '../components/Products';
import Slider from "./Slider";
import NewsLetter from '../components/NewsLetter';
import ProductList from "./ProductList";


const Home = () => {
  return (
    <div>

      <Announcement />
      <NavBar />
      <ProductList/>
      <Slider />
      <Categories/>
      <Products/>
      <NewsLetter/>
    </div>
  );
};
export default Home;
