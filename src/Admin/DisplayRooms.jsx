import React, { useEffect, useState } from 'react'
import Anavbar from './Anavbar'
import axios from 'axios'
import LoaderPage from '../Loader/LoaderPage';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';

export default function DisplayRooms() {
  const [room, setroom] = useState([])

  const [loading, setloading] = useState(true)

  const [no, setno] = useState(0)

  const [page, setpage] = useState(5)

  const { id } = useParams()

  useEffect(() => {
    loader()
  }, [])

  const loader = async () => {
    const result = await axios.get(`http://localhost:8080/room/get/${no}/${page}`)
    setroom(result.data.content)
    setloading(false)
  }

  if (loading) {
    return <LoaderPage />
  }


  const changesize = (e) => {
    setno(0)
    setpage(e.target.value)
    console.log(page)
    loader()
  }

  const changeleft = (e) => {

    let n = no - 1;
    setno(n)
    loader()
    console.log(no)

  }

  const changeright = (e) => {
    let n = no + 1;
    setno(n)
    dataload()
    console.log(no)

  }

  const deletedata = async (rid) => {
    const result = await axios.delete('http://localhost:8080/room/delete/' + rid)
    console.log(result.data)
    loader()
  }
  return (
    <div>
      <h2 style={{ marginTop: '7%' }}>Display All Rooms Details:</h2>
      Size Per Page:<select name='pagesize' onClick={(e) => changesize(e)} className="select" style={{ width: '12%' }}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <table className="table table-striped" style={{ width: '76%', marginLeft: '11%', marginTop: '3%' }}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">City</th>
            <th scope="col">People</th>
            <th scope="col">Payment</th>
            <th scope="col">Image</th>
            <th scope="col">Descripation</th>
          </tr>
        </thead>
        <tbody>
          {
            room.map(r => (
              <tr key={r.id}>
                <th scope="row">{r.id}</th>
                <td>{r.name}</td>
                <td>{r.city}</td>
                <td>{r.people}</td>
                <td>{r.payment}</td>
                <td>{r.image}</td>
                <td>{r.decrip}</td>
                <td><Link to={`/EditRoom/${r.id}`} type="button" className="btn btn-info">Update</Link>
                  <button type="button" onClick={() => deletedata(r.id)} className="btn btn-danger mx-2">Delete</button>
                </td>
              </tr>
            ))

          }
        </tbody>
      </table>
      <button type="button" onClick={(e) => changeleft(e)} className="btn btn-warning" style={{ marginLeft: '16%' }}><FaChevronLeft /></button>
      <button type="button" onClick={(e) => changeright(e)} className="btn btn-warning" style={{ marginLeft: '61%' }}><FaChevronRight /></button>
    </div>
  )
}
