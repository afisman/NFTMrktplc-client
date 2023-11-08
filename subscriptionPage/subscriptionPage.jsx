import React from 'react';
import { TiTick } from 'react-icons/ti';

import Style from './subscriptionPage.module.css';
import { Button } from '../components/componentsIndex';

const SubscriptionPage = ({ el, i }) => {
    return (
        <div className={Style.SubscriptionPage}>
            <div className={Style.SubscriptionPage_box}>
                <span className={Style.SubscriptionPage_box_span}>
                    {el.plan}
                </span>
                <small className={Style.SubscriptionPage_box_small}>
                    {el.popular || ""}
                </small>
                <p className={Style.SubscriptionPage_box_price}>
                    {el.price}
                </p>

                <div className={Style.SubscriptionPage_box_info}>
                    {el.service.map((el, i) => (
                        <p key={i + 1} className={Style.SubscriptionPage_box_info_para}>
                            <span>
                                <TiTick />
                            </span>
                            {el}
                        </p>
                    ))}
                </div>
                <Button
                    btnName="Submit"
                    classStyle={Style.button}
                    handleClick={() => { }}
                />
            </div>
        </div>
    )
}

export default SubscriptionPage