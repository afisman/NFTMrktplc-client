import React from 'react';
import { Spacer } from "@nextui-org/react";


import Style from '../styles/index.module.css';
import {
  HeroSection, Service, NFTSlider, Subscribe, Title,
  Category, Filter, NFTCard, Collection, FollowerTab,
  AudioLive, Slider, Brand, VideoCard
} from '../components/componentsIndex';

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <NFTSlider />
      <Spacer x={4} />
      <Title heading='Latest Audio Collection'
        paragraph='Discover the most outstanding audio NFTs.'
      />
      <AudioLive />
      <FollowerTab />
      <Slider />
      <Spacer x={4} />

      <Title heading='New Collection'
        paragraph='Discover the most outstanding NFTs.'
      />
      <Collection />
      <Spacer />
      <Title heading='Featured NFTs'
        paragraph='Explore the NFTs in the most featured categories.'
      />
      <Filter />
      <NFTCard />
      <Spacer x={4} />
      <Title heading='Browse by category'
        paragraph='Discover the most outstanding NFTs in all topics.'
      />
      <Category />
      <Subscribe />
      <Brand />
      <VideoCard />
    </div>
  )
}

export default Home
