import React, { useEffect, useState } from 'react'
import Header from './Header'
import "./App.css"
import { FaStar } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import axios from 'axios'
import { Link } from 'react-router-dom';
import { FaUserFriends } from "react-icons/fa";
import LoaderPage from '../Loader/LoaderPage';


export default function Rooms() {

  const [room, setroom] = useState([])

  const [loading, setloading] = useState(true)

  useEffect(() => {
    loader()
  }, [])

  const loader = async () => {
    const result = await axios.get('http://localhost:8080/room/get')
    setroom(result.data)
    setloading(false)
  }


  if (loading) {
    return <LoaderPage />
  }
  return (
    <div className='mt-5 mb-5'>
      <center style={{ color: '#ffA500' }}>_____ROOMS_____</center>
      <h1 className='text-center mt-3'>Explor Our <span style={{ color: '#ffA500' }}>ROOMS</span></h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 mx-5 mb-">

        {
          room.map(r => (
            <div data-aos="flip-left" className="col" key={r.id}>
              <div className="card h-100">
                <img src={r.image} className="card-img-top" alt="..." />
                <div className="card-body" style={{ marginLeft: '20px' }}>
                  <div className='row'>
                    <div className='col'>
                      <h4>{r.name}</h4>
                    </div>
                    <div className='col' style={{ marginLeft: '20px', color: '#ffA500' }}>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      <FaBed style={{ color: '#ffA500' }} /> bed
                    </div>
                    <div className='col' >
                      <FaBath style={{ color: '#ffA500' }} /> bath
                    </div>
                    <div className='col'>
                      <FaWifi style={{ color: '#ffA500' }} />  Wifi
                    </div>
                    <div className='col'>
                      <FaUserFriends style={{ color: '#ffA500' }} /> {r.people}
                    </div>
                  </div>
                  <p className='mt-4'>{r.decrip} </p>

                  <Link to={`/Book/${r.id}`} type="button" className="btn" style={{ width: '93%', backgroundColor: '#ffA500' }}>₹ {r.payment}</Link>
                </div>
              </div>
            </div>
          ))
        }


      </div>

    </div>
  )
}
