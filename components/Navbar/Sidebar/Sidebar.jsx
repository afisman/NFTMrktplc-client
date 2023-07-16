import React, { useState } from 'react'
import Link from 'next/link'
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


import Style from './Sidebar.module.css'
//import images
import { Button } from '../../componentsIndex'

const Sidebar = ({ setOpenSideMenu }) => {

    const [openDiscover, setOpenDiscover] = useState(false);
    const [openHelp, setOpenHelp] = useState(false);


    const discover = [
        {
            name: "Collection",
            link: "collection"
        },
        {
            name: "Search",
            link: "search"
        },
        {
            name: "Author Profile",
            link: "author-profile"
        },
        {
            name: "NFT Details",
            link: "NFT-details"
        },
        {
            name: "Account Setting",
            link: "account-setting"
        },
        {
            name: "Connect Wallet",
            link: "connect-wallet"
        },
        {
            name: "Blog",
            link: "blog"
        }
    ];

    const helpCenter = [
        {
            name: "About",
            link: "about"
        },
        {
            name: "Contact us",
            link: "contact-us"
        },
        {
            name: "Sign Up",
            link: "sign-up"
        },
        {
            name: "Sign In",
            link: "sign-in"
        },
        {
            name: "Subscription",
            link: "subscription"
        },
    ];

    const openDiscoverMenu = () => {
        if (!openDiscover) {
            setOpenDiscover(true);
        } else {
            setOpenDiscover(false);
        }
    }

    const openHelpMenu = () => {
        if (!openHelp) {
            setOpenHelp(true);
        } else {
            setOpenHelp(false);
        }
    }

    const closeSideBar = () => {
        setOpenSideMenu(false);
    }

    return (
        <div className={Style.sideBar}>
            <GrClose
                className={Style.sideBar_closeBtn}
                onClick={() => closeSideBar()}
            />

            <div className={Style.sideBar_box}>
                {/* <Image
                    src={images.logo}
                    alt='logo'
                    width={150}
                    height={150}
                /> */}
                <p>
                    Discover the most outstanding articles on all topics of NFT & write your own stories and share them
                </p>
                <div className={Style.sideBar_social}>
                    <a href='#'>
                        <TiSocialFacebook />
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
                    <a href='#'>
                        <TiSocialInstagram />
                    </a>
                </div>
            </div>

            <div className={Style.sideBar_menu}>
                <div>
                    <div className={Style.sideBar_menu_box} onClick={() => openDiscoverMenu()}>
                        <p>Discover</p>
                        <TiArrowSortedDown />
                    </div>
                    {
                        openDiscover && (
                            <div className={Style.sideBar_discover}>
                                {discover.map((e, index) => (
                                    <p key={index + 1}>
                                        <Link href={{ pathname: `${e.link}` }}>{e.name}</Link>
                                    </p>
                                ))}
                            </div>
                        )
                    }
                </div>

                <div>
                    <div className={Style.sideBar_menu_box} onClick={() => openHelpMenu()}>
                        <p>Help Center</p>
                        <TiArrowSortedDown />
                    </div>
                    {
                        openHelp && (
                            <div className={Style.sideBar_discover}>
                                {helpCenter.map((e, index) => (
                                    <p key={index + 1}>
                                        <Link href={{ pathname: `${e.link}` }}>{e.name}</Link>
                                    </p>
                                ))}
                            </div>
                        )
                    }
                </div>
            </div>

            <div className={Style.sideBar_button}>
                <Button btnName="Create" />
                <Button btnName="Connect wallet" />

            </div>
        </div>
    )
}

export default Sidebar