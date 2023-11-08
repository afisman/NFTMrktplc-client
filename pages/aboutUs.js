import React from 'react';
import Image from 'next/image';

import Style from '../styles/aboutUs.module.css';
import { Brand } from '../components/componentsIndex';
import images from '../img';

const aboutUs = () => {

    const founderArray = [
        { name: 'Avis', position: 'Co-founder and CEO', image: images.user1 },
        { name: 'Alef', position: 'Co-founder and CTO', image: images.user2 },
        { name: 'Orla', position: 'Co-founder and COO', image: images.user3 },
        { name: 'Daimon', position: 'Co-founder and CMO', image: images.user4 },

    ]

    const factArray = [
        { title: '10 million', info: 'Articles have been public around the world (as of Oct. 2023)' },
        { title: '100,000', info: 'Registered user accounts (as of Oct. 2023)' },
        { title: '190+', info: 'Countries and regions have our presence (as of Oct. 2023)' },

    ]
    return (
        <div className={Style.aboutUs}>
            <div className={Style.aboutUs_box}>
                <div className={Style.aboutUs_box_hero}>
                    <div className={Style.aboutUs_box_hero_left}>
                        <h1>About us</h1>
                        <p>We're impartial and independent,
                            and every day we create distinctive, world-class projects.</p>
                    </div>
                    <div className={Style.aboutUs_box_hero_right}>
                        <Image
                            src={images.hero} />
                    </div>
                </div>
                <div className={Style.aboutUs_box_title}>
                    <h2>Founder</h2>
                    <p>We're impartial and independent,
                        and every day we create distinctive, world-class projects.</p>
                </div>
                <div className={Style.aboutUs_box_founder}>
                    <div className={Style.aboutUs_box_founder_box}>
                        {
                            founderArray.map((el, i) => (
                                <div className={Style.aboutUs_box_founder_box_img} key={i + 1}>
                                    <Image
                                        src={el.image}
                                        alt={el.name}
                                        className={Style.aboutUs_box_founder_box_img_img}
                                    />
                                    <h3>{el.name}</h3>
                                    <p>{el.position}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className={Style.aboutUs_box_title}>
                    <h2>Fast facts</h2>
                    <p>We're impartial and independent</p>
                </div>
                <div className={Style.aboutUs_box_facts}>
                    <div className={Style.aboutUs_box_facts_box}>
                        {factArray.map((el, i) => (
                            <div className={Style.aboutUs_box_facts_box_info} key={i + 1}>
                                <h3>{el.title}</h3>
                                <p>{el.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Brand />
        </div>
    )
}

export default aboutUs