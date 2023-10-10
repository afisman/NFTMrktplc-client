import React, { useState, useEffect } from 'react';
import { BsFillAlarmFill, BsCalendar3, BsCalendarDateFill } from 'react-icons/bs';

import Style from './Collection.module.css';
import DaysComponents from './DaysComponents/DaysComponents';
import images from '../../img';

const Collection = () => {

    const [popular, setPopular] = useState(true);
    const [following, setFollowing] = useState(false);
    const [news, setNews] = useState(false);

    const cardArray = [
        {
            background: images.creatorbackground1,
            user: images.user1
        },
        {
            background: images.creatorbackground2,
            user: images.user2
        },
        {
            background: images.creatorbackground3,
            user: images.user3
        },
        {
            background: images.creatorbackground4,
            user: images.user4
        },
        {
            background: images.creatorbackground5,
            user: images.user5
        },
        {
            background: images.creatorbackground6,
            user: images.user6
        },
        {
            background: images.creatorbackground7,
            user: images.user7
        },
    ];

    const followingArray = [
        {
            background: images.creatorbackground1,
            user: images.user1
        },
        {
            background: images.creatorbackground2,
            user: images.user2
        },
        {
            background: images.creatorbackground3,
            user: images.user3
        },
        {
            background: images.creatorbackground4,
            user: images.user4
        },

    ];

    const newsArray = [
        {
            background: images.creatorbackground1,
            user: images.user1
        },
        {
            background: images.creatorbackground2,
            user: images.user2
        },
        {
            background: images.creatorbackground3,
            user: images.user3
        },
        {
            background: images.creatorbackground4,
            user: images.user4
        },
        {
            background: images.creatorbackground5,
            user: images.user5
        },
        {
            background: images.creatorbackground6,
            user: images.user6
        },

    ];

    const openPopular = () => {
        if (!popular) {
            setPopular(true);
            setFollowing(false);
            setNews(false);
        }
    }

    const openNews = () => {
        if (!news) {
            setPopular(false);
            setFollowing(false);
            setNews(true);
        }
    }

    const openFollower = () => {
        if (!following) {
            setPopular(false);
            setFollowing(true);
            setNews(false);
        }
    }

    return (
        <div className={Style.collection}>
            <div className={Style.collection_title}>
                <h2>Top Collections</h2>
                <div className={Style.collection_collections}>
                    <div className={Style.collection_collections_btn}>
                        <button onClick={() => openPopular()}>
                            <BsFillAlarmFill /> 24 hours
                        </button>
                        <button onClick={() => openFollower()}>
                            <BsCalendar3 /> 7 days
                        </button>
                        <button onClick={() => openNews()}>
                            <BsCalendarDateFill /> 30 days
                        </button>
                    </div>
                </div>
            </div>

            {
                popular && (
                    <div className={Style.collection_box}>
                        {cardArray.map((el, i) => (
                            <DaysComponents key={i + 1} el={el} i={i} />
                        ))}
                    </div>
                )
            }

            {
                following && (
                    <div className={Style.collection_box}>
                        {followingArray.map((el, i) => (
                            <DaysComponents key={i + 1} el={el} i={i} />
                        ))}
                    </div>
                )
            }

            {
                news && (
                    <div className={Style.collection_box}>
                        {newsArray.map((el, i) => (
                            <DaysComponents key={i + 1} el={el} i={i} />
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default Collection