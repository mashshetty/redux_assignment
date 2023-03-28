import React, { useState } from 'react'
import './form.css';
import { useSelector, useDispatch } from 'react-redux'
import { storeUser } from './UpdateData'
import RegUsers from './RegUsers';
function Form() {
    const data = useSelector(state => state.user.value)
    const dispatch = useDispatch();
    const[flag,setFlag]=useState(true);
    const [datax,setdatax]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        rPassword:""
    })

 

    const sub =(e)=>{
        setdatax({...datax,[e.target.id]:e.target.value})
    }

   

    const submit =()=>{
        dispatch(storeUser({
            datax
            }));
            setdatax({
                firstName:"",
                lastName:"",
                email:"",
                password:"",
                rPassword:""
            })
        console.log("value is :",data);
    
    }

    const showUsers =()=>{
        setFlag(!flag)
    }
  return (
    <div>
        {flag &&
        <div className="box">
            <h1 className="heading">Register</h1>
            <div className="input1">
                <input id="firstName" value={datax.firstName} onChange={e=>sub(e)}  className='input_1' type="text" placeholder='Enter First Name' />
            </div>
            <div className="input1">
                <input id="lastName" value={datax.lastName}  onChange={e=>sub(e)}  className='input_1' type="text" placeholder='Enter Last Name' />
            </div>
            <div className="input1">
                <input id="email" value={datax.email}  onChange={e=>sub(e)} className='input_1' type="email" placeholder='Enter Email' />
            </div>
            <div className="input1">
                <input id="password" value={datax.password}  onChange={e=>sub(e)} className='input_1' type="password" placeholder='Enter Password' />
            </div>
            <div className="input1">
                <input id="rPassword" value={datax.rPassword}  onChange={e=>sub(e)} className='input_1' type="password" placeholder='Repeat Password Password' />
            </div>

            <div className="input1">
                <input onClick={e=>submit()} className='sub' type="button" value="submit" />
            </div>

            <div className="input1">
                <input onClick={e=>showUsers()} className='subx' type="button" value="See Registered Users" />
            </div>
        </div>
}


{!flag && <RegUsers showUsers={showUsers}/>}


    </div>
  )
}

export default Form