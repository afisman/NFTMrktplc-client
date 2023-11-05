import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import Style from '../styles/connectWallet.module.css';
import images from "../img";


const connectWallet = () => {


    const [active, setActive] = useState(1);
    const providerArray = [
        { provider: images.providerMM, name: 'Metamask' },
        { provider: images.providerWC, name: 'Wallet Connect' }
    ]
    return (
        <div></div>
    )
}

export default connectWallet