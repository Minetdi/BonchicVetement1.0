import React from 'react'
import './Header.css'

function Header() {

    return (
        <div className='header'>
            <img
                src=""
                className="header_logo"
            />
            <div
                className="header_search">
                <input
                    className="header_searchInput"
                    type="text" />
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="welcome_msg"> Hello Guest</span>
                    <span className="welcome_msg"> Sign In</span>
                </div>
                <div className="header_option">

                </div>
                <div className="header_option">

                </div>
            </div>
        </div>
    );
}

export default Header

    
