import React, { useState, useEffect } from 'react';
import { BsFillAlarmFill, BsCalendar3, BsCalendarDateFill } from 'react-icons/bs';

import Style from './Collection.module.css';
import DaysComponents from './DaysComponents/DaysComponents';

const Collection = () => {

    const [popular, setPopular] = useState(true);
    const [following, setFollowing] = useState(false);
    const [news, setNews] = useState(false);

    const CardArray = [1, 2, 3, 4, 5, 6, 7, 8];
    const followingArray = [1, 2, 3, 4];
    const newsArray = [1, 2, 3, 4, 5, 6];

    const openPopular = () => {

    }

    const openNews = () => {

    }

    const openFollower = () => {

    }

    return (
        <div className={Style.collection}>
            <div className={Style.collection_title}>
                <h2>Top List Creators</h2>
                <div className={Style.collection_collections}>
                    <div className={Style.collection_collections_btn}>
                        <button onClick={() => openPopular()}>
                            <BsFillAlarmFill /> Last 24 hours
                        </button>
                        <button onClick={() => openFollower()}>
                            <BsFillAlarmFill /> Last 7 days
                        </button>
                        <button onClick={() => openNews()}>
                            <BsCalendarDateFill /> Last 30 days
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection