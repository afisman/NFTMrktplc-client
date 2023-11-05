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

const UloadNFT = () => {
    const [active, setActive] = useState(0);
    const [itemName, setItemName] = useState('');
    const [website, setWebsite] = useState('');
    const [description, setDescription] = useState('');
    const [royalties, setRoyalties] = useState('');
    const [fileSize, setFileSize] = useState('');
    const [category, setCategory] = useState('');
    const [properties, setProperties] = useState('');


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
                properties={properties}
                image={images.upload}
            />
            <div className={Style.UploadNFT_box}>
                <div className={formStyle.form_box_input}>
                    <legend htmlFor="nft">Item Name</legend>
                    <input
                        type="text"
                        placeholder='Alef Tau'
                        name='name'
                        className={formStyle.form_box_input_userName}
                        onChange={(e) => setItemName(e.target.value)}
                    />
                </div>

                <div className={Style.UploadNFT_box_input}>
                    <legend htmlFor="website">Website</legend>
                    <div className={formStyle.form_box_input}>
                        <div className={formStyle.form_box_input_box}>
                            <div className={formStyle.form_box_input_box_icon}>
                                <MdOutlineHttp />
                            </div>
                            <input
                                type="text"
                                name='website'
                                placeholder='Website'
                                onChange={(e) => setWebsite(e.target.value)}

                            />
                        </div>
                    </div>

                    <p className={Style.UploadNFT_box_input_para}>
                        information about items detail page
                    </p>
                </div>

                <div className={formStyle.form_box_input}>
                    <legend htmlFor="description">Description</legend>
                    <textarea name="description" id="" cols="30" rows="6"
                        placeholder='Write something about yourself in a few words'
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <p>The description will be included on the item's detail page underneath its image. Markdown syntax is supported</p>
                </div>
                <div className={formStyle.form_box_input}>
                    <label htmlFor="Description">
                        Description
                    </label>
                    <p className={Style.UploadNFT_box_input_para}>Choose an existing collection or create a new one</p>
                    <div className={Style.UploadNFT_box_slider_div}>
                        {categoryArray.map((el, i) => (
                            <div className={`${Style.UploadNFT_box_slider} 
                            ${active == i + 1 ? Style.active : ""}`}

                                key={i + 1}
                                onClick={() => (
                                    setActive(i + 1),
                                    setCategory(el.category)
                                )}
                            >
                                <div className={Style.UploadNFT_box_slider_box}>
                                    <div className={Style.UploadNFT_box_slider_box_img}>
                                        <Image
                                            src={el.image}
                                            alt='Background image'
                                            className={Style.UploadNFT_box_slider_box_img_img}
                                        />
                                    </div>
                                    <div className={Style.UploadNFT_box_slider_box_icon}>
                                        <TiTick />
                                    </div>
                                </div>
                                <p>Crypto Legend-{el.category}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={formStyle.form_box_input_social}>
                    <div className={formStyle.form_box_input}>
                        <label htmlFor="Royalties">Royalties</label>
                        <div className={formStyle.form_box_input_box}>
                            <div className={formStyle.form_box_input_box_icon}>
                                <FaPercent />
                            </div>
                            <input type="text" name='Royalties' placeholder='20%' onChange={(e) => setRoyalties(e.target.value)} />
                        </div>
                    </div>
                    <div className={formStyle.form_box_input}>
                        <label htmlFor="Size">Size</label>
                        <div className={formStyle.form_box_input_box}>
                            <div className={formStyle.form_box_input_box_icon}>
                                <MdOutlineAttachFile />
                            </div>
                            <input type="text" name='size' placeholder='165MB' onChange={(e) => setFileSize(e.target.value)} />
                        </div>
                    </div>
                    <div className={formStyle.form_box_input}>
                        <label htmlFor="Properties">Properties</label>
                        <div className={formStyle.form_box_input_box}>
                            <div className={formStyle.form_box_input_box_icon}>
                                <AiTwotonePropertySafety />
                            </div>
                            <input type="text" name='Properties' placeholder='Properties' onChange={(e) => setProperties(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div className={Style.UploadNFT_box_btn}>
                    <Button btnName='Upload' handleClick={() => { }} classStyle={Style.UploadNFT_box_btn_style} />
                    <Button btnName='Preview' handleClick={() => { }} classStyle={Style.UploadNFT_box_btn_style} />
                </div>
            </div>

        </div>
    )
}

export default UloadNFT