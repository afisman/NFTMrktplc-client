import React, { useState } from 'react';

import Style from './AuthorTaps.module.css';
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
    ];

    const openDropDownList = () => {
        if (!openList) {
            setOpenList(true);
        } else {
            setOpenList(false);
        }
    }

    const openTab = (e) => {
        const btnText = e.target.innerText;
        switch (btnText) {
            case "Collectibles": {
                setCollectibles(true);
                setCreated(false);
                setFollower(false);
                setFollowing(false);
                setLike(false);
                setActive(1);
                break;
            }
            case "Created": {
                setCollectibles(false);
                setCreated(true);
                setFollower(false);
                setFollowing(false);
                setLike(false);
                setActive(2);
                break;
            }
            case "Liked": {
                setCollectibles(false);
                setCreated(false);
                setFollower(false);
                setFollowing(false);
                setLike(true);
                setActive(3);
                break;
            }
            case "Following": {
                setCollectibles(false);
                setCreated(false);
                setFollower(false);
                setFollowing(true);
                setLike(false);
                setActive(4);
                break;
            }
            case "Follower": {
                setCollectibles(false);
                setCreated(false);
                setFollower(true);
                setFollowing(false);
                setLike(false);
                setActive(5);
                break;
            }
            default: {
                setCollectibles(false);
                setCreated(false);
                setFollower(false);
                setFollowing(false);
                setLike(false);
                setActive(0);
            }
        }

    }
    return (
        <div className={Style.authorTaps}>
            <div className={Style.authorTaps_box}>
                <div className={Style.authorTaps_box_left}>
                    <div className={Style.authorTaps_box_left_btn}>
                        <button
                            onClick={(e) => openTab(e)}
                            className={`${active == 1 ? Style.active : ""}`}
                        >
                            Collectibles{""}
                        </button>
                        <button
                            onClick={(e) => openTab(e)}
                            className={`${active == 2 ? Style.active : ""}`}
                        >
                            Created{""}
                        </button>
                        <button
                            onClick={(e) => openTab(e)}
                            className={`${active == 3 ? Style.active : ""}`}
                        >
                            Liked{""}
                        </button>
                        <button
                            onClick={(e) => openTab(e)}
                            className={`${active == 4 ? Style.active : ""}`}
                        >
                            Following{""}
                        </button>
                        <button
                            onClick={(e) => openTab(e)}
                            className={`${active == 5 ? Style.active : ""}`}
                        >
                            Follower{""}
                        </button>
                    </div>
                </div>
                <div className={Style.authorTaps_box_right}>
                    <div className={Style.authorTaps_box_right_para} onClick={() => openDropDownList()}>
                        <p>{selectedMenu}</p>
                        {openList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                    </div>

                    {openList && (
                        <div className={Style.authorTaps_box_right_list}>
                            {listArray.map((el, i) => (
                                <div
                                    key={i + 1}
                                    onClick={() => setSelectedMenu(el)}
                                    className={Style.authorTaps_box_right_list_item}
                                >
                                    <p>{el}</p>
                                    <span>{selectedMenu == el && <TiTick />}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AuthorTaps