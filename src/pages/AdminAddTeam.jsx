import React, { useEffect } from 'react'
import Anavbar from '../Admin/Anavbar';
import AddTeams from '../Admin/AddTeams';
import { useNavigate } from 'react-router-dom'

export default function AdminAddTeam() {
  
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
      <AddTeams/>
    </div>
  )
}
