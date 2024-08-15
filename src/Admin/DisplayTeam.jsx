import React, { useEffect, useState } from 'react'
import Anavbar from './Anavbar'
import axios from 'axios'
import LoaderPage from '../Loader/LoaderPage';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';

export default function DisplayTeam() {
  const [loading, setloading] = useState(true)

  const [page, setpage] = useState(5)

  const [no, setno] = useState(0)

  const image1 = ''

  const [team, setteam] = useState([])

  useEffect(() => {
    loader()
  }, [])

  const loader = async () => {
    const result = await axios.get(`http://localhost:8080/team/get/${no}/${page}`)
    setteam(result.data.content)
    setloading(false)
  }

  if (loading) {
    return <LoaderPage />
  }


  const changesize = (e) => {
    setno(0)
    setpage(e.target.value)
    loader()
  }

  const changeleft = (e) => {

    let n = no - 1;
    setno(n)
    loader()


  }

  const changeright = (e) => {
    let n = no + 1;
    setno(n)
    loader()


  }

  const { id } = useParams()

  const deletedata = async (id) => {
    const result = await axios.delete('http://localhost:8080/team/delete/' + id)

    loader()
  }
  return (
    <div>
      <h2 style={{ marginTop: '7%' }}>Display OurTeam All Details:</h2>
      Size Per Page:<select name='pagesize' onClick={(e) => changesize(e)} className="select" style={{ width: '12%' }}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <table className="table table-striped" style={{ width: '71%', marginLeft: '14%', marginTop: '3%' }}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Department</th>
            <th scope="col">Image</th>

          </tr>
        </thead>
        <tbody>
          {
            team.map(t => (
              <tr key={t.id}>
                <th scope="row">{t.id}</th>
                <td>{t.name}</td>
                <td>{t.age}</td>
                <td>{t.department}</td>
                <td>{t.image}</td>
                <td><Link to={`/EditTeam/${t.id}`} type="button" className="btn btn-info">Update</Link>
                  <button type="button" onClick={() => deletedata(t.id)} className="btn btn-danger mx-2">Delete</button>
                </td>
              </tr>
            ))

          }
        </tbody>
      </table>
      <button type="button" className="btn btn-warning" onClick={(e) => changeleft(e)} style={{ marginLeft: '16%' }}><FaChevronLeft /></button>
      <button type="button" className="btn btn-warning" onClick={(e) => changeright(e)} style={{ marginLeft: '61%' }}><FaChevronRight /></button>
    </div>
  )
}
