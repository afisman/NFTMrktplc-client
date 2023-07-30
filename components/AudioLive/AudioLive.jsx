import React from 'react';

import Style from './AudioLive.module.css';
import BigAudioCard from './BigAudioCard/BigAudioCard';
import SmallAudioCard from './SmallAudioCard/SmallAudioCard';

const AudioLive = () => {
    return (
        <div className={Style.audioLive}>
            <div className={Style.audioLive_box}>
                <div className={Style.audioLive_box_left}>
                    <BigAudioCard />
                    <BigAudioCard />

                </div>
                <div className={Style.audioLive_box_right}>
                    <SmallAudioCard />
                    <SmallAudioCard />
                    <SmallAudioCard />
                </div>
            </div>
        </div>
    )
}

export default AudioLive