import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import LoaderPage from '../Loader/LoaderPage';

export default function OurTeam() {

  const [loading,setloading]=useState(true)

  const [team,setteam]=useState([])

  useEffect(()=>{
      getdate()
  },[])

  const getdate=async()=>
  {

    const result=await axios.get("http://localhost:8080/team/get")
    setteam(result.data)
    setloading(false)
  }

  if(loading)
    {
     return <LoaderPage/>
    }
  return (
    <div style={{ marginTop: '20px',marginBottom:'10px'}}>
      <center style={{ color: '#ffA500' }}>_____OUR TEAM_____</center>
      <center>
        <h1>Explor Our <span style={{ color: '#ffA500' }}>STAFFS</span></h1>
      </center>
      <div className='row' style={{marginLeft:'116px',marginRight:'104px',marginTop:'55px'}}>
        {
          team.map(t=>(
            
        <div className='col' key={t.id} >
        <div className="card shadow " style={{ width: '14rem' }}>
          <img src={t.image} className="card-img-top" alt="..." />
          <div className='text-warning' style={{position:'absolute',marginTop:'55%',marginLeft:'26%'}}>
            <h2>
              <FaSquareFacebook className='mx-1' style={{backgroundColor:'white'}} />
              <FaSquareTwitter className='mx-1' style={{backgroundColor:'white'}}/>
              <FaInstagramSquare className='mx-1' style={{backgroundColor:'white'}}/>
              </h2>
          </div>
          <div className="card-body my-3" >
            <p className="card-text">Name:{t.name}</p>
            <p className="card-text">Age:{t.age}</p>
            <p className="card-text">Department:{t.department}</p>
          </div>
        </div>
      </div>
          ))
        }
    </div>
    </div>
  )
}
