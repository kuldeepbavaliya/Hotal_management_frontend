import React, { useEffect, useMemo, useState } from 'react'
import Header from './Header'
import Futer from './Futer'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { IoIosStar } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { RiRestaurantLine } from "react-icons/ri";
import { CiParking1 } from "react-icons/ci";
import { MdOutlineBathroom } from "react-icons/md";
import { IoIosSnow } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import '../index.css'
import logo from '../../logo.png'

export default function BookNow() {

  const navigate = useNavigate()

  const [dis, setdis] = useState('none')

  const idroom = useParams()
  const idl = idroom.Id
  const [rooms, setrooms] = useState([])

  useEffect(() => {
    loader()
  }, [])

  const loader = async () => {
    const result = await axios.get('http://localhost:8080/room/get/' + idl)
    setrooms(result.data)

  }

  const book = useMemo(() => ({
    email: localStorage.getItem('email'),
    password: localStorage.getItem('pass'),
    name: rooms.name,
    payment: rooms.payment,
    city: rooms.city,
    image: rooms.image,
    people: rooms.people
  }), [rooms])

  const booking = () => {

    if (localStorage.getItem('email') == null) {
      navigate('/Signin')
    }
    else {
      submit()
      setdis('')
      console.log(book)
      console.log("SuccessFull Book")
      console.log(rooms)

    }

  }

  const submit = async () => {
    const result = await axios.post('http://localhost:8080/book/add', book)
    console.log(result.data)

  }

  const close = () => {
    setdis('none')
  }
  return (
    <div style={{ marginLeft: '15%', marginRight: '13%' }}>

      <h4>Overview___</h4>
      <IoIosStar className='text-warning' />
      <IoIosStar className='text-warning' />
      <IoIosStar className='text-warning' />
      <IoIosStar className='text-warning' />
      <IoIosStar className='text-warning' />
      <BiLike style={{ background: '#ffA500', marginLeft: '1%' }} /><br />
      <h2>{rooms.name}       {rooms.city}</h2>
      <div className='row'>
        <div className='col'>
          {<img src={rooms.image} />}
        </div>
        <div className='col'>
          <div className="card text-center">
            <div className="card-header text-end">
              <h6>Very Good 8.9</h6>
              289 views
            </div>
            <div className="card-body">
              <p className="card-text">
                <h5>Guests who stayed here loved</h5>
                “incredible experience.
                truly a diamond in the rough 💎”</p>

            </div>
            <div className="card-footer ">
              Free WiFi
            </div>

          </div>
          <div className="card">
            <div className='row'>
              <div className='col'>
                <p style={{ margin: '9%' }}>
                  Low rates <br />
                  • No booking fees<br />
                  • Rooms is cheaper
                </p>
              </div>
              <div className='col'>
                <div onClick={booking} className='card btn btn-primary text-primary' style={{ marginTop: '7%', marginRight: '8%', height: '77%' }}>
                  <p style={{ marginTop: '8%', marginLeft: '14%' }}>
                    Reserve 1 unit<br />
                    <h3>₹ {rooms.payment}</h3>
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <div className='row my-5'>
        <div className='col'>
          <div className='card' >
            <h6>
              <p style={{ marginTop: '9%', marginLeft: '18%' }}><RiRestaurantLine />   Restaurant</p>
            </h6>
          </div>

        </div>
        <div className='col'>
          <div className='card' >
            <h6>
              <p style={{ marginTop: '9%', marginLeft: '18%' }}><CiParking1 />  Parking</p>
            </h6>
          </div>

        </div>
        <div className='col'>
          <div className='card' >
            <h6>
              <p style={{ marginTop: '9%', marginLeft: '18%' }}><MdOutlineBathroom /> Private bathroom</p>
            </h6>
          </div>
        </div>

        <div className='col'>
          <div className='card' >
            <h6>
              <p style={{ marginTop: '9%', marginLeft: '18%' }}><IoIosSnow /> Air conditioning</p>
            </h6>
          </div>
        </div>

        <div className='col'>
          <div className='card' >
            <h6>
              <p style={{ marginTop: '9%', marginLeft: '18%' }}><MdOutlineRemoveRedEye />View</p>
            </h6>
          </div>
        </div>
        <p className='my-3'>
          You're eligible for a Genius discount at SKD RESORT AND CLUB! To save at this property, all you have to do is sign in.<br /><br />

          SKD RESORT AND CLUB features free bikes, outdoor swimming pool, a garden and shared lounge in Barvāla. Featuring a kids' club, this property also welcomes guests with a restaurant, a bowling alley and a terrace. The accommodation provides room service, a 24-hour front desk and currency exchange for guests.<br /><br />

          All units at the resort include air conditioning, a flat-screen TV with satellite channels, Blu-ray player, and a private bathroom with a shower, free toiletries and a hairdryer. At SKD RESORT AND CLUB every room comes with bed linen and towels.<br /><br />

          Breakfast is available daily, and includes buffet, vegetarian and vegan options.<br /><br />

          The accommodation offers a children's playground. You can play tennis at SKD RESORT AND CLUB, and the area is popular for horse riding and cycling.<br /><br />

          The nearest airport is Bhavnagar Airport, 74 km from the resort.<br /><br />
        </p>


      </div>
      <h2>Availability</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Room type</th>
            <th scope="col">Number of guests</th>
            <th scope="col">LastToday's price</th>
            <th scope="col">Your choices</th>
            <th scope="col">Select amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><h6>{rooms.name}</h6></td>
            <td>{rooms.people}</td>
            <td>{rooms.payment}</td>
            <td>Breakfast included in the price<br />
              - No prepayment needed
              <br /> – pay at the property
            </td>
            <td>
              1 room for<br />
              <h5>₹ {rooms.payment}</h5>
              Breakfast included in the price<br />
              - No prepayment needed
              <br /> – pay at the property
            </td>
          </tr>
        </tbody>
      </table>

      <div style={{ display: dis }}>
        <div className='blurr' style={{
          height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center',
          display: 'flex', position: 'fixed', top: '0%', left: '0%'
        }}>
          <div className='card' style={{ width: '27%', height: '58%' }}>
            <button type="button" onClick={close} class="btn-close" aria-label="Close" style={{ marginLeft: '92%' }}></button>
            <i class="fas fa-check-circle" style={{ fontSize: '100px', color: 'green', marginLeft: '34%' }}></i>
            <h1 style={{ marginLeft: '21%' }}>Booking Successfully</h1>
            <Link type="button" to='/Rooms' class="btn btn-success mx-5 my-3">Go Back</Link>
          </div>
        </div>
      </div>

    </div>
  )
}