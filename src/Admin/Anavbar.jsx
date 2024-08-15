import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaRegCircleUser } from "react-icons/fa6";

export default function Anavbar() {

  return (
    <div className=' fixed-top'>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-warning" to='/Welcom'>Admin</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" style={{ marginLeft: '70px' }} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-warning" aria-current="page" to='/DisplayRooms'>Rooms</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning" to='/AddRoom'>Add Room</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning" to='/DisplayTeam'>Our Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning" to='/AddTeams'>Add Team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning" to='/DisplayCustomer'>Custorem</Link>
              </li>
            </ul>
            <Link to='/UserAdmin' type="button" className="btn" style={{ marginRight: '4%' }}>
              <h2 className='text-warning' ><FaRegCircleUser /></h2>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
