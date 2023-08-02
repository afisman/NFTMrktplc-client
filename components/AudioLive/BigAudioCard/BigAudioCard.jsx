import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TbPlayerPause, TbPlayerPlay } from 'react-icons/tb';

import images from '../../../img';
import Style from './BigAudioCard.module.css';

const BigAudioCard = () => {
    const [like, setLike] = useState(false);
    const [play, setPlay] = useState(false);

    const likeNft = () => {
        if (!like) {
            setLike(true);
        } else {
            setLike(false);
        }
    }

    const playMusic = () => {
        if (!play) {
            setPlay(true);
        } else {
            setPlay(false);
        }
    }
    return (
        <div className={Style.bigAudioCard}>
            <div className={Style.bigAudioCard_box}>
                <div className={Style.bigAudioCard_box_like_time}>
                    <div className={Style.bigAudioCard_box_like}
                        onClick={() => likeNft()}>
                        {like ? (
                            <AiFillHeart className={Style.bigAudioCard_box_like_icon} />
                        ) : (
                            <AiOutlineHeart className={Style.bigAudioCard_box_like_icon_unlike} />
                        )}

                        <span>24</span>
                    </div>
                    <div className={Style.bigAudioCard_box_time}>
                        <div className={Style.bigAudioCard_box_time_remaining}>
                            <small>Remaining time</small>
                            <h5>3h : 15m: 20s</h5>
                        </div>
                    </div>
                </div>
                <div className={Style.bigAudioCard_box_player}>
                    <Image
                        src={images.nft_image_1}
                        alt='music'
                        width={200}
                        height={200}
                    />
                    <div className={Style.bigAudioCard_box_musicPlayer}
                        onClick={() => playMusic()}
                    >
                        {play ? (
                            <div className={Style.bigAudioCard_box_musicPlayer_icon}>
                                <TbPlayerPause />
                            </div>
                        )
                            :
                            (
                                <div className={Style.bigAudioCard_box_musicPlayer_icon}>
                                    <TbPlayerPlay />
                                </div>
                            )}
                    </div>
                </div>
            </div>
            <div className={Style.bigAudioCard_box_details}>
                <div className={Style.bigAudioCard_box_details_info}>
                    <h4>NFT Music #11234</h4>
                    <div className={Style.bigAudioCard_box_details_info_price}>
                        <p>$3,221.33</p>
                    </div>
                </div>
                <div className={Style.bigAudioCard_box_details_stock}>
                    <small>24 in stock</small>
                </div>
            </div>
            <div className={Style.bigAudioCard_box_img}>
                <Image
                    src={images.user1}
                    alt='background'
                    width={500}
                    height={500}
                    className={Style.bigAudioCard_box_img_img}
                />
            </div>
        </div>
    )
}

export default BigAudioCard