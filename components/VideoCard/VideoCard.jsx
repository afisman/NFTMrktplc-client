import React from 'react';
import Image from 'next/image';

import Style from './VideoCard.module.css'
import images from '../../img';

//Need to work on the positioning of left and right

const VideoCard = () => {
    return (
        <div className={Style.video}>
            <div className={Style.video_box}>
                <h1>
                    <span>🎬</span> The videos.

                </h1>
                <p>Check out our hottest videos.</p>
                <div className={Style.video_box_frame}>
                    <div className={Style.video_box_frame_left}>
                        <Image
                            src={images.user1}
                            alt='Video image'
                            // width={1920}
                            // height={1080}
                            style={{ objectFit: "cover" }}
                            className={Style.video_box_frame_left_img}
                        />
                    </div>
                    <div className={Style.video_box_frame_right}>
                        Hello
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard