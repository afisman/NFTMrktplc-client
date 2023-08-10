import React from 'react';

import Style from '../styles/index.module.css';
import { HeroSection, Service, NFTSlider, Subscribe, Title, Category, Filter, NFTCard, Collection, FollowerTab, AudioLive, Slider } from '../components/componentsIndex';

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <NFTSlider />
      <Title heading='Latest Audio Collection'
        paragraph='Discover the most outstanding audio NFTs.'
      />
      <AudioLive />
      <FollowerTab />
      <Slider />
      <Title heading='New Collection'
        paragraph='Discover the most outstanding NFTs.'
      />
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
