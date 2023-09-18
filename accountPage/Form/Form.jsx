import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineContentCopy, MdOutlineHttp } from 'react-icons/md';
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti';

import Style from './Form.module.css';
import { Button } from '../../components/componentsIndex';



const Form = () => {
    return (
        <div className={Style.form}>
            <div className={Style.form_box}>
                <form >
                    <div className={Style.form_box_input}>
                        <label htmlFor="name">Username</label>
                        <input
                            type="text"
                            placeholder='Alef Tau'
                            className={Style.form_box_input_userName}
                        />
                    </div>
                    <div className={Style.form_box_input}>
                        <label htmlFor="email">Email</label>
                        <div className={Style.form_box_input_box}>
                            <div className={Style.form_box_input_box_icon}>
                                <HiOutlineMail />
                            </div>
                            <input type="text" placeholder='Email' />
                        </div>
                    </div>
                    <div className={Style.form_box_input}>
                        <label htmlFor="description">Description</label>
                        <textarea name="" id="" cols="30" rows="6"
                            placeholder='Write something about yourself in a few words'
                        ></textarea>
                    </div>
                    <div className={Style.form_box_input}>
                        <label htmlFor="website">Website</label>
                        <div className={Style.form_box_input_box}>
                            <div className={Style.form_box_input_box_icon}>
                                <div className={Style.form_box_input_box_icon}>
                                    <MdOutlineHttp />
                                </div>
                            </div>
                            <input type="text" placeholder='Website' />
                        </div>
                    </div>
                    <div className={Style.form_box_input_social}>
                        <div className={Style.form_box_input}>
                            <label htmlFor="facebook">Facebook</label>
                            <div className={Style.form_box_input_box}>
                                <div className={Style.form_box_input_box_icon}>
                                    <TiSocialFacebook />
                                </div>
                                <input type="text" placeholder='http://alfn.netlify.app' />
                            </div>
                        </div>
                        <div className={Style.form_box_input}>
                            <label htmlFor="twitter">Twitter</label>
                            <div className={Style.form_box_input_box}>
                                <TiSocialTwitter />
                                <input type="text" placeholder='http://alfn.netlify.app' />
                            </div>
                        </div>
                        <div className={Style.form_box_input}>
                            <label htmlFor="instagram">Instagram</label>
                            <div className={Style.form_box_input_box}>
                                <div className={Style.form_box_input_box_icon}>
                                    <TiSocialInstagram />
                                </div>
                                <input type="text" placeholder='http://alfn.netlify.app' />
                            </div>
                        </div>
                    </div>

                    <div className={Style.form_box_input}>
                        <label htmlFor="walleet">Wallet Address</label>
                        <div className={Style.form_box_input_box}>
                            <div className={Style.form_box_input_box_icon}>
                                <MdOutlineHttp />
                            </div>
                            <input
                                type="text"
                                placeholder='0x1232jkn21312kd955u3je8dsJDndD2844' />
                            <div className={Style.form_box_input_box_icon}>
                                <MdOutlineContentCopy />
                            </div>
                        </div>
                    </div>
                    <div className={Style.form_box_btn}>
                        <Button btnName="Upload profile"
                            handleClick={() => { }}
                            classStyle={Style.button}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form