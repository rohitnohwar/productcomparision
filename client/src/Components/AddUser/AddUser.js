import React, { useEffect, useState } from 'react';
import axios from "axios";
import './AddUser.css'


function AddUser(props) {

    const [input, setInput] = useState({   
        userId:""
    })

    function isValid() {
        if(!input.userId) {
            alert('All fields are compulsory.')
        }
    }

    function addData(event) {
        event.preventDefault()

        if(!isValid()) {
            return
        }

        axios.post('/user', input).then((resp)=>{
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
            <div className='form-header'>Add new User by Id</div>
            <div><input type="text" className="form-input" placeholder='userId' name="userId" onChange={handleChange}></input></div>
            <div><button className='submit-button' onClick={addData}>Submit</button></div>
        </form>
    );
}

export default AddUser