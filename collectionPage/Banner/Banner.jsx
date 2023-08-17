import Image from 'next/image';
import React from 'react';

import Style from './Banner.module.css'

const Banner = ({ bannerImage }) => {
    return (
        <div className={Style.banner}>
            <div className={Style.banner_img}>
                <Image
                    src={bannerImage}
                    alt='background'
                    width={1600}
                    height={300}
                    style={{ objectFit: 'cover' }}
                />
            </div>

            <div className={Style.banner_img_mobile}>
                <Image
                    src={bannerImage}
                    height={900}
                    width={300}
                    style={{ objectFit: 'cover' }}
                    alt='background'
                />
            </div>
        </div>
    )
}

export default Banner