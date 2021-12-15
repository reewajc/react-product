import React from 'react'
import './Header.css'
import rrrLogo from '../assets/header/rrr.png'
import searchIcon from'../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img src={rrrLogo} className='brandLogo' alt=''/>
            </div>

            <div className='searchBar'>
                <div className='searchIconContainer'>
                    <img src={searchIcon} alt=''/>
                </div>
                    <input className='searchInput' 
                    placeholder='item...' 
                />
            </div>


            <div className='headerActions' >
                <div className='themeSwitchContainer'>
                    <img src={themeSwitchIcon} alt=''/>
                </div>
            </div>

            <div className='loginButton'>
                Cart
            </div>
        </div>
    )
}

export default Header
