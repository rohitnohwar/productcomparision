import React from 'react';
import './Header.css'
import {Link, useNavigate} from "react-router-dom";
import hamburgerIcon from '../../Images/hamburger.svg'
// import searchIcon from '../../Images/search.svg';
// import messageIcon from '../../Images/message.png';
// import avatarIcon from '../../Images/avatar.png';
// import mailIcon from '../../Images/mail.png';
// import settingsIcon from '../../Images/settings.svg';
// import bellIcon from '../../Images/bell.png';


function Header(props) {
    const navigate=useNavigate();
    return ( 
        <div id='header'>
            <div className='header-left'>
                <div className='header-left'>MINIMALLITE</div>
                <div className='header-right'>     
                    <div className="icons-left" onClick={()=>{navigate('/')}}>Main</div>
                    <div className="icons-left" onClick={()=>{navigate('/add-product')}}>Add product(for graph)</div>
            </div>
            </div>
            {/* <div className='header-right'>     
                    <div onClick={()=>{navigate('/')}}>Main</div>
                    <div onClick={()=>{navigate('/add-product')}}>Add product(for graph)</div>
            </div> */}
        </div>
    );
}

export default Header