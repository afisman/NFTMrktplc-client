import React, { useState } from 'react';
import Image from 'next/image';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TbPlayerPause, TbPlayerPlay } from 'react-icons/tb';

import Style from './SmallAudioCard.module.css';
import images from '../../../img';
import { LikeProfile } from '../../componentsIndex';


const SmallAudioCard = () => {

    const [play, setPlay] = useState(false);

    const playMusic = () => {
        if (!play) {
            setPlay(true);
        } else {
            setPlay(false);
        }
    }


    return (
        <div className={Style.smallAudioCard}>
            <div className={Style.smallAudioCard_box}>
                <Image
                    src={images.nft_image_2}
                    alt='music'
                    width={100}
                    height={100}
                    className={Style.smallAudioCard_box_img}
                />
                <div className={Style.smallAudioCard_box_info}>
                    <h4>NFT Music #1142</h4>
                    <div className={Style.smallAudioCard_box_info_box}>
                        <LikeProfile />
                        <div className={Style.smallAudioCard_box_info_box_price}>
                            <small>Price</small>
                            <p>1.42 ETH</p>
                        </div>
                    </div>
                </div>
                <div className={Style.smallAudioCard_box_playBtn}
                    onClick={() => playMusic()}>
                    {play ? (
                        <TbPlayerPause />
                    ) : (
                        <TbPlayerPlay />
                    )}
                </div>
            </div>
        </div>
    )
}

export default SmallAudioCard