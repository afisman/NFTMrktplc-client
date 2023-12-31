import React, { useEffect } from 'react';

import Style from './AuthorNFTCardBox.module.css';
import images from '../../img';
import { NFTCardTwo } from '../../collectionPage/collectionIndex';
import FollowerTabCard from '../../components/FollowerTab/FollowerTabCard/FollowerTabCard';

const AuthorNFTCardBox = ({ collectibles, created, like, follower, following }) => {

    const collectiblesArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
    ]

    const createdArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
    ]
    const likeArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
    ]

    const followerArray = [
        {
            background: images.creatorbackground1,
            user: images.user1
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
            background: images.creatorbackground4,
            user: images.user4
        },
        {
            background: images.creatorbackground5,
            user: images.user5
        },
    ]

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
    return (
        <div className={Style.authorNFTCardBox}>
            {collectibles && <NFTCardTwo NFTData={collectiblesArray} />}
            {created && <NFTCardTwo NFTData={createdArray} />}
            {like && <NFTCardTwo NFTData={likeArray} />}
            {follower && (
                <div className={Style.authorNFTCardBox_box}>
                    {followerArray.map((el, i) => (
                        <FollowerTabCard key={i + 1} i={i} el={el} />
                    )

                    )}
                </div>)
            }
            {following && (
                <div className={Style.authorNFTCardBox_box}>
                    {followingArray.map((el, i) => (
                        <FollowerTabCard key={i + 1} i={i} el={el} />
                    ))}
                </div>)
            }

        </div>
    )
}

export default AuthorNFTCardBox