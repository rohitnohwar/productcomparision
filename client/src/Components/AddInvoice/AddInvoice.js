import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../AddUser/AddUser.css'


function AddInvoice(props) {

    const [input, setInput] = useState({   
        invoiceId:""
    })

   function isValid() {
        if(!input.invoiceId) {
            alert('All fields are compulsory.')
        }
    } 

    function addData(event) {
        event.preventDefault()

        if(!isValid()) {
            return
        }

        axios.post('/invoice', input).then((resp)=>{
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
            <div className='form-header'>Add new Invoice by Id</div>
            <div><input type="text" className="form-input" placeholder='invoiceId' name='invoiceId' onChange={handleChange}></input></div>
            <div><button className='submit-button' onClick={addData}>Submit</button></div>
        </form>
    );
}

export default AddInvoice