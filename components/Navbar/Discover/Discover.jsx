import React from 'react'
import Link from 'next/link'

import Style from './Discover.module.css'


const Discover = () => {

    //Discover navigation menu

    const discover = [
        {
            name: "Collection",
            link: "collection"
        },
        {
            name: "Search",
            link: "search"
        },
        {
            name: "Author Profile",
            link: "author-profile"
        },
        {
            name: "NFT Details",
            link: "NFT-details"
        },
        {
            name: "Account Setting",
            link: "account-setting"
        },
        {
            name: "Connect Wallet",
            link: "connect-wallet"
        },
        {
            name: "Blog",
            link: "blog"
        }
    ]
    return (
        <div>
            {discover.map((e, index) => (
                <div key={index + 1} className={Style.discover}>
                    <Link href={{ pathname: `${e.link}` }}>
                        {e.name}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Discover