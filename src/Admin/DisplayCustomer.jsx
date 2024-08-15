import React from 'react'
import Anavbar from './Anavbar'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import LoaderPage from '../Loader/LoaderPage';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom'

export default function DisplayCustomer() {

  const [no, setno] = useState(0)

  const [loading, setloading] = useState(true)

  const [costomer, setcostomer] = useState([])

  const [page, setpage] = useState(10)

  const { id, email, password } = costomer

  useEffect(() => {
    dataload()
  }, [])

  const dataload = async () => {
    const result = await axios.get(`http://localhost:8080/customer/get/${no}/${page}`)
    setcostomer(result.data.content)
    setloading(false)
  }

  if (loading) {
    return <LoaderPage />
  }

  const changesize = (e) => {
    setno(0)
    setpage(e.target.value)
    dataload()
  }

  const changeleft = (e) => {

    let n = no - 1;
    setno(n)
    dataload()

  }

  const changeright = (e) => {
    let n = no + 1;
    setno(n)
    dataload()

  }

  const deletedata = async (id) => {
    const result = await axios.delete('http://localhost:8080/customer/delete/' + id)
    dataload()
  }

  return (
    <div>
      <h2 style={{ marginTop: '7%' }}>Display All Customer: </h2>
      Size Per Page:<select name='pagesize' onClick={(e) => changesize(e)} className="select" style={{ width: '12%' }}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <table className="table table-striped" style={{ width: '68%', marginLeft: '16%', marginTop: '3%' }}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {
            costomer.map(cos =>
            (
              <tr key={cos.id}>
                <th scope="row">{cos.id}</th>
                <td>{cos.email}</td>
                <td>{cos.password}</td>
                <td><Link to={`/EditCustomer/${cos.id}`} type="button" className="btn btn-info">Update</Link>
                  <button type="button" onClick={() => deletedata(cos.id)} className="btn btn-danger mx-2">Delete</button>
                </td>
              </tr>
            )
            )
          }

        </tbody>
      </table>
      <button type="button" className="btn btn-warning" onClick={(e) => changeleft(e)} style={{ marginLeft: '16%' }}><FaChevronLeft /></button>
      <button type="button" className="btn btn-warning" onClick={(e) => changeright(e)} style={{ marginLeft: '61%' }}><FaChevronRight /></button>
    </div>
  )
}
