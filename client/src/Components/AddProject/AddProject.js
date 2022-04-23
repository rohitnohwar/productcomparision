import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../AddUser/AddUser.css'


function AddProject(props) {
    const [input, setInput] = useState({   
        projectId:""
    })

    function isValid() {
        if(!input.projectId) {
            alert('All fields are compulsory.')
        }
    }

    function addData(event) {
        event.preventDefault()

        if(!isValid()) {
            return
        }

        axios.post('/project', input).then((resp)=>{
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
            <div className='form-header'>Add new project by Id</div>
            <div><input type="text" className="form-input" placeholder='projectId' name="projectId" onChange={handleChange}></input></div>
            <div><button className='submit-button' onClick={addData}>Submit</button></div>
        </form>
    );
}

export default AddProject