import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { BiChevronRight } from "react-icons/bi";

export default function Futer() {
  return (
    <>
    
    <div className='card' style={{height:'150px',width:'35%',position:'absolute',marginLeft:'31%',backgroundColor:'rgba(255,255,255,1)'}}>
      <div className='card-body'>
      <h4 className='text-center'>Subscrible Our<span style={{color:'#ffA500'}}>NEWSLETTER</span></h4>
      <input style={{marginLeft:'45px',marginTop:'16px'}} type='text' placeholder='Enter Your email'></input>
      <button type="button" className="btn btn-warning mx-2">SUBMIT</button>
      </div>
    </div>

    <div className="align-left" style={{ marginTop: '7%', backgroundColor: "#152238", height: '350px' }}>
      <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 ">
        <div className="col text-white" style={{ width: '300px' }}>
          <div className="p-3" style={{ backgroundColor: '#ffA500', marginTop: '50%' }}>
            <h3 className='text-white '>HOTELIER</h3>
            Build a professional website from your
            hotel business and grab the attention of
            new visitors upon your side`s launch.
          </div>
        </div>
        <div className="col text-white">
          <div className="p-3">
            <h5 style={{ color: '#ffA500', marginTop: '50%' }}>CONTACT___</h5>
            Krishna Complex,Paliyad Road,BOTAD<br />
            +012 345 67890<br />
            Luxury@Example.com<br />
            <h3>
              <CiFacebook />
              <TiSocialTwitterCircular />
              <FaInstagram />
              <CiLinkedin />
            </h3>
          </div>
        </div>
        <div className="col text-white">
          <div className="p-3">
            <h5 style={{ color: '#ffA500', marginTop: '50%' }}>COMPANY___</h5>
            <BiChevronRight />About Us<br />
            <BiChevronRight />Contact Us<br />
            <BiChevronRight />Privacy Policy<br />
            <BiChevronRight />Terms & Condition<br />
            <BiChevronRight />Support<br />

          </div>
        </div>
        <div className="col">
          <div className="p-3 text-white">
            <h5 style={{ color: '#ffA500', marginTop: '50%' }}>SERVICES___</h5>
            <BiChevronRight />Food & Restaurant <br />
            <BiChevronRight />Spa & Fitness <br />
            <BiChevronRight />Sports & Gaming <br />
            <BiChevronRight />Event & party<br />
            <BiChevronRight />GYM & Yoga <br />

          </div>
        </div>
      </div>
    </div>
    </>
  )
}
