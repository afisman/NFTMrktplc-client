import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

import { AiFillFire, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdVerified, MdTimer } from 'react-icons/md';
import { TbArrowBigLeftLines, TbArrowBigRightLine } from 'react-icons/tb';

import Style from './NFTSlider.module.css';
import { Button } from '../componentsIndex';
import images from '../../img'

const NFTSlider = () => {

    const [idNumber, setIdNumber] = useState(1)

    const sliderData = [
        {
            title: "Test 1",
            id: 1,
            name: "Aleftau",
            collection: "Library",
            price: "00000064664 ETH",
            like: 243,
            image: images.user1,
            nftImage: images.nft_image_1,
            time: {
                days: 27,
                hours: 10,
                minutes: 11,
                seconds: 35
            }
        },
        {
            title: "Test 12",
            id: 1,
            name: "Eftau",
            collection: "Archives",
            price: "00000074664 ETH",
            like: 142,
            image: images.user1,
            nftImage: images.nft_image_1,
            time: {
                days: 27,
                hours: 10,
                minutes: 11,
                seconds: 35
            }
        },
        {
            title: "Test 3",
            id: 1,
            name: "Tau",
            collection: "Library",
            price: "00000064664 ETH",
            like: 243,
            image: images.user1,
            nftImage: images.nft_image_1,
            time: {
                days: 27,
                hours: 10,
                minutes: 11,
                seconds: 3
            }
        }
    ]
    return (
        <div className={Style.NFTSlider}>
            <div className={Style.NFTSlider_box}>
                <div className={Style.NFTSlider_box_left}>
                    <h2>
                        {sliderData[idNumber].title}
                    </h2>
                    <div className={Style.NFTSlider_box_left_creator_profile}>
                        <Image
                            className={Style.NFTSlider_box_left_creator_profile_img}
                            src={sliderData[idNumber].image}
                            alt='profile'
                            width={50}
                            height={50}
                        />
                        <div className={Style.NFTSlider_box_left_creator_profile_img}>
                            <p>Creator</p>
                            <h4>{sliderData[idNumber].name}{" "}
                                <span>
                                    <MdVerified />
                                </span>
                            </h4>
                        </div>
                    </div>

                    <div className={Style.NFTSlider_box_left_creator_collection}>
                        <AiFillFire className={Style.NFTSlider_box_left_creator_collection_icon} />

                        <div className={Style.NFTSlider_box_left_creator_collection_info}>
                            <p>Collection</p>
                            <h4>{sliderData[idNumber].name}</h4>
                        </div>
                    </div>
                    <div className={Style.NFTSlider_box_left_bidding}></div>
                </div>
            </div>
        </div>
    )
}

export default NFTSlider