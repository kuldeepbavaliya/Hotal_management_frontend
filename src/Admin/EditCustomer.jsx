import axios, { Axios } from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditCustomer() {
    const [customer, setcustomer] = useState({
        email: '',
        password: ''
    })

    const { rid } = useParams()

    const [cus, setcus] = useState([])

    const { email, password } = customer;

    const change = (e) => {
        setcustomer({ ...customer, [e.target.name]: e.target.value })

    }

    const submit = async () => {

        const result = await axios.put("http://localhost:8080/customer/update/" + rid, customer)
        toast.success('Upate Customer')
    }


    return (
        <div className='card shadow' style={{ width: '31%', marginBottom: '5%', marginLeft: '37%', marginTop: '10%' }}>
            <form style={{ margin: '9%' }}>

                <h5>Update Customer</h5>
                <div data-mdb-input-init className="form-outline mb-4" style={{ marginTop: '13%' }}>
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                    <input type="email" value={email} onChange={(e) => change(e)} name="email" id="form2Example1" className="form-control" />

                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                    <input type="password" value={password} onChange={(e) => change(e)} name="password" id="form2Example2" className="form-control" />

                </div>

                <button type="button" onClick={submit} data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4 w-100">Update</button>
                <ToastContainer />
                <Link to='/DisplayCustomer' type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4 w-100">Go Back</Link>

            </form>
        </div>
    )
}
