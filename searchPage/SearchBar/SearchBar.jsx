import React from 'react';


import Style from './SearchBar.module.css';
import { BsArrowLeft, BsArrowRight, BsSearch } from 'react-icons/bs';

const SearchBar = () => {
    return (
        <div className={Style.searchBar}>
            <div className={Style.searchBar_box}>
                <BsSearch className={Style.searchBar_box_icon} />
                <input
                    type='text'
                    placeholder='Type your keyword...'
                />
                <BsArrowRight className={Style.searchBar_box_icon} />

            </div>
        </div>
    )
}

export default SearchBar