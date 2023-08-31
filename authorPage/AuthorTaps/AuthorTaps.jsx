import React, { useState } from 'react';

import Style from './AuthorTaps.module.css';
import Image from 'next/image';
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from 'react-icons/ti';

const AuthorTaps = ({ setCollectibles, setCreated, setLike, setFollower, setFollowing }) => {
    const [openList, setOpenList] = useState(false);
    const [active, setActive] = useState(0);
    const [selectedMenu, setSelectedMenu] = useState("Most Recent");

    const listArray = [
        "Created By Admin",
        "Most Appreciated",
        "Most Discussed",
        "Most Viewed",
    ]
    return (
        <div className={Style.autorTaps}>
            <div className={Style.autorTaps_box}>
                <div className={Style.autorTaps_box_left}>
                    <div className={Style.autorTaps_box_left_btn}>
                        <button
                            onClick={() => openTab(e)}
                            className={`${active == 1 ? Style.active : ""}`}
                        >
                            Collectibles{""}
                        </button>
                        <button
                            onClick={() => openTab(e)}
                            className={`${active == 2 ? Style.active : ""}`}
                        >
                            Created{""}
                        </button>
                        <button
                            onClick={() => openTab(e)}
                            className={`${active == 3 ? Style.active : ""}`}
                        >
                            Liked{""}
                        </button>
                        <button
                            onClick={() => openTab(e)}
                            className={`${active == 4 ? Style.active : ""}`}
                        >
                            Following{""}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorTaps