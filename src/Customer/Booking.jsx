import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Booking() {

  const [booking, setbooking] = useState([])

  useEffect(() => {
    dataload()
  }, [])

  const [book, setbook] = useState([])

  const dataload = async () => {
    const result = await axios.get('http://localhost:8080/book/get')
    setbooking(result.data)
  }

  const deletedata = async (id) => {
    const result = await axios.delete('http://localhost:8080/book/delete/' + id)
    console.log(result.data)
    dataload()
  }

  return (
    <div style={{ marginLeft: '100px', marginRight: '100px' }}>
      <table className="table table-striped" style={{ marginTop: '5%' }}>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">City</th>
            <th scope="col">People</th>
            <th scope="col">Payment</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          {
            booking.map(b => (

              <tr key={b.id}>
                {localStorage.getItem('email') === b.email ?
                  (
                    <>
                      <th scope="row">{b.name}</th>
                      <td>{b.city}</td>
                      <td>{b.people}</td>
                      <td>{b.payment}</td>
                      <td>{b.image}</td>
                      <td> <button type="button" onClick={() => deletedata(b.id)} className="btn btn-danger mx-2">Cancle Booking</button></td>
                    </>
                  )
                  :
                  (
                    ""
                  )}

              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}
