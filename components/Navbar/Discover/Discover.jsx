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
            link: "searchPage"
        },
        {
            name: "Author Profile",
            link: "author"
        },
        {
            name: "NFT Details",
            link: "NFTDetails"
        },
        {
            name: "Account Settings",
            link: "account"
        },
        {
            name: "Upload NFT",
            link: "uploadNFT"
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