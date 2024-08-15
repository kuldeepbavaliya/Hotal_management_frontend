import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Admin() {
  
  const navigat=useNavigate()

  const [cust,setcust]=useState([])

  const [customer,setcustomer]=useState({
    username:'',
    password:''
  })

  const{username,password}=customer

  const showuser=''

  const change=(e)=>
  {
    setcustomer({...customer,[e.target.name]:e.target.value})
  }  

  const submit=async()=>
  {
    const result=await axios.get("http://localhost:8080/admin/get")
    setcust(result.data)    

    for (let index = 0; index < cust.length; index++) {
      const element = cust[index];
      if(element.username==username && element.password==password)
      {  
        sessionStorage.setItem('username',username)
        sessionStorage.setItem('password',password)
        
        navigat("/Welcom")
        toast.success("Admin Login",{position:"bottom-center",theme:"dark"})
      }
      else
      {
        toast.error("Enter Your Right information",{position:"bottom-center",theme:"dark"})
      }
    }
  }


  return (
    <div>
      <h1 className='text-center text-warning my-5'>Welcom Admin </h1>
      <div className='card shadow' style={{ width: '31%', marginBottom: '5%', marginLeft: '37%', marginTop: '5%' }}>
        <form style={{ margin: '9%' }}>

          <h5>Login Admin</h5>
          <div data-mdb-input-init className="form-outline mb-4" style={{ marginTop: '13%' }}>
            <label className="form-label" htmlFor="form2Example1">User name</label>
            <input type="email" name="username" onChange={(e)=>change(e)} value={username} id="form2Example1" className="form-control" />
          </div>

          <div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">Password</label>
            <input type="password" name="password" value={password} onChange={(e)=>change(e)} id="form2Example2" className="form-control" />
          </div>

          <button type="button" onClick={(e)=>submit(e)} data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4 w-100">Login</button>
          <ToastContainer position="bottom-center" theme="dark" />

        </form>
      </div>
    </div>
  )
}
