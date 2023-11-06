import React from 'react';
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti';
import { HiOutlineMail } from 'react-icons/hi';


import Style from '../styles/contactUs.module.css';
import formStyle from '../accountPage/Form/Form.module.css';
import { Button } from '../components/componentsIndex';

const contactUs = () => {


    return (
        <div className={Style.contactUs}>
            <div className={Style.contactUs_box}>
                <h1>Contact</h1>
                <div className={Style.contactUs_box_box}>
                    <div className={Style.contactUs_box_box_left}>
                        <div className={Style.contactUs_box_box_left_item}>
                            <h3>Address</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className={Style.contactUs_box_box_left_item}>
                            <h3>Email</h3>
                            <p>piedpiper@protonmail.com</p>
                        </div>
                        <div className={Style.contactUs_box_box_left_item}>
                            <h3>Phone</h3>
                            <p>000-123-456-7890</p>
                        </div>
                        <div className={Style.contactUs_box_box_left_item}>
                            <h3>Socials</h3>
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

                    <div className={Style.contactUs_box_box_right}>
                        <form>
                            <div className={formStyle.form_box_input}>
                                <label htmlFor="name">Full name</label>
                                <input
                                    type="text"
                                    placeholder='Alef Tau'
                                    className={formStyle.form_box_input_userName}
                                />
                            </div>
                            <div className={formStyle.form_box_input}>
                                <label htmlFor="email">Email</label>
                                <div className={formStyle.form_box_input_box}>
                                    <div className={formStyle.form_box_input_box_icon}>
                                        <HiOutlineMail />
                                    </div>
                                    <input type="text" placeholder='Email' />
                                </div>
                            </div>
                            <div className={formStyle.form_box_input}>
                                <label htmlFor="description">Message</label>
                                <textarea name="" id="" cols="30" rows="6"
                                    placeholder='Write ypur message'
                                ></textarea>
                            </div>
                            <Button
                                btnName='Send Message'
                                handleClick={() => { }}
                                classStyle={Style.button} />
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default contactUs