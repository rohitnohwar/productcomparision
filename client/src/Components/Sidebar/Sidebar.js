import React, { useEffect } from 'react';
import {Link, useNavigate} from "react-router-dom";
import './Sidebar.css'


function Sidebar(props) {

    return ( 
        <div className='sidebar'>
        <ul className='sidebar-list'>
            <li><Link to='/'>Main</Link></li>
            <li><Link to='/add-user'>Add user</Link></li>
            <li><Link to='/add-invoice'>Add invoice</Link></li>
            <li><Link to='/add-issue'>Add issue</Link></li>
            <li><Link to='/add-project'>Add project</Link></li>
            <li><Link to='/add-product'>Add product</Link></li>
        </ul>
        </div>
    );
}

export default Sidebar