import React, { useState, useEffect } from 'react';

import Style from '../styles/author.module.css';
import { Banner, NFTCardTwo } from '../collectionPage/collectionIndex';
import images from '../img'
import { AuthorProfileCard, AuthorTaps, AuthorNFTCardBox } from '../authorPage/authorIndex'
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

    const followingArray = [
        {
            background: images.creatorbackground6,
            user: images.user6
        },
        {
            background: images.creatorbackground2,
            user: images.user2
        },
        {
            background: images.creatorbackground3,
            user: images.user3
        },
        {
            background: images.creatorbackground9,
            user: images.user9
        },
        {
            background: images.creatorbackground8,
            user: images.user8
        },
        {
            background: images.creatorbackground7,
            user: images.user7
        },

    ];

    const [collectibles, setCollectibles] = useState(true);
    const [created, setCreated] = useState(false);
    const [like, setLike] = useState(false);
    const [follower, setFollower] = useState(false);
    const [following, setFollowing] = useState(false);

    return (
        <div className={Style.author}>
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
            <AuthorNFTCardBox
                collectibles={collectibles}
                created={created}
                like={like}
                follower={follower}
                following={following}
            />
            <Title
                heading="Popular creators"
                paragraph="Click on icon and enjoy NFT music or audio"
            />

            <div className={Style.author_box}>
                {followingArray.map((el, i) => (
                    <FollowerTabCard key={i + 1} i={i} el={el} />

                ))}
            </div>
            <Brand />
        </div>
    )
}

export default author