import React, { useState } from 'react';

import Style from './AuthorTaps.module.css';
import Image from 'next/image';
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from 'react-icons/ti';

const AuthorTaps = ({ setCollectibles, setCreated, setLike, setFollower, setFollowing }) => {
    const [openList, setOpenList] = useState(false);
    const [active, setActive] = useState(0);
    const [selectedMenu, setSelectedMenu] = useState("Most Recent");
    return (
        <div>AuthorTaps</div>
    )
}

export default AuthorTaps