import React from 'react'
import Image from 'next/image'

import Style from './Notification.module.css'
// import image when available


const Notification = () => {
    return (
        <div className={Style.notification}>
            <p>Notification</p>
            <div className={Style.notification_box}>
                <div className={Style.notification_box_img}>
                    {/* <Image
                        src={images.user1}
                        alt='profile image'
                        width={50}
                        height={50}
                    /> */}
                </div>
                <div className={Style.notification_box_info}>
                    <h4>Alef Tau</h4>
                    <p>User</p>
                    <small>3 minutes ago</small>
                </div>
                <span className={Style.notification_box_new}>

                </span>
            </div>

        </div>
    )
}

export default Notification