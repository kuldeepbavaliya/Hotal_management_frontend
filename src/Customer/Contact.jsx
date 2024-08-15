import React, { useState } from 'react'
import Header from './Header'
import { IoIosMail } from "react-icons/io";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoaderPage from '../Loader/LoaderPage';

export default function Contact() {

  const [loading,setloading]=useState()

  const [mail,setmail]=useState({
    to:'',
    text:'',
    subject:''
    
  })

  const{to,text,subject}=mail

  const change=(e)=>
  {
    setmail({...mail,[e.target.name]:e.target.value})
  }

  const submit=async()=>
  {
    setloading(true)
    const result=await axios.get(`http://localhost:8080/email/go/${to}&&${subject}&&${text}`)
    console.log(result.data)
    
    if(result.data=='Send Email')
    {
      setloading(false)
      toast.success("Successfully Send Email")
    }
  }

  if(loading)
  {
    return <LoaderPage/>
  }
  return (  

    <div className='mb-5'>

      <center className='mt-3' style={{ color: '#ffA500' }}>_____CONTACTUS_____</center>
      <h1 className='text-center'>Contact <span style={{ color: '#ffA500' }}>FOR ANY QUERY</span></h1>

      <div className='row mx-5 mt-5'>
        <div className='col'>
          <span style={{ color: '#ffA500' }}>BOOKING_____</span><br />
          <IoIosMail style={{ color: '#ffA500' }} />
          booking801@gamil.com
        </div>
        <div className='col'>
          <span style={{ color: '#ffA500' }}>TECHNICAL_____</span><br />
          <IoIosMail style={{ color: '#ffA500' }} />
          tech@gamil801@gamil.com
        </div>
        <div className='col'>
          <span style={{ color: '#ffA500' }}>GENERAL______</span><br />
          <IoIosMail style={{ color: '#ffA500' }} />
          info801@gamil.com
        </div>
      </div>

      <div className='row mt-5 mx-5'>
        <div className='col'>
          <img src='map1.png' style={{ height: '312px' }} />
        </div>

        <div className='col'>
          <div className="form-group mt-4" style={{width:'300px'}}>
            <input type="email" name='to' value={to} onChange={(e)=>change(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email" />
          </div>

          <div className="form-group mt-4 " style={{width:'300px'}}>
            <input type="text"name='subject' value={subject} onChange={(e)=>change(e)} className="form-control"  placeholder="Your Subject" />
          </div>
          
          <div className="form-group mt-1 " style={{width:'300px'}}>
          <textarea className='form-group mt-4' name='text' value={text} onChange={(e)=>change(e)} style={{resize:'none'}} rows='5' cols='38' placeholder='Message'/>  
          </div>

          <button type="button" onClick={submit} className="btn btn-warning" style={{width:'300px'}}>Send Message</button>
          <ToastContainer/>
        </div>
      </div>
    </div>
  )
}
