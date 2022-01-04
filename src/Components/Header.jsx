import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'

const Header = () => {
    return (
        <div className='header'>
        {/* Logo Container */}
            <div className="logoContainer">
                <img src={punkLogo} className='punkLogo' alt="" />
            </div>

        {/* Search Bar Components */}
            <div className="searchBar">
                <div className="searchIconContainer">
                    <img src={searchIcon}/>
                </div>
                <input type="text" className="searchInput" placeholder='Collection, Item Or User...'/>
            </div>

            {/* Header Items */}
            <div className="headerItems">
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>

            {/* Header Actions */}
            <div className="headerActions">
                <div className="themeSwitchContainer">
                <img src={themeSwitchIcon} alt="" />
                </div>
            </div>

            {/* Login Button */}
            <div className="loginButton">
                GET IN
            </div>
        </div>
    )
}

export default Header
