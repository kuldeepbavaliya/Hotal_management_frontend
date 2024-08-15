import axios, { Axios } from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signin() {
    const [customer, setcustomer] = useState({
        email: '',
        password: ''
    })

    let n = 0;

    const [vemail, setvemail] = useState()
    const [vpass, setvpass] = useState()

    const navigat = useNavigate()

    const [cus, setcus] = useState([])

    const { email, password } = customer;

    const change = (e) => {
        setcustomer({ ...customer, [e.target.name]: e.target.value })

    }

    const emailvalidation = () => {
        if (!email) {
            setvemail('Required')
            n++
        }

    }

    const passwordvalidation = () => {
        if (password == "") {
            setvpass("Enter Your Password")
            n++
        }
    }
    const submit = async (e) => {
        emailvalidation()
        passwordvalidation()
        console.log(n)
        if (n == 0) {
            const result = await axios.get("http://localhost:8080/customer/get")
            setcus(result.data)
            for (let index = 0; index < cus.length; index++) {
                const element = cus[index];

                if (element.email == email && element.password == password) {
                    toast.success('successfully')
                    n == 1;
                    localStorage.setItem('email', email)
                    localStorage.setItem('pass', password)
                    navigat("/")
                }

            }

        }

    }


    return (
        <div className='card shadow' style={{ width: '31%', marginBottom: '5%', marginLeft: '37%', marginTop: '10%' }}>
            <form style={{ margin: '9%' }}>

                <h5>Sign in or create an accoundt</h5>
                <div data-mdb-input-init className="form-outline mb-4" style={{ marginTop: '13%' }}>
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                    <input type="email" value={email} onChange={(e) => change(e)} name="email" id="form2Example1" className="form-control" />
                    <p className='text-danger'>{vemail}</p>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                    <input type="password" value={password} onChange={(e) => change(e)} name="password" id="form2Example2" className="form-control" />
                    <p className='text-danger'>{vpass}</p>
                </div>

                <button type="button" onClick={(e) => submit(e)} data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4 w-100">Continue with email</button>
                <ToastContainer />

                <div className="text-center">
                    <p>Not a member? <Link to='/Register'>Register</Link></p>
                    <p>or sign up </p>
                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                    </button>

                </div>
            </form>
        </div>
    )
}
