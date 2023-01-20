import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AddProduct.css'


function AddProduct(props) {
    const [input, setInput] = useState({   
        productId:"",
        year:'',
        sales:''
    })

    function isValid() {
        if(Number(input.sales)%1!=0 || Number(input.year)%1!=0 || Number(input.year)<1970 || Number(input.year)>2022 || Number(input.sales)<0 
        || !input.productId || !input.sales || !input.year) {
            alert('All fields are compulsory. Sales should be greater than or equal to 0. Year should be greater than or equal to 1970 and less than or equal to 2022. Sales and year should be whole numbers.')
            return false
        }
        return true
    }

    function addData(event) {
        event.preventDefault()

        if(!isValid()) {
            return
        }

        axios.post('/product', input).then((resp)=>{
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
        console.log(input)
    }
    return ( 
        <form className="add-user">
            <div className='form-header'>Add new product data by Id</div>
            <div><input type="text" className="form-input" placeholder='productId' name='productId' onChange={handleChange}></input></div>
            <div><input type="number" className="form-input" placeholder='year' name='year' onChange={handleChange}></input></div>
            <div><input type="number" step="1" className="form-input" placeholder='sales' name='sales' onChange={handleChange}></input></div>
            <div><button className='submit-button' onClick={addData}>Submit</button></div>
        </form>
    );
}

export default AddProduct