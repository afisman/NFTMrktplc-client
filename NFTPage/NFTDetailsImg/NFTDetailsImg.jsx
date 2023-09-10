import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BsImages } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

import Style from './NFTDetailsImg.module.css';
import images from '../../img';

const NFTDetailsImg = () => {
    const [description, setDescription] = useState(true);
    const [details, setDetails] = useState(false);
    const [like, setLike] = useState(false);

    const likeNFT = () => {
        if (!like) {
            setLike(true);
        } else {
            setLike(false);
        }
    }

    const openDescription = () => {
        if (!description) {
            setDescription(true);
        } else {
            setDescription(false);
        }
    }

    const openDetails = () => {
        if (!details) {
            setDetails(true);
        } else {
            setDetails(false);
        }
    }

    return (
        <div className={Style.NFTDetailsImg}>
            <div className={Style.NFTDetailsImg_box}>
                <div className={Style.NFTDetailsImg_box_NFT}>
                    <div className={Style.NFTDetailsImg_box_NFT_like}>
                        <BsImages className={Style.NFTDetailsImg_box_NFT_like_icon} />
                        <p onClick={() => likeNFT()}>
                            {
                                like ?
                                    (<AiOutlineHeart className={Style.NFTDetailsImg_box_NFT_like_icon} />)
                                    :
                                    (<AiFillHeart className={Style.NFTDetailsImg_box_NFT_like_icon} />)
                            }
                            <span>23</span>
                        </p>
                    </div>

                    <div className={Style.NFTDetailsImg_box_NFT_img}>
                        <Image
                            src={images.nft_image_1}
                            alt='NFT image'
                            className={Style.NFTDetailsImg_box_NFT_img_img}
                        />
                    </div>
                </div>

                <div className={Style.NFTDetailsImg_box_description}
                    onClick={() => openDescription()}
                >
                    <p>Description</p>
                    {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}

                </div>

                {
                    description && (
                        <div className={Style.NFTDetailsImg_box_description_box}>
                            <p>Lorem ipsum dolor sit amet.
                                Cum modi aliquam eos minus obcaecati in consequatur mollitia
                                qui explicabo blanditiis et aliquam rerum sed optio doloribus?
                                Est rerum deserunt ut quia explicabo non nihil molestiae non
                                omnis molestiae aut dicta itaque.</p>
                        </div>
                    )
                }
                <div className={Style.NFTDetailsImg_box_details}
                    onClick={() => openDetails()}
                >
                    <p>Details</p>
                    {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                </div>

                {details && (

                    <div className={Style.NFTDetailsImg_box_details_box}>
                        <small>2000 x 2000 px. IMAGE(685KB) </small>
                        <p>
                            <small>Contract Address</small>
                            <br />
                            0x50iodahfidw23423sffer3gf334356d4a
                        </p>
                        <p>
                            <small>Token ID</small>
                            100300372864
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NFTDetailsImg