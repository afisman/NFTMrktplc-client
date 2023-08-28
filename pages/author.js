import React, { useState, useEffect } from 'react';

import Style from '../styles/author.module.css';
import { Banner, NFTCardTwo } from '../collectionPage/collectionIndex';
import images from '../img'
import { AuthorProfileCard, AuthorTaps, TabCard } from '../authorPage/authorIndex'
import { Brand, Title } from '../components/componentsIndex';
import FollowerTabCard from '../components/FollowerTab/FollowerTabCard/FollowerTabCard';

const author = () => {

    const popularArray = [
        images.user1,
        images.user2,
        images.user3,
        images.user4,
        images.user5,
        images.user6,
        images.user7,
        images.user8,
    ];

    const [collectibles, setCollectibles] = useState(true);
    const [created, setCreated] = useState(false);
    const [like, setLike] = useState(false);
    const [follower, setFollower] = useState(false);
    const [following, setFollowing] = useState(false);

    return (
        <div className={Style.banner}>
            <Banner bannerImage={images.creatorbackground5}
            />
            <AuthorProfileCard />
            <AuthorTaps
                setCollectibles={setCollectibles}
                setCreated={setCreated}
                setLike={setLike}
                setFollower={setFollower}
                setFollowing={setFollowing}
            />
            <Title
                heading="Popular creators"
                paragraph="Click on icon and enjoy NFT music or audio"
            />
            {/* {
                popularArray.map((el, i) => (
                    <FollowerTabCard key={i + 1} el={el} i={i} />
                ))
            } */}
            <Brand />
        </div>
    )
}

export default author