import React, { useEffect } from 'react'
import Anavbar from '../Admin/Anavbar';
import DisplayRooms from '../Admin/DisplayRooms';
import { useNavigate } from 'react-router-dom'

export default function AdminRoom() {
  
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
      <DisplayRooms/>      
    </div>
  )
}
