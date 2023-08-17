import React from 'react';
import Image from 'next/image';
import { MdVerified } from 'react-icons/md';

import Style from './DaysComponents.module.css';
import images from '../../../img';

const DaysComponents = ({ el, i }) => {
    return (
        <div className={Style.daysComponent}>
            <div className={Style.daysComponent_box}>
                <div className={Style.daysComponent_box_img}>
                    <Image src={el.background}
                        className={Style.daysComponent_box_img_img}
                        alt='Profile background'
                        width={500}
                        height={300}
                        style={{ objectFit: "cover" }} />
                </div>
                <div className={Style.daysComponent_box_profile}>
                    <Image
                        src={images.nft_image_1}
                        alt='profile'
                        width={200}
                        height={150}
                        className={Style.daysComponent_box_img_1}
                    />
                    <Image
                        src={images.nft_image_2}
                        alt='profile'
                        width={200}
                        height={150}
                        className={Style.daysComponent_box_img_2}
                    />
                    <Image
                        src={images.nft_image_3}
                        alt='profile'
                        width={200}
                        height={150}
                        className={Style.daysComponent_box_img_3}
                    />

                </div>
                <div className={Style.daysComponent_box_title}>
                    <h2>Amazing Collection</h2>
                    <div className={Style.daysComponent_box_title_info}>
                        <div className={Style.daysComponent_box_title_info_profile}>
                            <Image
                                src={el.user}
                                alt='Profile image'
                                width={30}
                                height={30}
                                className={Style.daysComponent_box_title_info_profile_img}
                            />
                            <p>Creator
                                <span> {" "}Alef Tau</span>
                                <small><MdVerified /></small>
                            </p>
                        </div>
                        <div className={Style.daysComponent_box_title_info_price}>
                            <small>1.333 ETH</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DaysComponents