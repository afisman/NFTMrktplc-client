import React from 'react';

import Style from '../styles/index.module.css';
import { HeroSection, Service, NFTSlider, Subscribe, Title, Category, Filter, NFTCard, Collection, FollowerTab } from '../components/componentsIndex';

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <NFTSlider />

      <FollowerTab />
      <Collection />
      <Title heading='Featured NFTs'
        paragraph='Explore the NFTs in the most featured categories.'
      />
      <Filter />
      <NFTCard />
      <Title heading='Browse by category'
        paragraph='Discover the most outstanding NFTs in all topics.'
      />
      <Category />
      <Subscribe />
    </div>
  )
}

export default Home
