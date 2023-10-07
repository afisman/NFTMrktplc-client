import React from 'react';
import Image from 'next/image';
import { BsCCircleFill } from 'react-icons/bs';

import Style from './Category.module.css';
import images from '../../img';

const Category = () => {
    const categoriesArray = [images.creatorbackground1, images.creatorbackground10, images.creatorbackground2, images.creatorbackground3, images.creatorbackground4, images.creatorbackground11];
    return (
        <div className={Style.box_category}>
            <div className={Style.category}>
                {categoriesArray.map((el, i) => (
                    <div className={Style.category_box} key={i + 1}>
                        <Image
                            src={el}
                            className={Style.category_box_img}
                            alt='Category image'

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