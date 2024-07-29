import React from 'react'
import HomePage from '../Components/HomeComponent/HomePage'
import OurProducts from '../Components/HomeComponent/OurProducts';
import Slider from '../Components/HomeComponent/Slider';
import ProductBox from '../Components/HomeComponent/ProductBox';

const Home = () => {
  return (
    <div>
      <HomePage />
      <OurProducts/>
      <Slider/>
      <ProductBox/>
    </div>
  );
}

export default Home
