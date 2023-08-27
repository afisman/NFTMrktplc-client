import React, { useState } from 'react';

import Image from 'next/image';
import { MdCloudUpload, MdOutlineReportProblem, MdVerified } from 'react-icons/md';
import { FiCopy } from 'react-icons/fi';
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti';
import { BsThreeDots } from 'react-icons/bs';


import Style from './AuthorProfileCard.module.css';
import images from '../../img';
import { Button } from '../../components/componentsIndex';

const AuthorProfileCard = () => {

    const [share, setShare] = useState(false);
    const [report, setReport] = useState(false);

    const copyAddress = () => {
        const copyText = document.getElementById("addressInput");

        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    };

    const openShare = () => {
        if (!share) {
            setShare(true);
            setReport(false);
        } else {
            setShare(false);
        }
    };

    const openReport = () => {
        if (!report) {
            setReport(true);
            setShare(false);
        } else {
            setReport(false);
        }
    };

    return (
        <div className={Style.authorCard}>
            <div className={Style.authorCard_box}>
                <div className={Style.authorCard_box_img}>
                    <Image
                        src={images.nft_image_1}
                        className={Style.authorCard_box_img_img}
                        alt='NFT image'
                    />
                </div>

                <div className={Style.authorCard_box_info}>
                    <h2>Test name{""}{" "}
                        <span>
                            <MdVerified />
                        </span> {" "}
                    </h2>
                    <div className={Style.authorCard_box_info_address}>
                        <input
                            type="text"
                            value="00x829BD824B03D092293333..A830"
                            id='addressInput'
                        />
                        <FiCopy
                            onClick={() => copyAddress()}
                            className={Style.authorCard_box_info_address_icon}
                        />
                    </div>
                    <p>HH#4586 / This is nothing more than text to fill
                        while developing the structure of the App,
                        it will be dinamic once finished
                    </p>
                    <div className={Style.authorCard_box_info_social}>
                        <a href="#">
                            <TiSocialFacebook />
                        </a>
                        <a href="#">
                            <TiSocialInstagram />
                        </a>
                        <a href="#">
                            <TiSocialLinkedin />
                        </a>
                        <a href="#">
                            <TiSocialTwitter />
                        </a>
                        <a href="#">
                            <TiSocialYoutube />
                        </a>
                    </div>
                </div>
                <div className={Style.authorCard_box_share}>
                    <Button btnName="Follow" handleClick={() => { }} />
                    <MdCloudUpload
                        onClick={() => openShare()}
                        className={Style.authorCard_box_share_icon}
                    />
                    {share && (
                        <div className={Style.authorCard_box_share_upload}>
                            <p>
                                <span>
                                    <TiSocialFacebook />
                                </span> {" "}
                                {""}
                                Facebook
                            </p>
                            <p>
                                <span>
                                    <TiSocialInstagram />
                                </span> {" "}
                                {""}
                                Instagram
                            </p>
                            <p>
                                <span>
                                    <TiSocialLinkedin />
                                </span> {" "}
                                {""}
                                Linkedin
                            </p>
                            <p>
                                <span>
                                    <TiSocialTwitter />
                                </span> {" "}
                                {""}
                                Twitter
                            </p>
                            <p>
                                <span>
                                    <TiSocialYoutube />
                                </span> {" "}
                                {""}
                                Youtube
                            </p>
                        </div>
                    )}

                    <BsThreeDots
                        onClick={() => openReport()}
                        className={Style.authorCard_box_share_icon}
                    />

                    {
                        report && (
                            <p className={Style.authorCard_box_share_report}>
                                <span>
                                    <MdOutlineReportProblem />
                                </span>{" "}
                                {""}
                                Report abuse
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default AuthorProfileCard