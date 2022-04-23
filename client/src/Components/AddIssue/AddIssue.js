import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../AddUser/AddUser.css'


function AddIssue(props) {
    const [input, setInput] = useState({   
        issueId:""
    })

    function isValid() {
        if(!input.issueId) {
            alert('All fields are compulsory.')
        }
    }

    function addData(event) {
        event.preventDefault()

        if(!isValid()) {
            return
        }

        axios.post('/issue', input).then((resp)=>{
            alert(resp.data.message)
        })
    }

    function handleChange(event) {
        event.preventDefault()
        const{name, value}=event.target;
        setInput(prevValue=>{
            return{
                ...prevValue,
                [name]:value
            }
        })
    }
    return ( 
        <form className="add-user">
            <div className='form-header'>Add new Issue by Id</div>
            <div><input type="text" className="form-input" placeholder='issueId' name="issueId" onChange={handleChange}></input></div>
            <div><button className='submit-button' onClick={addData}>Submit</button></div>
        </form>
    );
}

export default AddIssue