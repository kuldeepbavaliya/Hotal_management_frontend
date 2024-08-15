import React, { useEffect } from 'react'
import Header from '../Customer/Header'
import SliderImage from '../Customer/SliderImage'
import Futer from '../Customer/Futer'
import Aboute from '../Customer/Aboute'
import Rooms from '../Customer/Rooms'
import Service from '../Customer/Service'
import OurTeam from '../Customer/OurTeam'


export default function HomePage() {

  useEffect(()=>{
    sessionStorage.setItem('password','not');
    sessionStorage.setItem('username','not');
    
  },[])
  return (
    <div  data-aos="fade-up">
      <Header/>
      <SliderImage/>
      <Aboute/>
      <Rooms/>
      <Service/>
      <OurTeam/>
      <Futer/>
    </div>
  )
}
