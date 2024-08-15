import React, { useEffect } from 'react'
import './App.css'
import { FaHotel } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import ScrollReveal from "scrollreveal";

export default function Aboute() {
  useEffect(() => {
    ScrollReveal().reveal('.headline', {
      origin: "top",
      distance: "60px",
      duration: 3000,
      delay: 200,
    });
  }, [])

  return (
    <div className='row headline' style={{ height: '100%' }} >
      <div className='col' style={{ marginLeft: '10%' }}>
        <h6 style={{ color: '#ffA500', marginTop: '50px' }}>ABOUTES____</h6>
        <h1>Welcome to <span style={{ color: '#ffA500' }}>HOTELIER</span></h1>
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet<br />
        diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo<br />
        justo manga dolore erat amet
        <div className="container">
          <div className="row" style={{ height: '203px' }}>
            <div className="four col-md-3">
              <div className="counter-box colored">
                <h1><FaHotel /></h1>
                <span className="counter">7861</span>
                Rooms
              </div>
            </div>
            <div className="four col-md-3">
              <div className="counter-box">
                <h1><IoPeople /></h1>
                <span className="counter">1234</span>
                Staffs
              </div>
            </div>
            <div className="four col-md-3">
              <div className="counter-box">
                <h1><MdOutlineMiscellaneousServices /> </h1>
                <span className="counter">4321</span>
                Clients
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className='col ' style={{ marginTop: '50px', height: '100%' }}>
        <div className='row' style={{ height: '75%', width: '81%' }}>
          <div className='col' >
            <img src='aboute1.jpg' style={{ height: '73%', width: '90%', marginTop: '15%', marginLeft: '15%' }} />
          </div>
          <div className='col'>
            <img src='aboute2.jpg' style={{ height: '92%', width: '110%' }} />
          </div>
        </div>
        <div className='row' style={{ height: '75%', width: '81%' }}>
          <div className='col'>
            <img src='aboute3.jpg' style={{ height: '70%', width: '77%', marginLeft: '28%' }} />
          </div>
          <div className='col'>
            <img src='aboute4.jpg' style={{ height: '81%', width: '90%' }} />
          </div>
        </div>
      </div>
    </div>

  )
}