import React from 'react';

import Style from './collectionProfile.module.css';
import images from '../../img'
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialInstagram,

} from 'react-icons/ti';
import Image from 'next/image';

const collectionProfile = () => {
    const cardArr = [1, 2, 3, 4]
    return (
        <div className={Style.collectionProfile}>
            <div className={Style.collectionProfile_box}>
                <div className={Style.collectionProfile_box_left}>
                    <Image
                        src={images.nft_image_1}
                        alt='nft image'
                        // width={800}     //Try different approach
                        // height={800}
                        className={Style.collectionProfile_box_left_img}
                    />
                    <div className={Style.collectionProfile_box_left_social}>
                        <a href="#">
                            <TiSocialFacebook />
                        </a>
                        <a href="#">
                            <TiSocialLinkedin />
                        </a>
                        <a href="#">
                            <TiSocialTwitter />
                        </a>
                        <a href="#">
                            <TiSocialInstagram />
                        </a>
                    </div>
                </div>
                <div className={Style.collectionProfile_box_middle}>
                    <h1>Awesome NFT Collection</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent tortor lacus, aliquet quis ullamcorper et, consequat at nunc.
                        Sed non sem ornare, pretium eros nec, maximus neque.
                        Praesent ipsum elit, efficitur sed erat eget, gravida porttitor dui.
                        Etiam id lorem euismod, cursus est sed, bibendum lacus.
                    </p>
                    <div className={Style.collectionProfile_box_middle_box}>
                        {cardArr.map((el, i) => (
                            <div
                                className={Style.collectionProfile_box_middle_box_item}
                                key={i + 1}
                            >
                                <small>
                                    <p>${i + 1}3294</p>
                                    <span>+{i + 2}.11%</span>
                                </small>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={Style.collectionProfile_box_right}>

                </div>

            </div>
        </div>
    )
}

export default collectionProfile