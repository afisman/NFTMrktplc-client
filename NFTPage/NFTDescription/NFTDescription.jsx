import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    MdVerified,
    MdCloudUpload,
    MdTimer,
    MdReportProblem,
    MdOutlineDeleteSweep,
} from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { FaPercentage, FaWallet } from 'react-icons/fa';
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialInstagram,
} from 'react-icons/ti';
import { BiTransferAlt, BiDollar } from 'react-icons/bi';

import Style from './NFTDescription.module.css';
import images from '../../img';
import { Button } from '../../components/componentsIndex';
import { NFTTabs } from '../NFTDetailsIndex';



const NFTDescription = () => {
    const [social, setSocial] = useState(true);
    const [NFTMenu, setNFTMenu] = useState(false);
    const [provenance, setProvenance] = useState(true);
    const [history, setHistory] = useState(false);
    const [owner, setOwner] = useState(false);

    const historyArray = [
        images.user1,
        images.user2,
        images.user3,
        images.user4,
        images.user5,

    ];

    const provenanceArray = [
        images.user6,
        images.user7,
        images.user8,
        images.user9,
        images.user10,

    ];

    const ownerArray = [
        images.user11,
        images.user2,
        images.user6,
        images.user8,
        images.user9,

    ];

    const openSocial = () => {
        if (!social) {
            setSocial(true);
        } else {
            setSocial(false);
        }
    }

    const openNFTMenu = () => {
        if (!NFTMenu) {
            setNFTMenu(true);
        } else {
            setNFTMenu(false);
        }
    }

    const openTabs = (e) => {
        const btnText = e.target.innerText;
        if (btnText == 'Bid History') {
            setHistory(true);
            setProvenance(false);
            setOwner(false);
        } else if (btnText == 'Provenance') {
            setHistory(false);
            setProvenance(true);
            setOwner(false);
        }
    }

    const openOwner = () => {
        if (!owner) {
            setOwner(true);
            setHistory(false);
            setProvenance(false);
        } else {
            setOwner(false);
        }
    }

    return (
        <div className={Style.NFTDescription}>
            <div className={Style.NFTDescription_box}>
                <div className={Style.NFTDescription_box_share}>
                    <p>Virtual Worlds</p>
                    <div className={Style.NFTDescription_box_share_box}>
                        <MdCloudUpload
                            className={Style.NFTDescription_box_share_box_icon}
                            onClick={() => openSocial()}
                        />

                        {social && (
                            <div className={Style.NFTDescription_box_share_box_socialn}>
                                <a href="#">
                                    <TiSocialFacebook /> FaceBook
                                </a>
                                <a href="#">
                                    <TiSocialInstagram /> Instagram
                                </a>
                                <a href="#">
                                    <TiSocialLinkedin /> Linkedin
                                </a>
                                <a href="#">
                                    <TiSocialTwitter /> Twitter
                                </a>
                                <a href="#">
                                    <TiSocialYoutube /> Youtube
                                </a>
                            </div>
                        )}

                        <BsThreeDots
                            className={Style.NFTDescription_box_share_box_icon}
                            onClick={() => openNFTMenu()}
                        />

                        {NFTMenu && (
                            <div className={Style.NFTDescription_box_share_box_social}>
                                <a href="#">
                                    <BiDollar /> Change price
                                </a>
                                <a href="#">
                                    <BiTransferAlt /> Transfer
                                </a>
                                <a href="#">
                                    <MdReportProblem /> Report abuse
                                </a>
                                <a href="#">
                                    <MdOutlineDeleteSweep /> Delete item
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                <div className={Style.NFTDescription_box_profile}>
                    <h1>FA #11235</h1>
                    <div className={Style.NFTDescription_box_profile_box}>
                        <div className={Style.NFTDescription_box_profile_box_left}>
                            <Image
                                src={images.user7}
                                alt='User picture'
                                className={Style.NFTDescription_box_profile_box_left_img}
                            />
                            <div className={Style.NFTDescription_box_profile_box_left_info}>
                                <small>Creator</small>
                                <br />
                                <span>Alf <MdVerified /></span>
                            </div>
                        </div>
                        <div className={Style.NFTDescription_box_profile_box_right}>
                            <Image
                                src={images.user8}
                                alt='User picture'
                                className={Style.NFTDescription_box_profile_box_left_img}
                            />
                            <div className={Style.NFTDescription_box_profile_box_right_info}>
                                <small>Creator</small>
                                <br />
                                <span>Alf  <MdVerified /></span>
                            </div>
                        </div>


                        <div className={Style.NFTDescription_box_profile_bidding}>

                            <div className={Style.NFTDescription_box_profile_bidding_timer}>
                                <MdVerified /> <span>Auction ending in:</span>

                                <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
                                    <p>2 </p>
                                    <span>days</span>
                                </div>
                                <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
                                    <p>22 </p>
                                    <span>hours</span>
                                </div>
                                <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
                                    <p>33 </p>
                                    <span>minutes</span>
                                </div>
                                <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
                                    <p>12 </p>
                                    <span>seconds</span>
                                </div>
                            </div>

                            <div className={Style.NFTDescription_box_profile_bidding_price}>
                                <div className={Style.NFTDescription_box_profile_bidding_price_bid}>
                                    <small>Current Bid</small>
                                    <p>
                                        1.000 ETH <span>( ≈ $1620.13)</span>
                                    </p>
                                </div>

                                <span>[46 in stock]</span>
                            </div>

                            <div className={Style.NFTDescription_box_profile_bidding_button}>
                                <Button
                                    icon={<FaWallet />}
                                    btnName="Place bid"
                                    handleClick={() => { }}
                                    classStyle={Style.button}
                                />
                                <Button
                                    icon={<FaPercentage />}
                                    btnName="Make offer"
                                    handleClick={() => { }}
                                    classStyle={Style.button}
                                />
                            </div>
                            <div className={Style.NFTDescription_box_profile_bidding_tabs}>
                                <button onClick={(e) => openTabs(e)}>Bid History</button>
                                <button onClick={(e) => openTabs(e)}>Provenance</button>
                                <button onClick={() => openOwner()}>Owner</button>
                            </div>

                            {
                                history && (
                                    <div className={Style.NFTDescription_box_profile_bidding_card}>
                                        <NFTTabs dataTab={historyArray} icon={<MdVerified />} />
                                    </div>
                                )
                            }
                            {
                                provenance && (
                                    <div className={Style.NFTDescription_box_profile_bidding_card}>
                                        <NFTTabs dataTab={provenanceArray} icon={<MdVerified />} />
                                    </div>
                                )
                            }
                            {
                                owner && (
                                    <div className={Style.NFTDescription_box_profile_bidding_card}>
                                        <NFTTabs dataTab={ownerArray} icon={<MdVerified />} />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default NFTDescription