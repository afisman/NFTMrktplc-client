import React from 'react'
import Image from 'next/image'
import { GrClose } from 'react-icons/gr'
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialInstagram,
    TiArrowSortedDown,
    TiArrowSortedUp
} from 'react-icons/ti'
import { RiSendPlaneFill } from 'react-icons/ri'

import images from '../../img'

import Style from './Footer.module.css'
import { Discover, Helpcenter } from '../Navbar/index'

const Footer = () => {
    return (
        <div className={Style.footer}>
            <div className={Style.footer_box}>
                <div className={Style.footer_box_social}>
                    <Image
                        src={images.logo}
                        alt='footer logo'
                        height={100}
                        width={100}
                    />
                    <p>
                        NFT market place, more description.
                    </p>

                    <div className={Style.footer_social}>
                        <a href='#'>
                            <TiSocialFacebook />
                        </a>
                        <a href='#'>
                            <TiSocialInstagram />
                        </a>
                        <a href='#'>
                            <TiSocialLinkedin />
                        </a>
                        <a href='#'>
                            <TiSocialTwitter />
                        </a>
                        <a href='#'>
                            <TiSocialYoutube />
                        </a>
                    </div>
                </div>

                <div className={Style.footer_box_discover}>
                    <h3>Discover</h3>
                    <Discover />
                </div>

                <div className={Style.footer_box_help}>
                    <h3>Help Center</h3>
                    <Helpcenter />
                </div>

                <div className={Style.subscribe}>
                    <h3>
                        Subscribe
                    </h3>

                    <div className={Style.subscribe_box}>
                        <input type='email' placeholder='Enter your email *' name='email' />
                        <RiSendPlaneFill className={Style.subscribe_box_send} />
                    </div>

                    <div className={Style.subscribe_box_info}>
                        <p>
                            Discover, collect and sell extraordinary NFTs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer