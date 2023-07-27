import React from 'react';
import Image from 'next/image';
import { MdVerified } from 'react-icons/md';

import Style from './DaysComponents.module.css';
import images from '../../../img';

const DaysComponents = () => {
    return (
        <div className={Style.daysComponent}>
            <div className={Style.daysComponent_box}>
                <div className={Style.daysComponent_box_img}>
                    <Image src={images.nft_image_2}
                        className={Style.daysComponent_box_img_img}
                        alt='Profile background'
                        width={500}
                        height={300}
                    // objectFit='cover'
                    />
                </div>
                <div className={Style.daysComponent_box_profile}>
                    <Image
                        src={images.nft_image_1}
                        alt='profile'
                        width={200}
                        height={200}
                        className={Style.daysComponent_box_img_1}
                    // objectFit='cover'
                    />
                    <Image
                        src={images.nft_image_1}
                        alt='profile'
                        width={200}
                        height={200}
                        className={Style.daysComponent_box_img_2}
                    // objectFit='cover'
                    />
                    <Image
                        src={images.nft_image_1}
                        alt='profile'
                        width={200}
                        height={200}
                        className={Style.daysComponent_box_img_3}
                    // objectFit='cover'
                    />

                </div>
                <div className={Style.daysComponent_box_title}>
                    <h2>Amazing Collection</h2>
                    <div className={Style.daysComponent_box_title_info}>
                        <div className={Style.daysComponent_box_title_info_profile}>
                            <Image
                                src={images.user1}
                                alt='Profile image'
                                width={30}
                                height={30}
                                className={Style.daysComponent_box_title_info_profile_img}
                            />
                            <p>Creator
                                <span>Alef Tau</span>
                                <small><MdVerified /></small>
                            </p>
                        </div>
                        <div className={Style.daysComponent_box_title_info_profile}>
                            <small>1.333 ETH</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DaysComponents