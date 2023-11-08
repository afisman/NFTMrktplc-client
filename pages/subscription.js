import React from 'react';

import Style from '../styles/subscription.module.css';
import SubscriptionPage from '../subscriptionPage/subscriptionPage';

const subscription = () => {
    const subscriptionArray = [
        {
            plan: "Starter",
            price: '$5/month',
            popular: '',
            service: ["Automated Reporting", "Faster Processing", "Customization"],
            info: ''
        },
        {
            plan: "Basic",
            price: '$15/month',
            popular: 'POPULAR',
            service: ["100 builds", "Progress Reports", "Premium Support"],
            info: ''
        },
        {
            plan: "Plus",
            price: '$25/month',
            popular: '',
            service: ["Unlimited Builds", "Advanced Analytics", "Company Evaluation"],
            info: ''
        }
    ]
    return (
        <div className={Style.subscription}>
            <div className={Style.subscription_box}>
                <div className={Style.subscription_box_info}>
                    <h1>Subscriptions</h1>
                    <p>Pricing to fit the needs of any company or user.</p>
                </div>
                <div className={Style.subscription_box_box}>
                    {subscriptionArray.map((el, i) => (
                        <SubscriptionPage key={i + 1} i={1} el={el} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default subscription