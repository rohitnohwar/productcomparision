import React, { useEffect } from 'react';
import {Link, useNavigate} from "react-router-dom";
import avatarIcon from '../../Images/avatar.png';
import './Sidebar.css'


function Sidebar(props) {
    const navigate=useNavigate();
    return ( 
        <div className='sidebar'>
        <ul className='sidebar-list'>
            <img src={avatarIcon} className="icons-right" style={{marginTop:'10px'}}/> Name
            <li className='list-items' onClick={()=>{navigate('/')}}>Main</li>
            <li className='list-items' onClick={()=>{navigate('/add-user')}}>Add user</li>
            <li className='list-items' onClick={()=>{navigate('/add-invoice')}}>Add invoice</li>
            <li className='list-items' onClick={()=>{navigate('/add-issue')}}>Add issue</li>
            <li className='list-items' onClick={()=>{navigate('/add-project')}}>Add project</li>
            <li className='list-items' onClick={()=>{navigate('/add-product')}}>Add product(for graph)</li>
        </ul>
        </div>
    );
}

export default Sidebar