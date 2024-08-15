import React from 'react'
import './App.css'
import { FaHotel } from "react-icons/fa";
import { TbToolsKitchen2 } from "react-icons/tb";
import { FaSpa } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
import { FaGlassCheers } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { CiLock } from "react-icons/ci";
import { FiMonitor } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export default function Service() {
  return (
    <div className="mt-5" >

      <center style={{ color: '#ffA500' }}>
        _____Our Service_____
      </center>
      <center>
        <h2>Explore Our <span style={{ color: '#ffA500' }}>SERVICES</span></h2>
      </center>

      <div className='row' style={{ marginLeft: '70px', marginTop: '30px', marginRight: '55px' }}>
        <div className='col' >
          <div className="card shadow" >
            <div className="card-body">
              <h1 style={{ textAlign: 'center', color: '#ffA500' }}><FaHotel /></h1>
              Inner courtyard view<br />
              Landmark view<br />
              Pool view<br />
              Garden view<br />
              Lake view<br />
              View<br />
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card shadow" >
            <div className="card-body ">
              <h1 style={{ textAlign: 'center', color: '#ffA500' }}><TbToolsKitchen2 /></h1>
              Coffee house on site<br />
              Fruits Additional charge<br />
              Kid-friendly buffet<br />
              Kid meals Additional charge<br />
              Special diet menus (on request)<br />
              Snack bar<br />

            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card shadow">
            <div className="card-body">
              <h1 style={{ textAlign: 'center', color: '#ffA500' }}><FaSpa /></h1>
              Kids' pool<br />
              Fitness/spa locker rooms<br />
              Fitness classes<br />
              Yoga classes<br />
              Fitness<br />
              Massage chair<br />
            </div>
          </div>
        </div>
      </div>

      <div className='row' style={{ marginLeft: '70px', marginTop: '30px', marginRight: '55px' }}>
        <div className='col'>
          <div className="card shadow" >
            <div className="card-body">
              <h1 style={{ textAlign: 'center', color: '#ffA500' }}><CiLock /></h1>
              Fire extinguishers<br />
              CCTV outside property<br />
              CCTV in common areas<br />
              Smoke alarms<br />
              Security alarm<br />
              Key card access<br />

            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card shadow" >
            <div className="card-body">
              <h1 style={{ textAlign: 'center', color: '#ffA500' }}><FiMonitor /></h1>
              Flat-screen TV<br />
              Cable channels<br />
              Satellite channels<br />
              Video<br />
              Telephone<br />
              TV<br />
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card shadow">
            <div className="card-body">
              <h1 style={{ textAlign: 'center', color: '#ffA500' }}><MdOutlineRemoveRedEye /></h1>
              Outdoor fireplace<br/>
              Picnic area<br/>
              Outdoor furniture<br/>
              Outdoor dining area<br/>
              Barbecue<br/>
              BBQ facilities<br/>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
