import React, { useState } from 'react'
import Anavbar from './Anavbar'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

export default function EditRoom() {

    const [room, setroom] = useState({
        name: '',
        city: '',
        decrip: '',
        image: '',
        payment: '',
        people: ''
    })

    const { name, city, decrip, image, payment, people } = room

    const change = (e) => {
        setroom({ ...room, [e.target.name]: e.target.value })
    }
    const { Rid } = useParams()

    const submit = async () => {
        const result = await axios.put('http://localhost:8080/room/update/' + Rid, room)
        if (result.data == 'Sava Successfully') {
            toast.success("Update Room", { position: "bottom-center", theme: "dark" })
        }
    }

    return (
        <div>
            <div className='card shadow' style={{ width: '52%', marginBottom: '5%', marginLeft: '29%', marginTop: '9%' }}>
                <form method='POST' style={{ margin: '9%' }}>

                    <h5>Update Rooms</h5>
                    <div data-mdb-input-init className="form-outline mb-4" style={{ marginTop: '13%' }}>
                        <label className="form-label" htmlFor="form2Example1">Name</label>
                        <input type="text" value={name} name='name' onChange={(e) => change(e)} id="form2Example1" className="form-control" />
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">City</label>
                        <input type="text" value={city} name='city' onChange={(e) => change(e)} id="form2Example2" className="form-control" />
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">People</label>
                        <input type="text" value={people} name='people' onChange={(e) => change(e)} id="form2Example2" className="form-control" />
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Payment</label>
                        <input type="text" value={payment} name='payment' onChange={(e) => change(e)} id="form2Example2" className="form-control" />
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Description</label>
                        <textarea value={decrip} style={{ resize: 'none' }} name='decrip' onChange={(e) => change(e)} id="form2Example2" className="form-control" />
                    </div>


                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Select Image</label>
                        <input type="file" value={image} name='image' onChange={(e) => change(e)} id="form2Example2" className="form-control" />
                    </div>


                    <button type="button" onClick={submit} data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4 w-100">Continue with email</button>
                    <ToastContainer position="bottom-center" theme="dark" />

                </form>
            </div>
        </div>
    )
}
