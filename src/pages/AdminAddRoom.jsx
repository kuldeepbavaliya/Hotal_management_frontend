import React, { useEffect } from 'react'
import Anavbar from '../Admin/Anavbar'
import AddRoom from '../Admin/AddRoom'
import { useNavigate } from 'react-router-dom'

export default function AdminAddRoom() {
  
  const navigat=useNavigate()

  useEffect(()=>{
    const username=sessionStorage.getItem("username");
    const password=sessionStorage.getItem("password")
    if(username=="not"&&password=="not")
    {
      navigat('/Admin')
    }
      
  },[])


  return (
    <div>
      <Anavbar/>
      <AddRoom/>
    </div>
  )
}
