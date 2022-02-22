import React from 'react';
import NavBar from '../components/NavBar'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories';
import Products from '../components/Products';

const Home = () => {
  return (
    <div>
      <Announcement/>
        <NavBar />
        <Categories/>
        <Products/>
    </div>
  )
}
export default Home