import React from 'react'
import Link from 'next/link'

import Style from './Helpcenter.module.css'


const Helpcenter = () => {
    const helpCenter = [
        {
            name: "About",
            link: "about"
        },
        {
            name: "Contact us",
            link: "contactUs"
        },
        {
            name: "Sign Up",
            link: "sign-up"
        },
        {
            name: "Sign In",
            link: "sign-in"
        },
        {
            name: "Subscription",
            link: "subscription"
        },
    ]
    return (
        <div>
            {
                helpCenter.map((e, index) => (
                    <div key={index + 1} className={Style.helpCenter}>
                        <Link href={{ pathname: `${e.link}` }}>
                            {e.name}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Helpcenter