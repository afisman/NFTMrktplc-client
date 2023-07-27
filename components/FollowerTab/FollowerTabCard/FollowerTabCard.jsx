import React, { useState } from 'react';
import Image from 'next/image'
import { MdVerified } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';

import Style from './FollowerTabCard.module.css';
import images from '../../../img'

const FollowerTabCard = ({ i, el }) => {
    const [following, setFollowing] = useState(false);

    return (
        <div className={Style.followerTabCard}>
            <div className={Style.followerTabCard_rank}>
                <p>
                    #{i + 1} <span>🥇</span>
                </p>
            </div>
            <div className={Style.followerTabCard_box}>
                <div className={Style.followerTabCard_box_img}>
                    <Image
                        src={images.user1}
                        alt='profile background'

                    />
                </div>
            </div>
        </div>
    )
}

export default FollowerTabCard