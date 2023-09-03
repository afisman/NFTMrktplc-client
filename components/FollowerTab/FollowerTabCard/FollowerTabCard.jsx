import React, { useState } from 'react';
import Image from 'next/image'
import { MdVerified } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';

import Style from './FollowerTabCard.module.css';

const FollowerTabCard = ({ i, el }) => {
    const [following, setFollowing] = useState(false);

    const followMe = () => {
        if (!following) {
            setFollowing(true);
        } else {
            setFollowing(false);
        }
    }


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
                        src={el.background}
                        className={Style.followerTabCard_box_img_img}
                        alt='profile background'
                        // width={500}
                        // height={300}
                        style={{ objectFit: "cover" }}

                    />
                </div>
                <div className={Style.followerTabCard_box_profile}>
                    <Image
                        src={el.user}
                        className={Style.followerTabCard_box_profile_img}
                        alt='Profile picture'
                    // width={90}
                    // height={90}
                    />
                </div>
                <div className={Style.followerTabCard_box_info}>
                    <div className={Style.followerTabCard_box_info_name}>
                        <h4>Tau lef {""}
                            <span>
                                <MdVerified />
                            </span>
                        </h4>
                        <p>3.69ETH</p>
                    </div>
                    <div className={Style.followerTabCard_box_info_following}>
                        {following ? (
                            <a onClick={() => followMe()} >
                                Follow{""}
                                <span>
                                    <TiTick />
                                </span>
                            </a>
                        ) : (
                            <a onClick={() => followMe()}>
                                Following
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FollowerTabCard