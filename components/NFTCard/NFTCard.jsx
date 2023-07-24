import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsImages } from 'react-icons/bs';

import Style from './NFTCard.module.css';
import Image from 'next/image';
import images from '../../img';

const NFTCard = () => {
    const featureArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const [like, setLike] = useState(true);

    const likeNft = () => {

    }
    return (
        <div className={Style.NFTCard}>
            {
                featureArray.map((el, i) => (
                    <div className={Style.NFTCard_box}
                        key={i + 1}
                    >
                        <div className={Style.NFTCard_box_img}>
                            <Image
                                src={images.nft_image_1}
                                alt='NFTimages'
                                width={600}
                                height={600}
                                className={Style.NFTCard_box_img_img}
                            />
                        </div>
                        <div className={Style.NFTCard_box_update}>
                            <div className={Style.NFTCard_box_update_left}>
                                <div className={Style.NFTCard_box_update_left_like}
                                    onClick={() => likeNft()}
                                >
                                    {
                                        like ? (
                                            <AiFillHeart />
                                        )
                                            :
                                            (
                                                <AiOutlineHeart className={Style.NFTCard_box_update_left_like_icon} />
                                            )
                                    }
                                    {""} 22
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default NFTCard