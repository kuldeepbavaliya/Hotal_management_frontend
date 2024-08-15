import React from 'react'

export default function PageImage() {
  return (
    <div className='container'style={{height:'191px',margin:'0'}}>
         <img src="pageimage.jpg" style={{height:'190px',objectFit:'cover',objectPosition:'cover',position:'absolute',top:'20'}} className="card-img-top" alt="..."/>
         
    </div>
  )
}
