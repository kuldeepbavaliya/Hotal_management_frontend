import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function Registers() {

    const nevigate=useNavigate();

    const [costomer,setcostomer]=useState(
        {
            email:"",
            password:""
        }
    )

    const{email,password}=costomer

    const change=(e)=>{
        setcostomer({...costomer,[e.target.name]:e.target.value})
        emailvalidation()
        passvalidation()
    }

    const submit=async()=>
    {
        if(email!=""&&password!="")
        {

        const result=await axios.post("http://localhost:8080/customer/add",costomer)
        console.log(result.data)
        if(result.data=="Save Successfull")
        {
            nevigate("/Signin"); 
        }
        
        }        
        else
        {
            alert('Please Enter your data')
        }
        
    }
    const [vemail,setvemail]=useState()
    const [vpass,setvpass]=useState()
    const emailvalidation=()=>
    {
        if(!email)
        {
            setvemail("Enter Your Email")
        }
    }

    
    const passvalidation=()=>
        {
            if(!password)
            {
                setvpass("Enter Your Password")
            }
        }
  return (
    <div className='card shadow' style={{width:'31%',marginBottom:'5%',marginLeft:'37%',marginTop:'10%'}}>
            <form method='POST' style={{margin:'9%'}}>
                
                <h5>create an accoundt</h5>
                <div data-mdb-input-init className="form-outline mb-4" style={{marginTop:'13%'}}>
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                    <input type="email" onChange={(e)=>change(e)} value={email} name='email' id="form2Example1" className="form-control" />
                    <p className='text-danger'>{vemail}</p> 
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example2">Password</label>
                    <input type="password" onChange={(e)=>change(e)} value={password} name='password' id="form2Example2" className="form-control" />
                    <p className='text-danger'>{vpass}</p> 
                </div>

                   <button type="button" onClick={(e)=>submit(e)}  data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4 w-100">Continue with email</button>


                <div className="text-center">
                                        
                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                    </button>
                </div>
            </form>
        </div>
  )
}
