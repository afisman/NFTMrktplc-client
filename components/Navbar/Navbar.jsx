import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { MdNotifications } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg'


import Style from './Navbar.module.css'

import { Discover, Helpcenter, Notification, Profile, Sidebar } from './index'
import { Button } from '../componentsIndex'

const Navbar = () => {

    const [discover, setDiscover] = useState(false);
    const [help, setHelp] = useState(false);
    const [notification, setNotification] = useState(false);
    const [profile, setProfile] = useState(false);
    const [openSideMenu, setOpenSideMenu] = useState(false);

    const openMenu = (e) => {
        const btnText = e.target.innerText;

        if (btnText == "Discover") {
            if (discover) {
                setDiscover(false)
            } else {
                setDiscover(true);
                setHelp(false);
                setNotification(false);
                setProfile(false);
                setOpenSideMenu(false)
            }

        } else if (btnText == "Help Center") {
            if (help) {
                setHelp(false)
            } else {
                setDiscover(false);
                setHelp(true);
                setNotification(false);
                setProfile(false);
                setOpenSideMenu(false)
            }


        }
    }

    const openNotification = () => {
        if (!notification) {
            setDiscover(false);
            setHelp(false);
            setNotification(true);
            setProfile(false);
            setOpenSideMenu(false)
        } else {
            setNotification(false)
        }
    }

    const openProfile = () => {
        if (!profile) {
            setProfile(true);
            setDiscover(false);
            setHelp(false);
            setNotification(false);
            setOpenSideMenu(false)
        } else {
            setProfile(false);

        }
    }

    const openSideBar = () => {
        if (!openSideMenu) {
            setProfile(false);
            setDiscover(false);
            setHelp(false);
            setNotification(false);
            setOpenSideMenu(true)
        } else {
            setOpenSideMenu(false);

        }
    }

    return (
        <div className={Style.navbar_container}>
            <div className={Style.navbar_container_left}>
                <div className={Style.logo}>
                    {/* Images should go here
<Image src= {images.logo}
 alt='NFT marketplace" 
 width={100} 
 height={100}/>
*/}
                </div>
                <div className={Style.navbar_container_left_box_input}>
                    <div className={Style.navbar_container_left_box_input_box}>
                        <input type='text' placeholder='Search NFT' />
                        <BsSearch onClick={() => { }} className={Style.search_icon} />
                    </div>
                </div>
            </div>
            <div className={Style.navbar_container_right}>
                <div className={Style.navbar_container_right_discover}>
                    <p onClick={(e) => openMenu(e)}>Discover</p>
                    {
                        discover && (
                            <div className={Style.navbar_container_right_discover_box}>
                                <Discover />
                            </div>
                        )
                    }
                </div>
                <div className={Style.navbar_container_right_help}>
                    <p onClick={(e) => openMenu(e)}>Help Center</p>
                    {
                        help && (
                            <div className={Style.navbar_container_right_help_box}>
                                <Helpcenter />
                            </div>
                        )
                    }
                </div>
                <div className={Style.navbar_container_right_notify}>
                    <MdNotifications
                        className={Style.notify}
                        onClick={() => openNotification()}
                    />
                    {notification && <Notification />}
                </div>
                {/* Create Button section */}
                <div className={Style.navbar_container_right_button}>
                    <Button btnName='Create' handleClick={() => { }} />
                </div>

                <div className={Style.navbar_container_right_profile_box}>
                    <div className={Style.navbar_container_right_profile}>
                        {/* <Image
                            src={images.user1}
                            alt="Profile"
                            width={40}
                            height={40}
                            onClick={() => openProfile()}
                            className={Style.navbar_container_right_profile}
                        /> */}
                        <p onClick={() => { openProfile() }}>Profile</p>
                        {profile && <Profile />}
                    </div>
                </div>

                <div className={Style.navbar_container_right_menuBtn}>
                    <CgMenuRight className={Style.menuIcon}
                        onClick={() => openSideBar()}
                    />
                </div>
            </div>

            {
                openSideMenu && (
                    <div className={Style.sideBar}>
                        <Sidebar setOpenSideMenu={setOpenSideMenu} />
                    </div>
                )
            }

        </div>
    )
}

export default Navbar