import React from 'react';

import Style from '../styles/index.module.css';
import { HeroSection, Service, NFTSlider } from '../components/componentsIndex';

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <NFTSlider />
    </div>
  )
}

export default Home
