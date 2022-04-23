import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Stats from './Components/Stats';
import Charts from './Components/Charts';

import './Main.css'
function Main(props) {

    return (
        <div className='main'>
            <Stats />
            <Charts />
        </div>
        );
}

export default Main