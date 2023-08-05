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
            id: 2,
            name: "Eftau",
            collection: "Archives",
            price: "00000074664 ETH",
            like: 142,
            image: images.user1,
            nftImage: images.nft_image_2,
            time: {
                days: 27,
                hours: 10,
                minutes: 11,
                seconds: 35
            }
        },
        {
            title: "Test 3",
            id: 3,
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

    const inc = useCallback(() => {
        if (idNumber + 1 < sliderData.length) {
            setIdNumber(idNumber + 1)       //Check later
        }
    }, [idNumber, sliderData.length]);

    const dec = useCallback(() => {
        if (idNumber > 0) {
            setIdNumber(idNumber - 1)   //Check later
        }
    }, [idNumber]);

    // useEffect(() => {
    //     inc()
    // }, [])
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
                            <h4>{sliderData[idNumber].collection}</h4>
                        </div>
                    </div>
                    <div className={Style.NFTSlider_box_left_bidding}>
                        <div className={Style.NFTSlider_box_left_bidding_box}>
                            <small>Current Bid</small>
                            <p>{sliderData[idNumber].price} <span>- $222</span></p>
                        </div>

                        <p className={Style.NFTSlider_box_left_bidding_box_auction}>
                            <MdTimer className={Style.NFTSlider_box_left_bidding_box_icon} />
                            <span>Auction ending in</span>
                        </p>

                        <div className={Style.NFTSlider_box_left_bidding_box_timer}>
                            <div className={Style.NFTSlider_box_left_bidding_box_timer_item}>
                                <p>{sliderData[idNumber].time.days}</p>
                                <span>Days</span>
                            </div>
                            <div className={Style.NFTSlider_box_left_bidding_box_timer_item}>
                                <p>{sliderData[idNumber].time.hours}</p>
                                <span>Hours</span>
                            </div>
                            <div className={Style.NFTSlider_box_left_bidding_box_timer_item}>
                                <p>{sliderData[idNumber].time.minutes}</p>
                                <span>Minutes</span>
                            </div>
                            <div className={Style.NFTSlider_box_left_bidding_box_timer_item}>
                                <p>{sliderData[idNumber].time.seconds}</p>
                                <span>Seconds</span>
                            </div>
                        </div>
                        <div className={Style.NFTSlider_box_left_button}>
                            <Button btnName='Place' handleClick={() => { }} />
                            <Button btnName='View' handleClick={() => { }} />

                        </div>
                    </div>

                    <div className={Style.NFTSlider_box_left_sliderBtn}>
                        <TbArrowBigLeftLines className={Style.NFTSlider_box_left_sliderBtn_icon}
                            onClick={() => dec()}
                        />
                        <TbArrowBigRightLine className={Style.NFTSlider_box_left_sliderBtn_icon}
                            onClick={() => inc()}
                        />
                    </div>
                </div>
                <div className={Style.NFTSlider_box_right_box}>
                    <Image
                        src={sliderData[idNumber].nftImage}
                        alt='NFT image'
                        className={Style.NFTSlider_box_right_box_img}
                    />

                    <div className={Style.NFTSlider_box_right_box_like}>
                        <AiFillHeart />
                        <span>{sliderData[idNumber].like}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTSlider