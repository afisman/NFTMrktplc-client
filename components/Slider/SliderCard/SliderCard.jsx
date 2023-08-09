import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Style from './SliderCard.module.css';
import Image from 'next/image';
import images from '../../../img'
import { LikeProfile } from '../../componentsIndex';

const SliderCard = ({ el, i }) => {
    return (
        <motion.div className={Style.sliderCard}>
            <div className={Style.sliderCard_box}>
                <motion.div className={Style.sliderCard_box_img}>
                    <Image
                        src={images.nft_image_2}
                        alt='Slider profile'
                        width={500}
                        height={300}
                        style={{ objectFit: "cover" }}
                    />
                </motion.div>
                <div className={Style.sliderCard_box_title}>
                    <p>NFT Video #1245</p>

                    <div className={Style.sliderCard_box_title_like}>
                        <LikeProfile />
                        <small>1 of 100</small>
                    </div>
                </div>
                <div className={Style.sliderCard_box_price}>
                    <div className={Style.sliderCard_box_price_box}>
                        <small>Current Bid</small>
                        <p>1.000 ETH</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default SliderCard