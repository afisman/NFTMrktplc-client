import React from 'react';
import { motion } from 'framer-motion';
import Style from './SliderCard.module.css';
import Image from 'next/image';
import images from '../../../img'
import { LikeProfile } from '../../componentsIndex';

const SliderCard = ({ el, i }) => {
    return (
        <motion.div className={Style.sliderCard}>
            <motion.div className={Style.sliderCard_box}>
                <motion.div className={Style.sliderCard_box_img}>
                    <Image
                        src={images.nft_image_3}
                        alt='Slider profile'
                        width={500}
                        height={300}
                        style={{ objectFit: "cover" }}
                        className={Style.sliderCard_box_img_img}
                    />
                </motion.div>
                <motion.div className={Style.sliderCard_box_title}>
                    <p>NFT Video #1245</p>

                    <div className={Style.sliderCard_box_title_like}>
                        {/* <LikeProfile /> */}
                        <small>1 of 100</small>
                    </div>
                </motion.div>
                <motion.div className={Style.sliderCard_box_price}>
                    <div className={Style.sliderCard_box_price_box}>
                        <small>Current Bid</small>
                        <p>1.000 ETH</p>
                    </div>
                    <div className={Style.sliderCard_box_price_time}>
                        <small>Remaining time</small>
                        <p>4:20:22</p>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default SliderCard