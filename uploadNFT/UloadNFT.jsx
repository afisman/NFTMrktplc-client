import React, { useState } from 'react';
import { MdOutlineAttachFile, MdOutlineHttp } from 'react-icons/md';
import { FaPercent } from 'react-icons/fa';
import { AiTwotonePropertySafety } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import Image from 'next/image';

import Style from './UloadNFT.module.css';
import formStyle from '../accountPage/Form/Form.module.css';
import images from '../img';
import { Button } from '../components/componentsIndex';
import { DropZone } from './uploadNFTIndex';
import Form from '../accountPage/Form/Form';

const UloadNFT = () => {
    const [active, setActive] = useState(0);
    const [itemName, setItemName] = useState('');
    const [website, setWebsite] = useState('');
    const [description, setDescription] = useState('');
    const [royalties, setRoyalties] = useState('');
    const [fileSize, setFileSize] = useState('');
    const [category, setCategory] = useState('');

    const categoryArray = [
        {
            image: images.nft_image_1,
            category: "Sports"
        },
        {
            image: images.nft_image_2,
            category: "Art"
        },
        {
            image: images.nft_image_3,
            category: "Music"
        },
        {
            image: images.nft_image_1,
            category: "Digital"
        },
        {
            image: images.nft_image_2,
            category: "Photography"
        },
        {
            image: images.nft_image_1,
            category: "Sports"
        },

    ]


    return (
        <div className={Style.UploadNFT}>
            <DropZone
                title="JPG, PNG, WEBM, MAX 100MB"
                heading="Drag & drop file"
                subHeading="or Browse file manager"
                itemName={itemName}
                website={website}
                description={description}
                royalties={royalties}
                fileSize={fileSize}
                category={category}
                image={images.upload}
            />
            <div className={Style.UploadNFT_box}>
                <div className={Style.UploadNFT_box_input}>
                    <label htmlFor="nft">Item Name</label>
                    <input
                        type="text"
                        placeholder='Alef Tau'
                        className={Style.UploadNFT_box_input_itemName}
                        onChange={(e) => setItemName(e.target.value)}
                    />
                </div>

                <div className={Style.UploadNFT_box_input}>
                    <label htmlFor="website">Website</label>
                    <div className={Style.UploadNFT_box_input}>
                        <div className={Style.UploadNFT_box_input_box}>
                            <div className={Style.UploadNFT_box_input_box_icon}>
                                <MdOutlineHttp />
                            </div>
                            <input
                                type="text"
                                placeholder='Website'
                                onChange={(e) => setItemName(e.target.value)}

                            />
                        </div>
                    </div>

                    <p className={Style.UploadNFT_box_input_para}>
                        information about items detail page
                    </p>
                </div>

                <div className={Style.UploadNFT_box_input}>
                    <label htmlFor="description">Description</label>
                    <textarea name="" id="" cols="30" rows="6"
                        placeholder='Write something about yourself in a few words'
                    ></textarea>
                </div>
            </div>

        </div>
    )
}

export default UloadNFT