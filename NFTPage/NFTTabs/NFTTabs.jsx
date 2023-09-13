import React from 'react';


import Style from './NFTTabs.module.css';
import Image from 'next/image';

const NFTTabs = ({ dataTab, icon }) => {
    return (
        <div className={Style.NFTTabs}>
            {
                dataTab.map((el, i) => (
                    <div className={Style.NFTTabs_box} key={i + 1}>
                        <Image
                            src={el}
                            alt='profile image'
                            className={Style.NFTTabs_box_img}
                        />
                        <div className={Style.NFTTabs_box_info}>
                            <span>
                                Highest offer is $$770 by <small>Tau Lef</small>
                            </span>
                            {icon}
                            <small>Sept 13 - 14:20 CET</small>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default NFTTabs