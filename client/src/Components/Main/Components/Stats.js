import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Stats.css'
import userIcon from '../../../Images/usercard.png'
import invoiceIcon from '../../../Images/invoicecard.png'
import folderIcon from '../../../Images/foldercard.png'
import infoIcon from '../../../Images/infocard.png'

function Stats(props) {

    const [counts, setCounts] = useState({})

    function getCounts() {
        axios.get('/counts').then((response)=>{
            setCounts(response.data)
        })
    }

    useEffect(()=>{
        getCounts()
    },[])

    return ( 
        <div className='stats'>
            <div className='stats-card'>
                <div className="card-flex">
                    <div>
                        <img src={userIcon} className="card-icons" />
                        <div style={{marginTop:'10px'}}>New Users</div>
                    </div>
                    <div className="card-number">{counts.users}</div>
                </div>
            </div>
            <div className='stats-card'>
                <div className="card-flex">
                    <div>
                        <img src={invoiceIcon} className="card-icons" />
                        <div style={{marginTop:'10px'}}>Total Invoices</div>
                    </div>
                    <div className="card-number">{counts.invoices}</div>
                </div>
            </div>
            <div className='stats-card'>
                <div className="card-flex">
                    <div>
                        <img src={infoIcon} className="card-icons" />
                        <div style={{marginTop:'10px'}}>Total Issues</div>
                    </div>
                    <div className="card-number">{counts.issues}</div>
                </div>
            </div>
            <div className='stats-card'>
                <div className="card-flex">
                    <div>
                        <img src={folderIcon} className="card-icons" />
                        <div style={{marginTop:'10px'}}>Total Projects</div>
                    </div>
                    <div className="card-number">{counts.projects}</div>
                </div>
            </div>
        </div>
    );
}

export default Stats