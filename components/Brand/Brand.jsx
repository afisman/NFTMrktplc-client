import React from 'react';
import Image from 'next/image';

import Style from './Brand.module.css';
import images from '../../img';
import { Button } from '../componentsIndex';

const Brand = () => {
    return (
        <div className={Style.brand}>
            <div className={Style.brand_box}>
                <div className={Style.brand_box_left}>
                    <Image src={images.creatorbackground1}
                        alt='brand logo'
                        width={100}
                        height={100}
                        className={Style.brand_box_left_img}
                    />
                    <h1>Test Headline for brand</h1>
                    <p>Test paragraph for brand</p>

                    <div className={Style.brand_box_left_btn}>
                        <Button btnName={'Create'} handleClick={() => { }} />
                        <Button btnName={'Discover'} handleClick={() => { }} />

                    </div>
                </div>
                <div className={Style.brand_box_right}>
                    <Image
                        src={images.nft_image_3}
                        alt='brand logo'
                        width={800}
                        height={600}
                        className={Style.brand_box_right_img}
                    />
                </div>
            </div>

        </div>
    )
}

export default Brand