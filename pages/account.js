import React, { useState, useMemo, useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';


import Style from '../styles/account.module.css';
import images from '../img';
import Form from '../accountPage/Form/Form';
const account = () => {
    const [fileUrl, setFileUrl] = useState(null);
    const onDrop = useCallback(async (acceptedFile) => {
        setFileUrl(acceptedFile[0]);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: "image/*",
        maxSize: 5000000,
    })
    return (
        <div className={Style.account}>
            <div className={Style.account_info}>
                <h1>Profile settings</h1>
                <p>
                    Set preferred dsplay name, create profile
                    and change other personal settings
                </p>
            </div>
            <div className={Style.account_box}>
                <div className={Style.account_box_img} {...getRootProps()}>
                    <input {...getInputProps()} />
                    <Image
                        src={images.user1}
                        alt='account upload'
                        className={Style.account_box_img_img}
                    />
                    <p className={Style.account_box_img_para}>Change Image</p>
                </div>
                <div className={Style.account_box_form}>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default account