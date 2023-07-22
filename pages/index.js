import React from 'react';

import Style from '../styles/index.module.css';
import { HeroSection, Service, NFTSlider, Subscribe, Title } from '../components/componentsIndex';

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <NFTSlider />
      <Subscribe />
      <Title heading='Browse by category' paragraph='Explore the NFTs in the most featured categories.' />
    </div>
  )
}

export default Home
