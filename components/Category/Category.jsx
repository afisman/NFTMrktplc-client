import React from 'react';
import Image from 'next/image';
import { BsCCircleFill } from 'react-icons/bs';

import Style from './Category.module.css';
import images from '../../img';

const Category = () => {
    const categoriesArray = [1, 2, 3, 4, 5, 6];
    return (
        <div className={Style.box_category}>
            <div className={Style.category}>
                {categoriesArray.map((el, i) => (
                    <div className={Style.category_box} key={i + 1}>
                        <Image
                            src={images.user3}
                            className={Style.category_box_img}
                            alt='Category image'
                            width={350}
                            height={150}
                        // objectFit='cover'
                        />

                        <div className={Style.category_box_title}>
                            <span>
                                <BsCCircleFill />
                            </span>
                            <div className={Style.category_box_title_info}>
                                <h4>Entertainment</h4>
                                <small>1995 NFT</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category