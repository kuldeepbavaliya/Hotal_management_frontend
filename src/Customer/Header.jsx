import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import logo from '../../logo.png'

export default function Header() {

    let hidd = ''
    let show = 'none'

    if (localStorage.getItem('email') != null && localStorage.getItem('pass') != null) {
        hidd = 'none'
        show = ''
    }
    // #067cc9         
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <div className='col-lg-3'>
                            <Link className="navbar-brand" to='' style={{ color: '#ffA500' }}><img src={logo} style={{ width: '15%' }}></img>LUXURY</Link>
                        </div>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item ">
                                    <Link className="nav-link active" style={{ color: '#ffA500' }} aria-current="page" to="/">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: '#ffA500' }} to="/aboute">ABOUTE</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: '#ffA500' }} to="/Service">SERVICES</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link " style={{ color: '#ffA500' }} to="/Rooms">ROOMS</Link>
                                </li>


                                <li className="nav-item">
                                    <Link className="nav-link " style={{ color: '#ffA500' }} to="/OurTeam">OURTEAM</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: '#ffA500' }} to="/Contaxt">CONTACT</Link>
                                </li>

                            </ul>
                        </div>
                        <div style={{ width: '19%' }}>
                            <Link to='/' style={{ color: '#ffA500', margin: '10px' }}>
                                <FaFacebookSquare />
                            </Link>
                            <Link to='/' style={{ color: '#ffA500', margin: '10px' }}>
                                <FaTwitter />
                            </Link>
                            <Link to='/' style={{ color: '#ffA500', margin: '10px' }}>
                                <FaInstagramSquare />
                            </Link>
                            <Link to='/' style={{ color: '#ffA500', margin: '10px' }}>
                                <FaLinkedinIn />
                            </Link>
                            <Link to='/' style={{ color: '#ffA500', margin: '10px' }}>
                                <FaYoutube />
                            </Link>

                        </div>

                        <div className='text-primary' style={{ display: hidd, marginRight: '1%' }}>
                            <Link type="button" className="btn btn-warning" to='/Signin'>Sign in</Link>
                        </div>
                        <div className='text-primary' style={{ display: hidd }}>
                            <Link type="button" className="btn btn-warning" to='/Register'>Registration</Link>
                        </div>

                        <div style={{ display: show, marginRight: '2%' }}>
                            <h2>
                                <Link className='text-warning' to='/User'><FaCircleUser /></Link>
                            </h2>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
