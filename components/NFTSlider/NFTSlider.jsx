import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

import { AiFillFire, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdVerified, MdTimer } from 'react-icons/md';
import { TbArrowBigLeftLines, TbArrowBigRightLine } from 'react-icons/tb';

import Style from './NFTSlider.module.css';
import { Button } from '../componentsIndex';
// import images from '../../img'

const NFTSlider = () => {

    const [idNumber, setIdNumber] = useState(1)

    const sliderData = [
        {
            title: "Test",
            id: 1,
            name: "Aleftau",
            collection: "Library",
            price: "00000064664 ETH",
            like: 243,
            image: images.user1,
            nftImage: images.nft_image_1,
            time: {
                days: 27,
                hours: 10,
                minutes: 1
            }
        }
    ]
    return (
        <div>NFTSlider</div>
    )
}

export default NFTSlider