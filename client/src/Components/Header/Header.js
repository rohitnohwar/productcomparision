import React from 'react';
import './Header.css'
import hamburgerIcon from '../../Images/hamburger.svg'
import searchIcon from '../../Images/search.svg';
import messageIcon from '../../Images/message.png';
import avatarIcon from '../../Images/avatar.png';
import mailIcon from '../../Images/mail.png';
import settingsIcon from '../../Images/settings.svg';
import bellIcon from '../../Images/bell.png';


function Header(props) {
    return ( 
        <div id='header'>
            <div className='header-left'>
                <div className='header-left-1'>MINIMALLITE</div>
                <img src={hamburgerIcon} className="icons-left" />
            </div>
            <div className='header-right'>
                <img src={searchIcon} className="icons-right"/>
                <img src={mailIcon} className="icons-right"/>
                <img src={bellIcon} className="icons-right"/>
                <img src={messageIcon} className="icons-right"/>
                <img src={avatarIcon} className="icons-right"/> 
                <img src={settingsIcon} className="icons-right"/>
            </div>
        </div>
    );
}

export default Header